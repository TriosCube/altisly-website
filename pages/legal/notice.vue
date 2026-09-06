<template>
  <LegalPage
    title="Legal Notice"
    updated="Last updated 6 September 2026."
    :toc="toc"
    :sections="sections"
  >
    <template #before>
      <div class="rounded-isura-lg border border-base bg-surface-2 p-6 mb-10">
        <h2 class="font-semibold text-[17px] mb-5">Company information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div v-for="detail in companyDetails" :key="detail.label">
            <p class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted mb-1">
              {{ detail.label }}
            </p>
            <p class="text-[14px] font-medium">{{ detail.value }}</p>
          </div>
        </div>
      </div>
    </template>

    <template #after>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div
          v-for="contact in contacts"
          :key="contact.title"
          class="rounded-isura-lg border border-base bg-surface-2 p-5"
        >
          <div class="w-9 h-9 rounded-isura-sm bg-brand text-on-brand grid place-items-center mb-3">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.icon" />
            </svg>
          </div>
          <h3 class="font-semibold text-[15px] mb-1">{{ contact.title }}</h3>
          <p class="text-[13.5px] text-muted mb-3 leading-relaxed">{{ contact.desc }}</p>
          <a
            :href="contact.href"
            class="text-[13.5px] font-semibold text-brand-deep hover:underline"
            >{{ contact.label }}</a
          >
        </div>
      </div>
    </template>
  </LegalPage>
</template>

<script setup lang="ts">
import LegalPage from '@/components/legal/LegalPage.vue'
useSeoMeta({
  title: 'Legal Notice | Altisly',
  description: 'Legal notice, company information, regulatory disclosures, and contact information for Altis Platforms Limited',
})

const toc = [
  { id: 'company', label: 'Company Information' },
  { id: 'website', label: '1. Website & Platform' },
  { id: 'regulated', label: '2. Regulatory Position' },
  { id: 'disclaimers', label: '3. Disclaimers' },
  { id: 'trademarks', label: '4. Trademarks & Branding' },
  { id: 'third-party', label: '5. Third-Party Links' },
  { id: 'availability', label: '6. Service Availability' },
  { id: 'jurisdiction', label: '7. Jurisdiction' },
  { id: 'contact', label: '8. Contact' },
]

const companyDetails = [
  { label: 'Legal Name', value: 'Altis Platforms Limited' },
  { label: 'Company Type', value: 'Private Limited Company' },
  { label: 'Incorporated In', value: 'Federal Republic of Nigeria' },
  { label: 'RC Number', value: 'RC 9597173' },
  { label: 'Date of Registration', value: '7 June 2026' },
  { label: 'Registry Status', value: 'Active' },
  { label: 'Registered Address', value: 'Lagos, Nigeria' },
  { label: 'UK Operations', value: 'London, United Kingdom' },
  { label: 'General Enquiries', value: 'hello@altisly.com' },
  { label: 'Legal Enquiries', value: 'legal@altisly.com' },
]

const sections = [
  {
    id: 'website',
    title: '1. Website & Platform Notice',
    body: [
      'This Legal Notice applies to all websites, web applications, mobile applications, APIs, and platforms operated by Altis Platforms Limited, including altisly.com and all subdomains, as well as the Atreasury, Altis AI, Altis Health, and Altis Learn platforms.',
      'The content on our websites and platforms is provided for informational and commercial purposes. While we take care to ensure accuracy, we make no warranties about the completeness, accuracy, or fitness for a particular purpose of any information published.',
    ],
  },
  {
    id: 'regulated',
    title: '2. Regulatory Position',
    body: [
      'Altis Platforms Limited is a technology provider. We build and operate software. We do not carry on regulated financial activity in our own name, and we do not hold client money or client assets.',
    ],
    list: [
      'Our platforms are used by customers under their own licences and regulatory permissions. Where a product supports a regulated activity, that activity is the customer\'s and is carried on under the customer\'s authorisation. We do not hold, and do not require, a banking, payment services or financial institution licence to provide the software.',
      'Nothing we publish or provide is legal, tax, accounting or investment advice. Where a product supports a compliance function, it is a tool for that function rather than a replacement for it, and responsibility for meeting an obligation remains with the customer.',
      'Data protection is the area where the obligation is ours as well as the customer\'s. We handle personal data in line with the Nigeria Data Protection Act, and with the UK GDPR where it applies. The Privacy Policy sets out what we collect, why, and on what basis.',
      'If you have a question about the regulatory position of a product in your jurisdiction, write to legal@altisly.com.',
    ],
  },
  {
    id: 'disclaimers',
    title: '3. Disclaimers',
    body: [
      'The information on this website does not constitute financial, legal, medical, or professional advice of any kind. It is provided for general informational purposes only. You should obtain appropriate professional advice before making decisions based on information from our website.',
      'Altisly makes no representation that the services described on this website are available or appropriate for use in all jurisdictions. Users are responsible for determining whether use of the services complies with applicable local laws.',
      'Past performance data, case studies, and statistics presented on this website are for illustrative purposes. They do not guarantee future results or performance of any Altisly product.',
    ],
  },
  {
    id: 'trademarks',
    title: '4. Trademarks & Branding',
    body: [
      '"Altisly", "Atreasury", "Altis AI", "Altis Health", "Altis Learn", and associated logos and product names are trademarks or registered trademarks of Altis Platforms Limited Unauthorised use of any Altisly trademark, logo, or brand element is prohibited.',
      'Third-party trademarks, product names, and company names mentioned on this website are the property of their respective owners. Their appearance on Altisly platforms does not imply any endorsement, sponsorship, or affiliation between those parties and Altis Platforms Limited, unless expressly stated.',
    ],
  },
  {
    id: 'third-party',
    title: '5. Third-Party Links & Content',
    body: [
      'Our websites and platforms may contain links to third-party websites, publications, and services. These links are provided for convenience only. Altisly has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites or services.',
      'Altisly does not warrant, endorse, or guarantee the accuracy of any third-party content or services accessible through links on our platforms. You access third-party resources at your own risk.',
    ],
  },
  {
    id: 'availability',
    title: '6. Service Availability',
    body: [
      'We aim to keep our platforms and websites available at all times, but we do not guarantee uninterrupted access. Planned maintenance, infrastructure updates, or circumstances beyond our control (including force majeure events) may affect availability.',
      'Customers with SLA requirements should refer to their applicable service agreement for uptime commitments and remedies.',
    ],
  },
  {
    id: 'jurisdiction',
    title: '7. Jurisdiction & Applicable Law',
    body: [
      'This Legal Notice is governed by the laws of the Federal Republic of Nigeria. For matters relating to our United Kingdom operations, the laws of England and Wales apply.',
      'Any dispute arising from this notice shall be subject to the exclusive jurisdiction of the courts of Nigeria (or England and Wales for UK-related matters), except where mandatory consumer protection laws in the user\'s jurisdiction provide otherwise.',
    ],
  },
  {
    id: 'contact',
    title: '8. Contact Information',
    body: [
      'For any legal enquiries, regulatory matters, or notices that need to be served on Altis Platforms Limited, please use the contact details below. We aim to acknowledge all legal correspondence within 2 business days.',
    ],
  },
]

const contacts = [
  {
    title: 'General Legal',
    desc: 'Terms, contracts, and legal notices',
    href: 'mailto:legal@altisly.com',
    label: 'legal@altisly.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Privacy & Data',
    desc: 'Data subject requests & DPO enquiries',
    href: 'mailto:privacy@altisly.com',
    label: 'privacy@altisly.com',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Security',
    desc: 'Responsible disclosure & security incidents',
    href: 'mailto:security@altisly.com',
    label: 'security@altisly.com',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Press & Media',
    desc: 'Media enquiries and press kit requests',
    href: 'mailto:press@altisly.com',
    label: 'press@altisly.com',
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
  },
]
</script>
