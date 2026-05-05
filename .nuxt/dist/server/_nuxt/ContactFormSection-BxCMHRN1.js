import { _ as __nuxt_component_2 } from "../server.mjs";
import { defineComponent, reactive, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactFormSection",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      country: "",
      phone: "",
      company: "",
      message: "",
      newsletter: false
    });
    const submitting = ref(false);
    const submitted = ref(false);
    const countries = [
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Netherlands",
      "Belgium",
      "Austria",
      "Poland",
      "Sweden",
      "Other"
    ];
    const benefits = [
      { text: "Access 5,000+ financial institutions through a single API integration" },
      { text: "Get up and running in weeks, not months, with full sandbox access" },
      { text: "ISO 27001-certified infrastructure with enterprise-grade SLAs" },
      { text: "Dedicated onboarding support from open banking experts" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 md:py-28 bg-[#f2fdf1]" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"><div class="flex-1"><p class="section-label">Get Started</p><h2 class="section-title mb-5"> Build tomorrow&#39;s financial services with open banking </h2><p class="section-subtitle mb-8"> Fill out the form and our team will get back to you within 24 hours. </p><div class="space-y-4"><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="flex items-start gap-3"><div class="w-6 h-6 rounded-full bg-[#15c411] flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><p class="text-gray-700 text-sm leading-relaxed">${ssrInterpolate(benefit.text)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 w-full max-w-lg"><div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"><h3 class="text-lg font-bold text-navy-900 mb-6">Talk to our team</h3><form class="space-y-4"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Full name *</label><input${ssrRenderAttr("value", form.name)} type="text" placeholder="John Smith" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Business email *</label><input${ssrRenderAttr("value", form.email)} type="email" placeholder="john@company.com" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Country *</label><select required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition bg-white"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(form.country) ? ssrLooseContain(form.country, "") : ssrLooseEqual(form.country, "")) ? " selected" : ""}>Select country</option><!--[-->`);
      ssrRenderList(countries, (c) => {
        _push(`<option${ssrRenderAttr("value", c)}${ssrIncludeBooleanAttr(Array.isArray(form.country) ? ssrLooseContain(form.country, c) : ssrLooseEqual(form.country, c)) ? " selected" : ""}>${ssrInterpolate(c)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Phone number</label><input${ssrRenderAttr("value", form.phone)} type="tel" placeholder="+44 20 0000 0000" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"></div></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">Company name *</label><input${ssrRenderAttr("value", form.company)} type="text" placeholder="Acme Corp" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"></div><div><label class="block text-sm font-medium text-gray-700 mb-1.5">How can we help?</label><textarea rows="3" placeholder="Tell us about your use case..." class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition resize-none">${ssrInterpolate(form.message)}</textarea></div><div class="flex items-start gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(form.newsletter) ? ssrLooseContain(form.newsletter, null) : form.newsletter) ? " checked" : ""} type="checkbox" id="newsletter" class="mt-1 w-4 h-4 text-[#15c411] border-gray-300 rounded focus:ring-[#52e147]"><label for="newsletter" class="text-xs text-gray-600 leading-relaxed"> I agree to receive emails from Altisry about the company&#39;s news, product updates and industry insights. </label></div><p class="text-xs text-gray-500"> By submitting this form, I agree to the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/legal/terms",
        class: "text-[#15c411] hover:underline"
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
      _push(` and to the processing of my contact details in accordance with the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/legal/privacy",
        class: "text-[#15c411] hover:underline"
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
      _push(`. </p><button type="submit" class="w-full inline-flex items-center justify-center py-4 px-6 rounded-lg bg-[#15c411] text-white font-semibold text-base hover:bg-[#13ad0f] transition-colors disabled:opacity-70"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""}>`);
      if (submitting.value) {
        _push(`<span>Sending...</span>`);
      } else {
        _push(`<span>Get started →</span>`);
      }
      _push(`</button>`);
      if (submitted.value) {
        _push(`<div class="text-center text-sm text-green-600 font-medium"> ✓ Thanks! We&#39;ll be in touch within 24 hours. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactFormSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ContactFormSection-BxCMHRN1.js.map
