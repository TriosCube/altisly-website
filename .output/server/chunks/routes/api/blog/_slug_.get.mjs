import { d as defineEventHandler, c as createError, g as getPostBySlug } from '../../../nitro/nitro.mjs';
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

const _slug__get = defineEventHandler((event) => {
  var _a;
  const rawSlug = (_a = event.context.params) == null ? void 0 : _a.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  if (!slug) throw createError({ statusCode: 400, statusMessage: "Missing slug" });
  const post = getPostBySlug(slug);
  if (!post) throw createError({ statusCode: 404, statusMessage: "Not found" });
  return post;
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
