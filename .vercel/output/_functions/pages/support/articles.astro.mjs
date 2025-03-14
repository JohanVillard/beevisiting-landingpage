import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_uCupZySs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D95iAZhZ.mjs';
import { a as getCollection } from '../../chunks/_astro_content_B9icSbUI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://data-nova.vercel.app");
const pageContent = {
  pageTitle: "Articles",
  actionLabel: "Read more"
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const articles = (await getCollection("articles")).toSorted(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const urlPath = Astro2.url;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-linear-to-br/oklch from-yellow-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] px-4 pb-12 pt-48 sm:px-6 lg:px-8"> <div class="max-w-7xl"> <div class="mx-auto max-w-3xl lg:mx-0"> <h1 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.pageTitle} </h1> </div> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="grid grid-cols-1 items-center lg:grid-cols-3"> ${articles.map((item, index) => {
    const totalItems = articles.length;
    const itemsPerRow = 3;
    const isLastRow = Math.floor(index / itemsPerRow) === Math.floor((totalItems - 1) / itemsPerRow);
    const borderClasses = isLastRow ? index % 3 === 0 ? "border-none" : index % 3 === 1 ? "lg:border-x" : "" : index % 3 === 0 ? "border-b" : index % 3 === 1 ? "border-b lg:border-x " : "border-b";
    return renderTemplate`<a${addAttribute(`card group ${borderClasses}`, "class")}${addAttribute(`${urlPath}/${item.id}`, "href")}> <div class="mb-5"> <div class="mt-5"> <h3 class="mt-5 text-lg font-medium text-slate-800"> ${item.data.title} </h3> <p class="mt-1 text-slate-500">${item.data.description}</p> </div> </div> <p class="mt-auto"> <span class="border-b-2 border-slate-500 pb-1 text-sm font-medium text-slate-700 transition duration-300 focus:outline-hidden group-hover:border-yellow-500 group-focus:border-yellow-500"> ${pageContent.actionLabel} </span> </p> </a>`;
  })} </div> </section> ` })}`;
}, "/home/johan/Repository/beevisiting-landingpage/src/pages/support/articles/index.astro", void 0);

const $$file = "/home/johan/Repository/beevisiting-landingpage/src/pages/support/articles/index.astro";
const $$url = "/support/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
