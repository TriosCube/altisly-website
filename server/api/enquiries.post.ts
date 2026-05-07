import { createError, readBody } from 'h3'
import { randomUUID } from 'crypto'
import nodemailer from 'nodemailer'
import { addEnquiry, ENQUIRY_RECIPIENT, type EnquiryRecord, type EnquiryType } from '~/server/utils/enquiriesDb'

const parseType = (value: unknown): EnquiryType =>
  value === 'api-keys' || value === 'newsletter' ? value : 'contact'

const cleanText = (value: unknown) => (typeof value === 'string' ? value.trim() : '')
const isTrue = (value: string | undefined) => String(value).toLowerCase() === 'true'

const mailConfig = () => {
  const host = process.env.ENQUIRY_SMTP_HOST || 'smtp.hostinger.com'
  const port = Number(process.env.ENQUIRY_SMTP_PORT || '465')
  const secure = process.env.ENQUIRY_SMTP_SECURE
    ? isTrue(process.env.ENQUIRY_SMTP_SECURE)
    : port === 465
  const user = process.env.ENQUIRY_SMTP_USER || ENQUIRY_RECIPIENT
  const pass = process.env.ENQUIRY_SMTP_PASS || ''
  const from = process.env.ENQUIRY_SMTP_FROM || user
  return { host, port, secure, user, pass, from }
}

const sendEnquiryEmail = async (enquiry: EnquiryRecord) => {
  const config = mailConfig()
  if (!config.pass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Enquiry email transport is not configured',
    })
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })

  const details = [
    `Type: ${enquiry.type}`,
    `Name: ${enquiry.name || 'N/A'}`,
    `Email: ${enquiry.email}`,
    `Company: ${enquiry.company || 'N/A'}`,
    `Country: ${enquiry.country || 'N/A'}`,
    `Phone: ${enquiry.phone || 'N/A'}`,
    `Use case: ${enquiry.useCase || 'N/A'}`,
    `Newsletter opt-in: ${enquiry.newsletter ? 'Yes' : 'No'}`,
    `Source: ${enquiry.sourcePage}`,
    `Received at: ${enquiry.createdAt}`,
    '',
    'Message:',
    enquiry.message || 'N/A',
  ].join('\n')

  await transporter.sendMail({
    from: config.from,
    to: ENQUIRY_RECIPIENT,
    replyTo: enquiry.email,
    subject: `[Altisly Enquiry] ${enquiry.type} from ${enquiry.name || enquiry.email}`,
    text: details,
    html: `
      <h2>New Altisly Enquiry</h2>
      <p><strong>Type:</strong> ${enquiry.type}</p>
      <p><strong>Name:</strong> ${enquiry.name || 'N/A'}</p>
      <p><strong>Email:</strong> ${enquiry.email}</p>
      <p><strong>Company:</strong> ${enquiry.company || 'N/A'}</p>
      <p><strong>Country:</strong> ${enquiry.country || 'N/A'}</p>
      <p><strong>Phone:</strong> ${enquiry.phone || 'N/A'}</p>
      <p><strong>Use case:</strong> ${enquiry.useCase || 'N/A'}</p>
      <p><strong>Newsletter opt-in:</strong> ${enquiry.newsletter ? 'Yes' : 'No'}</p>
      <p><strong>Source:</strong> ${enquiry.sourcePage}</p>
      <p><strong>Received at:</strong> ${enquiry.createdAt}</p>
      <hr />
      <p><strong>Message</strong></p>
      <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${enquiry.message || 'N/A'}</pre>
    `,
  })
}

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
  await sendEnquiryEmail(enquiry)

  return {
    success: true,
    recipient: ENQUIRY_RECIPIENT,
  }
})
