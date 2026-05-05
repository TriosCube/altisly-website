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
  __name: "partnerships",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Partnerships | Altisry",
      description: "Join the Altisry partner ecosystem. Reseller, referral, and technology integration programmes available."
    });
    const programs = [
      {
        emoji: "🤝",
        title: "Reseller Partner",
        description: "Resell Altisry products to your clients and earn revenue share on every deal you bring in.",
        benefits: [
          "Competitive revenue share",
          "Co-selling with our sales team",
          "Access to partner portal",
          "Marketing & sales materials",
          "Dedicated partner success manager"
        ]
      },
      {
        emoji: "💡",
        title: "Referral Partner",
        description: "Refer customers to Altisry and earn a commission on every successful conversion.",
        benefits: [
          "Simple referral tracking",
          "Commission per conversion",
          "No sales quota required",
          "Partner badge & certification",
          "Quarterly partner events"
        ]
      },
      {
        emoji: "🔧",
        title: "Technology Partner",
        description: "Integrate your platform with Altisry and offer your customers open banking superpowers.",
        benefits: [
          "API sandbox access",
          "Joint go-to-market opportunities",
          "Listed in our partner directory",
          "Technical integration support",
          "Co-branded case studies"
        ]
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
        tag: "Partnerships",
        title: "Grow together with Altisry",
        description: "Join our partner ecosystem and help businesses harness the power of open banking. We offer reseller, referral, and technology integration programmes.",
        "parent-label": "Company",
        "parent-href": "/company"
      }, {
        cta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              class: "btn-primary text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Apply to partner`);
                } else {
                  return [
                    createTextVNode("Apply to partner")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/company/about",
              class: "btn-outline text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Learn about us`);
                } else {
                  return [
                    createTextVNode("Learn about us")
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
                  createTextVNode("Apply to partner")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/company/about",
                class: "btn-outline text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Learn about us")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Partnership programmes</p><h2 class="section-title mb-5">Find the right programme for you</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(programs, (program) => {
        _push(`<div class="card hover:shadow-lg hover:border-brand-400 transition-all"><div class="text-4xl mb-4">${ssrInterpolate(program.emoji)}</div><h3 class="text-xl font-bold text-navy-900 mb-3">${ssrInterpolate(program.title)}</h3><p class="text-gray-600 text-sm leading-relaxed mb-5">${ssrInterpolate(program.description)}</p><ul class="space-y-2 mb-6"><!--[-->`);
        ssrRenderList(program.benefits, (benefit) => {
          _push(`<li class="flex items-start gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${ssrInterpolate(benefit)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "btn-primary w-full text-center text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Apply now`);
            } else {
              return [
                createTextVNode("Apply now")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Ready to partner with Altisry?",
        subtitle: "Get in touch and our partnership team will reach out within 48 hours."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/partnerships.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=partnerships-DL6myTm5.js.map
