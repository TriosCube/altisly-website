import { d as defineEventHandler, e as getCookie, f as isValidWriteSession, c as createError, j as deletePost, W as WRITE_SESSION_COOKIE } from '../../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler((event) => {
  var _a;
  const session = getCookie(event, WRITE_SESSION_COOKIE);
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!id) throw createError({ statusCode: 400, statusMessage: "Missing id" });
  deletePost(id);
  return { success: true };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
