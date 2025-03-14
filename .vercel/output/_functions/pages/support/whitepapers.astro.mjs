import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_uCupZySs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D95iAZhZ.mjs';
import { $ as $$Icon } from '../../chunks/Icon_CIvfUVLh.mjs';
import { a as getCollection } from '../../chunks/_astro_content_B9icSbUI.mjs';
export { renderers } from '../../renderers.mjs';

const pageContent = {
  pageTitle: "Whitepapers",
  actionLabel: "Read more"
};
const $$Whitepapers = createComponent(async ($$result, $$props, $$slots) => {
  const whitepapers = await getCollection("whitepapers");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-48 sm:px-6 lg:px-8"> <div class="max-w-7xl"> <div class="mx-auto max-w-3xl lg:mx-0"> <h1 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.pageTitle} </h1> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="grid grid-cols-1 sm:grid-cols-2"> ${whitepapers.map((paper, index) => {
    const totalItems = whitepapers.length;
    const itemsPerRow = 2;
    const isLastRow = Math.ceil((index + 1) / itemsPerRow) === Math.ceil(totalItems / itemsPerRow);
    const isFirstInRow = index % itemsPerRow === 0;
    const borderRight = isFirstInRow ? "sm:border-r" : "";
    const borderBottom = isLastRow ? "" : "border-b";
    return renderTemplate`<div${addAttribute(`border-dashed border-slate-300 p-6 ${borderRight} ${borderBottom} flex flex-col justify-between`, "class")}> <div> <h2 class="text-lg font-semibold text-slate-700"> ${paper.data.title} </h2> <p class="mt-4 text-slate-700">${paper.data.description}</p> </div> <div class="mt-auto"> ${paper.data.readLink && renderTemplate`<a${addAttribute(paper.data.readLink, "href")} target="_blank" class="group mr-6 mt-6 inline-flex items-center border-b-2 border-slate-500 pb-1 text-sm font-medium text-slate-700 transition-colors duration-300 hover:border-teal-500 hover:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-400"> ${pageContent.actionLabel} ${renderComponent($$result2, "Icon", $$Icon, { "name": "newWindow", "class": "ms-2 size-4 text-slate-900 transition duration-300 group-hover:text-slate-600" })} </a>`} ${paper.data.btnLink && renderTemplate`<a${addAttribute(paper.data.btnLink, "href")} download class="mt-6 inline-flex items-center rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-xs transition-colors duration-300 hover:bg-teal-700/80 focus:outline-hidden focus:ring-2 focus:ring-teal-400"> ${paper.data.btnTitle} </a>`} </div> </div>`;
  })} </div> </section> ` })}`;
}, "/home/johan/Repository/beevisiting-landingpage/src/pages/support/whitepapers.astro", void 0);

const $$file = "/home/johan/Repository/beevisiting-landingpage/src/pages/support/whitepapers.astro";
const $$url = "/support/whitepapers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Whitepapers,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
