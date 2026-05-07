<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="pt-32 pb-12 md:pt-44 md:pb-16 bg-white border-b border-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
            <NuxtLink to="/" class="hover:text-gray-600 transition-colors">Altisly</NuxtLink>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span>Legal</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="text-gray-600">Terms of Service</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-black text-navy-900 mb-4">Terms of Service</h1>
          <p class="text-gray-500 text-sm">Last updated: 1 May 2026 · Effective: 1 May 2026</p>
          <div class="flex flex-wrap gap-3 mt-6">
            <NuxtLink to="/legal/privacy" class="text-xs font-semibold text-gray-500 hover:text-[#15c411] transition-colors px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#15c411]">Privacy Policy</NuxtLink>
            <NuxtLink to="/legal/notice" class="text-xs font-semibold text-gray-500 hover:text-[#15c411] transition-colors px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#15c411]">Legal Notice</NuxtLink>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12">

            <!-- TOC sidebar -->
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

            <!-- Body -->
            <article class="flex-1 prose-legal">
              <div class="bg-[#ebfaeb] border border-[#15c411]/20 rounded-xl p-5 mb-10">
                <p class="text-sm text-gray-700 leading-relaxed">These Terms of Service ("Terms") govern your access to and use of the websites, platforms, and services operated by <strong>Altisly Inc.</strong> ("Altisly", "we", "us", or "our"). By accessing or using any Altisly service you agree to be bound by these Terms. If you do not agree, do not use the services.</p>
              </div>

              <div v-for="section in sections" :key="section.id" :id="section.id" class="mb-12">
                <h2 class="text-xl font-bold text-navy-900 mb-4 pb-3 border-b border-gray-100">{{ section.title }}</h2>
                <div class="space-y-4">
                  <p v-for="para in section.body" :key="para" class="text-sm text-gray-600 leading-relaxed">{{ para }}</p>
                  <ul v-if="section.list" class="space-y-2 mt-4">
                    <li v-for="item in section.list" :key="item" class="flex items-start gap-3 text-sm text-gray-600">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#15c411] flex-shrink-0 mt-2"></div>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="bg-gray-50 rounded-xl border border-gray-200 p-6 mt-10">
                <h3 class="font-bold text-navy-900 mb-2">Questions about these Terms?</h3>
                <p class="text-sm text-gray-600 mb-4">If you have questions about these Terms, please contact our legal team.</p>
                <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-sm font-semibold text-[#15c411] hover:underline">
                  Contact us
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </NuxtLink>
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
  title: 'Terms of Service | Altisly',
  description: 'Read the Terms of Service governing your use of Altisly products and services.',
})

const toc = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'services', label: '2. Description of Services' },
  { id: 'eligibility', label: '3. Eligibility' },
  { id: 'accounts', label: '4. Accounts & Access' },
  { id: 'acceptable-use', label: '5. Acceptable Use' },
  { id: 'ip', label: '6. Intellectual Property' },
  { id: 'data', label: '7. Data & Privacy' },
  { id: 'payment', label: '8. Payment Terms' },
  { id: 'liability', label: '9. Limitation of Liability' },
  { id: 'termination', label: '10. Termination' },
  { id: 'disputes', label: '11. Disputes & Governing Law' },
  { id: 'changes', label: '12. Changes to Terms' },
  { id: 'contact', label: '13. Contact' },
]

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: [
      'By creating an account, accessing, or using any product or service offered by Altisly Inc. (including Atreasury, Altis AI, Altis Health, Altis Learn, and any related APIs or platforms), you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.',
      'If you are accepting these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms. In that case, "you" refers to that entity.',
    ],
  },
  {
    id: 'services',
    title: '2. Description of Services',
    body: [
      'Altisly provides a suite of technology products and consulting services, including treasury management systems (Atreasury), artificial intelligence tools (Altis AI), health information management and lending infrastructure (Altis Health), and educational technology platforms (Altis Learn).',
      'We reserve the right to modify, suspend, or discontinue any part of the services at any time, with reasonable notice where practicable. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.',
    ],
  },
  {
    id: 'eligibility',
    title: '3. Eligibility',
    body: [
      'You must be at least 18 years of age and legally capable of entering into binding contracts under applicable law to use Altisly services. Certain services may have additional eligibility requirements as specified in the applicable product terms.',
      'By using our services, you represent and warrant that you meet all eligibility requirements and that the information you provide is accurate and complete.',
    ],
  },
  {
    id: 'accounts',
    title: '4. Accounts & Access',
    body: [
      'To access most Altisly services, you must create an account and provide accurate, complete registration information. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.',
      'You must notify us immediately at security@altisly.com if you suspect unauthorised use of your account. We cannot and will not be liable for any loss or damage arising from your failure to maintain adequate account security.',
    ],
    list: [
      'You may not share your account credentials with any third party.',
      'You may not create multiple accounts for abusive purposes.',
      'Enterprise accounts are subject to the terms set out in the applicable service agreement.',
      'We reserve the right to suspend or terminate accounts that violate these Terms.',
    ],
  },
  {
    id: 'acceptable-use',
    title: '5. Acceptable Use',
    body: [
      'You agree to use Altisly services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, overburden, or impair the services or interfere with any other party\'s use.',
    ],
    list: [
      'Do not use the services to process, transmit, or store unlawful content or data.',
      'Do not attempt to gain unauthorised access to any part of the services or related systems.',
      'Do not use automated scripts, bots, or scrapers to access the services without prior written consent.',
      'Do not use the services to engage in money laundering, fraud, or any other financial crime.',
      'Do not reverse-engineer, decompile, or attempt to extract source code from our software.',
      'Do not resell, sublicense, or commercialise access to the services without prior written agreement.',
    ],
  },
  {
    id: 'ip',
    title: '6. Intellectual Property',
    body: [
      'Altisly and its licensors own all intellectual property rights in and to the services, including but not limited to software, algorithms, user interfaces, designs, documentation, trade names, and trademarks. These Terms do not grant you any rights in or to our intellectual property except the limited right to use the services as set out herein.',
      'You retain ownership of any data, content, or materials you upload or submit through the services ("Your Content"). By submitting Your Content, you grant Altisly a worldwide, royalty-free, non-exclusive licence to host, store, process, and display Your Content solely as necessary to provide the services to you.',
    ],
  },
  {
    id: 'data',
    title: '7. Data & Privacy',
    body: [
      'Your use of the services is also governed by our Privacy Policy, which is incorporated by reference into these Terms. We encourage you to read our Privacy Policy carefully to understand how we collect, use, and protect your information.',
      'For enterprise customers, data processing obligations and sub-processor lists are governed by the applicable Data Processing Agreement (DPA) which forms part of the service agreement.',
    ],
  },
  {
    id: 'payment',
    title: '8. Payment Terms',
    body: [
      'Access to certain Altisly services requires payment of fees as described in your service agreement or as displayed at the time of subscription. All fees are quoted in the currency specified in your agreement and are exclusive of applicable taxes unless stated otherwise.',
      'Fees are due and payable in advance unless otherwise agreed in writing. We reserve the right to suspend access to paid services if payment is not received by the due date. Refund terms are as specified in the applicable product terms or service agreement.',
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    body: [
      'To the maximum extent permitted by applicable law, Altisly shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (a) your access to or use of or inability to access or use the services; (b) any unauthorised access to or use of our servers and any personal or financial information stored therein; or (c) any bugs, viruses, or other harmful code that may be transmitted through the services.',
      'Our total liability to you for any claims arising out of or related to these Terms or the services is limited to the amount you paid to Altisly in the twelve (12) months preceding the event giving rise to the claim.',
    ],
  },
  {
    id: 'termination',
    title: '10. Termination',
    body: [
      'You may terminate your account at any time by contacting us or using the account deletion functionality in the platform. Upon termination, your right to access the services will cease immediately.',
      'We may terminate or suspend your account and access to the services immediately, without prior notice or liability, if you breach any provision of these Terms. We may also terminate services with 30 days\' written notice for any other reason.',
      'Upon termination, provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity provisions, and limitations of liability.',
    ],
  },
  {
    id: 'disputes',
    title: '11. Disputes & Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. For customers in the United Kingdom, the laws of England and Wales shall apply.',
      'Any dispute arising out of or in connection with these Terms shall first be submitted to good-faith negotiation between the parties. If the dispute is not resolved within 30 days, either party may submit the dispute to binding arbitration in Lagos, Nigeria (or London, UK for UK customers) under the rules of the relevant arbitration body.',
    ],
  },
  {
    id: 'changes',
    title: '12. Changes to Terms',
    body: [
      'We reserve the right to modify these Terms at any time. We will provide at least 30 days\' notice of material changes by email or by posting a prominent notice on our website. Your continued use of the services after the effective date of revised Terms constitutes your acceptance of the changes.',
    ],
  },
  {
    id: 'contact',
    title: '13. Contact',
    body: [
      'If you have any questions about these Terms of Service, please contact Altisly Inc. at: legal@altisly.comm — or by writing to our registered address. We will respond to all legal enquiries within 5 business days.',
    ],
  },
]
</script>
