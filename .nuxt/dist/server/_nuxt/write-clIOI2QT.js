import { u as useSeoMeta, _ as __nuxt_component_2, d as _imports_0, a as _export_sfc } from "../server.mjs";
import { defineComponent, ref, reactive, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/hookable/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/unctx/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/defu/dist/defu.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/klona/dist/index.mjs";
import "/Users/felixchima/Desktop/Backoffice-app/altisry-website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "write",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Write | Altisry", robots: "noindex,nofollow" });
    const emptyPost = () => ({
      id: "",
      title: "",
      slug: "",
      excerpt: "",
      coverImage: "",
      category: "Product",
      tags: [],
      content: "",
      author: "",
      status: "draft",
      updatedAt: "",
      createdAt: ""
    });
    const authenticated = ref(false);
    const loginForm = reactive({ username: "", password: "" });
    const loginError = ref("");
    const loginPending = ref(false);
    const posts = ref([]);
    const postsLoading = ref(false);
    const listFilter = ref("all");
    const searchQuery = ref("");
    const deletingId = ref(null);
    const publishedCount = computed(() => posts.value.filter((p) => p.status === "published").length);
    const draftCount = computed(() => posts.value.length - publishedCount.value);
    const filteredListPosts = computed(() => {
      let list = [...posts.value].sort(
        (a, b) => (b.updatedAt || b.createdAt).localeCompare(a.updatedAt || a.createdAt)
      );
      if (listFilter.value !== "all") list = list.filter((p) => p.status === listFilter.value);
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase();
        list = list.filter((p) => p.title.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q));
      }
      return list;
    });
    const view = ref("list");
    const editPost = reactive(emptyPost());
    const saveError = ref("");
    const savePending = ref(false);
    const newTag = ref("");
    const allKnownTags = computed(() => {
      const set = /* @__PURE__ */ new Set(["Product", "Engineering", "Market", "Payments", "Open Banking"]);
      posts.value.forEach((p) => p.tags.forEach((t) => set.add(t)));
      editPost.tags.forEach((t) => set.add(t));
      return Array.from(set).sort();
    });
    const wordCount = computed(() => editPost.content.split(/\s+/).filter(Boolean).length);
    const readTimePreview = computed(() => `${Math.max(1, Math.round(wordCount.value / 200))} min read`);
    const formatDate = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))} data-v-d6c1ae33>`);
      if (!unref(authenticated)) {
        _push(`<div class="min-h-screen flex items-center justify-center px-4" data-v-d6c1ae33><div class="w-full max-w-sm" data-v-d6c1ae33><div class="text-center mb-8" data-v-d6c1ae33>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Altisry" class="h-8 w-auto mx-auto" data-v-d6c1ae33${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "Altisry",
                  class: "h-8 w-auto mx-auto"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="text-gray-400 text-sm mt-4" data-v-d6c1ae33>Writing dashboard</p></div><div class="bg-white rounded-2xl border border-gray-100 shadow-xl p-8" data-v-d6c1ae33><h1 class="text-xl font-black text-navy-900 mb-1" data-v-d6c1ae33>Sign in</h1><p class="text-gray-500 text-sm mb-6" data-v-d6c1ae33>Access the private blog management dashboard.</p><form data-v-d6c1ae33><div class="mb-4" data-v-d6c1ae33><label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" data-v-d6c1ae33>Username</label><input${ssrRenderAttr("value", unref(loginForm).username)} type="text" autocomplete="username" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent" placeholder="editor" data-v-d6c1ae33></div><div class="mb-6" data-v-d6c1ae33><label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" data-v-d6c1ae33>Password</label><input${ssrRenderAttr("value", unref(loginForm).password)} type="password" autocomplete="current-password" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent" data-v-d6c1ae33></div>`);
        if (unref(loginError)) {
          _push(`<div class="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm" data-v-d6c1ae33>${ssrInterpolate(unref(loginError))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loginPending)) ? " disabled" : ""} class="w-full btn-primary py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed" data-v-d6c1ae33>${ssrInterpolate(unref(loginPending) ? "Signing in…" : "Open dashboard")}</button></form></div></div></div>`);
      } else {
        _push(`<!--[--><header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" data-v-d6c1ae33><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between" data-v-d6c1ae33><div class="flex items-center gap-3" data-v-d6c1ae33>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Altisry" class="h-6 w-auto" data-v-d6c1ae33${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "Altisry",
                  class: "h-6 w-auto"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-gray-300" data-v-d6c1ae33>/</span><span class="text-sm font-semibold text-gray-600" data-v-d6c1ae33>Blog Dashboard</span></div><div class="flex items-center gap-3" data-v-d6c1ae33>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          target: "_blank",
          class: "text-sm text-gray-500 hover:text-navy-900 transition-colors font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View blog ↗ `);
            } else {
              return [
                createTextVNode(" View blog ↗ ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50" data-v-d6c1ae33> Log out </button></div></div></header><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-v-d6c1ae33>`);
        if (unref(view) === "editor") {
          _push(`<!--[--><div class="flex items-center justify-between mb-6" data-v-d6c1ae33><button class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-navy-900 transition-colors group" data-v-d6c1ae33><svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d6c1ae33><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-d6c1ae33></path></svg> Back to posts </button><h1 class="text-lg font-black text-navy-900" data-v-d6c1ae33>${ssrInterpolate(unref(editPost).id ? "Edit post" : "New post")}</h1></div>`);
          if (unref(saveError)) {
            _push(`<div class="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm" data-v-d6c1ae33>${ssrInterpolate(unref(saveError))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<form class="flex flex-col lg:flex-row gap-6 items-start" data-v-d6c1ae33><div class="flex-1 space-y-4" data-v-d6c1ae33><div data-v-d6c1ae33><label class="write-label" data-v-d6c1ae33>Title</label><input${ssrRenderAttr("value", unref(editPost).title)} type="text" required class="write-input" placeholder="Post title…" data-v-d6c1ae33></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4" data-v-d6c1ae33><div class="sm:col-span-2" data-v-d6c1ae33><label class="write-label" data-v-d6c1ae33>Slug</label><input${ssrRenderAttr("value", unref(editPost).slug)} type="text" required class="write-input font-mono text-sm" data-v-d6c1ae33></div><div data-v-d6c1ae33><label class="write-label" data-v-d6c1ae33>Status</label><select class="write-input" data-v-d6c1ae33><option value="draft" data-v-d6c1ae33${ssrIncludeBooleanAttr(Array.isArray(unref(editPost).status) ? ssrLooseContain(unref(editPost).status, "draft") : ssrLooseEqual(unref(editPost).status, "draft")) ? " selected" : ""}>Draft</option><option value="published" data-v-d6c1ae33${ssrIncludeBooleanAttr(Array.isArray(unref(editPost).status) ? ssrLooseContain(unref(editPost).status, "published") : ssrLooseEqual(unref(editPost).status, "published")) ? " selected" : ""}>Published</option></select></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-d6c1ae33><div data-v-d6c1ae33><label class="write-label" data-v-d6c1ae33>Author</label><input${ssrRenderAttr("value", unref(editPost).author)} type="text" class="write-input" placeholder="Your name" data-v-d6c1ae33></div><div data-v-d6c1ae33><label class="write-label" data-v-d6c1ae33>Category</label><select class="write-input" data-v-d6c1ae33><option value="Product" data-v-d6c1ae33${ssrIncludeBooleanAttr(Array.isArray(unref(editPost).category) ? ssrLooseContain(unref(editPost).category, "Product") : ssrLooseEqual(unref(editPost).category, "Product")) ? " selected" : ""}>Product</option><option value="Engineering" data-v-d6c1ae33${ssrIncludeBooleanAttr(Array.isArray(unref(editPost).category) ? ssrLooseContain(unref(editPost).category, "Engineering") : ssrLooseEqual(unref(editPost).category, "Engineering")) ? " selected" : ""}>Engineering</option><option value="Market" data-v-d6c1ae33${ssrIncludeBooleanAttr(Array.isArray(unref(editPost).category) ? ssrLooseContain(unref(editPost).category, "Market") : ssrLooseEqual(unref(editPost).category, "Market")) ? " selected" : ""}>Market</option><option value="Company" data-v-d6c1ae33${ssrIncludeBooleanAttr(Array.isArray(unref(editPost).category) ? ssrLooseContain(unref(editPost).category, "Company") : ssrLooseEqual(unref(editPost).category, "Company")) ? " selected" : ""}>Company</option></select></div></div><div data-v-d6c1ae33><label class="write-label" data-v-d6c1ae33>Excerpt</label><textarea rows="2" required class="write-input resize-none" placeholder="Brief summary shown in listing…" data-v-d6c1ae33>${ssrInterpolate(unref(editPost).excerpt)}</textarea></div><div data-v-d6c1ae33><label class="write-label flex items-center justify-between" data-v-d6c1ae33> Content <span class="text-gray-400 font-normal normal-case tracking-normal" data-v-d6c1ae33>Markdown supported</span></label><textarea rows="24" required class="write-input font-mono text-sm resize-y" placeholder="## Your first heading

Write your post in Markdown…" data-v-d6c1ae33>${ssrInterpolate(unref(editPost).content)}</textarea></div><div class="flex items-center justify-between pt-2" data-v-d6c1ae33>`);
          if (unref(editPost).slug) {
            _push(`<p class="text-xs text-gray-400" data-v-d6c1ae33> Preview at: `);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/blog/${unref(editPost).slug}`,
              target: "_blank",
              class: "text-brand-600 hover:underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`/blog/${ssrInterpolate(unref(editPost).slug)}`);
                } else {
                  return [
                    createTextVNode("/blog/" + toDisplayString(unref(editPost).slug), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex gap-3 ml-auto" data-v-d6c1ae33><button type="button" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors" data-v-d6c1ae33> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(savePending)) ? " disabled" : ""} class="btn-primary px-6 py-2.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed" data-v-d6c1ae33>${ssrInterpolate(unref(savePending) ? "Saving…" : unref(editPost).id ? "Update post" : "Save post")}</button></div></div></div><div class="lg:w-64 space-y-4 flex-shrink-0 w-full" data-v-d6c1ae33><div class="bg-white rounded-2xl border border-gray-200 p-4" data-v-d6c1ae33><h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3" data-v-d6c1ae33>Tags</h3><div class="flex flex-wrap gap-1.5 mb-3" data-v-d6c1ae33><!--[-->`);
          ssrRenderList(unref(allKnownTags), (tag) => {
            _push(`<button type="button" class="${ssrRenderClass([unref(editPost).tags.includes(tag) ? "bg-brand-600 text-white border-brand-600" : "bg-gray-50 text-gray-600 border-gray-200 hover:border-brand-400", "px-2.5 py-1 rounded-full text-xs font-semibold transition-all border"])}" data-v-d6c1ae33>${ssrInterpolate(tag)}</button>`);
          });
          _push(`<!--]--></div><div class="flex gap-2" data-v-d6c1ae33><input${ssrRenderAttr("value", unref(newTag))} type="text" placeholder="New tag…" class="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-400" data-v-d6c1ae33><button type="button" class="px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-semibold text-gray-600 hover:bg-gray-200 transition-colors" data-v-d6c1ae33> Add </button></div></div><div class="bg-white rounded-2xl border border-gray-200 p-4" data-v-d6c1ae33><h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3" data-v-d6c1ae33>Preview</h3><div class="space-y-2 text-xs" data-v-d6c1ae33><div class="flex items-center justify-between" data-v-d6c1ae33><span class="text-gray-500" data-v-d6c1ae33>Words</span><span class="font-semibold text-navy-900" data-v-d6c1ae33>${ssrInterpolate(unref(wordCount))}</span></div><div class="flex items-center justify-between" data-v-d6c1ae33><span class="text-gray-500" data-v-d6c1ae33>Read time</span><span class="font-semibold text-navy-900" data-v-d6c1ae33>${ssrInterpolate(unref(readTimePreview))}</span></div><div class="flex items-center justify-between" data-v-d6c1ae33><span class="text-gray-500" data-v-d6c1ae33>Status</span><span class="${ssrRenderClass([unref(editPost).status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600", "font-semibold px-2 py-0.5 rounded-full"])}" data-v-d6c1ae33>${ssrInterpolate(unref(editPost).status)}</span></div></div></div></div></form><!--]-->`);
        } else {
          _push(`<!--[--><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6" data-v-d6c1ae33><div data-v-d6c1ae33><span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100" data-v-d6c1ae33>Private dashboard</span><h1 class="text-2xl font-black text-navy-900 mt-2" data-v-d6c1ae33>Blog Posts</h1><p class="text-gray-500 text-sm mt-0.5" data-v-d6c1ae33>Manage, publish, and organise all blog content.</p></div><button class="btn-primary whitespace-nowrap self-start sm:self-auto" data-v-d6c1ae33> + New post </button></div><div class="grid grid-cols-3 gap-4 mb-6" data-v-d6c1ae33><div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm" data-v-d6c1ae33><p class="text-xs text-gray-400 mb-1" data-v-d6c1ae33>Total</p><p class="text-2xl font-black text-navy-900" data-v-d6c1ae33>${ssrInterpolate(unref(posts).length)}</p></div><div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm" data-v-d6c1ae33><p class="text-xs text-gray-400 mb-1" data-v-d6c1ae33>Published</p><p class="text-2xl font-black text-green-600" data-v-d6c1ae33>${ssrInterpolate(unref(publishedCount))}</p></div><div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm" data-v-d6c1ae33><p class="text-xs text-gray-400 mb-1" data-v-d6c1ae33>Drafts</p><p class="text-2xl font-black text-gray-500" data-v-d6c1ae33>${ssrInterpolate(unref(draftCount))}</p></div></div><div class="bg-white rounded-2xl border border-gray-100 shadow-sm mb-4" data-v-d6c1ae33><div class="flex flex-wrap items-center gap-3 p-4 border-b border-gray-100" data-v-d6c1ae33><div class="flex gap-2" data-v-d6c1ae33><!--[-->`);
          ssrRenderList(["all", "published", "draft"], (f) => {
            _push(`<button class="${ssrRenderClass([unref(listFilter) === f ? "bg-navy-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200", "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"])}" data-v-d6c1ae33>${ssrInterpolate(f.charAt(0).toUpperCase() + f.slice(1))} <span class="ml-1 opacity-60" data-v-d6c1ae33> (${ssrInterpolate(f === "all" ? unref(posts).length : f === "published" ? unref(publishedCount) : unref(draftCount))}) </span></button>`);
          });
          _push(`<!--]--></div><input${ssrRenderAttr("value", unref(searchQuery))} type="search" placeholder="Search posts…" class="ml-auto px-3 py-1.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-400 w-48" data-v-d6c1ae33></div>`);
          if (unref(postsLoading)) {
            _push(`<div class="p-8 text-center text-gray-400 text-sm" data-v-d6c1ae33>Loading posts…</div>`);
          } else if (unref(filteredListPosts).length === 0) {
            _push(`<div class="p-8 text-center text-gray-400 text-sm" data-v-d6c1ae33>`);
            if (unref(posts).length === 0) {
              _push(`<!--[--> No posts yet. <button class="text-brand-600 font-semibold hover:underline ml-1" data-v-d6c1ae33>Create your first post →</button><!--]-->`);
            } else {
              _push(`<!--[-->No posts match this filter.<!--]-->`);
            }
            _push(`</div>`);
          } else {
            _push(`<div class="overflow-x-auto" data-v-d6c1ae33><table class="w-full text-sm" data-v-d6c1ae33><thead class="bg-gray-50 border-b border-gray-100" data-v-d6c1ae33><tr data-v-d6c1ae33><th class="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider" data-v-d6c1ae33>Title</th><th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider" data-v-d6c1ae33>Status</th><th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell" data-v-d6c1ae33>Category</th><th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell" data-v-d6c1ae33>Updated</th><th class="text-right px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider" data-v-d6c1ae33>Actions</th></tr></thead><tbody class="divide-y divide-gray-50" data-v-d6c1ae33><!--[-->`);
            ssrRenderList(unref(filteredListPosts), (p) => {
              _push(`<tr class="hover:bg-gray-50 transition-colors" data-v-d6c1ae33><td class="px-5 py-4" data-v-d6c1ae33><p class="font-semibold text-navy-900 text-sm" data-v-d6c1ae33>${ssrInterpolate(p.title)}</p><p class="text-gray-400 text-xs mt-0.5" data-v-d6c1ae33>/blog/${ssrInterpolate(p.slug)}</p></td><td class="px-4 py-4" data-v-d6c1ae33><span class="${ssrRenderClass([p.status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500", "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"])}" data-v-d6c1ae33>${ssrInterpolate(p.status)}</span></td><td class="px-4 py-4 hidden md:table-cell" data-v-d6c1ae33><span class="text-xs text-gray-500" data-v-d6c1ae33>${ssrInterpolate(p.category || "—")}</span></td><td class="px-4 py-4 hidden lg:table-cell" data-v-d6c1ae33><span class="text-xs text-gray-400" data-v-d6c1ae33>${ssrInterpolate(formatDate(p.updatedAt || p.createdAt))}</span></td><td class="px-5 py-4" data-v-d6c1ae33><div class="flex items-center justify-end gap-2 flex-wrap" data-v-d6c1ae33>`);
              if (p.status === "published") {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  to: `/blog/${p.slug}`,
                  target: "_blank",
                  class: "px-2.5 py-1 rounded-lg border border-brand-200 text-brand-600 text-xs font-semibold hover:bg-brand-50 transition-colors"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(` View `);
                    } else {
                      return [
                        createTextVNode(" View ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`<button class="px-2.5 py-1 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition-colors" data-v-d6c1ae33>${ssrInterpolate(p.status === "published" ? "Unpublish" : "Publish")}</button><button class="px-2.5 py-1 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition-colors" data-v-d6c1ae33> Edit </button><button${ssrIncludeBooleanAttr(unref(deletingId) === p.id) ? " disabled" : ""} class="px-2.5 py-1 rounded-lg border border-red-200 text-red-600 text-xs font-semibold hover:bg-red-50 transition-colors disabled:opacity-50" data-v-d6c1ae33>${ssrInterpolate(unref(deletingId) === p.id ? "…" : "Delete")}</button></div></td></tr>`);
            });
            _push(`<!--]--></tbody></table></div>`);
          }
          _push(`</div><!--]-->`);
        }
        _push(`</div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/write.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const write = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6c1ae33"]]);
export {
  write as default
};
//# sourceMappingURL=write-clIOI2QT.js.map
