import { u as useSeoMeta, b as _sfc_main$1, _ as __nuxt_component_2, c as _sfc_main$2 } from "../server.mjs";
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useFetch } from "./fetch-CQ-Jk_hn.js";
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
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "./asyncData-D_2I0d3T.js";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Blog | Altisry",
      description: "Product updates, engineering deep dives, and open banking market analysis from the Altisry team."
    });
    const { data: posts, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/blog",
      "$fJeBBpCHEh"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      const cats = /* @__PURE__ */ new Set(["All"]);
      posts.value?.forEach((p) => cats.add(p.category));
      return Array.from(cats);
    });
    const activeCategory = ref("All");
    const filteredPosts = computed(() => {
      if (!posts.value) return [];
      if (activeCategory.value === "All") return posts.value;
      return posts.value.filter((p) => p.category === activeCategory.value);
    });
    const categoryStyle = (cat) => {
      const map = {
        Product: { badge: "bg-brand-100 text-brand-700" },
        Engineering: { badge: "bg-purple-100 text-purple-700" },
        Market: { badge: "bg-green-100 text-green-700" }
      };
      return map[cat] ?? { badge: "bg-gray-100 text-gray-700" };
    };
    const formatDate = (iso) => {
      return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    };
    const readTime = (content) => {
      const words = content.split(/\s+/).length;
      const mins = Math.max(1, Math.round(words / 200));
      return `${mins} min read`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main><section class="relative overflow-hidden bg-white pt-40 pb-20 md:pt-48 md:pb-24 border-b border-gray-100"><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"><div><p class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium mb-6"><span class="w-2 h-2 bg-gray-400 rounded-full"></span> Insights &amp; Updates </p><h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-navy-900 leading-tight tracking-tight mb-4"> Blog </h1><p class="text-xl text-gray-600 max-w-xl leading-relaxed"> Product updates, engineering deep dives, and market analysis from the Altisry team. </p></div><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(categories), (cat) => {
        _push(`<button class="${ssrRenderClass([unref(activeCategory) === cat ? "bg-brand-600 text-white border-brand-600 shadow-sm" : "border-gray-200 text-gray-600 hover:text-navy-900 hover:border-brand-300 bg-white", "px-4 py-2 rounded-full text-sm font-semibold transition-all border"])}">${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`);
      if (unref(pending)) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="card animate-pulse"><div class="h-4 bg-gray-200 rounded w-1/4 mb-3"></div><div class="h-6 bg-gray-200 rounded w-3/4 mb-2"></div><div class="h-4 bg-gray-200 rounded w-full mb-1"></div><div class="h-4 bg-gray-200 rounded w-5/6 mb-6"></div><div class="h-4 bg-gray-200 rounded w-1/3"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-16"><p class="text-gray-400 mb-4">Could not load posts.</p><button class="btn-primary">Try again</button></div>`);
      } else if (unref(filteredPosts).length === 0) {
        _push(`<div class="text-center py-16"><p class="text-gray-400">No posts in this category yet.</p></div>`);
      } else {
        _push(`<!--[-->`);
        if (unref(filteredPosts)[0]) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${unref(filteredPosts)[0].slug}`,
            class: "group flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden border border-gray-100 hover:border-brand-300 hover:shadow-xl transition-all duration-300 mb-8 block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="lg:w-2/5 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-12 min-h-[220px]"${_scopeId}><div class="text-center"${_scopeId}><span class="${ssrRenderClass([categoryStyle(unref(filteredPosts)[0].category).badge, "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"])}"${_scopeId}>${ssrInterpolate(unref(filteredPosts)[0].category)}</span><p class="text-brand-200 text-7xl font-black leading-none select-none mt-2"${_scopeId}>${ssrInterpolate(unref(filteredPosts)[0].category.slice(0, 2).toUpperCase())}</p></div></div><div class="flex-1 p-8 md:p-10 flex flex-col justify-between"${_scopeId}><div${_scopeId}><p class="text-xs text-gray-400 font-medium mb-3"${_scopeId}>${ssrInterpolate(formatDate(unref(filteredPosts)[0].createdAt))} · ${ssrInterpolate(readTime(unref(filteredPosts)[0].content))}</p><h2 class="text-2xl md:text-3xl font-black text-navy-900 leading-tight mb-4 group-hover:text-brand-600 transition-colors"${_scopeId}>${ssrInterpolate(unref(filteredPosts)[0].title)}</h2><p class="text-gray-600 leading-relaxed mb-6"${_scopeId}>${ssrInterpolate(unref(filteredPosts)[0].excerpt)}</p></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-600"${_scopeId}>${ssrInterpolate(unref(filteredPosts)[0].author.charAt(0))}</div><span class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(unref(filteredPosts)[0].author)}</span></div><span class="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"${_scopeId}> Read post <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg></span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "lg:w-2/5 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-12 min-h-[220px]" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("span", {
                        class: ["inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border", categoryStyle(unref(filteredPosts)[0].category).badge]
                      }, toDisplayString(unref(filteredPosts)[0].category), 3),
                      createVNode("p", { class: "text-brand-200 text-7xl font-black leading-none select-none mt-2" }, toDisplayString(unref(filteredPosts)[0].category.slice(0, 2).toUpperCase()), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 p-8 md:p-10 flex flex-col justify-between" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs text-gray-400 font-medium mb-3" }, toDisplayString(formatDate(unref(filteredPosts)[0].createdAt)) + " · " + toDisplayString(readTime(unref(filteredPosts)[0].content)), 1),
                      createVNode("h2", { class: "text-2xl md:text-3xl font-black text-navy-900 leading-tight mb-4 group-hover:text-brand-600 transition-colors" }, toDisplayString(unref(filteredPosts)[0].title), 1),
                      createVNode("p", { class: "text-gray-600 leading-relaxed mb-6" }, toDisplayString(unref(filteredPosts)[0].excerpt), 1)
                    ]),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("div", { class: "w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-600" }, toDisplayString(unref(filteredPosts)[0].author.charAt(0)), 1),
                        createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(unref(filteredPosts)[0].author), 1)
                      ]),
                      createVNode("span", { class: "text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                        createTextVNode(" Read post "),
                        (openBlock(), createBlock("svg", {
                          class: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                          })
                        ]))
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(filteredPosts).slice(1), (post) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: post.id,
            to: `/blog/${post.slug}`,
            class: "group card hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center justify-between mb-4"${_scopeId}><span class="${ssrRenderClass([categoryStyle(post.category).badge, "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"])}"${_scopeId}>${ssrInterpolate(post.category)}</span><span class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(readTime(post.content))}</span></div><h2 class="text-lg font-bold text-navy-900 mb-3 leading-snug flex-1 group-hover:text-brand-600 transition-colors"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between pt-4 border-t border-gray-100"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-600"${_scopeId}>${ssrInterpolate(post.author.charAt(0))}</div><span class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(post.author)}</span></div><span class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(formatDate(post.createdAt))}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("span", {
                      class: ["text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full", categoryStyle(post.category).badge]
                    }, toDisplayString(post.category), 3),
                    createVNode("span", { class: "text-xs text-gray-400" }, toDisplayString(readTime(post.content)), 1)
                  ]),
                  createVNode("h2", { class: "text-lg font-bold text-navy-900 mb-3 leading-snug flex-1 group-hover:text-brand-600 transition-colors" }, toDisplayString(post.title), 1),
                  createVNode("p", { class: "text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3" }, toDisplayString(post.excerpt), 1),
                  createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-gray-100" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-600" }, toDisplayString(post.author.charAt(0)), 1),
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(post.author), 1)
                    ]),
                    createVNode("span", { class: "text-xs text-gray-400" }, toDisplayString(formatDate(post.createdAt)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><!--]-->`);
      }
      _push(`</div></section></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1haQHbXz.js.map
