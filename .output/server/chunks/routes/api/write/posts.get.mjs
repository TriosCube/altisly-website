import { d as defineEventHandler, e as getCookie, f as isValidWriteSession, c as createError, h as getAllPosts, W as WRITE_SESSION_COOKIE } from '../../../nitro/nitro.mjs';
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

const posts_get = defineEventHandler((event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE);
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  return getAllPosts();
});

export { posts_get as default };
//# sourceMappingURL=posts.get.mjs.map
