import { u as useSeoMeta, b as _sfc_main$3, _ as __nuxt_component_2, c as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-8s8qPLx-.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "careers",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Careers | Altisry",
      description: "Join the team building the future of open banking. See open roles at Altisry."
    });
    const perks = [
      { emoji: "\u{1F30D}", title: "Remote-first", description: "Work from anywhere. We have team members across 12 countries." },
      { emoji: "\u{1F3E5}", title: "Health coverage", description: "Comprehensive health, dental, and vision insurance for you and your family." },
      { emoji: "\u{1F4C8}", title: "Equity", description: "Every employee gets meaningful equity. We win together." },
      { emoji: "\u{1F393}", title: "Learning budget", description: "\u20AC2,000/year learning budget for courses, conferences, and books." },
      { emoji: "\u{1F3D6}\uFE0F", title: "Unlimited PTO", description: "We trust you to manage your time. Take the time you need." },
      { emoji: "\u{1F680}", title: "High impact", description: "Directly shape the product that powers hundreds of financial services globally." }
    ];
    const openRoles = [
      { title: "Senior Backend Engineer", department: "Engineering", location: "Remote (Europe)", type: "Full-time" },
      { title: "Product Manager \u2013 Payments", department: "Product", location: "London / Remote", type: "Full-time" },
      { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote (Europe)", type: "Full-time" },
      { title: "Compliance Manager", department: "Legal & Compliance", location: "London", type: "Full-time" },
      { title: "Sales Engineer", department: "Sales", location: "Remote", type: "Full-time" },
      { title: "DevSecOps Engineer", department: "Engineering", location: "Remote (Europe)", type: "Full-time" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Careers",
        title: "Build the future of open finance with us",
        description: "We're a team of curious, ambitious people who love building great technology. Come join us.",
        "parent-label": "Company",
        "parent-href": "/company"
      }, null, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Life at Altisry</p><h2 class="section-title mb-5">Why people love working here</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(perks, (perk) => {
        _push(`<div class="card hover:shadow-md transition-all"><div class="text-3xl mb-3">${ssrInterpolate(perk.emoji)}</div><h3 class="font-bold text-navy-900 mb-2">${ssrInterpolate(perk.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(perk.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><p class="section-label">Open roles</p><h2 class="section-title mb-5">We&#39;re hiring</h2></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(openRoles, (role) => {
        _push(`<div class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"><div><div class="flex items-center gap-3 mb-1"><h3 class="font-bold text-navy-900">${ssrInterpolate(role.title)}</h3><span class="text-xs bg-brand-100 text-brand-600 font-semibold px-2.5 py-1 rounded-full">${ssrInterpolate(role.department)}</span></div><div class="flex items-center gap-4 text-sm text-gray-500"><span>${ssrInterpolate(role.location)}</span><span>\xB7</span><span>${ssrInterpolate(role.type)}</span></div></div><svg class="w-5 h-5 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-10"><p class="text-gray-600 mb-4">Don&#39;t see a role that fits? We&#39;re always looking for talented people.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send us your CV`);
          } else {
            return [
              createTextVNode("Send us your CV")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=careers-DNh0rYUh.mjs.map
