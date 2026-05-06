<template>
  <div>
    <AppHeader />
    <main>
      <section class="pt-32 pb-12 md:pt-44 md:pb-16 bg-white border-b border-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
            <NuxtLink to="/" class="hover:text-gray-600 transition-colors">Altisry</NuxtLink>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span>Legal</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="text-gray-600">Legal Notice</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-black text-navy-900 mb-4">Legal Notice</h1>
          <p class="text-gray-500 text-sm">Last updated: 1 May 2026</p>
          <div class="flex flex-wrap gap-3 mt-6">
            <NuxtLink to="/legal/terms" class="text-xs font-semibold text-gray-500 hover:text-[#15c411] transition-colors px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#15c411]">Terms of Service</NuxtLink>
            <NuxtLink to="/legal/privacy" class="text-xs font-semibold text-gray-500 hover:text-[#15c411] transition-colors px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#15c411]">Privacy Policy</NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12">
            <aside class="lg:w-56 flex-shrink-0">
              <div class="sticky top-28">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
                <nav class="space-y-1">
                  <a v-for="section in toc" :key="section.id" :href="`#${section.id}`" class="block text-sm text-gray-500 hover:text-[#15c411] transition-colors py-1 border-l-2 border-transparent hover:border-[#15c411] pl-3 leading-tight">
                    {{ section.label }}
                  </a>
                </nav>
              </div>
            </aside>

            <article class="flex-1">

              <!-- Company details card -->
              <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
                <h2 class="font-bold text-navy-900 mb-5 text-lg">Company Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  <div v-for="detail in companyDetails" :key="detail.label">
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{{ detail.label }}</p>
                    <p class="text-sm text-gray-700 font-medium">{{ detail.value }}</p>
                  </div>
                </div>
              </div>

              <div v-for="section in sections" :key="section.id" :id="section.id" class="mb-12">
                <h2 class="text-xl font-bold text-navy-900 mb-4 pb-3 border-b border-gray-100">{{ section.title }}</h2>
                <div class="space-y-4">
                  <p v-for="para in section.body" :key="para" class="text-sm text-gray-600 leading-relaxed">{{ para }}</p>
                  <ul v-if="section.list" class="space-y-2 mt-2">
                    <li v-for="item in section.list" :key="item" class="flex items-start gap-3 text-sm text-gray-600">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#15c411] flex-shrink-0 mt-2"></div>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Contact cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div v-for="contact in contacts" :key="contact.title" class="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div class="w-9 h-9 rounded-lg bg-[#ebfaeb] flex items-center justify-center mb-3">
                    <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.icon" />
                    </svg>
                  </div>
                  <h4 class="font-bold text-navy-900 text-sm mb-1">{{ contact.title }}</h4>
                  <p class="text-xs text-gray-500 mb-2">{{ contact.desc }}</p>
                  <a :href="contact.href" class="text-sm font-semibold text-[#15c411] hover:underline">{{ contact.label }}</a>
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Legal Notice | Altisry',
  description: 'Legal notice, company information, regulatory disclosures, and contact information for Altisry Inc.',
})

const toc = [
  { id: 'company', label: 'Company Information' },
  { id: 'website', label: '1. Website & Platform' },
  { id: 'regulated', label: '2. Regulated Activities' },
  { id: 'disclaimers', label: '3. Disclaimers' },
  { id: 'trademarks', label: '4. Trademarks & Branding' },
  { id: 'third-party', label: '5. Third-Party Links' },
  { id: 'availability', label: '6. Service Availability' },
  { id: 'jurisdiction', label: '7. Jurisdiction' },
  { id: 'contact', label: '8. Contact' },
]

const companyDetails = [
  { label: 'Legal Name', value: 'Altisry Inc.' },
  { label: 'Company Type', value: 'Private Limited Company' },
  { label: 'Incorporated In', value: 'Federal Republic of Nigeria' },
  { label: 'RC Number', value: 'RC-XXXXXXXX' },
  { label: 'Registered Address', value: 'Lagos, Nigeria' },
  { label: 'UK Operations', value: 'London, United Kingdom' },
  { label: 'General Enquiries', value: 'hello@altisry.comm' },
  { label: 'Legal Enquiries', value: 'legal@altisry.comm' },
]

const sections = [
  {
    id: 'website',
    title: '1. Website & Platform Notice',
    body: [
      'This Legal Notice applies to all websites, web applications, mobile applications, APIs, and platforms operated by Altisry Inc., including altisry.co and all subdomains, as well as the ATreasury, Altis AI, Altis Health, and Altis Learn platforms.',
      'The content on our websites and platforms is provided for informational and commercial purposes. While we take care to ensure accuracy, we make no warranties about the completeness, accuracy, or fitness for a particular purpose of any information published.',
    ],
  },
  {
    id: 'regulated',
    title: '2. Regulated Activities Disclosure',
    body: [
      'Certain Altisry products involve activities that may be regulated under financial services, data protection, or healthcare laws in the jurisdictions in which we operate. The following disclosures apply:',
    ],
    list: [
      'ATreasury and related financial infrastructure products are technology platforms. Altisry does not hold a banking licence or financial institution licence unless specifically stated for a product or geography. Customers remain responsible for obtaining any required regulatory approvals for their own use of the platform.',
      'Altis Health: Health information management and lending activities are subject to applicable Nigerian health authority and financial regulations. Health facility lending activities are conducted through appropriately licensed lending partners.',
      'Compliance Suite and related products provide technology tools to assist compliance functions. They do not constitute legal advice, and users remain responsible for their own compliance obligations.',
      'If you have questions about the regulatory status of any specific product or service in your jurisdiction, please contact legal@altisry.comm.',
    ],
  },
  {
    id: 'disclaimers',
    title: '3. Disclaimers',
    body: [
      'The information on this website does not constitute financial, legal, medical, or professional advice of any kind. It is provided for general informational purposes only. You should obtain appropriate professional advice before making decisions based on information from our website.',
      'Altisry makes no representation that the services described on this website are available or appropriate for use in all jurisdictions. Users are responsible for determining whether use of the services complies with applicable local laws.',
      'Past performance data, case studies, and statistics presented on this website are for illustrative purposes. They do not guarantee future results or performance of any Altisry product.',
    ],
  },
  {
    id: 'trademarks',
    title: '4. Trademarks & Branding',
    body: [
      '"Altisry", "ATreasury", "Altis AI", "Altis Health", "Altis Learn", and associated logos and product names are trademarks or registered trademarks of Altisry Inc. Unauthorised use of any Altisry trademark, logo, or brand element is prohibited.',
      'Third-party trademarks, product names, and company names mentioned on this website are the property of their respective owners. Their appearance on Altisry platforms does not imply any endorsement, sponsorship, or affiliation between those parties and Altisry Inc., unless expressly stated.',
    ],
  },
  {
    id: 'third-party',
    title: '5. Third-Party Links & Content',
    body: [
      'Our websites and platforms may contain links to third-party websites, publications, and services. These links are provided for convenience only. Altisry has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites or services.',
      'Altisry does not warrant, endorse, or guarantee the accuracy of any third-party content or services accessible through links on our platforms. You access third-party resources at your own risk.',
    ],
  },
  {
    id: 'availability',
    title: '6. Service Availability',
    body: [
      'We aim to keep our platforms and websites available at all times, but we do not guarantee uninterrupted access. Planned maintenance, infrastructure updates, or circumstances beyond our control (including force majeure events) may affect availability.',
      'Real-time service status is published at altisry.co/status. Customers with SLA requirements should refer to their applicable service agreement for uptime commitments and remedies.',
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
      'For any legal enquiries, regulatory matters, or notices that need to be served on Altisry Inc., please use the contact details below. We aim to acknowledge all legal correspondence within 2 business days.',
    ],
  },
]

const contacts = [
  {
    title: 'General Legal',
    desc: 'Terms, contracts, and legal notices',
    href: 'mailto:legal@altisry.comm',
    label: 'legal@altisry.comm',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Privacy & Data',
    desc: 'Data subject requests & DPO enquiries',
    href: 'mailto:privacy@altisry.com',
    label: 'privacy@altisry.com',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Security',
    desc: 'Responsible disclosure & security incidents',
    href: 'mailto:security@altisry.com',
    label: 'security@altisry.com',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Press & Media',
    desc: 'Media enquiries and press kit requests',
    href: 'mailto:press@altisry.com',
    label: 'press@altisry.com',
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
  },
]
</script>
