import { e as useRoute, u as useSeoMeta, b as _sfc_main$3, _ as __nuxt_component_2, c as _sfc_main$2 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useFetch } from './fetch-CQ-Jk_hn.mjs';
import '../nitro/nitro.mjs';
import 'fs';
import 'path';
import 'crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'vue-router';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';
import './asyncData-D_2I0d3T.mjs';
import 'perfect-debounce';

function useMarkdown() {
  const render = (md) => {
    if (!md) return "";
    const lines = md.split("\n");
    const html = [];
    let inCodeBlock = false;
    let codeLines = [];
    let inList = false;
    const flushList = () => {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
    };
    const inline = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>').replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
    for (const raw of lines) {
      const line = raw;
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          flushList();
          inCodeBlock = true;
          codeLines = [];
        } else {
          html.push(`<pre class="code-block"><code>${codeLines.map((l) => escapeHtml(l)).join("\n")}</code></pre>`);
          inCodeBlock = false;
          codeLines = [];
        }
        continue;
      }
      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }
      if (line.startsWith("### ")) {
        flushList();
        html.push(`<h3 class="md-h3">${inline(line.slice(4))}</h3>`);
        continue;
      }
      if (line.startsWith("## ")) {
        flushList();
        html.push(`<h2 class="md-h2">${inline(line.slice(3))}</h2>`);
        continue;
      }
      if (line.startsWith("# ")) {
        flushList();
        html.push(`<h1 class="md-h1">${inline(line.slice(2))}</h1>`);
        continue;
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        if (!inList) {
          html.push('<ul class="md-list">');
          inList = true;
        }
        html.push(`<li>${inline(line.slice(2))}</li>`);
        continue;
      }
      if (line.trim() === "") {
        flushList();
        continue;
      }
      flushList();
      html.push(`<p class="md-p">${inline(line)}</p>`);
    }
    flushList();
    return html.join("\n");
  };
  return { render };
}
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { render } = useMarkdown();
    const rawSlug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
    const slug = encodeURIComponent(String(rawSlug != null ? rawSlug : ""));
    const { data: post, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/blog/${slug}`,
      "$b9RL-MRL4B"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: allPosts } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/blog",
      "$ctlyfSHitH"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const renderedContent = computed(() => post.value ? render(post.value.content) : "");
    const relatedPosts = computed(() => {
      if (!allPosts.value || !post.value) return [];
      return allPosts.value.filter((p) => p.slug !== post.value.slug).slice(0, 3);
    });
    const headings = computed(() => {
      if (!post.value) return [];
      const h2Regex = /^## (.+)$/gm;
      const result = [];
      let match;
      while ((match = h2Regex.exec(post.value.content)) !== null) {
        const text = match[1];
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        result.push({ id, text });
      }
      return result;
    });
    const activeHeading = ref("");
    useSeoMeta({
      title: computed(() => post.value ? `${post.value.title} | Altisry Blog` : "Blog | Altisry"),
      description: computed(() => {
        var _a, _b;
        return (_b = (_a = post.value) == null ? void 0 : _a.excerpt) != null ? _b : "";
      })
    });
    const categoryStyle = (cat) => {
      var _a;
      const map = {
        Product: { badge: "bg-brand-100 text-brand-700", heroBadge: "bg-brand-100 text-brand-700 border-brand-200" },
        Engineering: { badge: "bg-purple-100 text-purple-700", heroBadge: "bg-purple-100 text-purple-700 border-purple-200" },
        Market: { badge: "bg-green-100 text-green-700", heroBadge: "bg-green-100 text-green-700 border-green-200" }
      };
      return (_a = map[cat]) != null ? _a : { badge: "bg-gray-100 text-gray-700", heroBadge: "bg-gray-100 text-gray-700 border-gray-200" };
    };
    const formatDate = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const readTime = (content) => {
      const mins = Math.max(1, Math.round(content.split(/\s+/).length / 200));
      return `${mins} min read`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_AppHeader = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      if (unref(post)) {
        _push(`<!--[--><section class="relative overflow-hidden bg-white pt-40 pb-20 md:pt-48 md:pb-28 border-b border-gray-100"><div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center gap-2 mb-8 text-sm text-gray-500">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "hover:text-navy-900 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Blog`);
            } else {
              return [
                createTextVNode("Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-gray-600 truncate max-w-xs">${ssrInterpolate(unref(post).title)}</span></div><div class="flex flex-wrap items-center gap-3 mb-6"><span class="${ssrRenderClass([categoryStyle(unref(post).category).heroBadge, "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"])}">${ssrInterpolate(unref(post).category)}</span><span class="text-gray-500 text-sm">${ssrInterpolate(formatDate(unref(post).createdAt))}</span><span class="text-gray-500 text-sm">\xB7</span><span class="text-gray-500 text-sm">${ssrInterpolate(readTime(unref(post).content))}</span></div><h1 class="text-3xl md:text-5xl font-black text-navy-900 leading-tight tracking-tight mb-6">${ssrInterpolate(unref(post).title)}</h1><p class="text-xl text-gray-600 leading-relaxed mb-8">${ssrInterpolate(unref(post).excerpt)}</p><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-sm font-bold text-white">${ssrInterpolate(unref(post).author.charAt(0))}</div><div><p class="text-navy-900 font-semibold text-sm">${ssrInterpolate(unref(post).author)}</p><p class="text-gray-500 text-xs">Altisry</p></div></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-14"><article class="flex-1 max-w-2xl">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 mb-10 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"${_scopeId}></path></svg> All posts `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 group-hover:-translate-x-1 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2.5",
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createTextVNode(" All posts ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="prose-altisry">${(_a = unref(renderedContent)) != null ? _a : ""}</div>`);
        if ((_b = unref(post).tags) == null ? void 0 : _b.length) {
          _push(`<div class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100"><!--[-->`);
          ssrRenderList(unref(post).tags, (tag) => {
            _push(`<span class="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-10 p-6 rounded-2xl bg-brand-50 border border-brand-100 flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-lg font-bold text-white flex-shrink-0">${ssrInterpolate(unref(post).author.charAt(0))}</div><div><p class="font-bold text-navy-900">${ssrInterpolate(unref(post).author)}</p><p class="text-gray-500 text-sm mt-1">Writing about open banking, product design, and financial infrastructure at Altisry.</p></div></div></article><aside class="lg:w-72 flex-shrink-0 space-y-6">`);
        if (unref(headings).length) {
          _push(`<div class="card sticky top-24"><h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">In this post</h3><nav class="space-y-1"><!--[-->`);
          ssrRenderList(unref(headings), (heading) => {
            _push(`<a${ssrRenderAttr("href", `#${heading.id}`)} class="${ssrRenderClass([unref(activeHeading) === heading.id ? "border-brand-600 text-brand-600 font-medium" : "border-gray-200", "block text-sm text-gray-600 hover:text-brand-600 py-1 border-l-2 pl-3 transition-colors"])}">${ssrInterpolate(heading.text)}</a>`);
          });
          _push(`<!--]--></nav></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="card"><h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Post details</h3><div class="space-y-3"><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Published</span><span class="text-xs font-semibold text-navy-900">${ssrInterpolate(formatDate(unref(post).createdAt))}</span></div><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Read time</span><span class="text-xs font-semibold text-navy-900">${ssrInterpolate(readTime(unref(post).content))}</span></div><div class="flex items-center justify-between"><span class="text-xs text-gray-500">Category</span><span class="${ssrRenderClass([categoryStyle(unref(post).category).badge, "text-xs font-bold px-2 py-0.5 rounded-full"])}">${ssrInterpolate(unref(post).category)}</span></div></div></div><div class="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-navy-900"><h3 class="font-bold text-base mb-2">Start building</h3><p class="text-gray-600 text-sm mb-5">Connect to 5,000+ banks with a single Altisry integration.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "block w-full text-center bg-brand-600 text-white font-bold text-sm py-2.5 rounded-xl hover:bg-brand-500 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Talk to sales `);
            } else {
              return [
                createTextVNode(" Talk to sales ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></aside></div></div></section>`);
        if (unref(relatedPosts).length) {
          _push(`<section class="py-20 bg-brand-50 border-t border-brand-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between mb-10"><h2 class="text-2xl font-black text-navy-900">More from the blog</h2>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/blog",
            class: "text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` All posts <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(" All posts "),
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4 group-hover:translate-x-1 transition-transform",
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
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
          ssrRenderList(unref(relatedPosts), (related) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: related.id,
              to: `/blog/${related.slug}`,
              class: "group card hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="${ssrRenderClass([categoryStyle(related.category).badge, "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start mb-3"])}"${_scopeId}>${ssrInterpolate(related.category)}</span><h3 class="text-base font-bold text-navy-900 mb-2 leading-snug flex-1 group-hover:text-brand-600 transition-colors"${_scopeId}>${ssrInterpolate(related.title)}</h3><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(related.excerpt.slice(0, 100))}\u2026</p>`);
                } else {
                  return [
                    createVNode("span", {
                      class: ["text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start mb-3", categoryStyle(related.category).badge]
                    }, toDisplayString(related.category), 3),
                    createVNode("h3", { class: "text-base font-bold text-navy-900 mb-2 leading-snug flex-1 group-hover:text-brand-600 transition-colors" }, toDisplayString(related.title), 1),
                    createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(related.excerpt.slice(0, 100)) + "\u2026", 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (!unref(pending)) {
        _push(`<div class="min-h-screen flex items-center justify-center bg-white pt-20"><div class="text-center px-4"><p class="text-7xl font-black text-brand-100 mb-4">404</p><h1 class="text-2xl font-bold text-navy-900 mb-3">Post not found</h1><p class="text-gray-500 mb-8">This post may have been removed or the URL is incorrect.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to blog`);
            } else {
              return [
                createTextVNode("Back to blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="min-h-screen flex items-center justify-center bg-white pt-20"><div class="flex items-center gap-3 text-gray-400"><svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg><span class="text-sm font-medium">Loading post\u2026</span></div></div>`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BSusWoKo.mjs.map
