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
  __name: "lending",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Lending | Altisry Open Banking",
      description: "Unlock real-time customer bank data for faster onboarding, smarter credit decisions, and effortless repayments."
    });
    const stats = [
      { value: "3 min", label: "Average credit decision time" },
      { value: "90%", label: "Reduction in manual checks" },
      { value: "5,000+", label: "Connected banks" },
      { value: "50+", label: "Countries covered" }
    ];
    const benefits = [
      {
        title: "Instant income verification",
        description: "Verify applicant income directly from bank statements \u2014 no payslips, no delays.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        title: "Credit risk assessment",
        description: "Analyse 12 months of transaction history to accurately score creditworthiness.",
        icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
      },
      {
        title: "Automated affordability checks",
        description: "Analyse spending patterns to determine true affordability in real time.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        title: "Fraud detection",
        description: "Detect inconsistencies and synthetic identities with AI-powered transaction analysis.",
        icon: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
      },
      {
        title: "Open banking repayments",
        description: "Enable instant repayments directly from borrower bank accounts via open banking.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600"
      },
      {
        title: "Streamlined onboarding",
        description: "Replace lengthy paper forms with instant bank-verified data for faster KYC.",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600"
      }
    ];
    const steps = [
      { title: "Customer connects bank", desc: "Applicant authenticates securely with their bank via open banking." },
      { title: "Data retrieved instantly", desc: "Transaction history and account data pulled in real time." },
      { title: "AI analysis runs", desc: "Income, risk, and affordability assessed automatically." },
      { title: "Decision made", desc: "Lender approves or declines in minutes, not days." }
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
        tag: "Lending",
        title: "Real-time bank data for right lending decisions",
        description: "Unlock real-time customer bank data for faster onboarding, smarter credit decisions, and effortless repayments. Transform your lending business with open banking.",
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
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">What you get</p><h2 class="section-title mb-5">Everything you need to lend smarter</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="card hover:shadow-md hover:border-brand-400 transition-all"><div class="${ssrRenderClass([benefit.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-4"])}"><svg class="${ssrRenderClass([benefit.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", benefit.icon)}></path></svg></div><h3 class="text-base font-bold text-navy-900 mb-2">${ssrInterpolate(benefit.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(benefit.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">How it works</p><h2 class="section-title mb-5">From application to approval in minutes</h2></div><div class="grid grid-cols-1 md:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="relative text-center"><div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">${ssrInterpolate(i + 1)}</div><h3 class="font-bold text-navy-900 mb-2">${ssrInterpolate(step.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(step.desc)}</p>`);
        if (i < steps.length - 1) {
          _push(`<div class="hidden md:block absolute top-6 left-3/4 w-1/2 h-0.5 bg-brand-200"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Start making smarter lending decisions",
        subtitle: "Connect to real-time bank data and transform your underwriting process."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/use-cases/lending.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lending-DLYpUHYS.mjs.map
