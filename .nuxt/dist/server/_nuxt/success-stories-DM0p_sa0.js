import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$3, a as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$2 } from "./CtaBanner-4dh4BuSJ.js";
import { defineComponent, ref, computed, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/hookable/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/defu/dist/defu.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ofetch/dist/node.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/unctx/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "success-stories",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Success Stories | Altisry",
      description: "See how 300+ companies use Altisry to build the future of financial services."
    });
    const activeFilter = ref("All");
    const filters = ["All", "Lending", "Banking", "E-commerce", "Treasury", "Automotive", "Compliance"];
    const globalStats = [
      { value: "300+", label: "Companies worldwide" },
      { value: "€2B+", label: "Payments processed" },
      { value: "50+", label: "Countries live" },
      { value: "99.9%", label: "Average uptime SLA" }
    ];
    const featured = {
      company: "Finom",
      abbr: "FI",
      industry: "Banking",
      product: "Data Aggregation",
      quote: "Altisry helped us connect our customers to every major European bank in under 3 months. The integration was seamless and the support was world-class.",
      author: "Marcus Weber",
      role: "CTO",
      href: "/company/success-stories/finom",
      stats: [
        { value: "3mo", label: "Time to market" },
        { value: "2.4M", label: "Transactions/month" },
        { value: "99.97%", label: "API uptime" }
      ],
      metrics: [
        { label: "Connected accounts", value: "142,800" },
        { label: "Banks integrated", value: "850+" },
        { label: "Countries live", value: "18" },
        { label: "Avg. response time", value: "1.2s" }
      ]
    };
    const allStories = [
      {
        company: "Lendex",
        abbr: "LE",
        industry: "Lending",
        location: "London, UK",
        product: "Data Aggregation",
        quote: "We reduced loan application processing from 5 days to 4 hours. The income verification API is simply incredible.",
        highlight: { value: "94%", label: "Faster decisions", secondary: "40%", secLabel: "Default rate reduction" },
        avatarBg: "bg-green-600",
        tagClass: "bg-green-100 text-green-700",
        href: "/company/success-stories/lendex",
        category: "Lending"
      },
      {
        company: "Pleo",
        abbr: "PL",
        industry: "E-commerce",
        location: "Copenhagen, DK",
        product: "Pay by Bank",
        quote: "Open banking payments cut our transaction fees by 80%. Our customers love the seamless checkout experience.",
        highlight: { value: "80%", label: "Lower fees", secondary: "2.1x", secLabel: "Checkout conversion" },
        avatarBg: "bg-pink-600",
        tagClass: "bg-pink-100 text-pink-700",
        href: "/company/success-stories/pleo",
        category: "E-commerce"
      },
      {
        company: "Mambu",
        abbr: "MA",
        industry: "Banking",
        location: "Berlin, DE",
        product: "Open Banking Compliance",
        quote: "PSD2 compliance used to feel overwhelming. Altisry made us compliant in exactly 4 weeks. No surprises.",
        highlight: { value: "4wks", label: "Time to compliance", secondary: "0", secLabel: "Regulatory findings" },
        avatarBg: "bg-blue-600",
        tagClass: "bg-blue-100 text-blue-700",
        href: "/company/success-stories/mambu",
        category: "Banking"
      },
      {
        company: "Toshl",
        abbr: "TO",
        industry: "Banking",
        location: "Ljubljana, SI",
        product: "Data Aggregation + Enrichment",
        quote: "Our users can now see all their accounts in one place, with every transaction beautifully categorised. Retention went up 35%.",
        highlight: { value: "+35%", label: "User retention", secondary: "5,000+", secLabel: "Banks connected" },
        avatarBg: "bg-teal-600",
        tagClass: "bg-teal-100 text-teal-700",
        href: "/company/success-stories/toshl",
        category: "Banking"
      },
      {
        company: "BudgetBakers",
        abbr: "BB",
        industry: "Banking",
        location: "Prague, CZ",
        product: "Data Enrichment",
        quote: "The ML-powered categorisation is remarkably accurate. It handles edge cases we couldn't solve ourselves in 2 years of work.",
        highlight: { value: "96%", label: "Category accuracy", secondary: "12M", secLabel: "Transactions enriched" },
        avatarBg: "bg-indigo-600",
        tagClass: "bg-indigo-100 text-indigo-700",
        href: "/company/success-stories/budgetbakers",
        category: "Banking"
      },
      {
        company: "Sodexo",
        abbr: "SO",
        industry: "Treasury",
        location: "Paris, FR",
        product: "Data Aggregation",
        quote: "We now have a real-time view of 200+ corporate accounts across 12 countries. Treasury operations transformed overnight.",
        highlight: { value: "200+", label: "Accounts unified", secondary: "12", secLabel: "Countries consolidated" },
        avatarBg: "bg-red-600",
        tagClass: "bg-red-100 text-red-700",
        href: "/company/success-stories/sodexo",
        category: "Treasury"
      },
      {
        company: "CRIF",
        abbr: "CR",
        industry: "Lending",
        location: "Bologna, IT",
        product: "Data Aggregation + Enrichment",
        quote: "The quality of open banking data we get through Altisry has fundamentally changed how we assess credit risk.",
        highlight: { value: "60%", label: "Fraud reduction", secondary: "3min", secLabel: "Credit decision time" },
        avatarBg: "bg-orange-600",
        tagClass: "bg-orange-100 text-orange-700",
        href: "/company/success-stories/crif",
        category: "Lending"
      },
      {
        company: "Finastra",
        abbr: "FN",
        industry: "Banking",
        location: "London, UK",
        product: "Open Banking Compliance",
        quote: "Embedding Altisry's compliance layer into our platform let us offer open banking to 40+ bank clients with a single integration.",
        highlight: { value: "40+", label: "Bank clients served", secondary: "1 API", secLabel: "Single integration" },
        avatarBg: "bg-sky-600",
        tagClass: "bg-sky-100 text-sky-700",
        href: "/company/success-stories/finastra",
        category: "Compliance"
      },
      {
        company: "Odoo",
        abbr: "OD",
        industry: "E-commerce",
        location: "Ghent, BE",
        product: "Pay by Bank",
        quote: "Adding pay-by-bank to our checkout module took one sprint. Our SME customers now save thousands in card fees every month.",
        highlight: { value: "1 sprint", label: "Integration time", secondary: "€850k", secLabel: "Monthly fee savings" },
        avatarBg: "bg-purple-600",
        tagClass: "bg-purple-100 text-purple-700",
        href: "/company/success-stories/odoo",
        category: "E-commerce"
      }
    ];
    const filteredStories = computed(() => {
      if (activeFilter.value === "All") return allStories;
      return allStories.filter((s) => s.category === activeFilter.value);
    });
    const testimonials = [
      {
        quote: "The API documentation is the best I've seen in fintech. We were live in 2 days. No other provider comes close.",
        author: "David Kim",
        role: "Lead Engineer, NeoBank",
        initials: "DK",
        avatarBg: "bg-brand-600"
      },
      {
        quote: "We evaluated 6 open banking providers. Altisry had the best coverage, the fastest support, and the most transparent pricing.",
        author: "Sofia Andersson",
        role: "VP Product, LendTech",
        initials: "SA",
        avatarBg: "bg-green-600"
      },
      {
        quote: "From sandbox to production in under a week. The Altisry team held our hand every step of the way. Exceptional service.",
        author: "Ravi Patel",
        role: "CTO, PayNow",
        initials: "RP",
        avatarBg: "bg-purple-600"
      }
    ];
    const spotlight = [
      {
        value: "87%",
        title: "Faster onboarding",
        description: "Average reduction in onboarding cycle time after replacing manual bank statement collection."
      },
      {
        value: "2.3x",
        title: "Higher payment conversion",
        description: "Merchants that enable pay-by-bank consistently increase successful payment completion."
      },
      {
        value: "42%",
        title: "Lower fraud losses",
        description: "Customers combining aggregation and enrichment detect account anomalies earlier."
      }
    ];
    const launchPlan = [
      {
        phase: "Step 01",
        title: "Discovery",
        description: "Align on target markets, bank coverage, and regulatory requirements.",
        timeline: "Week 1"
      },
      {
        phase: "Step 02",
        title: "Integration",
        description: "Connect APIs, map data models, and configure environments with sandbox support.",
        timeline: "Week 2-3"
      },
      {
        phase: "Step 03",
        title: "Validation",
        description: "Run end-to-end payment, account, and risk scenarios before production launch.",
        timeline: "Week 4"
      },
      {
        phase: "Step 04",
        title: "Scale",
        description: "Expand to additional banks and countries with dedicated customer success guidance.",
        timeline: "Week 5+"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_CtaBanner = _sfc_main$2;
      const _component_AppFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2d1ab4d9>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main data-v-2d1ab4d9><section class="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white pt-40 pb-20 md:pt-48 md:pb-24 border-b border-brand-100" data-v-2d1ab4d9><div class="absolute inset-0 opacity-10" data-v-2d1ab4d9><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" data-v-2d1ab4d9><defs data-v-2d1ab4d9><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse" data-v-2d1ab4d9><circle cx="2" cy="2" r="1.5" fill="white" data-v-2d1ab4d9></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" data-v-2d1ab4d9></rect></svg></div><div class="absolute top-0 right-1/3 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 -translate-y-1/2" data-v-2d1ab4d9></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-v-2d1ab4d9><p class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-sm font-medium mb-6" data-v-2d1ab4d9><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" data-v-2d1ab4d9></span> 300+ companies worldwide </p><h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-navy-900 leading-tight tracking-tight mb-6" data-v-2d1ab4d9> Success Stories </h1><p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-v-2d1ab4d9> See how companies across industries are using Altisry to build the future of financial services. </p></div></section><section class="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><div class="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(filters, (filter) => {
        _push(`<button class="${ssrRenderClass([activeFilter.value === filter ? "bg-brand-600 text-white shadow-sm" : "text-gray-600 hover:text-navy-900 hover:bg-gray-100", "flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"])}" data-v-2d1ab4d9>${ssrInterpolate(filter)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="py-10 bg-brand-50 border-b border-brand-100" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(globalStats, (stat) => {
        _push(`<div data-v-2d1ab4d9><p class="text-3xl md:text-4xl font-black text-navy-900" data-v-2d1ab4d9>${ssrInterpolate(stat.value)}</p><p class="text-sm text-gray-500 mt-1" data-v-2d1ab4d9>${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-white" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><p class="section-label mb-6" data-v-2d1ab4d9>Featured</p><div class="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm" data-v-2d1ab4d9><div class="flex flex-col lg:flex-row" data-v-2d1ab4d9><div class="flex-1 p-10 md:p-14 flex flex-col justify-between" data-v-2d1ab4d9><div data-v-2d1ab4d9><div class="flex items-center gap-4 mb-8" data-v-2d1ab4d9><div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl font-black text-brand-600 flex-shrink-0" data-v-2d1ab4d9>${ssrInterpolate(featured.abbr)}</div><div data-v-2d1ab4d9><p class="text-navy-900 font-bold text-lg" data-v-2d1ab4d9>${ssrInterpolate(featured.company)}</p><div class="flex items-center gap-2 mt-1" data-v-2d1ab4d9><span class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200" data-v-2d1ab4d9>${ssrInterpolate(featured.industry)}</span><span class="text-xs bg-brand-600/30 text-brand-300 px-2.5 py-1 rounded-full border border-brand-500/30" data-v-2d1ab4d9>${ssrInterpolate(featured.product)}</span></div></div></div><blockquote class="mb-8" data-v-2d1ab4d9><p class="text-2xl md:text-3xl font-bold text-navy-900 leading-snug mb-6" data-v-2d1ab4d9> &quot;${ssrInterpolate(featured.quote)}&quot; </p><footer data-v-2d1ab4d9><p class="text-navy-900 font-semibold" data-v-2d1ab4d9>${ssrInterpolate(featured.author)}</p><p class="text-gray-500 text-sm" data-v-2d1ab4d9>${ssrInterpolate(featured.role)}, ${ssrInterpolate(featured.company)}</p></footer></blockquote></div><div class="grid grid-cols-3 gap-5 mb-8" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(featured.stats, (stat) => {
        _push(`<div class="bg-brand-50 border border-brand-100 rounded-2xl p-4" data-v-2d1ab4d9><p class="text-3xl font-black text-navy-900" data-v-2d1ab4d9>${ssrInterpolate(stat.value)}</p><p class="text-gray-500 text-xs mt-1" data-v-2d1ab4d9>${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: featured.href,
        class: "inline-flex items-center gap-2 btn-primary self-start text-base px-7 py-3.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read case study <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2d1ab4d9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-2d1ab4d9${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Read case study "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2.5",
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:w-[380px] bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center p-10" data-v-2d1ab4d9><div class="bg-white border border-gray-200 rounded-2xl p-6 w-full" data-v-2d1ab4d9><p class="text-gray-500 text-xs font-medium uppercase tracking-wider mb-4" data-v-2d1ab4d9>Live dashboard</p><div class="space-y-3" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(featured.metrics, (metric) => {
        _push(`<div class="flex items-center justify-between" data-v-2d1ab4d9><span class="text-gray-600 text-sm" data-v-2d1ab4d9>${ssrInterpolate(metric.label)}</span><span class="text-navy-900 font-bold text-sm" data-v-2d1ab4d9>${ssrInterpolate(metric.value)}</span></div>`);
      });
      _push(`<!--]--></div><div class="mt-5 pt-4 border-t border-gray-100" data-v-2d1ab4d9><div class="flex items-center gap-2" data-v-2d1ab4d9><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" data-v-2d1ab4d9></span><span class="text-green-400 text-xs font-semibold" data-v-2d1ab4d9>All systems operational</span></div></div></div></div></div></div></div></section><section class="pb-20 bg-white" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><p class="section-label mb-8" data-v-2d1ab4d9>All stories</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(filteredStories.value, (story) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: story.company,
          to: story.href,
          class: "group card hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300 flex flex-col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-start justify-between mb-5" data-v-2d1ab4d9${_scopeId}><div class="flex items-center gap-3" data-v-2d1ab4d9${_scopeId}><div class="${ssrRenderClass([story.avatarBg, "w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black text-white flex-shrink-0"])}" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.abbr)}</div><div data-v-2d1ab4d9${_scopeId}><p class="font-bold text-navy-900 text-sm" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.company)}</p><p class="text-xs text-gray-500" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.location)}</p></div></div><span class="${ssrRenderClass([story.tagClass, "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0"])}" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.industry)}</span></div><p class="text-gray-700 text-sm leading-relaxed flex-1 mb-5 italic" data-v-2d1ab4d9${_scopeId}> &quot;${ssrInterpolate(story.quote)}&quot; </p><div class="bg-brand-50 rounded-xl p-4 mb-5 flex items-center gap-4 border border-brand-100" data-v-2d1ab4d9${_scopeId}><div data-v-2d1ab4d9${_scopeId}><p class="text-2xl font-black text-brand-600" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.highlight.value)}</p><p class="text-xs text-gray-500 mt-0.5" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.highlight.label)}</p></div><div class="w-px h-10 bg-brand-200" data-v-2d1ab4d9${_scopeId}></div><div data-v-2d1ab4d9${_scopeId}><p class="text-sm font-semibold text-navy-900" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.highlight.secondary)}</p><p class="text-xs text-gray-500 mt-0.5" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.highlight.secLabel)}</p></div></div><div class="flex items-center justify-between" data-v-2d1ab4d9${_scopeId}><span class="text-xs text-gray-500 font-medium" data-v-2d1ab4d9${_scopeId}>${ssrInterpolate(story.product)}</span><span class="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" data-v-2d1ab4d9${_scopeId}> Read story <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2d1ab4d9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-2d1ab4d9${_scopeId}></path></svg></span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-start justify-between mb-5" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("div", {
                      class: ["w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black text-white flex-shrink-0", story.avatarBg]
                    }, toDisplayString(story.abbr), 3),
                    createVNode("div", null, [
                      createVNode("p", { class: "font-bold text-navy-900 text-sm" }, toDisplayString(story.company), 1),
                      createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(story.location), 1)
                    ])
                  ]),
                  createVNode("span", {
                    class: ["text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0", story.tagClass]
                  }, toDisplayString(story.industry), 3)
                ]),
                createVNode("p", { class: "text-gray-700 text-sm leading-relaxed flex-1 mb-5 italic" }, ' "' + toDisplayString(story.quote) + '" ', 1),
                createVNode("div", { class: "bg-brand-50 rounded-xl p-4 mb-5 flex items-center gap-4 border border-brand-100" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-2xl font-black text-brand-600" }, toDisplayString(story.highlight.value), 1),
                    createVNode("p", { class: "text-xs text-gray-500 mt-0.5" }, toDisplayString(story.highlight.label), 1)
                  ]),
                  createVNode("div", { class: "w-px h-10 bg-brand-200" }),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-sm font-semibold text-navy-900" }, toDisplayString(story.highlight.secondary), 1),
                    createVNode("p", { class: "text-xs text-gray-500 mt-0.5" }, toDisplayString(story.highlight.secLabel), 1)
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("span", { class: "text-xs text-gray-500 font-medium" }, toDisplayString(story.product), 1),
                  createVNode("span", { class: "text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                    createTextVNode(" Read story "),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4",
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
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><div class="text-center mb-12" data-v-2d1ab4d9><p class="section-label" data-v-2d1ab4d9>What they say</p><h2 class="section-title" data-v-2d1ab4d9>Trusted by leaders across finance</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(testimonials, (testimonial) => {
        _push(`<div class="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-brand-300 transition-all" data-v-2d1ab4d9><div class="flex gap-1 mb-4" data-v-2d1ab4d9><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-v-2d1ab4d9><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-2d1ab4d9></path></svg>`);
        });
        _push(`<!--]--></div><p class="text-gray-700 text-sm leading-relaxed mb-5 italic" data-v-2d1ab4d9>&quot;${ssrInterpolate(testimonial.quote)}&quot;</p><div class="flex items-center gap-3" data-v-2d1ab4d9><div class="${ssrRenderClass([testimonial.avatarBg, "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"])}" data-v-2d1ab4d9>${ssrInterpolate(testimonial.initials)}</div><div data-v-2d1ab4d9><p class="text-sm font-bold text-navy-900" data-v-2d1ab4d9>${ssrInterpolate(testimonial.author)}</p><p class="text-xs text-gray-500" data-v-2d1ab4d9>${ssrInterpolate(testimonial.role)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white border-y border-gray-100" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><div class="text-center mb-12" data-v-2d1ab4d9><p class="section-label" data-v-2d1ab4d9>Customer Spotlight</p><h2 class="section-title" data-v-2d1ab4d9>Impact that compounds over time</h2><p class="section-subtitle mx-auto text-center mt-4" data-v-2d1ab4d9> Teams that adopt Altisry improve onboarding speed, payment conversion, and risk visibility in one platform. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(spotlight, (item) => {
        _push(`<div class="card hover:shadow-lg hover:border-brand-300 transition-all" data-v-2d1ab4d9><p class="text-4xl font-black text-brand-600 mb-3" data-v-2d1ab4d9>${ssrInterpolate(item.value)}</p><p class="text-base font-bold text-navy-900 mb-2" data-v-2d1ab4d9>${ssrInterpolate(item.title)}</p><p class="text-sm text-gray-600 leading-relaxed" data-v-2d1ab4d9>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white border-y border-gray-100" data-v-2d1ab4d9><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2d1ab4d9><div class="text-center mb-12" data-v-2d1ab4d9><p class="section-label text-brand-300" data-v-2d1ab4d9>How Teams Launch</p><h2 class="text-3xl md:text-4xl font-bold text-navy-900" data-v-2d1ab4d9>A proven implementation path</h2></div><div class="grid grid-cols-1 md:grid-cols-4 gap-5" data-v-2d1ab4d9><!--[-->`);
      ssrRenderList(launchPlan, (step) => {
        _push(`<div class="rounded-2xl border border-brand-100 bg-brand-50 p-6" data-v-2d1ab4d9><p class="text-xs font-bold uppercase tracking-wider text-brand-300 mb-3" data-v-2d1ab4d9>${ssrInterpolate(step.phase)}</p><p class="text-lg font-bold text-navy-900 mb-2" data-v-2d1ab4d9>${ssrInterpolate(step.title)}</p><p class="text-sm text-gray-600 leading-relaxed" data-v-2d1ab4d9>${ssrInterpolate(step.description)}</p><p class="text-xs text-gray-500 mt-4" data-v-2d1ab4d9>${ssrInterpolate(step.timeline)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Ready to write your own success story?",
        subtitle: "Join 300+ companies already building with Altisry's open banking platform."
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/success-stories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const successStories = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d1ab4d9"]]);
export {
  successStories as default
};
//# sourceMappingURL=success-stories-DM0p_sa0.js.map
