import { createError, readBody } from 'h3'
import { randomUUID } from 'crypto'
import { addEnquiry, ENQUIRY_RECIPIENT, type EnquiryRecord, type EnquiryType } from '~/server/utils/enquiriesDb'
import { sendEnquiryEmail } from '~/server/utils/enquiryMailer'

const parseType = (value: unknown): EnquiryType =>
  value === 'api-keys' || value === 'newsletter' ? value : 'contact'

const cleanText = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => null)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Invalid enquiry payload' })
  }

  const email = cleanText((body as Record<string, unknown>).email).toLowerCase()
  if (!email) {
    throw createError({ statusCode: 400, statusMessage: 'Email is required' })
  }

  const enquiry: EnquiryRecord = {
    id: randomUUID(),
    type: parseType((body as Record<string, unknown>).type),
    name: cleanText((body as Record<string, unknown>).name),
    email,
    company: cleanText((body as Record<string, unknown>).company),
    country: cleanText((body as Record<string, unknown>).country),
    phone: cleanText((body as Record<string, unknown>).phone),
    message: cleanText((body as Record<string, unknown>).message),
    useCase: cleanText((body as Record<string, unknown>).useCase),
    newsletter: Boolean((body as Record<string, unknown>).newsletter),
    sourcePage: cleanText((body as Record<string, unknown>).sourcePage) || event.path,
    recipient: ENQUIRY_RECIPIENT,
    createdAt: new Date().toISOString(),
  }

  addEnquiry(enquiry)
  try {
    await sendEnquiryEmail(enquiry)
  }
  catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'UNKNOWN_ERROR'
    console.error('[enquiries] smtp send failed', {
      message,
      enquiryType: enquiry.type,
      sourcePage: enquiry.sourcePage,
    })

    let statusMessage = 'Could not deliver enquiry email'
    if (message.includes('SMTP_CONFIG_MISSING')) {
      statusMessage = 'SMTP is not configured on the server'
    }
    else if (message.includes('Invalid login') || message.includes('auth')) {
      statusMessage = 'SMTP authentication failed'
    }
    else if (message.includes('ECONNECTION') || message.includes('ETIMEDOUT') || message.includes('ESOCKET')) {
      statusMessage = 'SMTP connection failed'
    }

    throw createError({
      statusCode: 500,
      statusMessage,
    })
  }

  return {
    success: true,
    recipient: ENQUIRY_RECIPIENT,
  }
})
