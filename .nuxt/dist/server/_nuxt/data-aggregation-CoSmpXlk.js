import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$4 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { _ as _sfc_main$3 } from "./CtaBanner-4dh4BuSJ.js";
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "data-aggregation",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Data Aggregation | Altisry Products",
      description: "Connect to over 5,000 banks through a single API. Access real-time account data and transaction history worldwide."
    });
    const stats = [
      { value: "5,000+", label: "Banks connected" },
      { value: "50+", label: "Countries" },
      { value: "99.9%", label: "API uptime" },
      { value: "< 2s", label: "Average response time" }
    ];
    const dataTypes = [
      {
        title: "Account Information",
        description: "Access comprehensive account details in real time.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        items: ["Account number & IBAN", "Current & available balance", "Account holder name", "Account type & currency"]
      },
      {
        title: "Transaction History",
        description: "Retrieve up to 24 months of enriched transaction data.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        items: ["Amount, date & description", "Merchant details", "Transaction category", "Reference & metadata"]
      },
      {
        title: "Financial Statements",
        description: "Download structured financial data for analysis.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        items: ["Income statements", "Balance sheet data", "Cash flow statements", "Export to CSV/JSON"]
      }
    ];
    const integration = [
      { title: "REST API", desc: "Standard JSON/HTTPS interface with OpenAPI 3.0 spec" },
      { title: "SDKs available", desc: "Official SDKs for Python, Node.js, Ruby, PHP, Java, .NET" },
      { title: "Webhooks", desc: "Real-time event notifications for account and transaction updates" },
      { title: "Sandbox environment", desc: "Full test environment with mock bank connections" }
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
        tag: "Data Aggregation",
        title: "Connect to over 5,000 banks through a single API",
        description: "Access real-time account data, transaction history, and balances from thousands of financial institutions worldwide — all through one powerful, unified integration.",
        "parent-label": "Products",
        "parent-href": "/products"
      }, {
        cta: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/get-started",
              class: "btn-primary text-base px-8 py-4"
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
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              class: "btn-outline-white text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact sales`);
                } else {
                  return [
                    createTextVNode("Contact sales")
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
                  createTextVNode("Get API keys")
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "/contact",
                class: "btn-outline-white text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Contact sales")
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
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">What you get</p><h2 class="section-title mb-5">Rich financial data at your fingertips</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(dataTypes, (type) => {
        _push(`<div class="card hover:shadow-md hover:border-brand-400 transition-all"><div class="${ssrRenderClass([type.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-4"])}"><svg class="${ssrRenderClass([type.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", type.icon)}></path></svg></div><h3 class="text-base font-bold text-navy-900 mb-2">${ssrInterpolate(type.title)}</h3><p class="text-sm text-gray-600 leading-relaxed mb-4">${ssrInterpolate(type.description)}</p><ul class="space-y-1.5"><!--[-->`);
        ssrRenderList(type.items, (item) => {
          _push(`<li class="text-xs text-gray-500 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span> ${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 items-center"><div class="flex-1"><p class="section-label">Integration</p><h2 class="section-title mb-5">One integration, infinite possibilities</h2><p class="section-subtitle mb-8"> Our REST API follows industry standards. Get up and running in hours with our comprehensive SDKs and documentation. </p><div class="space-y-4 mb-8"><!--[-->`);
      ssrRenderList(integration, (item) => {
        _push(`<div class="flex items-start gap-3"><div class="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><div><p class="font-semibold text-navy-900 text-sm">${ssrInterpolate(item.title)}</p><p class="text-xs text-gray-600">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/developers/docs",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View documentation`);
          } else {
            return [
              createTextVNode("View documentation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 font-mono text-sm overflow-x-auto"><div class="text-brand-600 mb-2"># Connect a bank account</div><div class="text-gray-600">curl -X POST \\</div><div class="text-gray-600 ml-4">https://api.altisry.co/v6/connect_sessions/create \\</div><div class="text-gray-600 ml-4">-H <span class="text-amber-600">&quot;Authorization: Bearer {API_KEY}&quot;</span> \\</div><div class="text-gray-600 ml-4">-H <span class="text-amber-600">&quot;Content-Type: application/json&quot;</span> \\</div><div class="text-gray-600 ml-4">-d <span class="text-green-700">&#39;{</span></div><div class="text-green-700 ml-8">&quot;customer_id&quot;: &quot;cust_12345&quot;,</div><div class="text-green-700 ml-8">&quot;consent&quot;: &quot;account_details,transactions&quot;,</div><div class="text-green-700 ml-8">&quot;return_to&quot;: &quot;https://yourapp.com/callback&quot;</div><div class="text-green-700 ml-4">}&#39;</div><br><div class="text-brand-400">// Response</div><div class="text-gray-600">{&quot;connect_url&quot;: &quot;https://connect.altisry.co/...&quot;,</div><div class="text-gray-600 ml-2"> &quot;expires_at&quot;: &quot;2026-05-05T12:00:00Z&quot;}</div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Start aggregating financial data today",
        subtitle: "Get sandbox access in minutes. No credit card required."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/data-aggregation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=data-aggregation-CoSmpXlk.js.map
