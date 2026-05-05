import { u as useSeoMeta, b as _sfc_main$3, c as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-8s8qPLx-.mjs';
import { defineComponent, useSSRContext } from 'vue';
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
  __name: "docs",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Documentation | Altisry Developers",
      description: "Guides and tutorials for integrating Altisry APIs and launching in production."
    });
    const guides = [
      {
        level: "Starter",
        title: "Connect your first customer bank account",
        description: "Create a connect session, handle callback, and fetch account details.",
        time: "10 min"
      },
      {
        level: "Payments",
        title: "Implement pay-by-bank checkout",
        description: "Add secure account-to-account payments to your payment flow.",
        time: "20 min"
      },
      {
        level: "Treasury",
        title: "Build a multi-entity cash dashboard",
        description: "Aggregate balances and transactions across banks and legal entities.",
        time: "25 min"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_PageHero = _sfc_main$1;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Documentation",
        title: "Implementation guides for every Altisry workflow",
        description: "Follow step-by-step guides to launch onboarding, aggregation, payments, and treasury use cases.",
        "parent-label": "Developers",
        "parent-href": "/developers"
      }, null, _parent));
      _push(`<section class="py-20 bg-brand-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(guides, (guide) => {
        _push(`<article class="bg-white rounded-2xl border border-brand-100 p-6 hover:shadow-md transition-all"><p class="text-xs uppercase tracking-wider font-bold text-brand-600 mb-2">${ssrInterpolate(guide.level)}</p><h2 class="text-lg font-bold text-navy-900 mb-2">${ssrInterpolate(guide.title)}</h2><p class="text-sm text-gray-600 leading-relaxed mb-4">${ssrInterpolate(guide.description)}</p><span class="text-xs text-gray-500">${ssrInterpolate(guide.time)}</span></article>`);
      });
      _push(`<!--]--></div></div></section></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/developers/docs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=docs-DeGTi2Eg.mjs.map
