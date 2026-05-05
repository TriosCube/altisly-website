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
  __name: "status",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Service Status | Altisry",
      description: "Live platform and API status for Altisry services."
    });
    const services = [
      { name: "Public API", description: "Account, payment, and consent endpoints" },
      { name: "Connect Sessions", description: "Customer bank-linking and auth flow" },
      { name: "Webhooks", description: "Real-time event delivery infrastructure" },
      { name: "Dashboard", description: "Operational dashboard and admin controls" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_PageHero = _sfc_main$2;
      const _component_AppFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Service Status",
        title: "Platform and API status",
        description: "Track uptime, incidents, and maintenance windows across Altisry services."
      }, null, _parent));
      _push(`<section class="py-16 bg-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-[#f2fdf1] border border-brand-200 rounded-2xl p-6 mb-8"><div class="flex items-center gap-3"><span class="w-3 h-3 bg-brand-600 rounded-full animate-pulse"></span><p class="text-lg font-bold text-navy-900">All systems operational</p></div><p class="text-sm text-gray-600 mt-2">No active incidents reported.</p></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="card flex items-center justify-between"><div><p class="font-semibold text-navy-900">${ssrInterpolate(service.name)}</p><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(service.description)}</p></div><span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-100 text-brand-700 border border-brand-200"> Operational </span></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=status-CXMpsEpp.js.map
