import nodemailer from 'nodemailer'
import { ENQUIRY_RECIPIENT, type EnquiryRecord } from '~/server/utils/enquiriesDb'

const isTrue = (value: string | undefined) => String(value).toLowerCase() === 'true'
const pick = (...values: Array<string | undefined>) => values.find((v) => Boolean(v && v.trim()))

const mailConfig = () => {
  const host = pick(
    process.env.ENQUIRY_SMTP_HOST,
    process.env.SMTP_HOST,
    process.env.MAIL_HOST,
  ) || 'smtp.hostinger.com'
  const port = Number(pick(
    process.env.ENQUIRY_SMTP_PORT,
    process.env.SMTP_PORT,
    process.env.MAIL_PORT,
  ) || '465')
  const secureRaw = pick(
    process.env.ENQUIRY_SMTP_SECURE,
    process.env.SMTP_SECURE,
    process.env.MAIL_SECURE,
  )
  const secure = secureRaw
    ? isTrue(secureRaw)
    : port === 465
  const user = pick(
    process.env.ENQUIRY_SMTP_USER,
    process.env.SMTP_USER,
    process.env.MAIL_USER,
  ) || ENQUIRY_RECIPIENT
  const pass = pick(
    process.env.ENQUIRY_SMTP_PASS,
    process.env.SMTP_PASS,
    process.env.MAIL_PASSWORD,
  ) || ''
  const from = pick(
    process.env.ENQUIRY_SMTP_FROM,
    process.env.SMTP_FROM,
    process.env.MAIL_FROM,
  ) || user
  return { host, port, secure, user, pass, from }
}

const detailsText = (enquiry: EnquiryRecord) => {
  return [
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
}

const detailsHtml = (enquiry: EnquiryRecord) => `
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
`

export const sendEnquiryEmail = async (enquiry: EnquiryRecord) => {
  const config = mailConfig()
  if (!config.pass) {
    throw new Error('SMTP_CONFIG_MISSING')
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

  await transporter.sendMail({
    from: config.from,
    to: ENQUIRY_RECIPIENT,
    replyTo: enquiry.email,
    subject: `[Altisly Enquiry] ${enquiry.type} from ${enquiry.name || enquiry.email}`,
    text: detailsText(enquiry),
    html: detailsHtml(enquiry),
  })
}
