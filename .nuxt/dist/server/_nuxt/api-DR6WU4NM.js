import { u as useSeoMeta, b as _sfc_main$1, c as _sfc_main$3 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/hookable/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/defu/dist/defu.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ofetch/dist/node.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/unctx/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/@unhead/vue/dist/index.mjs";
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
      const _component_AppHeader = _sfc_main$1;
      const _component_PageHero = _sfc_main$2;
      const _component_AppFooter = _sfc_main$3;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=api-DR6WU4NM.js.map
