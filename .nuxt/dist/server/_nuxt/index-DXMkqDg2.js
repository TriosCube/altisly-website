import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$4 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./PageHero-8s8qPLx-.js";
import { _ as _sfc_main$3 } from "./CtaBanner-4dh4BuSJ.js";
import { defineComponent, ref, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Developers | Altisry",
      description: "Build with Altisry. REST API, SDKs, documentation, and sandbox environment. Get started in minutes."
    });
    const selectedLang = ref("Node.js");
    const languages = [
      { name: "Node.js", emoji: "🟩" },
      { name: "Python", emoji: "🐍" },
      { name: "Ruby", emoji: "💎" },
      { name: "PHP", emoji: "🐘" }
    ];
    const codeExamples = {
      "Node.js": {
        filename: "connect.js",
        code: `const Altisry = require('@altisry/sdk');

const client = new Altisry({
  apiKey: process.env.ALTISRY_API_KEY
});

// Create a connect session
const session = await client.connectSessions.create({
  customerId: 'cust_12345',
  consent: ['account_details', 'transactions'],
  returnTo: 'https://yourapp.com/callback'
});

console.log(session.connectUrl);
// → https://connect.altisry.co/...`
      },
      Python: {
        filename: "connect.py",
        code: `import altisry

client = altisry.Client(
    api_key=os.environ['ALTISRY_API_KEY']
)

# Create a connect session
session = client.connect_sessions.create(
    customer_id='cust_12345',
    consent=['account_details', 'transactions'],
    return_to='https://yourapp.com/callback'
)

print(session.connect_url)
# → https://connect.altisry.co/...`
      },
      Ruby: {
        filename: "connect.rb",
        code: `require 'altisry'

client = Altisry::Client.new(
  api_key: ENV['ALTISRY_API_KEY']
)

# Create a connect session
session = client.connect_sessions.create(
  customer_id: 'cust_12345',
  consent: %w[account_details transactions],
  return_to: 'https://yourapp.com/callback'
)

puts session.connect_url
# → https://connect.altisry.co/...`
      },
      PHP: {
        filename: "connect.php",
        code: `<?php
use Altisry\\Client;

$client = new Client([
    'api_key' => getenv('ALTISRY_API_KEY')
]);

// Create a connect session
$session = $client->connectSessions->create([
    'customer_id' => 'cust_12345',
    'consent' => ['account_details', 'transactions'],
    'return_to' => 'https://yourapp.com/callback'
]);

echo $session->connect_url;
// → https://connect.altisry.co/...`
      }
    };
    const resources = [
      {
        title: "API Reference",
        description: "Complete reference documentation for all Altisry API endpoints with examples.",
        icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        href: "/developers/api"
      },
      {
        title: "Guides & Tutorials",
        description: "Step-by-step guides for common integration patterns and use cases.",
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        href: "/developers/docs"
      },
      {
        title: "Sandbox Environment",
        description: "Full test environment with mock bank connections. No real data, no risk.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        href: "/developers/sandbox"
      },
      {
        title: "Webhooks",
        description: "Set up real-time event notifications for account and transaction updates.",
        icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
        href: "/developers/api"
      },
      {
        title: "SDKs & Libraries",
        description: "Official client libraries for Node.js, Python, Ruby, PHP, Java, and .NET.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        iconBg: "bg-brand-100",
        iconColor: "text-brand-600",
        href: "/developers/docs"
      },
      {
        title: "Changelog",
        description: "Stay up to date with the latest API changes, new features, and deprecations.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        href: "/developers/docs"
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
        tag: "Developers",
        title: "For developers with love",
        description: "Clear documentation, a full sandbox environment, and SDKs in every major language. Integrate Altisry in hours, not weeks."
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
              to: "/developers/docs",
              class: "btn-outline-white text-base px-8 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Read the docs`);
                } else {
                  return [
                    createTextVNode("Read the docs")
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
                to: "/developers/docs",
                class: "btn-outline-white text-base px-8 py-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Read the docs")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 items-start"><div class="lg:w-2/5"><p class="section-label">Quick start</p><h2 class="section-title mb-5">Up and running in minutes</h2><p class="section-subtitle mb-8"> Our REST API is intuitive and well-documented. Pick your language and start building. </p><div class="space-y-3"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([unref(selectedLang) === lang.name ? "border-brand-400 bg-brand-50" : "border-gray-200 hover:border-gray-300", "w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left"])}"><span class="text-xl">${ssrInterpolate(lang.emoji)}</span><span class="font-medium text-navy-900 text-sm">${ssrInterpolate(lang.name)}</span>`);
        if (unref(selectedLang) === lang.name) {
          _push(`<svg class="w-4 h-4 text-brand-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden"><div class="flex items-center gap-2 px-5 py-3 border-b border-gray-200"><div class="w-3 h-3 rounded-full bg-red-500"></div><div class="w-3 h-3 rounded-full bg-yellow-500"></div><div class="w-3 h-3 rounded-full bg-green-500"></div><span class="text-gray-500 text-xs ml-3">${ssrInterpolate(codeExamples[unref(selectedLang)]?.filename)}</span></div><div class="p-6 font-mono text-sm overflow-x-auto"><pre class="text-gray-700 leading-relaxed whitespace-pre-wrap">${ssrInterpolate(codeExamples[unref(selectedLang)]?.code)}</pre></div></div></div></div></section><section class="py-20 bg-brand-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><p class="section-label">Resources</p><h2 class="section-title mb-5">Everything you need to build</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(resources, (resource) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: resource.title,
          to: resource.href,
          class: "card hover:shadow-lg hover:border-brand-400 transition-all group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([resource.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-4"])}"${_scopeId}><svg class="${ssrRenderClass([resource.iconColor, "w-5 h-5"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", resource.icon)}${_scopeId}></path></svg></div><h3 class="font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors"${_scopeId}>${ssrInterpolate(resource.title)}</h3><p class="text-sm text-gray-600 leading-relaxed"${_scopeId}>${ssrInterpolate(resource.description)}</p>`);
            } else {
              return [
                createVNode("div", {
                  class: ["w-11 h-11 rounded-xl flex items-center justify-center mb-4", resource.iconBg]
                }, [
                  (openBlock(), createBlock("svg", {
                    class: ["w-5 h-5", resource.iconColor],
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: resource.icon
                    }, null, 8, ["d"])
                  ], 2))
                ], 2),
                createVNode("h3", { class: "font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors" }, toDisplayString(resource.title), 1),
                createVNode("p", { class: "text-sm text-gray-600 leading-relaxed" }, toDisplayString(resource.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Ready to start building?",
        subtitle: "Get your API keys and access the sandbox — no credit card required."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/developers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DXMkqDg2.js.map
