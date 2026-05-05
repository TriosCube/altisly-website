import { d as defineEventHandler, a as getPublishedPosts } from '../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(() => getPublishedPosts());

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
