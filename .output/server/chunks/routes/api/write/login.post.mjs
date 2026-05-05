import { d as defineEventHandler, r as readBody, i as isValidWriteCredentials, c as createError, s as setCookie, b as createWriteSessionValue, W as WRITE_SESSION_COOKIE } from '../../../nitro/nitro.mjs';
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

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => null);
  const username = typeof (body == null ? void 0 : body.username) === "string" ? body.username.trim() : "";
  const password = typeof (body == null ? void 0 : body.password) === "string" ? body.password : "";
  if (!username || !password || !isValidWriteCredentials(username, password)) {
    throw createError({ statusCode: 401, statusMessage: "Invalid credentials" });
  }
  setCookie(event, WRITE_SESSION_COOKIE, createWriteSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 8
  });
  return { success: true };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
