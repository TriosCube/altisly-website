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
  __name: "pay-by-bank",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Pay by Bank | Altisry Products",
      description: "Account-to-account payments via open banking. Instant, secure, and up to 10x cheaper than card payments."
    });
    const stats = [
      { value: "0.2%", label: "Typical transaction fee" },
      { value: "Instant", label: "Settlement" },
      { value: "99.5%", label: "Payment success rate" },
      { value: "0", label: "Chargeback risk" }
    ];
    const features = [
      {
        title: "Instant A2A payments",
        description: "Money moves directly from payer to payee bank account \u2014 no intermediaries, no delays.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600"
      },
      {
        title: "Embedded checkout",
        description: "Drop our pre-built payment UI into your checkout flow with a few lines of code.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "Variable recurring payments",
        description: "Set up subscription and recurring payment mandates with flexible amounts.",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Bulk payments",
        description: "Send hundreds of payouts simultaneously \u2014 for payroll, refunds, or supplier payments.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Payment status webhooks",
        description: "Real-time notifications when payments are initiated, cleared, or fail.",
        icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      },
      {
        title: "Strong authentication",
        description: "Every payment is authorised by the customer directly in their bank app \u2014 no card details required.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
      }
    ];
    const comparison = [
      { method: "Visa / Mastercard", fee: "1.5 \u2013 3%", settlement: "2\u20133 days", chargebacks: "High risk", highlight: false },
      { method: "PayPal", fee: "2.9% + \u20AC0.30", settlement: "1\u20133 days", chargebacks: "Medium risk", highlight: false },
      { method: "Altisry Pay by Bank", fee: "~0.2%", settlement: "Instant", chargebacks: "None", highlight: true },
      { method: "SEPA Direct Debit", fee: "0.2\u20130.5%", settlement: "1\u20135 days", chargebacks: "Medium risk", highlight: false }
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
        tag: "Pay by Bank",
        title: "Pay with any bank from Europe & UK",
        description: "Add a lower-cost, higher-conversion payment method to your platform. Account-to-account payments with open banking \u2014 instant, secure, and up to 10x cheaper than cards.",
        "parent-label": "Products",
        "parent-href": "/products"
      }, {
        cta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/get-started",
              class: "btn-primary text-base px-8 py-4"
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
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              class: "btn-outline text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact sales`);
                } else {
                  return [
                    createTextVNode("Contact sales")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/get-started",
                class: "btn-primary text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Get API keys")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/contact",
                class: "btn-outline text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Contact sales")
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
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Features</p><h2 class="section-title mb-5">Payments built for the modern web</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="card hover:shadow-md hover:border-brand-400 transition-all"><div class="${ssrRenderClass([feature.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-4"])}"><svg class="${ssrRenderClass([feature.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", feature.icon)}></path></svg></div><h3 class="text-base font-bold text-navy-900 mb-2">${ssrInterpolate(feature.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><p class="section-label">Cost comparison</p><h2 class="section-title mb-5">Keep more of every transaction</h2></div><div class="overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-gray-200"><th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">Payment method</th><th class="text-center py-3 px-4 text-sm font-semibold text-gray-600">Typical fee</th><th class="text-center py-3 px-4 text-sm font-semibold text-gray-600">Settlement</th><th class="text-center py-3 px-4 text-sm font-semibold text-gray-600">Chargebacks</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(comparison, (row) => {
        _push(`<tr class="${ssrRenderClass(row.highlight ? "bg-brand-600 text-white rounded-xl" : "border-b border-gray-100")}"><td class="${ssrRenderClass([row.highlight ? "text-white rounded-l-xl" : "text-navy-900", "py-4 px-4 font-semibold text-sm"])}">${ssrInterpolate(row.method)}</td><td class="${ssrRenderClass([row.highlight ? "text-white" : "text-gray-600", "py-4 px-4 text-center text-sm"])}">${ssrInterpolate(row.fee)}</td><td class="${ssrRenderClass([row.highlight ? "text-white" : "text-gray-600", "py-4 px-4 text-center text-sm"])}">${ssrInterpolate(row.settlement)}</td><td class="${ssrRenderClass([row.highlight ? "text-white rounded-r-xl" : "text-gray-600", "py-4 px-4 text-center text-sm"])}">${ssrInterpolate(row.chargebacks)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Start accepting open banking payments",
        subtitle: "Lower fees. Faster settlement. Better conversion. Get started today."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/pay-by-bank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pay-by-bank-CDqfPBMQ.mjs.map
