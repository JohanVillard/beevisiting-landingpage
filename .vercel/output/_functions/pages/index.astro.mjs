import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, e as addAttribute, F as Fragment, u as unescapeHTML, c as createAstro } from '../chunks/astro/server_uCupZySs.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$BaseLayout } from '../chunks/BaseLayout_DjpioE5M.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CudSrXJY.mjs';
import { $ as $$Icon } from '../chunks/Icon_C5Btcv1r.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const adminImage = new Proxy({"src":"/_astro/Beevisiting - Administration.DAHYvUbT.png","width":1280,"height":1280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/johan/Repository/holberton-beevisiting-landingpage/src/assets/images/Beevisiting - Administration.png";
							}
							
							return target[name];
						}
					});

const mobileImage = new Proxy({"src":"/_astro/Screenshot_2025-03-14-13-59-24-93_e3f67eec9fec57324aba7bab4c582db7.B-D0guYr.jpg","width":1080,"height":2340,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/johan/Repository/holberton-beevisiting-landingpage/src/assets/images/Screenshot_2025-03-14-13-59-24-93_e3f67eec9fec57324aba7bab4c582db7.jpg";
							}
							
							return target[name];
						}
					});

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  const title = "La solution digitale qui r\xE9invente l'exp\xE9rience de vos visites";
  const secondaryCTA = { text: "En savoir plus", href: "contact" };
  const primaryCTA = { text: "Voir le prix", href: "/downloads/license-options" };
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-4xl select-none text-left sm:text-center"> <h1 class="block text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h1> </div>  <div class="flex flex-col justify-center gap-5 sm:flex-row"> ${renderComponent($$result, "Button", $$Button, { "href": secondaryCTA.href, "variant": "secondary", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${secondaryCTA.text}` })} ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> <div class="relative mt-6 flex justify-center items-center"> ${renderComponent($$result, "Image", $$Image, { "src": adminImage, "alt": "Beevisiting-Admin-login", "width": 500, "height": 300, "class": "rounded-lg shadow-lg" })} ${renderComponent($$result, "Image", $$Image, { "src": mobileImage, "alt": "Beevisiting-mobile", "width": 200, "height": 300, "class": "absolute translate-x-12 translate-y-8 sm:translate-x-50 sm:translate-y-20 z-10 rounded-lg shadow-lg" })} </div>`;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/components/common/HeroContent.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-linear-to-b/oklch from-yellow-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] space-y-8 px-4 pb-12 pt-48 sm:px-6 lg:px-8">  ${renderComponent($$result, "HeroContent", $$HeroContent, {})}   </div> </section>`;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/components/sections/HeroSection.astro", void 0);

const connectivityImage = new Proxy({"src":"/_astro/connectivity.P1KRlHVe.jpg","width":3000,"height":2000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/johan/Repository/holberton-beevisiting-landingpage/src/assets/images/connectivity.jpg";
							}
							
							return target[name];
						}
					});

const $$FeatureShowcase = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Une visite interactive et immersive",
      // Feature title
      description: "Vos visiteurs vivent une exp\xE9rience unique ! Suivez chaque \xE9tape en temps r\xE9el, acc\xE9dez \xE0 du contenu interactif et visualisez facilement le parcours de la visite.",
      // Feature description
      image: mobileImage,
      // Associated image
      class: "content-center border-b border-dashed border-slate-400 py-5 sm:col-span-2 sm:p-5",
      // Custom CSS classes for layout and styling
      alignment: "mx-auto mt-10 rounded-xl shadow-lg sm:w-[20%]"
      // Alignment and styling for the image
    },
    {
      title: "Une gestion simplifi\xE9e pour les guides",
      description: `Prenez le contr\xF4le total de votre visite ! Programmez les parcours, affichez des visuels en temps r\xE9el et ajoutez des participants \xE0 la vol\xE9e. Un outil fiable pour un accompagnement fluide.`,
      image: mobileImage,
      class: "content-center py-5 sm:row-start-2 sm:p-5 sm:py-10",
      alignment: "ml-auto mr-auto mt-10 w-[65%] rounded-xl shadow-lg sm:ml-0 sm:w-[45%]"
    },
    {
      title: "Une plateforme adapt\xE9e \xE0 tous les sites",
      description: "Beevisiting fonctionne m\xEAme en zones \xE0 faible connexion. Que votre \xE9v\xE9nement se d\xE9roule en int\xE9rieur ou en ext\xE9rieur, l\u2019exp\xE9rience reste optimale pour chaque utilisateur.",
      image: connectivityImage,
      class: "content-center border-t border-dashed border-slate-400 py-5 sm:row-span-2 sm:row-start-2 sm:border-l sm:border-t-0 sm:p-5 sm:text-right",
      alignment: "ml-auto mr-auto mt-10 w-[80%] rounded-xl shadow-lg border border-[rgba(148,163,184,0.5)] dark:border-[rgba(71,85,105,0.5)] sm:mr-0"
    },
    {
      title: "Des donn\xE9es en temps r\xE9el",
      description: "Visualisez et synchronisez instantan\xE9ment chaque \xE9tape de la visite. Documents, images, vid\xE9os : tout est mis \xE0 jour en direct.",
      image: mobileImage,
      class: "content-center py-5 sm:p-5",
      alignment: "mx-auto mt-10 w-[60%] rounded-xl shadow-lg"
    },
    /*{
       title: "Une interface personnalisable",
       description:
         "Administrateurs, adaptez la plateforme à votre image ! Ajoutez votre logo, choisissez vos couleurs.",
       image: image_3,
       class:
         "content-center border-t border-dashed border-slate-400 py-5 sm:row-span-2 sm:row-start-2 sm:border-l sm:border-t-0 sm:p-5 sm:text-right",
       alignment: "ml-auto mr-auto mt-10 w-[75%] rounded-xl shadow-lg sm:mr-0",
     },
     {
       title: "Accessibilité et flexibilité",
       description: "Affichage personnalisable avec choix de langue (français, anglais, espagnol), mode sombre activable pour un meilleur confort visuel et accès à la visite aussi bien sur site qu'à distance.",
       image: image_1, // Vous pouvez utiliser une nouvelle image ou une image existante
       class: "content-center py-5 sm:p-5", // Classe CSS (personnalisation)
       alignment: "mx-auto mt-10 w-[60%] rounded-xl shadow-lg", // Alignement de l'image
    	},*/
    {
      title: "Une exp\xE9rience optimis\xE9e pour tous",
      class: "content-center border-t border-dashed border-slate-400 py-5 sm:p-5",
      moreFeatures: [
        "Visiteurs : Immersion interactive, consultation du sommaire, carrousel d'images, avis en fin de parcours. ",
        "Guides : Pr\xE9sentation dynamique, flexibilit\xE9 des supports, ajout d'invit\xE9s en cours de route.",
        "Administrateurs : Gestion des utilisateurs, cr\xE9ation de visites vari\xE9es, ajout de contenus multim\xE9dia.",
        "Create custom reports that tell your data's story exactly how you want"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="mx-auto grid max-w-[85rem] px-4 pb-10 sm:grid-cols-2 sm:grid-rows-3 sm:px-6 lg:px-8 lg:pb-14"> ${features.map((feature) => renderTemplate`<div${addAttribute(`${feature.class}`, "class")}> <h2 class="text-2xl font-bold text-slate-600">${feature.title}</h2> <p class="mt-2 text-base/6 text-slate-600"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(feature.description || "")}` })} </p> ${feature.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": `${feature.alignment || ""}`, "src": feature.image, "alt": "" })}`} ${feature.moreFeatures && renderTemplate`<ul class="ml-4 mt-4 w-4/5 list-inside list-disc space-y-2 text-base/6 text-slate-600 marker:text-yellow-600"> ${feature.moreFeatures.map((item) => renderTemplate`<li>${item}</li>`)} </ul>`} </div>`)} </div> </div>`;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/components/sections/FeatureShowcase.astro", void 0);

const $$Astro = createAstro("https://data-nova.vercel.app");
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { icon, description, styleClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`z-10 flex w-2/3 flex-col rounded-xl bg-white/50 p-4 shadow-lg ring-1 ring-white/5 backdrop-blur-xl md:p-5 xl:w-1/2 ${styleClass}`, "class")}> <p class="mt-1 text-xs font-medium uppercase text-slate-500"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} </p> <p class="mt-2 text-slate-600"> ${description} </p> </div>`;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/components/common/FeatureCard.astro", void 0);

const $$FeatureAnimated = createComponent(($$result, $$props, $$slots) => {
  const title = "Comment \xE7a marche ?";
  const tertiaryCTA = { text: "En savoir plus", href: "contact" };
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20" data-astro-cid-uz547y65> <div class="relative isolate overflow-hidden rounded-3xl bg-yellow-400 px-6 pt-16 shadow-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" data-astro-cid-uz547y65>  <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true" data-astro-cid-uz547y65> <circle cx="512" cy="512" r="512" fill="url(#gradient_2)" fill-opacity="0.7" data-astro-cid-uz547y65></circle> <defs data-astro-cid-uz547y65> <radialGradient id="gradient_2" data-astro-cid-uz547y65> <stop offset="0" stop-color="#F3A712" data-astro-cid-uz547y65></stop> <stop offset="1" stop-color="#F3A712" data-astro-cid-uz547y65></stop> </radialGradient> </defs> </svg>  <div class="mx-auto my-auto max-w-md text-left sm:text-center lg:mx-0 lg:flex-auto lg:text-left" data-astro-cid-uz547y65> <h2 class="text-balance text-2xl font-semibold tracking-tight text-slate-800 md:text-3xl md:leading-tight" data-astro-cid-uz547y65> ${title} </h2>  <div class="mt-10 flex items-center justify-start gap-x-6 sm:justify-center lg:justify-start" data-astro-cid-uz547y65> ${renderComponent($$result, "Button", $$Button, { "href": tertiaryCTA.href, "variant": "tertiary", "className": "group inline-flex items-center justify-center gap-x-2 py-2.5! pl-5 pr-4 text-slate-700", "data-astro-cid-uz547y65": true }, { "default": ($$result2) => renderTemplate`${tertiaryCTA.text}${renderComponent($$result2, "Icon", $$Icon, { "name": "chevronRight", "data-astro-cid-uz547y65": true })}` })} </div> </div>  <div class="relative my-16 flex flex-col gap-y-7 lg:my-8 2xl:h-full" data-astro-cid-uz547y65>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "qrCode", "description": "Le guide partage un QR code pour synchroniser tous les appareils connect\xE9s.", "styleClass": "", "data-astro-cid-uz547y65": true })}  <svg class="line-connector absolute z-0 hidden w-1/2 xl:left-[5%] xl:top-[3%] xl:block" viewBox="0 0 150 150" data-astro-cid-uz547y65> <path class="base-line" d="M1 0.5V50C1 63.8071 12.1929 75 26 75H70" stroke="#F4F9FF" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> <path class="beam-line" d="M1 0.5V50C1 63.8071 12.1929 75 26 75H70" stroke="#5AAEAE" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> </svg>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "time", "description": "La visite d\xE9marre, chaque action est diffus\xE9e en temps r\xE9el.", "styleClass": "ml-35", "data-astro-cid-uz547y65": true })}  <svg class="line-connector absolute hidden w-1/2 xl:left-[50%] xl:top-[36%] xl:block" viewBox="0 0 150 150" data-astro-cid-uz547y65> <path class="base-line" d="M0.5 1.5H56C69.8071 1.5 81 12.6929 81 26.5V73" stroke="#F4F9FF" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> <path class="beam-line" d="M0.5 1.5H56C69.8071 1.5 81 12.6929 81 26.5V73" stroke="#5AAEAE" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> </svg>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "mediaCast", "description": "Documents et images s'affichent automatiquement sur l'\xE9cran des visiteurs.", "styleClass": "ml-70", "data-astro-cid-uz547y65": true })}  <svg class="line-connector absolute z-0 hidden w-1/2 xl:left-[40%] xl:top-[57%] xl:block" viewBox="0 0 150 150" data-astro-cid-uz547y65> <path class="base-line" d="M1 0.5V50C1 63.8071 12.1929 75 26 75H70" stroke="#F4F9FF" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> <path class="beam-line" d="M1 0.5V50C1 63.8071 12.1929 75 26 75H70" stroke="#5AAEAE" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> </svg>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "review", "description": "En fin de parcours, les utilisateurs peuvent laisser leurs avis pour am\xE9liorer l'exp\xE9rience.", "styleClass": "ml-90", "data-astro-cid-uz547y65": true })} </div> </div> </section> `;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/components/sections/FeatureAnimated.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const title = 'Pr\xEAt \xE0 am\xE9liorer la gestion de vos visites ? <br /> Commencez avec <span class="font-medium text-yellow-700">Bee</span><span class="font-light text-slate-400">Visiting</span>.';
  const subTitle = "Contactez-nous et transformez votre mani\xE8re de pr\xE9senter vos espaces !";
  const primaryCTA = { text: "En savoir plus", href: "#" };
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-14"> <h2 class="text-balance text-4xl text-slate-800 sm:text-5xl"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="text-lg\/8 mt-5 text-pretty text-slate-600"> ${subTitle} </p> ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary", "className": "mt-7 inline-flex border-none px-3.5!" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> </section>`;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/components/sections/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroSection, {})} ${renderComponent($$result2, "FeatureShowcase", $$FeatureShowcase, {})} ${renderComponent($$result2, "FeatureAnimated", $$FeatureAnimated, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/home/johan/Repository/holberton-beevisiting-landingpage/src/pages/index.astro", void 0);

const $$file = "/home/johan/Repository/holberton-beevisiting-landingpage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
