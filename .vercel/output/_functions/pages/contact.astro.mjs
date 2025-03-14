import { a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent, d as renderScript } from '../chunks/astro/server_uCupZySs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D95iAZhZ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const formStrings = {
    name: "Nom",
    email: "Email",
    message: "Message",
    submit: "Soumettre"
  };
  return renderTemplate`${maybeRenderHead()}<form class="p-4" aria-labelledby="form-title">  <fieldset class="space-y-4"> <legend id="form-title" class="sr-only">${formStrings.submit}</legend>  <div class="relative"> <input type="text" id="input-name" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-yellow-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-yellow-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.name, "placeholder")} required aria-required="true" aria-labelledby="input-name-label"> <label id="input-name-label" for="input-name" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600"> ${formStrings.name} </label> </div>  <div class="relative"> <input type="email" id="input-email" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-yellow-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-yellow-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.email, "placeholder")} required aria-required="true" aria-labelledby="input-email-label" aria-invalid="false"> <label id="input-email-label" for="input-email" class="pointer-events-none absolute start-0 top-0 h-full w-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600"> ${formStrings.email} </label> </div>  <div class="relative"> <textarea id="input-message" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-yellow-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-yellow-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.message, "placeholder")} required aria-required="true" aria-labelledby="input-message-label"></textarea> <label id="input-message-label" for="input-message" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600"> ${formStrings.message} </label> </div> </fieldset>  <div class="mt-8"> <button type="submit" class="inline-flex items-center text-nowrap rounded-lg bg-yellow-100 px-6 py-2 font-medium text-slate-700 transition-colors duration-300 hover:bg-yellow-700/80 hover:text-white focus:bg-yellow-700/80 focus:outline-hidden"${addAttribute(formStrings.submit, "aria-label")}> ${formStrings.submit} </button> </div> </form>`;
}, "/home/johan/Repository/beevisiting-landingpage/src/components/ui/forms/ContactForm.astro", void 0);

const $$Astro = createAstro("https://data-nova.vercel.app");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const title = "Contactez nous";
  const subTitle = "Questions, Commentaires ou Retour d'information.";
  const seo = {
    title: "Contactez BeeComing",
    description: "Contactez BeeComing pour toute demande de renseignements, d'assistance ou de commentaires. Contactez-nous par e-mail, par t\xE9l\xE9phone ou visitez nos bureaux."
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    inLanguage: "en-US",
    "@id": Astro2.url.href,
    url: Astro2.url.href,
    name: "Contact DataNova",
    description: "Reach out to DataNova for any questions, support, or business inquiries. Our team is ready to assist you.",
    isPartOf: {
      "@type": "WebSite",
      url: `${Astro2.site}`,
      name: "DataNova",
      description: "DataNova Analytics Inc. provides advanced analytics for Excel to help businesses unlock actionable insights quickly with no coding required."
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 pb-28 pt-48 sm:px-6 lg:px-8"> <div class="mb-10 max-w-3xl lg:mb-14"> <h2 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h2> <p class="ml-1 mt-1 text-slate-600">${subTitle}</p> </div> <div class="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:gap-x-16"> <div class="mb-10 rounded-xl bg-yellow-400 pb-10 md:order-2 md:mb-0 md:pb-0"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div>  ${renderScript($$result2, "/home/johan/Repository/beevisiting-landingpage/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} </div></div>` })}`;
}, "/home/johan/Repository/beevisiting-landingpage/src/pages/contact.astro", void 0);

const $$file = "/home/johan/Repository/beevisiting-landingpage/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
