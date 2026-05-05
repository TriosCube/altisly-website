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
  __name: "banking",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Banking | Altisry Open Banking",
      description: "Move beyond traditional banking. Unlock new revenue streams and deliver better customer experiences through open banking."
    });
    const stats = [
      { value: "60s", label: "KYC verification time" },
      { value: "40%", label: "Lower onboarding cost" },
      { value: "5,000+", label: "Connected institutions" },
      { value: "99.9%", label: "API uptime SLA" }
    ];
    const features = [
      {
        title: "Streamlined KYC & onboarding",
        description: "Replace manual identity checks with instant bank-verified data. Onboard customers in minutes, not days.",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "Personal Finance Management",
        description: "Give customers a 360\xB0 view of all their accounts with categorised transactions and spending insights.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Multi-banking services",
        description: "Allow customers to view and manage accounts from multiple banks in one unified interface.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Payment Initiation (PIS)",
        description: "Enable frictionless account-to-account payments directly from your banking app.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      }
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
        tag: "Banking",
        title: "Move beyond traditional banking",
        description: "Unlock new revenue streams, reduce costs, and deliver a better customer experience through the power of open banking.",
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
              class: "btn-outline-white text-base px-8 py-4"
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
                class: "btn-outline-white text-base px-8 py-4"
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
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Capabilities</p><h2 class="section-title mb-5">Built for modern banks</h2><p class="section-subtitle mx-auto text-center"> From onboarding to payments and PFM, Altisry gives banks a complete open banking toolkit. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all"><div class="${ssrRenderClass([feature.iconBg, "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"])}"><svg class="${ssrRenderClass([feature.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", feature.icon)}></path></svg></div><div><h3 class="font-bold text-navy-900 mb-2">${ssrInterpolate(feature.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Transform your banking experience",
        subtitle: "Give your customers the modern, connected banking experience they expect."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/use-cases/banking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=banking-BqeI1JhJ.mjs.map
