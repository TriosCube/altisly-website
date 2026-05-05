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
  __name: "treasury",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Treasury Management | Altisry Open Banking",
      description: "A 360-degree view of financials for corporates of any size. Unified access to 5,000+ financial institutions."
    });
    const stats = [
      { value: "5,000+", label: "Connected banks" },
      { value: "Real-time", label: "Balance visibility" },
      { value: "50+", label: "Countries" },
      { value: "24/7", label: "Data refresh" }
    ];
    const features = [
      {
        title: "Cash position dashboard",
        description: "Real-time consolidated cash view across all entities and banks.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      },
      {
        title: "Multi-bank payments",
        description: "Initiate payments from any connected bank account, any time.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "FX exposure tracking",
        description: "Monitor multi-currency positions and FX risk in real time.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600"
      },
      {
        title: "Automated reconciliation",
        description: "Match transactions across accounts and entities automatically.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      }
    ];
    const multiEntity = [
      { stat: "200+", title: "Entities supported", desc: "Scale from a single entity to a complex multinational group without configuration changes." },
      { stat: "50+", title: "Countries covered", desc: "Connect banks across Europe, UK, and beyond through a single unified API." },
      { stat: "< 1s", title: "Data latency", desc: "Real-time balance and transaction data ensures your decisions are always based on current figures." }
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
        tag: "Treasury Management",
        title: "A 360-degree view of financials for corporates of any size",
        description: "Transform your treasury strategy with unified access to account data from over 5,000 financial institutions worldwide \u2014 across multiple banks and regions.",
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
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-16 items-start"><div class="lg:w-2/5"><p class="section-label">Treasury Platform</p><h2 class="section-title mb-5">All your finances. One platform.</h2><p class="section-subtitle mb-8"> Stop toggling between banking portals. Altisry connects all your entities and banks into a single real-time view \u2014 so your treasury team can act with speed and confidence. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request a demo`);
          } else {
            return [
              createTextVNode("Request a demo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="card hover:shadow-md hover:border-brand-400 transition-all"><div class="${ssrRenderClass([feature.iconBg, "w-10 h-10 rounded-xl flex items-center justify-center mb-3"])}"><svg class="${ssrRenderClass([feature.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", feature.icon)}></path></svg></div><h3 class="font-bold text-navy-900 mb-1.5 text-sm">${ssrInterpolate(feature.title)}</h3><p class="text-xs text-gray-600 leading-relaxed">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="py-20 bg-white border-t border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><p class="section-label">Multi-Entity</p><h2 class="text-3xl md:text-4xl font-bold text-navy-900 mb-5">Manage all your entities in one place</h2><p class="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"> Whether you have 2 or 200 legal entities across multiple countries, Altisry gives your treasury team consolidated visibility and control. </p><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(multiEntity, (point) => {
        _push(`<div class="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-left"><p class="text-3xl font-bold text-brand-600 mb-2">${ssrInterpolate(point.stat)}</p><h3 class="font-bold text-navy-900 mb-2">${ssrInterpolate(point.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(point.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Take control of your corporate treasury",
        subtitle: "Connect all your banks and entities into one real-time financial hub."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/use-cases/treasury.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=treasury-DEibQbZV.mjs.map
