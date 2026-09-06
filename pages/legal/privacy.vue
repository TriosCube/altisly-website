<template>
  <LegalPage
    title="Privacy Policy"
    updated="Last updated 6 September 2026. Effective 6 September 2026."
    :toc="toc"
    :sections="sections"
    intro="Altis Platforms Limited is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share and protect information about you when you use our services."
  >
    <template #after>
      <div class="rounded-isura-lg border border-base bg-surface-2 p-6 mt-10">
        <h3 class="font-semibold text-[16px] mb-2">Exercise your privacy rights</h3>
        <p class="text-[14px] text-muted mb-5">
          To make a data access, correction or deletion request, or to withdraw consent, contact our
          Data Protection Officer.
        </p>
        <AppButton variant="lime" size="sm" href="mailto:privacy@altisly.com">
          privacy@altisly.com →
        </AppButton>
      </div>
    </template>
  </LegalPage>
</template>

<script setup lang="ts">
import LegalPage from '@/components/legal/LegalPage.vue'
import AppButton from '@/components/ui/AppButton.vue'
useSeoMeta({
  title: 'Privacy Policy | Altisly',
  description: 'Learn how Altisly collects, uses, and protects your information across all our products and services.',
})

const toc = [
  { id: 'who-we-are', label: '1. Who We Are' },
  { id: 'data-we-collect', label: '2. Data We Collect' },
  { id: 'how-we-use', label: '3. How We Use Your Data' },
  { id: 'sharing', label: '4. How We Share Data' },
  { id: 'retention', label: '5. Data Retention' },
  { id: 'security', label: '6. Security' },
  { id: 'your-rights', label: '7. Your Rights' },
  { id: 'cookies', label: '8. Cookies & Tracking' },
  { id: 'children', label: '9. Children\'s Privacy' },
  { id: 'international', label: '10. International Transfers' },
  { id: 'changes', label: '11. Changes to This Policy' },
  { id: 'contact', label: '12. Contact & DPO' },
]

const sections = [
  {
    id: 'who-we-are',
    title: '1. Who We Are',
    body: [
      'Altis Platforms Limited is a technology company incorporated in Nigeria (RC 9597173), with operations in Nigeria, Ghana, and the United Kingdom. We operate treasury management, AI, health informatics, and educational technology platforms.',
      'For the purposes of data protection law, Altis Platforms Limited is the data controller for personal information collected through our websites and platforms. For enterprise customers, Altisly acts as a data processor for the personal data of your users, as governed by the applicable Data Processing Agreement.',
    ],
  },
  {
    id: 'data-we-collect',
    title: '2. Data We Collect',
    body: ['We collect different types of information depending on how you interact with us.'],
    subsections: [
      {
        title: 'Information you provide directly',
        items: [
          'Account registration information: name, email address, job title, organisation name, phone number',
          'Identity verification documents (for regulated product access): government-issued ID, business registration certificates',
          'Payment and billing information: card details are processed by our payment providers and not stored on our servers',
          'Communications: support tickets, emails, chat messages, feedback forms',
          'Content uploaded to our platforms: documents, transaction data, clinical records (for Altis Health)',
        ],
      },
      {
        title: 'Information we collect automatically',
        items: [
          'Usage data: pages visited, features used, session duration, clicks, and navigation paths',
          'Device and browser information: IP address, browser type, operating system, screen resolution',
          'Log data: server logs, error logs, API call logs with timestamps',
          'Cookie and tracking data as described in Section 8',
        ],
      },
      {
        title: 'Information from third parties',
        items: [
          'Banking data (for Atreasury): transaction data, balance data received via bank API integrations you authorise',
          'Identity verification data from KYC providers we use for compliance purposes',
          'Business intelligence data from public sources for fraud and compliance screening',
        ],
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Data',
    body: ['We use the information we collect for the following purposes, each with an identified lawful basis under applicable data protection law:'],
    list: [
      'Providing and improving our services — performance of contract / legitimate interests',
      'Account management and authentication — performance of contract',
      'Processing payments and billing — performance of contract / legal obligation',
      'Customer support and communications — legitimate interests',
      'Security monitoring, fraud detection, and platform integrity — legitimate interests / legal obligation',
      'Regulatory compliance and audit obligations — legal obligation',
      'Product analytics and improvement (using anonymised/aggregated data) — legitimate interests',
      'Marketing communications (only with your consent or where permitted by law) — consent / legitimate interests',
    ],
  },
  {
    id: 'sharing',
    title: '4. How We Share Your Data',
    body: [
      'We do not sell your personal information. We share data only in the following circumstances:',
    ],
    list: [
      'Service providers: We share data with carefully vetted third-party providers who assist us in operating the services (cloud infrastructure, payment processors, email providers, KYC vendors). These providers are bound by data processing agreements.',
      'Banking partners: For Atreasury, we share data with the banking partners you explicitly connect via the platform.',
      'Legal obligations: We disclose data when required by law, court order, or regulatory authority — including financial regulators such as CBN, FCA, and relevant tax authorities.',
      'Business transfers: In the event of a merger, acquisition, or sale of assets, personal data may be transferred as part of that transaction, with appropriate notice to affected users.',
      'With your consent: We share data in other circumstances only with your explicit consent.',
    ],
  },
  {
    id: 'retention',
    title: '5. Data Retention',
    body: [
      'We retain personal data for as long as necessary to provide the services and as required by applicable law. For regulated products (Atreasury, Altis Health), certain records must be retained for a minimum period prescribed by financial or health regulations — typically 5–7 years.',
      'When data is no longer required, we delete it or anonymise it in a secure manner. You may request earlier deletion of your personal data subject to any legal retention obligations.',
    ],
  },
  {
    id: 'security',
    title: '6. Security',
    body: [
      'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These measures include encryption at rest and in transit (TLS 1.2+), role-based access controls, multi-factor authentication for staff, regular penetration testing, and SOC 2-aligned security operations.',
      'No system is completely secure. If you suspect a security incident involving your data, please contact security@altisly.com immediately.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights',
    body: [
      'Depending on your jurisdiction, you may have the following rights in relation to your personal data:',
    ],
    list: [
      'Right to access: request a copy of the personal data we hold about you',
      'Right to rectification: request correction of inaccurate or incomplete data',
      'Right to erasure: request deletion of your data, subject to legal retention requirements',
      'Right to restrict processing: request that we limit how we use your data in certain circumstances',
      'Right to data portability: receive your data in a structured, machine-readable format',
      'Right to object: object to processing based on legitimate interests or for direct marketing',
      'Right to withdraw consent: where processing is based on consent, withdraw it at any time',
      'Right to lodge a complaint: with your relevant data protection authority (NITDA in Nigeria, ICO in the UK)',
    ],
  },
  {
    id: 'cookies',
    title: '8. Cookies & Tracking',
    body: [
      'We use cookies and similar tracking technologies on our websites and platforms. Strictly necessary cookies are required for the services to function. Analytics cookies (which you can opt out of) help us understand how the platform is used. We do not use advertising cookies or sell data to ad networks.',
      'You can control cookies through your browser settings or by using the cookie preference centre on our website. Note that disabling certain cookies may affect the functionality of the services.',
    ],
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    body: [
      'Our services are not directed to children under the age of 16 (or 13 in jurisdictions where that is the applicable minimum). We do not knowingly collect personal information from children. Altis Learn programs for educational institutions are delivered through the institution as the responsible party, and institutions are responsible for appropriate consent and data protection for their students.',
      'If you believe we have inadvertently collected data about a child, please contact privacy@altisly.com immediately.',
    ],
  },
  {
    id: 'international',
    title: '10. International Data Transfers',
    body: [
      'Altisly operates across Nigeria, Ghana, the United Kingdom, and other markets. Your data may be processed in countries outside your home country. Where we transfer data across borders, we ensure appropriate safeguards are in place — including standard contractual clauses, adequacy decisions, or other mechanisms approved under applicable data protection law.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our platform at least 30 days before the change takes effect. Your continued use of the services after the effective date constitutes acceptance of the updated policy.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact & Data Protection Officer',
    body: [
      'For privacy-related enquiries, data subject requests, or to contact our Data Protection Officer, please write to: privacy@altisly.com — or by post to Altis Platforms Limited, Lagos, Nigeria.',
      'For UK-related data protection matters, please contact: uk-privacy@altisly.com. We aim to respond to all privacy requests within 30 days.',
    ],
  },
]
</script>
