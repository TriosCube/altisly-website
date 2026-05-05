import { u as useSeoMeta, b as _sfc_main$3, _ as __nuxt_component_2, c as _sfc_main$2$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-8s8qPLx-.mjs';
import { _ as _sfc_main$2 } from './CtaBanner-4dh4BuSJ.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'fs';
import 'path';
import 'crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'vue-router';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ecommerce",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "E-commerce & Payments | Altisry Open Banking",
      description: "Reinvent how your customers pay, verify, and shop with open banking."
    });
    const stats = [
      { value: "0.2%", label: "Transaction fees vs 1.5\u20133% card fees" },
      { value: "< 3s", label: "Payment completion time" },
      { value: "99.5%", label: "Payment success rate" },
      { value: "2x", label: "Higher checkout conversion" }
    ];
    const benefits = [
      {
        title: "Card-free checkout",
        description: "Let customers pay directly from their bank account \u2014 no card numbers, no CVV, no friction.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "Instant refunds",
        description: "Send refunds directly to customer bank accounts in seconds, not 5\u201310 business days.",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Real-time reconciliation",
        description: "Match every payment to an order instantly with rich payment data and references.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Buyer verification",
        description: "Verify buyer identity and bank account ownership before completing the transaction.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      },
      {
        title: "Lower fees",
        description: "Replace expensive card rails with open banking payments at a fraction of the cost.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600"
      },
      {
        title: "Global expansion",
        description: "Expand your payment reach across 50+ countries with compliance built in.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600"
      }
    ];
    const traditional = [
      "Card fees of 1.5\u20133% per transaction",
      "Refunds take 5\u201310 business days",
      "High chargeback risk and fraud exposure",
      "Manual reconciliation required",
      "PCI DSS compliance overhead"
    ];
    const openBanking = [
      "Fees under 0.2% per transaction",
      "Instant refunds directly to bank accounts",
      "Near-zero chargeback risk",
      "Automated real-time reconciliation",
      "No card data stored \u2014 zero PCI scope"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_CtaBanner = _sfc_main$2;
      const _component_AppFooter = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "E-commerce & Payments",
        title: "Reinvent how your customers pay, verify, and shop",
        description: "From frictionless checkout to real-time buyer verification and instant refunds, open banking is reshaping e-commerce.",
        "parent-label": "Use Cases",
        "parent-href": "/use-cases"
      }, {
        cta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              class: "btn-primary text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Talk to us`);
                } else {
                  return [
                    createTextVNode("Talk to us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/get-started",
              class: "btn-outline text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get API keys`);
                } else {
                  return [
                    createTextVNode("Get API keys")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/contact",
                class: "btn-primary text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Talk to us")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/get-started",
                class: "btn-outline text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Get API keys")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="py-12 bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 md:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="text-center"><p class="text-3xl md:text-4xl font-bold text-brand-600 mb-1">${ssrInterpolate(stat.value)}</p><p class="text-sm text-gray-500">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Benefits</p><h2 class="section-title mb-5">Why e-commerce loves open banking</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="card hover:shadow-md hover:border-brand-400 transition-all"><div class="${ssrRenderClass([benefit.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-4"])}"><svg class="${ssrRenderClass([benefit.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", benefit.icon)}></path></svg></div><h3 class="text-base font-bold text-navy-900 mb-2">${ssrInterpolate(benefit.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(benefit.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><p class="section-label">Traditional vs Open Banking</p><h2 class="section-title mb-5">The difference is clear</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-gray-100 rounded-2xl p-6"><p class="font-bold text-gray-700 mb-4 flex items-center gap-2"><span class="text-red-500 text-xl">\u2715</span> Traditional card payments </p><ul class="space-y-3"><!--[-->`);
      ssrRenderList(traditional, (item) => {
        _push(`<li class="flex items-start gap-2 text-sm text-gray-600"><span class="text-red-400 font-bold mt-0.5">\u2014</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-brand-600 rounded-2xl p-6"><p class="font-bold text-white mb-4 flex items-center gap-2"><span class="text-green-400 text-xl">\u2713</span> With Altisry open banking </p><ul class="space-y-3"><!--[-->`);
      ssrRenderList(openBanking, (item) => {
        _push(`<li class="flex items-start gap-2 text-sm text-white/90"><span class="text-green-400 font-bold mt-0.5">\u2713</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Revolutionise your checkout experience",
        subtitle: "Add open banking payments to your e-commerce platform and watch conversion rates soar."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/use-cases/ecommerce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ecommerce-BQKvmvrI.mjs.map
