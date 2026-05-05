import { _ as __nuxt_component_2 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CtaBanner",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-[#0f360e] py-16 md:py-20" }, _attrs))}><div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div><div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div><div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl md:text-4xl font-bold text-white mb-5">${ssrInterpolate(__props.title || "Ready to get started?")}</h2><p class="text-white/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed">${ssrInterpolate(__props.subtitle || "Join 300+ companies already using Altisry to power their open banking services.")}</p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary text-base px-8 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact us `);
          } else {
            return [
              createTextVNode(" Contact us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/get-started",
        class: "btn-outline-white text-base px-8 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get API keys `);
          } else {
            return [
              createTextVNode(" Get API keys ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=CtaBanner-4dh4BuSJ.js.map
