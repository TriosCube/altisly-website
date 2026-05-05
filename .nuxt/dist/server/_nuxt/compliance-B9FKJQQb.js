import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$4 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { _ as _sfc_main$3 } from "./CtaBanner-4dh4BuSJ.js";
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "compliance",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Open Banking Compliance | Altisry Products",
      description: "Full-stack PSD2/PSD3 compliance solution for banks and EMIs. Go live in 1 month."
    });
    const included = [
      {
        title: "PSD2 & PSD3 API",
        description: "Standards-compliant Open Banking APIs (BERLIN Group, STET, UK OB) built and maintained for you.",
        icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "TPP Portal",
        description: "Self-service portal for Third Party Providers to register, manage consents, and access your APIs.",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Strong Customer Authentication",
        description: "PSD2-compliant SCA flows with support for PUSH, DECOUPLED, and REDIRECT authentication methods.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
      },
      {
        title: "Regulatory Reporting",
        description: "Automated availability and performance reporting to meet NCA requirements without manual effort.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Consent Management",
        description: "End-user consent flows that are compliant, accessible, and customisable to your brand.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      },
      {
        title: "Dedicated support",
        description: "Access to our team of open banking regulatory experts throughout integration and beyond.",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600"
      }
    ];
    const phases = [
      { week: "Week 1", title: "Discovery & scoping", description: "Our compliance team reviews your infrastructure, existing systems, and regulatory obligations to define the integration scope." },
      { week: "Week 2", title: "API setup & configuration", description: "We deploy your dedicated Open Banking API environment and configure authentication methods to match your existing core banking system." },
      { week: "Week 3", title: "Testing & UAT", description: "Thorough testing with sandbox TPPs, edge-case scenario coverage, and user acceptance testing with your team." },
      { week: "Week 4", title: "Go live", description: "Regulatory submission support, production deployment, and monitoring setup. You're live and compliant." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_PageHero = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_CtaBanner = _sfc_main$3;
      const _component_AppFooter = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Open Banking Compliance",
        title: "Become PSD2/PSD3 compliant in 1 month",
        description: "Full-stack open banking compliance solution for banks and EMIs. We handle the regulatory complexity so you can focus on building great products.",
        "parent-label": "Products",
        "parent-href": "/products"
      }, {
        cta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              class: "btn-primary text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Talk to compliance team`);
                } else {
                  return [
                    createTextVNode("Talk to compliance team")
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
                  createTextVNode("Talk to compliance team")
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
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Full-stack solution</p><h2 class="section-title mb-5">Everything included out of the box</h2><p class="section-subtitle mx-auto text-center"> One platform that covers all your open banking compliance obligations — from API infrastructure to regulatory reporting. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(included, (item) => {
        _push(`<div class="card hover:shadow-md hover:border-brand-400 transition-all"><div class="flex items-center gap-3 mb-3"><div class="${ssrRenderClass([item.iconBg, "w-9 h-9 rounded-lg flex items-center justify-center"])}"><svg class="${ssrRenderClass([item.iconColor, "w-4 h-4"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", item.icon)}></path></svg></div><h3 class="font-bold text-navy-900 text-sm">${ssrInterpolate(item.title)}</h3></div><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><p class="section-label">Implementation</p><h2 class="section-title mb-5">Go live in 4 weeks</h2></div><div class="space-y-6"><!--[-->`);
      ssrRenderList(phases, (phase, i) => {
        _push(`<div class="flex gap-5"><div class="flex flex-col items-center"><div class="w-10 h-10 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center flex-shrink-0">${ssrInterpolate(i + 1)}</div>`);
        if (i < phases.length - 1) {
          _push(`<div class="w-0.5 flex-1 bg-brand-200 my-2"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="pb-6"><div class="flex items-center gap-3 mb-2"><h3 class="font-bold text-navy-900">${ssrInterpolate(phase.title)}</h3><span class="text-xs bg-brand-100 text-brand-600 font-semibold px-2.5 py-1 rounded-full">${ssrInterpolate(phase.week)}</span></div><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(phase.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Start your compliance journey today",
        subtitle: "Join 100+ banks and EMIs already using Altisry for open banking compliance."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/compliance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=compliance-B9FKJQQb.js.map
