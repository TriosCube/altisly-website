import { d as defineEventHandler, s as setCookie, W as WRITE_SESSION_COOKIE } from '../../../nitro/nitro.mjs';
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

const logout_post = defineEventHandler((event) => {
  setCookie(event, WRITE_SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 0
  });
  return { success: true };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
