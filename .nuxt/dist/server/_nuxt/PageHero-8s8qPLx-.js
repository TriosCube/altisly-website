import { _ as __nuxt_component_2 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    tag: {},
    dark: { type: Boolean },
    parentLabel: {},
    parentHref: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20", __props.dark ? "bg-[#060809]" : "bg-gradient-to-br from-brand-50 to-white"]
      }, _attrs))}><div class="${ssrRenderClass([__props.dark ? "opacity-10" : "opacity-5", "absolute inset-0 opacity-5"])}"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5"${ssrRenderAttr("fill", __props.dark ? "white" : "#15c411")}></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"></rect></svg></div><div class="${ssrRenderClass([__props.dark ? "bg-brand-400" : "bg-brand-400", "absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"])}"></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><nav class="${ssrRenderClass([__props.dark ? "text-white/50" : "text-gray-500", "flex items-center gap-2 mb-8 text-sm"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: [__props.dark ? "hover:text-white" : "hover:text-navy-900", "transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>/</span>`);
      if (__props.parentLabel && __props.parentHref) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.parentHref,
          class: [__props.dark ? "hover:text-white" : "hover:text-navy-900", "transition-colors"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.parentLabel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.parentLabel), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.parentLabel) {
        _push(`<span>/</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="${ssrRenderClass(__props.dark ? "text-white/80" : "text-navy-900")}">${ssrInterpolate(__props.title)}</span></nav><div class="max-w-3xl">`);
      if (__props.tag) {
        _push(`<div class="${ssrRenderClass([__props.dark ? "bg-white/10 text-white/80 border-white/20" : "bg-brand-100 text-brand-600 border-brand-200", "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-5 border"])}">${ssrInterpolate(__props.tag)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="${ssrRenderClass([__props.dark ? "text-white" : "text-navy-900", "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"])}">${ssrInterpolate(__props.title)}</h1><p class="${ssrRenderClass([__props.dark ? "text-white/70" : "text-gray-600", "text-xl leading-relaxed mb-8 max-w-2xl"])}">${ssrInterpolate(__props.description)}</p>`);
      if (_ctx.$slots.cta) {
        _push(`<div class="flex flex-wrap gap-4">`);
        ssrRenderSlot(_ctx.$slots, "cta", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=PageHero-8s8qPLx-.js.map
