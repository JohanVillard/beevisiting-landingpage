import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_BPeYVHGJ.mjs';
import { manifest } from './manifest_D0rZChsz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/feedback.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page6 = () => import('./pages/robots.txt.astro.mjs');
const _page7 = () => import('./pages/support/articles/_id_.astro.mjs');
const _page8 = () => import('./pages/support/articles.astro.mjs');
const _page9 = () => import('./pages/support/knowledge-base.astro.mjs');
const _page10 = () => import('./pages/support/reference/_id_.astro.mjs');
const _page11 = () => import('./pages/support/reference.astro.mjs');
const _page12 = () => import('./pages/support/sample-spreadsheets.astro.mjs');
const _page13 = () => import('./pages/support/whitepapers.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/feedback.ts", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/contact.astro", _page4],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page5],
    ["src/pages/robots.txt.ts", _page6],
    ["src/pages/support/articles/[id].astro", _page7],
    ["src/pages/support/articles/index.astro", _page8],
    ["src/pages/support/knowledge-base.astro", _page9],
    ["src/pages/support/reference/[id].astro", _page10],
    ["src/pages/support/reference/index.astro", _page11],
    ["src/pages/support/sample-spreadsheets.astro", _page12],
    ["src/pages/support/whitepapers.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1c3b9dc1-650d-466d-803e-d5261ade75b5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
