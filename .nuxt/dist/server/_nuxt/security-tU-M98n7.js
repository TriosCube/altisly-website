import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$3 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Security | Altisry",
      description: "ISO 27001-certified and PSD2-licensed. Altisry employs the highest international security standards."
    });
    const certifications = [
      { badge: "🛡️", name: "ISO 27001", description: "Information security management certification" },
      { badge: "🏛️", name: "PSD2 Licensed", description: "FCA authorized payment institution" },
      { badge: "🔐", name: "eIDAS Compliant", description: "Electronic identification and trust services" },
      { badge: "✅", name: "SOC 2 Type II", description: "Annual third-party security audit" }
    ];
    const measures = [
      {
        title: "End-to-end encryption",
        description: "All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "Zero data storage",
        description: "We never store sensitive financial credentials. All authentication is handled directly with the bank.",
        icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Multi-factor authentication",
        description: "All staff and API access requires multi-factor authentication. Admin access uses hardware tokens.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Penetration testing",
        description: "Annual penetration testing by accredited third-party security firms. All findings remediated within 30 days.",
        icon: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z",
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
      },
      {
        title: "99.9% uptime SLA",
        description: "Redundant infrastructure across multiple availability zones ensures maximum reliability.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      },
      {
        title: "GDPR compliant",
        description: "Full GDPR compliance with data processing agreements available for all customers. EU data residency options.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_PageHero = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Security",
        title: "Guarantee of high security",
        description: "We are ISO 27001-certified and PSD2-licensed, employing the highest international security standards to safely access financial data and initiate payments.",
        "parent-label": "Company",
        "parent-href": "/company"
      }, null, _parent));
      _push(`<section class="py-16 bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 md:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(certifications, (cert) => {
        _push(`<div class="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-brand-400 hover:shadow-sm transition-all"><div class="text-4xl mb-3">${ssrInterpolate(cert.badge)}</div><p class="font-bold text-navy-900 text-sm">${ssrInterpolate(cert.name)}</p><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(cert.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">How we protect you</p><h2 class="section-title mb-5">Security at every layer</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(measures, (measure) => {
        _push(`<div class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all"><div class="${ssrRenderClass([measure.iconBg, "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"])}"><svg class="${ssrRenderClass([measure.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", measure.icon)}></path></svg></div><div><h3 class="font-bold text-navy-900 mb-2">${ssrInterpolate(measure.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(measure.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><p class="section-label">Responsible Disclosure</p><h2 class="section-title mb-5">Found a vulnerability?</h2><p class="section-subtitle mx-auto text-center mb-8"> We take security reports seriously. If you&#39;ve discovered a potential security issue, please report it responsibly and we&#39;ll respond within 24 hours. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary text-base px-8 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Report a vulnerability`);
          } else {
            return [
              createTextVNode("Report a vulnerability")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=security-tU-M98n7.js.map
