import { e as useRoute, u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$3 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./CtaBanner-4dh4BuSJ.js";
import { defineComponent, computed, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/hookable/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/unctx/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/defu/dist/defu.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/klona/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const allStories = [
      {
        slug: "finom",
        company: "Finom",
        abbr: "FI",
        industry: "Banking",
        location: "Amsterdam, NL",
        size: "200–500",
        founded: "2019",
        avatarBg: "bg-brand-600",
        products: ["Data Aggregation", "Financial Insights"],
        headline: "How Finom connected 2.4M transactions a month across 18 countries",
        overview: "Finom is a European business finance super-app built for SMEs. They needed to connect their customers to every major European bank to provide a unified financial view — and they needed to do it fast.",
        challenge: "Finom was expanding rapidly across Europe but faced a massive technical hurdle: integrating with hundreds of different banks, each with their own APIs, authentication flows, and data formats. Building those integrations in-house would have taken years and distracted their core team from product development.",
        solution: "Finom chose Altisry's Data Aggregation platform to serve as the backbone of their bank connectivity layer. With a single API, they gained instant access to 850+ banks across 18 countries, with data returned in a unified, enriched format ready for their product.",
        solutionPoints: [
          "Integrated Altisry's unified API in under 3 months from kickoff to production",
          "Covered 850+ banks across 18 European countries from day one",
          "Used financial insights endpoints to provide customers with automated cash flow analysis",
          "Received dedicated solution architect support throughout the integration",
          "Leveraged Altisry's sandbox environment for thorough pre-launch testing"
        ],
        quote: "Altisry helped us connect our customers to every major European bank in under 3 months. The integration was seamless and the support was world-class.",
        author: "Marcus Weber",
        role: "CTO",
        results: "In the three months since launching on Altisry, Finom has connected over 142,800 customer accounts, processes 2.4 million transactions per month, and maintains a 99.97% API uptime. Customer satisfaction scores for their account aggregation feature are among the highest in the app.",
        stats: [
          { value: "3mo", label: "Time to market" },
          { value: "2.4M", label: "Transactions/month" },
          { value: "99.97%", label: "API uptime" }
        ],
        href: "/company/success-stories/finom"
      },
      {
        slug: "lendex",
        company: "Lendex",
        abbr: "LE",
        industry: "Lending",
        location: "London, UK",
        size: "50–200",
        founded: "2017",
        avatarBg: "bg-green-600",
        products: ["Data Aggregation", "Data Enrichment"],
        headline: "How Lendex cut loan decisions from 5 days to 4 hours",
        overview: "Lendex is a UK-based digital lender focused on SME finance. By integrating open banking data into their underwriting process, they transformed their loan decisioning speed and accuracy.",
        challenge: "Traditional credit assessments relied on bank statements that took days to collect and manually verify. Lendex was losing deals to competitors who could approve loans faster, and their risk team was spending enormous time on document processing rather than actual credit analysis.",
        solution: "Lendex integrated Altisry's Data Aggregation and Enrichment APIs directly into their loan origination system. Applicants now connect their bank with a single click, and Altisry's enriched data feeds directly into Lendex's automated underwriting models.",
        solutionPoints: [
          "Real-time bank connection replaces manual statement upload entirely",
          "Enriched transaction categories provide instant income and expense analysis",
          "Automated affordability assessment runs in seconds, not hours",
          "Recurring payment detection flags existing debt obligations automatically",
          "Historical cash flow data trains and continuously improves credit models"
        ],
        quote: "We reduced loan application processing from 5 days to 4 hours. The income verification API is simply incredible.",
        author: "Sarah Mitchell",
        role: "VP Product",
        results: "Lendex now processes loan applications 94% faster. Their default rate has dropped 40% thanks to richer data powering better credit decisions. The operations team that previously reviewed bank statements manually has been redeployed to high-value relationship work.",
        stats: [
          { value: "94%", label: "Faster decisions" },
          { value: "40%", label: "Default rate reduction" },
          { value: "5→4hr", label: "Decision time" }
        ],
        href: "/company/success-stories/lendex"
      },
      {
        slug: "pleo",
        company: "Pleo",
        abbr: "PL",
        industry: "E-commerce",
        location: "Copenhagen, DK",
        size: "500–1000",
        founded: "2015",
        avatarBg: "bg-pink-600",
        products: ["Pay by Bank"],
        headline: "How Pleo reduced payment fees by 80% with open banking",
        overview: "Pleo is a spend management platform used by thousands of European businesses. Adding pay-by-bank as a checkout option transformed their payment economics and improved the checkout experience for their customers.",
        challenge: "Card payment fees were eating into Pleo's unit economics. Their finance team calculated that switching even 30% of transactions to bank transfers would save millions per year. But they needed a seamless bank payment experience — not the clunky manual transfer flows most open banking providers offered.",
        solution: "Pleo integrated Altisry's Pay by Bank product, which provides a smooth, one-click bank authentication and payment flow that rivals card checkout in speed and simplicity. The integration was designed to sit alongside existing card options, letting customers choose their preferred method.",
        solutionPoints: [
          "Pay by Bank embedded directly into existing checkout with minimal UX disruption",
          "Covers all major European banks with a single integration",
          "Instant payment confirmation with real-time webhook notifications",
          "Automatic fallback to alternative payment method if bank connection fails",
          "Full PSD2 compliant strong customer authentication built in"
        ],
        quote: "Open banking payments cut our transaction fees by 80%. Our customers love the seamless checkout experience.",
        author: "Thomas Berg",
        role: "Head of Payments",
        results: "Pleo achieved an 80% reduction in transaction fees on bank-paid transactions. Their checkout conversion rate for pay-by-bank is 2.1x higher than industry benchmarks for open banking payments. The integration was completed in a single sprint and has required zero maintenance since launch.",
        stats: [
          { value: "80%", label: "Lower fees" },
          { value: "2.1x", label: "Checkout conversion" },
          { value: "1 sprint", label: "Integration time" }
        ],
        href: "/company/success-stories/pleo"
      },
      {
        slug: "mambu",
        company: "Mambu",
        abbr: "MA",
        industry: "Banking",
        location: "Berlin, DE",
        size: "1000+",
        founded: "2011",
        avatarBg: "bg-blue-600",
        products: ["Open Banking Compliance", "TPP Verification"],
        headline: "How Mambu became PSD2 compliant in 4 weeks, not 4 months",
        overview: "Mambu is a cloud banking platform serving 200+ financial institutions worldwide. Adding PSD2 compliance to their platform was business-critical for their European clients — but compliance projects traditionally take months and carry significant regulatory risk.",
        challenge: "Mambu's banking clients needed PSD2 compliance to operate in Europe. Building a compliant consent management and TPP verification layer in-house would have taken Mambu's team an estimated 6–9 months and required deep regulatory expertise they didn't have internally.",
        solution: "Mambu embedded Altisry's Open Banking Compliance layer into their platform as a white-label module. Their bank clients get a fully compliant API and consent management interface, while Mambu handles zero of the regulatory complexity.",
        solutionPoints: [
          "White-label compliance layer embedded in Mambu's existing platform UI",
          "Automated TPP verification against official EBA and national registers",
          "Pre-built consent management dashboard for end customers",
          "Continuous regulatory monitoring — Altisry tracks PSD2 changes across 30+ countries",
          "Dedicated compliance specialist assigned to Mambu's account"
        ],
        quote: "PSD2 compliance used to feel overwhelming. Altisry made us compliant in exactly 4 weeks. No surprises.",
        author: "Anna Schulz",
        role: "Chief Compliance Officer",
        results: "Mambu achieved full PSD2 compliance in 4 weeks with zero regulatory findings in their first audit. They now offer open banking compliance as a value-add service to all European bank clients, creating a new revenue stream while eliminating compliance risk.",
        stats: [
          { value: "4wks", label: "Time to compliance" },
          { value: "0", label: "Regulatory findings" },
          { value: "40+", label: "Banks served" }
        ],
        href: "/company/success-stories/mambu"
      },
      {
        slug: "toshl",
        company: "Toshl",
        abbr: "TO",
        industry: "Banking",
        location: "Ljubljana, SI",
        size: "10–50",
        founded: "2012",
        avatarBg: "bg-teal-600",
        products: ["Data Aggregation", "Data Enrichment"],
        headline: "How Toshl connected 5,000+ banks and lifted retention by 35%",
        overview: "Toshl is a personal finance app with millions of users across Europe. Their core value proposition — showing all your accounts in one place — depended entirely on the breadth and reliability of their bank connections.",
        challenge: `Toshl's previous bank connectivity solution covered only 1,200 banks and had refresh reliability issues that caused frustrating "account disconnected" errors for users. Churn analysis showed bank connectivity failures were the #1 reason users abandoned the app.`,
        solution: "Toshl migrated to Altisry's Data Aggregation platform, gaining coverage across 5,000+ banks with industry-leading refresh rates. Altisry's enrichment layer also meant Toshl could offer beautifully categorised transactions out of the box.",
        solutionPoints: [
          "Migrated all existing connected accounts with zero user-facing disruption",
          "5,000+ banks covered across 30+ countries from day one of migration",
          "Automated transaction categorisation eliminates the need for user manual tagging",
          "Webhook-based real-time account refresh — no more scheduled polling",
          "Merchant identification shows recognisable brand names instead of cryptic codes"
        ],
        quote: "Our users can now see all their accounts in one place, with every transaction beautifully categorised. Retention went up 35%.",
        author: "Gasper Vidovic",
        role: "CEO",
        results: "After migrating to Altisry, Toshl saw a 35% improvement in 90-day user retention. Support tickets related to connectivity issues dropped 78%. The higher quality enriched data also allowed them to ship new personalised budgeting insights that users rated as the most valuable feature in recent surveys.",
        stats: [
          { value: "+35%", label: "User retention" },
          { value: "5,000+", label: "Banks connected" },
          { value: "78%", label: "Fewer support tickets" }
        ],
        href: "/company/success-stories/toshl"
      },
      {
        slug: "budgetbakers",
        company: "BudgetBakers",
        abbr: "BB",
        industry: "Banking",
        location: "Prague, CZ",
        size: "10–50",
        founded: "2013",
        avatarBg: "bg-indigo-600",
        products: ["Data Enrichment", "Merchant Identification"],
        headline: "How BudgetBakers achieved 96% categorisation accuracy with Altisry",
        overview: "BudgetBakers makes Wallet, a popular personal finance app. Their ML-powered transaction categorisation is a core product feature — and one users judge harshly when it gets it wrong.",
        challenge: "BudgetBakers had spent two years building their own categorisation engine. Despite significant investment, edge cases — merchant names in local languages, obscure fee codes, multi-currency transactions — kept accuracy below 85%. User complaints about miscategorised transactions were a persistent source of negative reviews.",
        solution: "BudgetBakers integrated Altisry's Data Enrichment and Merchant Identification APIs, feeding raw transaction data through Altisry's models before passing results to their own product layer. Altisry's models, trained on billions of European transactions, handle the long tail of edge cases that their in-house system struggled with.",
        solutionPoints: [
          "Altisry enrichment processes every transaction in under 200ms",
          "97+ merchant categories mapped to a consistent taxonomy across all languages",
          "Merchant logo and brand name resolution for 15M+ merchants globally",
          "Continuous model improvement as Altisry processes more transactions across the network",
          "Confidence scores allow BudgetBakers to flag low-confidence categorisations for user review"
        ],
        quote: "The ML-powered categorisation is remarkably accurate. It handles edge cases we couldn't solve ourselves in 2 years of work.",
        author: "Pavel Novak",
        role: "Head of Engineering",
        results: "Categorisation accuracy jumped from 84% to 96% within one month of integration. Negative app store reviews mentioning wrong categories dropped by 60%. The engineering time previously dedicated to maintaining the categorisation engine was redirected to building new product features.",
        stats: [
          { value: "96%", label: "Category accuracy" },
          { value: "12M", label: "Transactions enriched" },
          { value: "60%", label: "Fewer complaints" }
        ],
        href: "/company/success-stories/budgetbakers"
      },
      {
        slug: "sodexo",
        company: "Sodexo",
        abbr: "SO",
        industry: "Treasury",
        location: "Paris, FR",
        size: "10,000+",
        founded: "1966",
        avatarBg: "bg-red-600",
        products: ["Data Aggregation", "Financial Insights"],
        headline: "How Sodexo unified 200+ corporate accounts across 12 countries overnight",
        overview: "Sodexo is a global services company with operations in 55 countries. Their treasury team needed real-time visibility across hundreds of corporate bank accounts to optimize liquidity and reduce idle cash.",
        challenge: "Sodexo's treasury team was working with end-of-day bank statements exported in multiple formats, reconciled manually in spreadsheets. Getting a consolidated cash position took 2–3 business days. With €4B+ in annual treasury flows, even 1% cash optimization would deliver enormous value.",
        solution: "Sodexo deployed Altisry's Data Aggregation platform for corporate accounts, connecting 200+ accounts across 12 countries to a single real-time cash management dashboard. Financial Insights powered automated cash flow forecasting.",
        solutionPoints: [
          "All 200+ corporate accounts connected with read-only API access in under 6 weeks",
          "Real-time balance and transaction monitoring with sub-minute refresh rates",
          "Automated daily cash position report replaces 3-day manual reconciliation",
          "Multi-currency cash pooling visibility across EUR, GBP, USD, CHF, and PLN",
          "Anomaly detection flags unusual transactions for immediate treasury review"
        ],
        quote: "We now have a real-time view of 200+ corporate accounts across 12 countries. Treasury operations transformed overnight.",
        author: "Isabelle Fontaine",
        role: "Group Treasurer",
        results: "Sodexo's treasury team now has a real-time consolidated cash view across all 12 countries. The 3-day reconciliation process is fully automated and takes under 5 minutes. Optimized cash pooling has freed up an estimated €45M in previously idle cash across the group.",
        stats: [
          { value: "200+", label: "Accounts unified" },
          { value: "12", label: "Countries" },
          { value: "€45M", label: "Freed from idle cash" }
        ],
        href: "/company/success-stories/sodexo"
      },
      {
        slug: "crif",
        company: "CRIF",
        abbr: "CR",
        industry: "Lending",
        location: "Bologna, IT",
        size: "5000–10000",
        founded: "1988",
        avatarBg: "bg-orange-600",
        products: ["Data Aggregation", "Data Enrichment"],
        headline: "How CRIF reduced fraud by 60% and cut credit decisions to 3 minutes",
        overview: "CRIF is a global credit bureau and analytics company. They added open banking data to their credit risk models, fundamentally improving the accuracy and speed of credit assessments for their lending clients.",
        challenge: "Traditional credit bureau data provides a historical view of credit behaviour but misses real-time financial health signals. CRIF's clients — banks and lenders — were making suboptimal decisions based on incomplete pictures, leading to higher-than-expected defaults and missed opportunities with creditworthy thin-file applicants.",
        solution: "CRIF integrated Altisry's open banking data APIs into their credit scoring pipeline. Real-time bank account data — income verification, spending patterns, existing debt obligations — now augments traditional credit bureau scores to produce more accurate risk assessments.",
        solutionPoints: [
          "Open banking data blended with traditional bureau data in a unified scoring model",
          "Real-time income verification from live bank data replaces payslip document checks",
          "Affordability assessment using 12 months of enriched transaction history",
          "Thin-file customers now assessable using cash flow data instead of credit history",
          "Fraud signals detected via account ownership verification and behaviour patterns"
        ],
        quote: "The quality of open banking data we get through Altisry has fundamentally changed how we assess credit risk.",
        author: "Marco Feletti",
        role: "Chief Analytics Officer",
        results: "CRIF's clients using the open banking enhanced scores have seen a 60% reduction in fraud and a 35% decrease in default rates. Credit decision time for applicants who consent to open banking data has dropped from hours to under 3 minutes. Approval rates for thin-file applicants have improved 28%.",
        stats: [
          { value: "60%", label: "Fraud reduction" },
          { value: "3min", label: "Credit decision time" },
          { value: "28%", label: "More thin-file approvals" }
        ],
        href: "/company/success-stories/crif"
      },
      {
        slug: "finastra",
        company: "Finastra",
        abbr: "FN",
        industry: "Compliance",
        location: "London, UK",
        size: "10,000+",
        founded: "2017",
        avatarBg: "bg-sky-600",
        products: ["Open Banking Compliance", "TPP Verification"],
        headline: "How Finastra served 40+ bank clients with a single compliance integration",
        overview: "Finastra is one of the world's largest fintech software companies. They embedded Altisry's compliance layer into their banking platform, letting 40+ bank clients offer open banking services without each needing their own compliance programme.",
        challenge: "As open banking regulation expanded across Europe, Finastra's bank clients each needed to become PSD2 compliant. Managing 40+ separate compliance implementations was not feasible. Finastra needed a partner that could provide a single, embeddable compliance solution that scaled across their entire client base.",
        solution: "Finastra integrated Altisry's compliance APIs and TPP verification service into their FusionFabric.cloud platform. Any bank on the platform can now activate open banking compliance as a module, powered by Altisry's regulatory infrastructure.",
        solutionPoints: [
          "Single API integration delivers PSD2 compliance to all 40+ bank clients simultaneously",
          "TPP verification checks against live EBA register data with every API call",
          "Per-bank compliance configuration handles regional regulatory variations",
          "Regulatory change management handled entirely by Altisry's compliance team",
          "Dedicated compliance dashboard for each bank client showing connection health and audit logs"
        ],
        quote: "Embedding Altisry's compliance layer into our platform let us offer open banking to 40+ bank clients with a single integration.",
        author: "Richard James",
        role: "EVP Open Banking",
        results: "All 40+ Finastra bank clients are now PSD2 compliant. The implementation took one quarter — versus the 1–2 years individual implementations would have taken. Zero regulatory breaches have occurred across the entire client base since launch.",
        stats: [
          { value: "40+", label: "Bank clients served" },
          { value: "1 API", label: "Single integration" },
          { value: "0", label: "Regulatory breaches" }
        ],
        href: "/company/success-stories/finastra"
      },
      {
        slug: "odoo",
        company: "Odoo",
        abbr: "OD",
        industry: "E-commerce",
        location: "Ghent, BE",
        size: "5000–10000",
        founded: "2005",
        avatarBg: "bg-purple-600",
        products: ["Pay by Bank", "Bulk Payments"],
        headline: "How Odoo saved SME customers €850k a month in payment fees",
        overview: "Odoo is an open-source ERP platform used by over 7 million users worldwide. Adding pay-by-bank to their invoicing and checkout modules created massive value for their SME customers who process high volumes of B2B payments.",
        challenge: "Odoo's SME customers were paying 1.5–2.5% per card transaction on B2B invoices that often run into thousands of euros. For high-volume businesses, card fees represented a significant cost that was increasingly pushing customers toward manual bank transfers — a clunky, slow alternative that created reconciliation headaches.",
        solution: "Odoo integrated Altisry's Pay by Bank for invoice payments and Bulk Payments for payroll and supplier runs. The integration was embedded into Odoo's existing accounting and e-commerce modules, so customers needed no additional setup.",
        solutionPoints: [
          "Pay by Bank available as a payment option on all Odoo-generated invoices",
          "One-click bank authorisation for invoice payers — no account needed",
          "Instant payment confirmation webhook triggers automatic invoice reconciliation in Odoo",
          "Bulk Payments module handles payroll runs of up to 10,000 recipients simultaneously",
          "Full audit trail for every payment automatically stored in Odoo accounting records"
        ],
        quote: "Adding pay-by-bank to our checkout module took one sprint. Our SME customers now save thousands in card fees every month.",
        author: "Laurent Jacqmin",
        role: "VP Engineering",
        results: "Odoo customers using Pay by Bank save an average of €850,000 in monthly payment fees across the user base. Invoice payment rates have improved 18% as the frictionless bank payment option increases on-time payment. The Bulk Payments module has processed over 2 million supplier and payroll payments since launch.",
        stats: [
          { value: "€850k", label: "Monthly fee savings" },
          { value: "1 sprint", label: "Integration time" },
          { value: "2M+", label: "Bulk payments sent" }
        ],
        href: "/company/success-stories/odoo"
      }
    ];
    const story = computed(() => allStories.find((s) => s.slug === route.params.slug));
    const relatedStories = computed(() => {
      if (!story.value) return [];
      return allStories.filter((s) => s.slug !== story.value.slug).slice(0, 3).map((s) => ({
        company: s.company,
        abbr: s.abbr,
        industry: s.industry,
        avatarBg: s.avatarBg,
        href: s.href,
        quote: s.quote.slice(0, 90) + "…",
        highlight: s.stats[0]
      }));
    });
    useSeoMeta({
      title: computed(() => story.value ? `${story.value.company} Case Study | Altisry` : "Case Study | Altisry"),
      description: computed(() => story.value?.overview ?? "")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_CtaBanner = _sfc_main$2;
      const _component_AppFooter = _sfc_main$3;
      if (unref(story)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
        _push(`<main><section class="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-brand-100"><div class="absolute inset-0 opacity-10"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="white"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"></rect></svg></div><div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 -translate-y-1/2"></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center gap-2 mb-8 text-sm text-gray-500">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/company/success-stories",
          class: "hover:text-navy-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Success Stories`);
            } else {
              return [
                createTextVNode("Success Stories")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-gray-600">${ssrInterpolate(unref(story).company)}</span></div><div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"><div class="max-w-3xl"><div class="flex items-center gap-4 mb-6"><div class="${ssrRenderClass([unref(story).avatarBg, "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white flex-shrink-0"])}">${ssrInterpolate(unref(story).abbr)}</div><div><p class="text-navy-900 font-bold text-xl">${ssrInterpolate(unref(story).company)}</p><div class="flex items-center gap-2 mt-1"><span class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">${ssrInterpolate(unref(story).location)}</span><span class="text-xs bg-brand-600/30 text-brand-300 px-2.5 py-1 rounded-full border border-brand-500/30">${ssrInterpolate(unref(story).industry)}</span></div></div></div><h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-tight tracking-tight">${ssrInterpolate(unref(story).headline)}</h1></div><div class="flex gap-3 flex-wrap lg:flex-nowrap"><!--[-->`);
        ssrRenderList(unref(story).stats, (stat) => {
          _push(`<div class="bg-brand-50 border border-brand-100 rounded-2xl px-5 py-3 text-center min-w-[90px]"><p class="text-2xl font-black text-navy-900">${ssrInterpolate(stat.value)}</p><p class="text-gray-500 text-xs mt-0.5">${ssrInterpolate(stat.label)}</p></div>`);
        });
        _push(`<!--]--></div></div></div></section><div class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex flex-wrap items-center gap-3 text-sm"><span class="text-gray-400 font-medium">Products used:</span><!--[-->`);
        ssrRenderList(unref(story).products, (product) => {
          _push(`<span class="px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-200 font-semibold text-xs">${ssrInterpolate(product)}</span>`);
        });
        _push(`<!--]--></div></div></div><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-14"><article class="flex-1 max-w-2xl"><div class="mb-12"><h2 class="text-2xl font-black text-navy-900 mb-4">Overview</h2><p class="text-gray-600 leading-relaxed text-lg">${ssrInterpolate(unref(story).overview)}</p></div><div class="mb-12"><h2 class="text-2xl font-black text-navy-900 mb-4">The Challenge</h2><p class="text-gray-600 leading-relaxed">${ssrInterpolate(unref(story).challenge)}</p></div><div class="mb-12"><h2 class="text-2xl font-black text-navy-900 mb-4">The Solution</h2><p class="text-gray-600 leading-relaxed mb-6">${ssrInterpolate(unref(story).solution)}</p><ul class="space-y-3"><!--[-->`);
        ssrRenderList(unref(story).solutionPoints, (point) => {
          _push(`<li class="flex items-start gap-3"><div class="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-3 h-3 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><span class="text-gray-700 text-sm leading-relaxed">${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul></div><blockquote class="border-l-4 border-brand-600 pl-6 py-2 mb-12 bg-brand-50 rounded-r-2xl pr-6"><p class="text-lg font-semibold text-navy-900 italic leading-relaxed mb-3">&quot;${ssrInterpolate(unref(story).quote)}&quot;</p><footer class="text-sm text-gray-500"><span class="font-bold text-gray-700">${ssrInterpolate(unref(story).author)}</span> · ${ssrInterpolate(unref(story).role)}, ${ssrInterpolate(unref(story).company)}</footer></blockquote><div class="mb-12"><h2 class="text-2xl font-black text-navy-900 mb-4">The Results</h2><p class="text-gray-600 leading-relaxed mb-6">${ssrInterpolate(unref(story).results)}</p></div></article><aside class="lg:w-80 space-y-6 flex-shrink-0"><div class="card"><h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">About ${ssrInterpolate(unref(story).company)}</h3><div class="space-y-3"><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Industry</span><span class="text-xs font-semibold text-navy-900">${ssrInterpolate(unref(story).industry)}</span></div><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Location</span><span class="text-xs font-semibold text-navy-900">${ssrInterpolate(unref(story).location)}</span></div><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Company size</span><span class="text-xs font-semibold text-navy-900">${ssrInterpolate(unref(story).size)}</span></div><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Founded</span><span class="text-xs font-semibold text-navy-900">${ssrInterpolate(unref(story).founded)}</span></div></div></div><div class="bg-brand-50 border border-brand-100 rounded-2xl p-6"><h3 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Key Results</h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(story).stats, (stat) => {
          _push(`<div class="flex items-center justify-between border-b border-brand-100 pb-4 last:border-0 last:pb-0"><span class="text-gray-600 text-sm">${ssrInterpolate(stat.label)}</span><span class="text-navy-900 font-black text-lg">${ssrInterpolate(stat.value)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="card"><h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Altisry Products Used</h3><div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(story).products, (product) => {
          _push(`<div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-50 border border-brand-100"><div class="w-2 h-2 rounded-full bg-brand-600 flex-shrink-0"></div><span class="text-sm font-semibold text-brand-700">${ssrInterpolate(product)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-brand-600 rounded-2xl p-6 text-white"><h3 class="font-bold text-lg mb-2">Get similar results</h3><p class="text-white/70 text-sm mb-5">Talk to our team about how we can help your business.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "block w-full text-center bg-white text-brand-600 font-bold text-sm py-2.5 rounded-xl hover:bg-brand-50 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact sales `);
            } else {
              return [
                createTextVNode(" Contact sales ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></aside></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between mb-10"><h2 class="text-2xl font-black text-navy-900">More success stories</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/company/success-stories",
          class: "text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View all <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" View all "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 group-hover:translate-x-1 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(relatedStories), (related) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: related.company,
            to: related.href,
            class: "group card hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center gap-3 mb-4"${_scopeId}><div class="${ssrRenderClass([related.avatarBg, "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0"])}"${_scopeId}>${ssrInterpolate(related.abbr)}</div><div${_scopeId}><p class="font-bold text-navy-900 text-sm"${_scopeId}>${ssrInterpolate(related.company)}</p><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(related.industry)}</p></div></div><p class="text-gray-600 text-sm italic leading-relaxed mb-4"${_scopeId}>&quot;${ssrInterpolate(related.quote)}&quot;</p><div class="flex items-center gap-2"${_scopeId}><p class="text-2xl font-black text-brand-600"${_scopeId}>${ssrInterpolate(related.highlight.value)}</p><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(related.highlight.label)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                    createVNode("div", {
                      class: ["w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0", related.avatarBg]
                    }, toDisplayString(related.abbr), 3),
                    createVNode("div", null, [
                      createVNode("p", { class: "font-bold text-navy-900 text-sm" }, toDisplayString(related.company), 1),
                      createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(related.industry), 1)
                    ])
                  ]),
                  createVNode("p", { class: "text-gray-600 text-sm italic leading-relaxed mb-4" }, '"' + toDisplayString(related.quote) + '"', 1),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("p", { class: "text-2xl font-black text-brand-600" }, toDisplayString(related.highlight.value), 1),
                    createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(related.highlight.label), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
        _push(ssrRenderComponent(_component_CtaBanner, {
          title: "Ready to write your own success story?",
          subtitle: "Join 300+ companies already building with Altisry's open banking platform."
        }, null, _parent));
        _push(`</main>`);
        _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
        _push(`<main class="min-h-screen flex items-center justify-center bg-white"><div class="text-center px-4"><p class="text-7xl font-black text-brand-100 mb-4">404</p><h1 class="text-2xl font-bold text-navy-900 mb-3">Story not found</h1><p class="text-gray-500 mb-8">We couldn&#39;t find this case study.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/company/success-stories",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` All success stories `);
            } else {
              return [
                createTextVNode(" All success stories ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></main>`);
        _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/success-stories/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-C21LOqcG.js.map
