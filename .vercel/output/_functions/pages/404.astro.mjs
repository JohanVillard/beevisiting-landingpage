import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_uCupZySs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D95iAZhZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://data-nova.vercel.app");
const pageContent = {
  errorCode: "404",
  title: "This page does not exist",
  description: "Sorry, we couldn't find the page you're looking for.",
  goBackLabel: "Go back"
};
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seo = {
    title: "Page Not Found - BeeVisiting",
    description: "Sorry, we couldn't find the page you're looking for. Explore our resources or go back to the homepage."
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": Astro2.url.href,
    url: Astro2.url.href,
    name: "Page Not Found",
    description: "Sorry, we couldn't find the page you're looking for. Explore our resources or go back to the homepage.",
    isPartOf: {
      "@type": "WebSite",
      url: `${Astro2.site}`,
      name: "DataNova",
      description: "DataNova Analytics Inc. provides advanced analytics for Excel to help businesses unlock actionable insights quickly with no coding required."
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid min-h-full place-items-center px-6 pb-10 pt-32 sm:pt-48 lg:px-8"> <div class="text-center"> <p class="text-xl font-semibold text-yellow-600"> ${pageContent.errorCode} </p> <h1 class="mt-4 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.title} </h1> <p class="mt-6 text-pretty text-lg font-medium text-slate-500 sm:text-xl/8"> ${pageContent.description} </p> </div> </section> ${renderScript($$result2, "/home/johan/Repository/beevisiting-landingpage/src/pages/404.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/johan/Repository/beevisiting-landingpage/src/pages/404.astro", void 0);

const $$file = "/home/johan/Repository/beevisiting-landingpage/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
