import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export const ENQUIRY_RECIPIENT = 'hello@altisly.com'

export type EnquiryType = 'contact' | 'api-keys' | 'newsletter'

export type EnquiryRecord = {
  id: string
  type: EnquiryType
  name: string
  email: string
  company: string
  country: string
  phone: string
  message: string
  useCase: string
  newsletter: boolean
  sourcePage: string
  recipient: string
  createdAt: string
}

const DATA_DIR = join(process.cwd(), 'data')
const ENQUIRIES_FILE = join(DATA_DIR, 'enquiries.json')

const ensureFile = () => {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  if (!existsSync(ENQUIRIES_FILE)) writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8')
}

export const getAllEnquiries = (): EnquiryRecord[] => {
  ensureFile()
  return (JSON.parse(readFileSync(ENQUIRIES_FILE, 'utf-8')) as EnquiryRecord[])
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export const addEnquiry = (record: EnquiryRecord): EnquiryRecord => {
  ensureFile()
  const existing = getAllEnquiries()
  existing.unshift(record)
  writeFileSync(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8')
  return record
}
