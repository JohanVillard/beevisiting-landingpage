import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_uCupZySs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D95iAZhZ.mjs';
export { renderers } from '../../renderers.mjs';

const pageContent = {
  pageTitle: "Knowledge Base",
  content: "Still building our knowledge hub! While we're constantly adding new resources and documentation, some topics might not be covered yet. If you can't find what you're looking for, reach out to our team \u2014 we'll get you answers fast and make sure you have the support you need."
};
const $$KnowledgeBase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-linear-to-br/oklch from-teal-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] px-4 pb-12 pt-48 sm:px-6 lg:px-8"> <div class="max-w-7xl"> <div class="mx-auto max-w-3xl lg:mx-0"> <h1 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.pageTitle} </h1> <p class="mt-8 text-pretty text-lg font-medium text-slate-700 sm:text-xl/8"> ${pageContent.content} </p> </div> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"></section> ` })}`;
}, "/home/johan/Repository/beevisiting-landingpage/src/pages/support/knowledge-base.astro", void 0);

const $$file = "/home/johan/Repository/beevisiting-landingpage/src/pages/support/knowledge-base.astro";
const $$url = "/support/knowledge-base";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KnowledgeBase,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
