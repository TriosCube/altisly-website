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
  __name: "mobile-sca",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Mobile SCA | Altisry Products",
      description: "PSD2-compliant Strong Customer Authentication for mobile apps. Secure, elegant, and easy to integrate."
    });
    const factors = [
      { emoji: "\u{1F511}", title: "Knowledge", examples: "PIN, password, passphrase" },
      { emoji: "\u{1F4F1}", title: "Possession", examples: "Mobile device, hardware token" },
      { emoji: "\u{1F446}", title: "Inherence", examples: "Fingerprint, Face ID" }
    ];
    const features = [
      {
        title: "Biometric authentication",
        description: "Leverage Face ID and fingerprint sensors for a frictionless authentication experience.",
        icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "Push notification approval",
        description: "Send secure push notifications to the customer's registered device for out-of-band approval.",
        icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Dynamic linking",
        description: "Every authentication code is uniquely linked to the specific transaction amount and payee \u2014 as required by PSD2.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Device binding",
        description: "Securely bind the SCA functionality to a specific physical device using hardware-backed key storage.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
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
        tag: "Mobile SCA",
        title: "Create a stronger level of security with mobile SCA",
        description: "PSD2-compliant Strong Customer Authentication for mobile apps. Deliver a seamless, secure authentication experience that meets regulatory requirements without sacrificing UX.",
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
              class: "btn-outline-white text-base px-8 py-4"
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
                class: "btn-outline-white text-base px-8 py-4"
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
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 items-center"><div class="flex-1"><p class="section-label">Mobile SCA</p><h2 class="section-title mb-5">Authentication that builds trust</h2><p class="section-subtitle mb-8"> Strong Customer Authentication requires at least 2 of 3 factors: something you know, something you have, and something you are. Our Mobile SCA SDK delivers all three \u2014 securely and elegantly. </p><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(factors, (factor) => {
        _push(`<div class="bg-brand-50 rounded-xl p-4 text-center border border-brand-100"><div class="text-2xl mb-2">${ssrInterpolate(factor.emoji)}</div><p class="font-bold text-navy-900 text-sm">${ssrInterpolate(factor.title)}</p><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(factor.examples)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1"><div class="grid grid-cols-1 gap-5"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-brand-400 transition-all"><div class="${ssrRenderClass([feature.iconBg, "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"])}"><svg class="${ssrRenderClass([feature.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", feature.icon)}></path></svg></div><div><h3 class="font-bold text-navy-900 mb-1 text-sm">${ssrInterpolate(feature.title)}</h3><p class="text-xs text-gray-600 leading-relaxed">${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Add secure SCA to your mobile app today",
        subtitle: "Compliant, elegant, and ready to integrate in days."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/mobile-sca.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mobile-sca-DLh63eOI.mjs.map
