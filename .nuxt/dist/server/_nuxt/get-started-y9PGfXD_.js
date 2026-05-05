import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$2 } from "../server.mjs";
import { defineComponent, reactive, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "get-started",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Get API Keys | Altisry",
      description: "Create a free Altisry account and get instant access to the sandbox. No credit card required."
    });
    const form = reactive({ name: "", email: "", company: "", useCase: "", terms: false });
    const submitting = ref(false);
    const submitted = ref(false);
    const useCases = [
      "Data Aggregation / PFM",
      "Lending / Credit",
      "Open Banking Payments",
      "AML / Compliance",
      "Treasury Management",
      "E-commerce",
      "Other"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="min-h-screen bg-brand-50 flex items-center py-20"><div class="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 w-full"><div class="text-center mb-8"><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold mb-5 border border-brand-200"> API Keys </div><h1 class="text-3xl font-bold text-navy-900 mb-3">Get your API keys</h1><p class="text-gray-600">Create a free account and start building with Altisry&#39;s open banking platform.</p></div><div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Full name *</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="John Smith" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Work email *</label><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="you@company.com" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Company name *</label><input${ssrRenderAttr("value", unref(form).company)} type="text" placeholder="Acme Corp" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Primary use case</label><select class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).useCase) ? ssrLooseContain(unref(form).useCase, "") : ssrLooseEqual(unref(form).useCase, "")) ? " selected" : ""}>Select a use case</option><!--[-->`);
      ssrRenderList(useCases, (uc) => {
        _push(`<option${ssrRenderAttr("value", uc)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).useCase) ? ssrLooseContain(unref(form).useCase, uc) : ssrLooseEqual(unref(form).useCase, uc)) ? " selected" : ""}>${ssrInterpolate(uc)}</option>`);
      });
      _push(`<!--]--></select></div><div class="flex items-start gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).terms) ? ssrLooseContain(unref(form).terms, null) : unref(form).terms) ? " checked" : ""} type="checkbox" id="terms" required class="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-400"><label for="terms" class="text-xs text-gray-600 leading-relaxed"> I agree to the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/legal/terms",
        class: "text-brand-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` and `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/legal/privacy",
        class: "text-brand-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div><button type="submit" class="w-full btn-primary py-4 text-base"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""}>`);
      if (unref(submitting)) {
        _push(`<span>Creating account...</span>`);
      } else if (unref(submitted)) {
        _push(`<span>✓ Check your inbox!</span>`);
      } else {
        _push(`<span>Create free account →</span>`);
      }
      _push(`</button></form><div class="mt-6 pt-6 border-t border-gray-100"><div class="grid grid-cols-3 gap-4 text-center"><div><p class="font-bold text-navy-900 text-sm">Free</p><p class="text-xs text-gray-500">Sandbox access</p></div><div><p class="font-bold text-navy-900 text-sm">No card</p><p class="text-xs text-gray-500">Required</p></div><div><p class="font-bold text-navy-900 text-sm">Instant</p><p class="text-xs text-gray-500">API keys</p></div></div></div></div><p class="text-center text-sm text-gray-500 mt-6"> Already have an account? <a href="#" class="text-brand-600 hover:underline font-medium">Sign in</a></p></div></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=get-started-y9PGfXD_.js.map
