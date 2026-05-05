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
  __name: "api",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "API Reference | Altisry Developers",
      description: "Reference documentation for Altisry APIs including payloads, auth, and schemas."
    });
    const groups = [
      "Connect Sessions",
      "Accounts",
      "Transactions",
      "Payments",
      "Bulk Payments",
      "Webhooks"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_PageHero = _sfc_main$1;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "API Reference",
        title: "Everything you need to integrate Altisry APIs",
        description: "Explore endpoints, auth, schemas, and example payloads for all core products.",
        "parent-label": "Developers",
        "parent-href": "/developers"
      }, null, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1 card"><p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">API Collections</p><ul class="space-y-2"><!--[-->`);
      ssrRenderList(groups, (group) => {
        _push(`<li class="text-sm text-navy-900 font-medium">${ssrInterpolate(group)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="lg:col-span-2 card"><p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Sample Endpoint</p><h2 class="text-lg font-bold text-navy-900 mb-2">POST /v1/bulk-payments</h2><p class="text-sm text-gray-600 mb-4">Create a payout batch and return a tracking identifier.</p><pre class="bg-gray-50 border border-gray-200 text-gray-700 rounded-xl p-4 text-xs overflow-x-auto"><code>{
  &quot;batch_id&quot;: &quot;pay_batch_001&quot;,
  &quot;currency&quot;: &quot;EUR&quot;,
  &quot;payments&quot;: [
    { &quot;recipient&quot;: &quot;acct_001&quot;, &quot;amount&quot;: 4200, &quot;reference&quot;: &quot;Payroll May&quot; }
  ]
}</code></pre></div></div></section></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/developers/api.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=api-DR6WU4NM.mjs.map
