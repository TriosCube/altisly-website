import { d as defineEventHandler, e as getCookie, f as isValidWriteSession, c as createError, r as readBody, u as upsertPost, W as WRITE_SESSION_COOKIE } from '../../../nitro/nitro.mjs';
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

const posts_post = defineEventHandler(async (event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE);
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const body = await readBody(event).catch(() => null);
  if (!body || typeof body.id !== "string" || typeof body.title !== "string") {
    throw createError({ statusCode: 400, statusMessage: "Invalid post data" });
  }
  return upsertPost(body);
});

export { posts_post as default };
//# sourceMappingURL=posts.post.mjs.map
