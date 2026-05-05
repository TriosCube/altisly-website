import { u as useSeoMeta, b as _sfc_main$3, c as _sfc_main$2$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-8s8qPLx-.mjs';
import { _ as _sfc_main$2 } from './CtaBanner-4dh4BuSJ.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About Us | Altisry",
      description: "Learn about the team and mission behind Altisry \u2014 building the future of open banking and open finance."
    });
    const values = [
      { emoji: "\u{1F512}", title: "Security first", description: "ISO 27001-certified. We treat your data with the utmost care." },
      { emoji: "\u{1F30D}", title: "Global reach", description: "Built to work across 50+ countries from day one." },
      { emoji: "\u26A1", title: "Developer love", description: "We build for developers. Great DX is a core product principle." },
      { emoji: "\u{1F91D}", title: "Partnership", description: "We succeed when our customers succeed. Always." }
    ];
    const stats = [
      { value: "10+", label: "Years of open banking expertise" },
      { value: "300+", label: "Customers worldwide" },
      { value: "5,000+", label: "Banks connected" },
      { value: "50+", label: "Countries covered" }
    ];
    const team = [
      { name: "Alex Morgan", role: "CEO & Co-Founder", bio: "Former fintech executive with 15 years in banking technology.", initials: "AM", avatarBg: "bg-brand-100 text-brand-600" },
      { name: "Sarah Chen", role: "CTO & Co-Founder", bio: "Previously led engineering at a top-tier European open banking provider.", initials: "SC", avatarBg: "bg-green-100 text-green-600" },
      { name: "James Wright", role: "Chief Compliance Officer", bio: "Former FCA regulator with deep expertise in PSD2 and open banking policy.", initials: "JW", avatarBg: "bg-purple-100 text-purple-600" },
      { name: "Elena Rossi", role: "VP of Partnerships", bio: "Built and scaled partner ecosystems across 20+ European markets.", initials: "ER", avatarBg: "bg-orange-100 text-orange-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_PageHero = _sfc_main$1;
      const _component_CtaBanner = _sfc_main$2;
      const _component_AppFooter = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "About Altisry",
        title: "The team building the future of open finance",
        description: "We are a global team of engineers, compliance experts, and financial technologists on a mission to make open banking accessible to every business.",
        "parent-label": "Company",
        "parent-href": "/company"
      }, null, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><p class="section-label">Our mission</p><h2 class="section-title mb-5">Open banking for everyone</h2><p class="text-lg text-gray-600 leading-relaxed mb-6"> We believe open banking has the power to reshape financial services \u2014 making them more transparent, inclusive, and efficient. But that potential is only unlocked when the infrastructure is excellent. </p><p class="text-gray-600 leading-relaxed"> Altisry was founded to build that infrastructure. We provide the connectivity, compliance, and data intelligence that businesses need to build the financial products of the future. </p></div><div class="grid grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(values, (value) => {
        _push(`<div class="card"><div class="text-2xl mb-3">${ssrInterpolate(value.emoji)}</div><h3 class="font-bold text-navy-900 mb-1.5 text-sm">${ssrInterpolate(value.title)}</h3><p class="text-xs text-gray-600 leading-relaxed">${ssrInterpolate(value.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="py-16 bg-brand-50 border-y border-brand-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div><p class="text-4xl md:text-5xl font-bold text-navy-900 mb-2">${ssrInterpolate(stat.value)}</p><p class="text-gray-600 text-sm">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Leadership</p><h2 class="section-title mb-5">The people behind Altisry</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(team, (member) => {
        _push(`<div class="card text-center hover:shadow-md transition-all"><div class="${ssrRenderClass([member.avatarBg, "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"])}">${ssrInterpolate(member.initials)}</div><h3 class="font-bold text-navy-900">${ssrInterpolate(member.name)}</h3><p class="text-sm text-brand-600 font-medium mt-1">${ssrInterpolate(member.role)}</p><p class="text-xs text-gray-500 mt-2 leading-relaxed">${ssrInterpolate(member.bio)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Join us on this journey",
        subtitle: "We're building the future of open finance. Come build it with us."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BZ_V9I-R.mjs.map
