import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$4 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { _ as _sfc_main$3 } from "./CtaBanner-4dh4BuSJ.js";
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "automotive",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Automotive | Altisry Open Banking",
      description: "Faster payments, smarter financing, and seamless experiences for dealerships, OEMs and service providers."
    });
    const stats = [
      { value: "Instant", label: "Deposit & payment processing" },
      { value: "0 fraud", label: "Account ownership risk" },
      { value: "3 min", label: "Credit check turnaround" },
      { value: "5,000+", label: "Connected banks" }
    ];
    const useCases = [
      {
        emoji: "🚗",
        title: "Vehicle purchase payments",
        description: "Enable buyers to pay deposits and final payments directly from their bank account — securely, instantly, and with no card fees."
      },
      {
        emoji: "💳",
        title: "Automotive financing",
        description: "Use real-time bank data to power instant credit assessments for vehicle finance applications. No paperwork, no waiting."
      },
      {
        emoji: "⚡",
        title: "Instant payouts & refunds",
        description: "Process trade-in refunds, warranty payouts, and dealer incentives instantly to any bank account."
      },
      {
        emoji: "🔐",
        title: "Account ownership verification",
        description: "Verify that the payment account belongs to the customer before processing any transaction — preventing fraud and chargebacks."
      },
      {
        emoji: "📊",
        title: "Fleet & leasing management",
        description: "Automate recurring lease payments and maintain full visibility of fleet-related cash flows across entities."
      },
      {
        emoji: "🔧",
        title: "Service & maintenance billing",
        description: "Allow customers to pay for services via their bank account at the dealership or remotely from their vehicle."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_PageHero = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_CtaBanner = _sfc_main$3;
      const _component_AppFooter = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Automotive",
        title: "Faster payments, smarter financing, seamless customer experiences",
        description: "Open banking helps dealerships, OEMs, and service providers enable secure, cost-efficient vehicle purchases, credit checks, and in-car payments.",
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
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Applications</p><h2 class="section-title mb-5">Open banking for the full automotive journey</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(useCases, (item) => {
        _push(`<div class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all"><div class="text-3xl flex-shrink-0">${ssrInterpolate(item.emoji)}</div><div><h3 class="font-bold text-navy-900 mb-2">${ssrInterpolate(item.title)}</h3><p class="text-sm text-gray-600 leading-relaxed">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Drive the future of automotive finance",
        subtitle: "Open banking is transforming how cars are bought, sold, and financed."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/use-cases/automotive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=automotive-CT2B2XTo.js.map
