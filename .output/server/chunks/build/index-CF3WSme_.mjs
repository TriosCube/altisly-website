import { a as _export_sfc, b as _sfc_main$3$1, c as _sfc_main$2$1, _ as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$b } from './ContactFormSection-BxCMHRN1.mjs';
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

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const countries = [
      { code: "de", name: "Germany", flag: "\u{1F1E9}\u{1F1EA}" },
      { code: "gb", name: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}" },
      { code: "fr", name: "France", flag: "\u{1F1EB}\u{1F1F7}" },
      { code: "it", name: "Italy", flag: "\u{1F1EE}\u{1F1F9}" },
      { code: "at", name: "Austria", flag: "\u{1F1E6}\u{1F1F9}" },
      { code: "es", name: "Spain", flag: "\u{1F1EA}\u{1F1F8}" }
    ];
    const chartBars = [40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100];
    const connectedBanks = [
      { name: "Deutsche Bank", abbr: "DB", type: "Corporate account", balance: "\u20AC 142,800", color: "bg-[#15c411] text-white" },
      { name: "Barclays", abbr: "BA", type: "Current account", balance: "\u20AC 98,320", color: "bg-[#34d42f] text-white" },
      { name: "BNP Paribas", abbr: "BN", type: "Savings account", balance: "\u20AC 43,800", color: "bg-green-600 text-white" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-[#060809] pt-36 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center" }, _attrs))}><div class="absolute inset-0 opacity-10"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"></rect></svg></div><div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div><div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"><div class="flex-1 text-center lg:text-left"><div class="inline-flex items-center gap-2 mb-8"><a href="#" class="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors group"><span class="px-2 py-0.5 bg-white/15 border border-white/20 rounded text-xs font-bold text-white tracking-wide"> Report </span> State of open banking payments in Europe <svg class="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"> Open Finance.<br> Endless possibilities </h1><p class="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"> Harness the power of open banking. Embrace the future of finance. </p><div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center justify-center px-7 py-4 bg-[#15c411] hover:bg-[#13ad0f] text-white font-semibold rounded-xl transition-colors text-base shadow-lg shadow-[#15c411]/30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact us `);
          } else {
            return [
              createTextVNode(" Contact us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/get-started",
        class: "inline-flex items-center justify-center px-7 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors text-base backdrop-blur-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get API keys `);
          } else {
            return [
              createTextVNode(" Get API keys ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4 justify-center lg:justify-start"><div class="flex items-center gap-1.5"><!--[-->`);
      ssrRenderList(countries.slice(0, 5), (country) => {
        _push(`<span${ssrRenderAttr("title", country.name)} class="text-[28px] leading-none cursor-default hover:scale-110 transition-transform">${ssrInterpolate(country.flag)}</span>`);
      });
      _push(`<!--]--></div><span class="text-white text-sm font-medium">+39 countries</span></div></div><div class="flex-1 w-full max-w-lg lg:max-w-none"><div class="relative"><div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl"><div class="flex items-center justify-between mb-5"><div><p class="text-gray-500 text-xs font-medium uppercase tracking-wider">Total Balance</p><p class="text-navy-900 text-3xl font-bold mt-1">\u20AC 284,920.50</p></div><div class="w-10 h-10 rounded-xl bg-[#ebfaeb] border border-[#c9efc4] flex items-center justify-center"><svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div></div><div class="flex items-end gap-1.5 h-20 mb-5"><!--[-->`);
      ssrRenderList(chartBars, (bar, i) => {
        _push(`<div style="${ssrRenderStyle({ height: bar + "%" })}" class="${ssrRenderClass([i === chartBars.length - 1 ? "bg-[#15c411]" : "bg-gray-200", "flex-1 rounded-sm transition-all"])}"></div>`);
      });
      _push(`<!--]--></div><div class="space-y-3"><p class="text-gray-500 text-xs font-medium uppercase tracking-wider">Connected Banks</p><!--[-->`);
      ssrRenderList(connectedBanks, (bank) => {
        _push(`<div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="${ssrRenderClass([bank.color, "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"])}">${ssrInterpolate(bank.abbr)}</div><div><p class="text-navy-900 text-sm font-medium">${ssrInterpolate(bank.name)}</p><p class="text-gray-500 text-xs">${ssrInterpolate(bank.type)}</p></div></div><p class="text-navy-900 text-sm font-semibold">${ssrInterpolate(bank.balance)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><div><p class="text-navy-900 text-xs font-bold">Payment sent</p><p class="text-gray-500 text-xs">\u20AC 12,450.00</p></div></div><div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-[#ebfaeb] flex items-center justify-center"><svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg></div><div><p class="text-navy-900 text-xs font-bold">5,000+ banks</p><p class="text-gray-500 text-xs">50+ countries</p></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TrustedBySection",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      { name: "CRIF" },
      { name: "Mambu" },
      { name: "Sodexo" },
      { name: "FreshBooks" },
      { name: "Western Union" },
      { name: "Finastra" },
      { name: "Odoo" },
      { name: "PwC" },
      { name: "Finom" },
      { name: "Pleo" },
      { name: "BudgetBakers" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-[#f2fdf1] border-y border-[#d9f9d4]" }, _attrs))} data-v-0aef18e1><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-0aef18e1><div class="text-center mb-10" data-v-0aef18e1><p class="text-navy-900 font-semibold text-lg" data-v-0aef18e1> Trusted by <span class="text-[#15c411] font-bold" data-v-0aef18e1>300+</span> companies worldwide </p></div><div class="relative overflow-hidden" data-v-0aef18e1><div class="flex gap-8 items-center animate-marquee" data-v-0aef18e1><!--[-->`);
      ssrRenderList([...companies, ...companies], (company) => {
        _push(`<div class="flex-shrink-0 flex items-center justify-center h-10 px-5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" data-v-0aef18e1><span class="text-navy-900 font-bold text-lg tracking-tight whitespace-nowrap" data-v-0aef18e1>${ssrInterpolate(company.name)}</span></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f2fdf1] to-transparent pointer-events-none z-10" data-v-0aef18e1></div><div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f2fdf1] to-transparent pointer-events-none z-10" data-v-0aef18e1></div></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrustedBySection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0aef18e1"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "EcommerceVisual",
  __ssrInlineRender: true,
  setup(__props) {
    const banks = [
      { name: "Deutsche Bank", abbr: "D", color: "bg-blue-700", selected: true },
      { name: "Barclays", abbr: "B", color: "bg-sky-600", selected: false },
      { name: "BNP Paribas", abbr: "B", color: "bg-green-700", selected: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden" }, _attrs))}><div class="px-5 py-4 border-b border-gray-100 flex items-center gap-3"><button class="text-gray-400 hover:text-gray-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><span class="font-bold text-navy-900 text-sm">Checkout</span></div><div class="px-5 py-4 flex items-center gap-4 border-b border-gray-100"><div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">\u{1F45F}</div><div class="flex-1 min-w-0"><p class="font-bold text-navy-900 text-sm">Running Shoes Pro</p><p class="text-xs text-gray-500 mt-0.5">Size 42 \xB7 Black</p></div><p class="font-bold text-navy-900 text-sm flex-shrink-0">\u20AC 129.99</p></div><div class="px-5 py-4"><p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Pay with your bank</p><div class="space-y-2"><!--[-->`);
      ssrRenderList(banks, (bank) => {
        _push(`<div class="${ssrRenderClass([bank.selected ? "border-brand-500 bg-brand-50" : "border-gray-100 hover:border-gray-200", "flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer"])}"><div class="${ssrRenderClass([bank.color, "w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"])}">${ssrInterpolate(bank.abbr)}</div><span class="text-sm font-semibold text-navy-900 flex-1">${ssrInterpolate(bank.name)}</span>`);
        if (bank.selected) {
          _push(`<div class="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center"><svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>`);
        } else {
          _push(`<div class="w-5 h-5 rounded-full border-2 border-gray-200"></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="mt-4 w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"> Pay \u20AC 129.99 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visuals/EcommerceVisual.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BankingVisual",
  __ssrInlineRender: true,
  setup(__props) {
    const accounts = [
      { name: "NatWest", abbr: "NW", type: "Current account", balance: "\u20AC 22,100", color: "bg-purple-700" },
      { name: "Lloyds Bank", abbr: "LL", type: "Savings account", balance: "\u20AC 15,891", color: "bg-green-800" },
      { name: "Monzo", abbr: "MZ", type: "Business account", balance: "\u20AC 10,300", color: "bg-pink-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden" }, _attrs))}><div class="px-5 pt-5 pb-4 flex items-center justify-between border-b border-gray-100"><div><p class="text-xs text-gray-500 font-medium">My Accounts</p><p class="text-2xl font-bold text-navy-900 mt-0.5">\u20AC 48,291.30</p></div><span class="text-xs bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full">+2.4%</span></div><div class="px-5 py-4 space-y-3"><!--[-->`);
      ssrRenderList(accounts, (account) => {
        _push(`<div class="flex items-center gap-3"><div class="${ssrRenderClass([account.color, "w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"])}">${ssrInterpolate(account.abbr)}</div><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-navy-900">${ssrInterpolate(account.name)}</p><p class="text-xs text-gray-500">${ssrInterpolate(account.type)}</p></div><p class="text-sm font-bold text-navy-900 flex-shrink-0">${ssrInterpolate(account.balance)}</p></div>`);
      });
      _push(`<!--]--></div><div class="px-5 pb-5"><div class="bg-brand-50 border border-brand-100 rounded-xl p-4 flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><div><p class="text-sm font-bold text-navy-900">KYC Verified</p><p class="text-xs text-gray-500">Identity verified in under 60 seconds via open banking</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visuals/BankingVisual.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LendingVisual",
  __ssrInlineRender: true,
  setup(__props) {
    const dataPoints = [
      {
        label: "12 months transaction history",
        bg: "bg-blue-100",
        color: "text-blue-600",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        label: "Income verification",
        bg: "bg-green-100",
        color: "text-green-600",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
      },
      {
        label: "Spending behaviour analysis",
        bg: "bg-purple-100",
        color: "text-purple-600",
        icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden" }, _attrs))}><div class="px-5 pt-5 pb-4 border-b border-gray-100"><p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Loan Application</p><div class="flex items-start justify-between mb-4"><div><p class="text-2xl font-bold text-navy-900">\u20AC 25,000</p><p class="text-xs text-gray-500 mt-0.5">Requested amount</p></div><div class="text-right"><p class="text-base font-bold text-green-600">Approved</p><p class="text-xs text-gray-500">In 3 minutes</p></div></div><div><div class="flex justify-between text-xs mb-1.5"><span class="text-gray-500 font-medium">Credit Score</span><span class="font-bold text-green-600">742 / 850</span></div><div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500" style="${ssrRenderStyle({ "width": "87%" })}"></div></div></div></div><div class="px-5 py-4"><p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Data points analysed</p><div class="space-y-3"><!--[-->`);
      ssrRenderList(dataPoints, (item) => {
        _push(`<div class="flex items-center gap-3"><div class="${ssrRenderClass([item.bg, "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"])}"><svg class="${ssrRenderClass([item.color, "w-4 h-4"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", item.icon)}></path></svg></div><span class="text-sm text-navy-900 flex-1">${ssrInterpolate(item.label)}</span><div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visuals/LendingVisual.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden" }, _attrs))}><div class="px-5 pt-5 pb-4 border-b border-gray-100"><div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">\u{1F697}</div><div><p class="font-bold text-navy-900 text-sm">Vehicle Purchase</p><p class="text-xs text-gray-500">BMW 3 Series 2024</p></div></div><div class="space-y-2"><div class="flex justify-between"><span class="text-xs text-gray-500">Purchase price</span><span class="text-sm font-bold text-navy-900">\u20AC 42,500</span></div><div class="flex justify-between"><span class="text-xs text-gray-500">Finance term</span><span class="text-sm font-semibold text-navy-900">48 months</span></div></div></div><div class="px-5 py-3 bg-orange-50 border-b border-orange-100 flex items-center gap-2"><svg class="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-xs font-semibold text-orange-700">Account ownership verified instantly</p></div><div class="px-5 py-4 space-y-3"><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Monthly payment</span><span class="text-base font-bold text-navy-900">\u20AC 885 / mo</span></div><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Interest rate</span><span class="text-sm font-bold text-green-600">3.9% APR</span></div><button class="w-full bg-[#15c411] hover:bg-[#13ad0f] text-white font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 mt-2"> Confirm &amp; Pay deposit <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visuals/AutomotiveVisual.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AutomotiveVisual = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TreasuryVisual",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "12", label: "Entities" },
      { value: "8", label: "Banks" },
      { value: "6", label: "Countries" }
    ];
    const accounts = [
      { entity: "HQ Germany", abbr: "HQ", bank: "Deutsche Bank", balance: "\u20AC 3.2M", color: "bg-[#15c411]" },
      { entity: "UK Subsidiary", abbr: "UK", bank: "Barclays", balance: "\u20AC 2.8M", color: "bg-[#34d42f]" },
      { entity: "France Ops", abbr: "FR", bank: "BNP Paribas", balance: "\u20AC 1.6M", color: "bg-[#56e151]" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden" }, _attrs))}><div class="px-5 pt-5 pb-4 border-b border-gray-100"><div class="flex items-start justify-between mb-4"><div><p class="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Group Cash Position</p><p class="text-navy-900 text-2xl font-bold">\u20AC 8,420,150</p></div><span class="text-xs bg-green-500/20 text-green-400 font-bold px-2.5 py-1 rounded-full border border-green-500/30"> \u2191 4.2% </span></div><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="bg-gray-50 rounded-lg py-2 px-3 border border-gray-100 text-center"><p class="text-navy-900 font-bold text-sm">${ssrInterpolate(stat.value)}</p><p class="text-gray-500 text-xs mt-0.5">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="px-5 py-4 space-y-3"><p class="text-gray-500 text-xs font-semibold uppercase tracking-wider">Top Accounts</p><!--[-->`);
      ssrRenderList(accounts, (account) => {
        _push(`<div class="flex items-center gap-3"><div class="${ssrRenderClass([account.color, "w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"])}">${ssrInterpolate(account.abbr)}</div><div class="flex-1 min-w-0"><p class="text-navy-900 text-sm font-semibold">${ssrInterpolate(account.entity)}</p><p class="text-gray-500 text-xs">${ssrInterpolate(account.bank)}</p></div><p class="text-navy-900 text-sm font-bold flex-shrink-0">${ssrInterpolate(account.balance)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visuals/TreasuryVisual.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UseCasesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const useCases = [
      {
        id: "ecommerce",
        tag: "E-commerce & Payments",
        title: "E-commerce & Payment services",
        subtitle: "Reinvent how your customers pay, verify, and shop",
        description: "From frictionless checkout to real-time buyer verification and instant refunds, open banking is reshaping e-commerce.",
        features: [
          "Fast, secure, and card-free checkout",
          "Streamlined customer onboarding & verification",
          "Real-time payment reconciliation & merchant risk check",
          "Global expansion with compliance built in"
        ],
        href: "/use-cases/ecommerce",
        cardClass: "bg-[#060809]",
        tagClass: "bg-white/10 text-white/80 border-white/20",
        titleClass: "text-white",
        subtitleClass: "text-[#52e147]",
        descClass: "text-white",
        featureClass: "text-white/80",
        checkClass: "text-[#52e147]",
        btnClass: "bg-white text-navy-900 hover:bg-[#ebfaeb]",
        hasFlare: true,
        visual: _sfc_main$8
      },
      {
        id: "banking",
        tag: "Banking",
        title: "Banking",
        subtitle: "Move beyond traditional banking",
        description: "Unlock new revenue streams, reduce costs, and deliver a better customer experience through the power of open banking.",
        features: [
          "Streamline customer onboarding & KYC",
          "Enhance Personal Finance Management",
          "Enable Multi-Banking services",
          "Allow frictionless Payment Initiation (PIS)"
        ],
        href: "/use-cases/banking",
        cardClass: "bg-gradient-to-r from-[#eafbe8] to-[#f8fff7]",
        tagClass: "bg-[#e4f9e2] text-[#246b24] border-[#c9efc4]",
        titleClass: "text-[#132013]",
        subtitleClass: "text-[#132013]",
        descClass: "text-[#2f3f2f]",
        featureClass: "text-[#213121]",
        checkClass: "text-[#15c411]",
        btnClass: "bg-[#15c411] text-white hover:bg-[#13ad0f]",
        hasFlare: false,
        visual: _sfc_main$7
      },
      {
        id: "lending",
        tag: "Lending",
        title: "Lending",
        subtitle: "Real-time bank data for right lending decisions",
        description: "Unlock real-time customer bank data for faster onboarding, smarter credit decisions, and effortless repayments.",
        features: [
          "Streamline the application and onboarding processes",
          "Strike out credit risk from your list",
          "Predict the future by improving your credit scoring",
          "Boost your credit decision from days to minutes"
        ],
        href: "/use-cases/lending",
        cardClass: "bg-[#060809]",
        tagClass: "bg-green-400/20 text-green-300 border-green-400/30",
        titleClass: "text-white",
        subtitleClass: "text-green-400",
        descClass: "text-white",
        featureClass: "text-white/80",
        checkClass: "text-green-400",
        btnClass: "bg-green-500 text-white hover:bg-green-400",
        hasFlare: true,
        visual: _sfc_main$6
      },
      {
        id: "automotive",
        tag: "Automotive",
        title: "Automotive",
        subtitle: "Faster payments, smarter financing, seamless customer experiences",
        description: "Open banking helps dealerships, OEMs, and service providers enable secure, cost-efficient vehicle purchases, credit checks, and in-car payments.",
        features: [
          "Buy and sell cars with ease",
          "Instant payouts and refunds",
          "Smarter automotive financing",
          "Automated account ownership verification"
        ],
        href: "/use-cases/automotive",
        cardClass: "bg-gradient-to-r from-[#eafbe8] to-[#f8fff7]",
        tagClass: "bg-[#e4f9e2] text-[#246b24] border-[#c9efc4]",
        titleClass: "text-[#132013]",
        subtitleClass: "text-[#132013]",
        descClass: "text-[#2f3f2f]",
        featureClass: "text-[#213121]",
        checkClass: "text-[#15c411]",
        btnClass: "bg-[#15c411] text-white hover:bg-[#13ad0f]",
        hasFlare: false,
        visual: AutomotiveVisual
      },
      {
        id: "treasury",
        tag: "Treasury Management",
        title: "Treasury management",
        subtitle: "A 360-degree view of financials for corporates of any size",
        description: "Transform your treasury strategy with unified access to account data from over 5,000 financial institutions worldwide\u2014across multiple banks and regions.",
        features: [
          "Seamless and better informed decisions",
          "Full control over your business finances in one place",
          "Seamless payments \u2014 any time, from anywhere",
          "Multi-Entity Treasury Management"
        ],
        href: "/use-cases/treasury",
        cardClass: "bg-[#060809]",
        tagClass: "bg-white/10 text-white/80 border-white/20",
        titleClass: "text-white",
        subtitleClass: "text-white",
        descClass: "text-white",
        featureClass: "text-white/80",
        checkClass: "text-white",
        btnClass: "bg-white text-[#15c411] hover:bg-[#ebfaeb]",
        hasFlare: true,
        visual: _sfc_main$4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="py-16 md:py-20 text-center"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><p class="section-label">Use Cases</p><h2 class="section-title mb-5">Open Banking in action</h2><p class="section-subtitle mx-auto text-center"> Explore how businesses of all sizes are harnessing Altisry&#39;s open banking solutions to reshape their industries. </p></div></div><div class="relative pt-4 md:pt-6" style="${ssrRenderStyle({ paddingBottom: `${useCases.length * 18 + 72}px` })}"><!--[-->`);
      ssrRenderList(useCases, (useCase, index2) => {
        _push(`<div class="sticky pb-4 md:pb-6" style="${ssrRenderStyle({
          top: `${72 + index2 * 18}px`,
          zIndex: index2 + 1
        })}"><div class="${ssrRenderClass([useCase.cardClass, "relative mx-3 md:mx-6 lg:mx-10 rounded-3xl overflow-hidden shadow-xl"])}">`);
        if (useCase.hasFlare) {
          _push(`<div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (useCase.hasFlare) {
          _push(`<div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10 min-h-[72vh] flex items-center"><div class="${ssrRenderClass([index2 % 2 === 1 ? "lg:flex-row-reverse" : "", "flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full"])}"><div class="flex-1 min-w-0"><div class="${ssrRenderClass([useCase.tagClass, "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border"])}">${ssrInterpolate(useCase.tag)}</div><h3 class="${ssrRenderClass([useCase.titleClass, "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"])}">${ssrInterpolate(useCase.title)}</h3><p class="${ssrRenderClass([useCase.subtitleClass, "font-semibold text-lg mb-4"])}">${ssrInterpolate(useCase.subtitle)}</p><p class="${ssrRenderClass([useCase.descClass, "mb-8 leading-relaxed max-w-lg"])}">${ssrInterpolate(useCase.description)}</p><ul class="space-y-3 mb-10"><!--[-->`);
        ssrRenderList(useCase.features, (feature) => {
          _push(`<li class="${ssrRenderClass([useCase.featureClass, "flex items-start gap-3 text-sm"])}"><svg class="${ssrRenderClass([useCase.checkClass, "w-5 h-5 flex-shrink-0 mt-0.5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: useCase.href,
          class: ["inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all", useCase.btnClass]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Learn more "),
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
          _: 2
        }, _parent));
        _push(`</div><div class="flex-1 w-full flex justify-center lg:justify-end"><div class="w-full max-w-md">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(useCase.visual), null, null), _parent);
        _push(`</div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UseCasesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      {
        title: "Data Aggregation",
        description: "Access thousands of banks globally through a single API. Real-time account data at your fingertips.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
        iconBg: "bg-[#ebfaeb]",
        iconColor: "text-[#15c411]",
        href: "/products/data-aggregation"
      },
      {
        title: "Pay by Bank",
        description: "Add a lower-cost payment method to your platform via open banking. Instant, secure A2A payments.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        href: "/products/pay-by-bank"
      },
      {
        title: "Data Enrichment",
        description: "Transform raw transaction data into actionable insights powered by machine learning.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        href: "/products/data-enrichment"
      },
      {
        title: "Open Banking Compliance",
        description: "Full-stack PSD2/PSD3 compliance solution for banks and EMIs. Become compliant in 1 month.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        iconBg: "bg-[#ebfaeb]",
        iconColor: "text-[#15c411]",
        href: "/products/compliance"
      },
      {
        title: "Mobile SCA",
        description: "Create a deeper level of security with strong customer authentication for mobile apps.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        href: "/products/mobile-sca"
      },
      {
        title: "AML Transaction Monitoring",
        description: "Automated anti-money laundering monitoring to keep your platform safe and compliant.",
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        href: "/products/aml"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 md:py-28 bg-[#f2fdf1]" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"><div class="lg:w-2/5 lg:sticky lg:top-24"><p class="section-label">Products</p><h2 class="section-title mb-5"> Find the solutions to your challenges </h2><p class="section-subtitle mb-8"> At Altisry, we&#39;ve got you covered with a range of unique ready-to-use products. Our open banking platform is designed to help you build smart and innovative services through the power of open financial data. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore all products <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Explore all products "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 ml-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<div class="card group hover:border-[#52e147] hover:shadow-md transition-all duration-200 cursor-pointer"><div class="${ssrRenderClass([product.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"])}"><svg class="${ssrRenderClass([product.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", product.icon)}></path></svg></div><h3 class="text-base font-bold text-navy-900 mb-2">${ssrInterpolate(product.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(product.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: product.href,
          class: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#15c411] hover:text-[#13ad0f] transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Learn more "),
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
                    d: "M9 5l7 7-7 7"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhyChooseSection",
  __ssrInlineRender: true,
  setup(__props) {
    const reasons = [
      {
        title: "Expertise",
        subtitle: "Putting our decade-long expertise to work for you",
        description: "For more than 10 years, our team of seasoned open banking professionals has been committed to sharing their knowledge and expertise to help you find the ideal solution for your needs.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        iconBg: "bg-yellow-500/20",
        iconColor: "text-yellow-400"
      },
      {
        title: "Global Connectivity",
        subtitle: "Unlock global connectivity",
        description: "Expand your business horizons effortlessly with access to real-time account data from over 5,000 financial institutions spanning across 50+ countries.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        iconBg: "bg-[#15c411]/20",
        iconColor: "text-[#52e147]"
      },
      {
        title: "One-Stop Platform",
        subtitle: "A one-stop shop open banking platform",
        description: "Altisry is here to help any business thrive with innovative solutions tailored to their specific needs. Whether you're a bank, payment gateway, airline, or e-commerce, we've got you covered!",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400"
      },
      {
        title: "No Licence Required",
        subtitle: "No licence? No worries!",
        description: "Explore countless possibilities and innovate without acquiring your own open banking licence or certificates. Instead, use ours.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        iconBg: "bg-green-500/20",
        iconColor: "text-green-400"
      },
      {
        title: "Developer-Friendly",
        subtitle: "For developers with love",
        description: "With clear documentation and a full testing environment, our SaaS solutions are fast and easy to integrate!",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        iconBg: "bg-pink-500/20",
        iconColor: "text-pink-400"
      },
      {
        title: "High Security",
        subtitle: "Guarantee of high-security",
        description: "We are ISO 27001-certified and PSD2-licensed, employing the highest international security standards to safely access financial data and initiate payments.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        iconBg: "bg-[#15c411]/20",
        iconColor: "text-[#52e147]"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 md:py-28 bg-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><p class="section-label">Why Altisry</p><h2 class="section-title mb-5">Why they chose us</h2><p class="section-subtitle mx-auto text-center"> We are committed to delivering top-tier performance and solutions tailored to businesses&#39; unique needs. Our dedication to excellence has made us a trusted partner in each client&#39;s open banking journey. </p></div><div class="relative overflow-hidden bg-[#060809] rounded-3xl p-10 md:p-14"><div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div><div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div><div class="text-center mb-12"><h3 class="text-2xl md:text-3xl font-bold text-white"> Six reasons why top businesses choose <span class="text-[#52e147]">Altisry</span></h3></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(reasons, (reason) => {
        _push(`<div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"><div class="${ssrRenderClass([reason.iconBg, "w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"])}"><svg class="${ssrRenderClass([reason.iconColor, "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", reason.icon)}></path></svg></div><h4 class="text-base font-bold text-white mb-2">${ssrInterpolate(reason.title)}</h4><p class="text-sm font-semibold text-[#7cf06e] mb-3">${ssrInterpolate(reason.subtitle)}</p><p class="text-sm text-white/90 leading-relaxed">${ssrInterpolate(reason.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhyChooseSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$3$1;
  const _component_HeroSection = _sfc_main$a;
  const _component_TrustedBySection = __nuxt_component_2;
  const _component_UseCasesSection = _sfc_main$3;
  const _component_ProductsSection = _sfc_main$2;
  const _component_WhyChooseSection = _sfc_main$1;
  const _component_ContactFormSection = _sfc_main$b;
  const _component_AppFooter = _sfc_main$2$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TrustedBySection, null, null, _parent));
  _push(ssrRenderComponent(_component_UseCasesSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ProductsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_WhyChooseSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactFormSection, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CF3WSme_.mjs.map
