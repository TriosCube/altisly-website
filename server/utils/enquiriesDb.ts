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

const DATA_DIR = process.env.VERCEL ? '/tmp/altisly-data' : join(process.cwd(), 'data')
const ENQUIRIES_FILE = join(DATA_DIR, 'enquiries.json')
const MEMORY_KEY = '__altisly_enquiries__'

const getMemoryStore = (): EnquiryRecord[] => {
  const state = globalThis as { [MEMORY_KEY]?: EnquiryRecord[] }
  if (!state[MEMORY_KEY]) state[MEMORY_KEY] = []
  return state[MEMORY_KEY]
}

const ensureFile = () => {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  if (!existsSync(ENQUIRIES_FILE)) writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8')
}

const readFromFile = (): EnquiryRecord[] | null => {
  try {
    ensureFile()
    return JSON.parse(readFileSync(ENQUIRIES_FILE, 'utf-8')) as EnquiryRecord[]
  }
  catch {
    return null
  }
}

const writeToFile = (records: EnquiryRecord[]): boolean => {
  try {
    ensureFile()
    writeFileSync(ENQUIRIES_FILE, JSON.stringify(records, null, 2), 'utf-8')
    return true
  }
  catch {
    return false
  }
}

export const getAllEnquiries = (): EnquiryRecord[] => {
  const fromFile = readFromFile() ?? getMemoryStore()
  return [...fromFile]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export const addEnquiry = (record: EnquiryRecord): EnquiryRecord => {
  const existing = getAllEnquiries()
  const next = [record, ...existing]
  const persisted = writeToFile(next)
  const memoryStore = getMemoryStore()
  memoryStore.splice(0, memoryStore.length, ...next)
  if (!persisted) {
    // Keep serving records even when runtime storage is read-only/unavailable.
  }
  return record
}
