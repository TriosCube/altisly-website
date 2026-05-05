import { d as defineEventHandler, e as getCookie, f as isValidWriteSession, W as WRITE_SESSION_COOKIE } from '../../../nitro/nitro.mjs';
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

const session_get = defineEventHandler((event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE);
  return { authenticated: isValidWriteSession(session) };
});

export { session_get as default };
//# sourceMappingURL=session.get.mjs.map
