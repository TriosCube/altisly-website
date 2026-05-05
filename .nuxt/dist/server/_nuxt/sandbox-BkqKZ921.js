import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$3 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
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
  __name: "sandbox",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Sandbox | Altisry Developers",
      description: "Test Altisry integrations with mock data and safe payment simulations."
    });
    const features = [
      { title: "Mock bank connections", description: "Simulate user consent, account linking, and refresh behavior." },
      { title: "Synthetic transaction streams", description: "Test categorization, balances, and reconciliation logic." },
      { title: "Payment simulations", description: "Validate successful, pending, and failed payout and pay-in paths." },
      { title: "Webhook replay", description: "Replay events to test idempotency and retry handling." }
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
        tag: "Sandbox",
        title: "Build safely in a full-featured test environment",
        description: "Use mock institutions, synthetic account data, and test payment flows before going live.",
        "parent-label": "Developers",
        "parent-href": "/developers"
      }, {
        cta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/get-started",
              class: "btn-primary text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create sandbox account`);
                } else {
                  return [
                    createTextVNode("Create sandbox account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/developers/docs",
              class: "btn-outline-white text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Read docs`);
                } else {
                  return [
                    createTextVNode("Read docs")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/get-started",
                class: "btn-primary text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Create sandbox account")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/developers/docs",
                class: "btn-outline-white text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Read docs")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(features, (item) => {
        _push(`<div class="card hover:border-brand-300 transition-all"><h2 class="text-lg font-bold text-navy-900 mb-2">${ssrInterpolate(item.title)}</h2><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(item.description)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/developers/sandbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sandbox-BkqKZ921.js.map
