export const contact = {
  email: "iola.conceptos@gmail.com",
  whatsapp: "40774930211",
  phoneDisplay: "+40774930211",
  whatsappMessage:
    "Bună! Am descoperit IOLA și aș vrea să discutăm despre un proiect de arhitectură sau design interior.",
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string | null;
  alt: string;
  specialties: Array<{
    title: string;
    text: string;
  }>;
};

export const irinaProfile: TeamMember = {
  name: "Irina",
  role: "Urbanist și designer de interior la IOLA.",
  description: "",
  image: "/assets/irinav2.jpeg",
  alt: "Irina, urbanist și designer de interior în echipa IOLA",
  specialties: [
    {
      title: "Urbanism",
      text: "Citește contextul, reglementările și relația dintre spațiu, funcțiune și oraș.",
    },
    {
      title: "Design interior",
      text: "Dezvoltă atmosfera prin lumină, culoare, materiale și mobilier.",
    },
  ],
};

export const services = [
  {
    slug: "arhitectura",
    title: "Arhitectură",
    text: "Concepte pentru case, clădiri și spații comerciale, fațade, compartimentări, documentații și coordonare tehnică.",
  },
  {
    slug: "design-interior",
    title: "Design interior",
    text: "Direcție estetică, stil, paletă cromatică, materiale, mobilier, iluminat, finisaje și decor, într-un concept coerent.",
  },
  {
    slug: "planuri-tehnice",
    title: "Planuri tehnice",
    text: "Mobilare, demolări, construire, pardoseli, tavane, electrice, iluminat, prize, sanitare și detalii pentru mobilier custom.",
  },
  {
    slug: "randari-3d",
    title: "Randări 3D",
    text: "Imagini fotorealiste care fac spațiul ușor de înțeles și permit decizii clare înainte de începerea execuției.",
  },
  {
    slug: "materiale-si-produse",
    title: "Materiale și produse",
    text: "Selecții potrivite proiectului: piatră, parchet, ceramică, corpuri de iluminat, mobilier, sanitare și textile.",
  },
  {
    slug: "buget-si-mobilier",
    title: "Buget și mobilier custom",
    text: "Liste de achiziții, estimări și proiectare de bucătării, dressinguri, recepții, baruri și piese integrate.",
  },
];

export const projects = [
  {
    title: "Amenajare rezidențială",
    seoTitle: "Amenajare rezidențială de living și dining",
    slug: "amenajare-rezidentiala",
    type: "Interior rezidențial",
    description: "Amenajare de living și dining în tonuri naturale, cu lemn, piatră și mobilier cu forme organice. Un fotoliu verde aduce culoare, iar canapeaua curbată și masa joasă din piatră definesc zona de relaxare.",
    image: "/assets/amenajare-rezidentiala/fotoliu-organic.png",
    alt: "Fotoliu organic într-un living în tonuri naturale",
    images: [
      {
        title: "Fotoliu organic",
        src: "/assets/amenajare-rezidentiala/fotoliu-organic.png",
        alt: "Fotoliu organic verde într-un living cald cu lemn și piatră",
      },
      {
        title: "Dining luminos",
        src: "/assets/amenajare-rezidentiala/dining-luminos.png",
        alt: "Dining luminos cu masă din lemn, scaune textile și corpuri de iluminat sculpturale",
      },
      {
        title: "Living și masă",
        src: "/assets/amenajare-rezidentiala/living-masa.png",
        alt: "Living neutru cu masă joasă din piatră și vegetație decorativă",
      },
      {
        title: "Canapea sculpturală",
        src: "/assets/amenajare-rezidentiala/living-canapea.png",
        alt: "Canapea curbată în tonuri ivoire într-un living luminos",
      },
    ],
  },
  {
    title: "Design interior",
    seoTitle: "Design interior în verde și teracotă",
    slug: "design-interior",
    type: "Concept cromatic și material",
    description: "Concept de design interior în verde și teracotă, urmărit din dining până în dormitor. Moodboardul reunește textile ivoire, lemn închis și corpuri de iluminat care dau coerență celor două spații.",
    image: "/assets/design-interior/dining-verde-teracota.png",
    alt: "Dining verde cu mobilier teracotă și corpuri de iluminat din sticlă",
    images: [
      {
        title: "Verde și teracotă",
        src: "/assets/design-interior/dining-verde-teracota.png",
        alt: "Dining verde cu masă și scaune teracotă",
      },
      {
        title: "Moodboard de materiale",
        src: "/assets/design-interior/moodboard-materiale.png",
        alt: "Moodboard cu textile ivoire și teracotă, lemn închis și corpuri de iluminat",
      },
      {
        title: "Fotoliu teracotă",
        src: "/assets/design-interior/fotoliu-teracota.png",
        alt: "Fotoliu teracotă lângă fereastră și draperii închise",
      },
      {
        title: "Detaliu de noptieră",
        src: "/assets/design-interior/detaliu-noptiera.png",
        alt: "Noptieră neagră, pendule glob și tăblie de pat teracotă",
      },
      {
        title: "Dormitor ansamblu",
        src: "/assets/design-interior/dormitor-ansamblu.png",
        alt: "Dormitor elegant cu pat și fotoliu teracotă, profile decorative și artă grafică",
      },
    ],
  },
  {
    title: "Momente împreună",
    seoTitle: "Momente împreună · Living la malul mării",
    slug: "momente-impreuna",
    type: "Living la malul mării",
    description: "Concept de living și bucătărie deschisă, orientate către priveliștea panoramică a mării. Canapeaua deschisă, perdelele ușoare și măsuțele rotunde lasă lumina apusului să pună în valoare spațiul.",
    image: "/assets/momente-impreuna/living-panoramic.png",
    alt: "Living panoramic la apus cu vedere spre mare",
    images: [
      {
        title: "Fotoliu la apus",
        src: "/assets/momente-impreuna/fotoliu-la-apus.png",
        alt: "Fotoliu alb lângă perdele și fereastră cu vedere la apus peste mare",
      },
      {
        title: "Detaliu de canapea",
        src: "/assets/momente-impreuna/detaliu-canapea.png",
        alt: "Canapea deschisă la culoare și măsuțe rotunde în lumină de apus",
      },
      {
        title: "Living panoramic",
        src: "/assets/momente-impreuna/living-panoramic.png",
        alt: "Living și bucătărie open-space cu vedere panoramică spre mare",
      },
    ],
  },
  {
    title: "Retail & HoReCa",
    seoTitle: "Design interior pentru retail și HoReCa",
    slug: "retail-horeca",
    type: "Spații comerciale construite în jurul brandului, fluxului și experienței clientului.",
    description: "Concepte de design interior pentru cafenele, restaurante și spații comerciale. Galeria arată cum vitrinele, barul, iluminatul și așezarea meselor definesc experiențe diferite pentru clienți.",
    image: "/assets/retail-horeca/horeca1.jpeg",
    alt: "Spațiu comercial luminos cu vitrine pentru patiserie, cafea și produse pescărești",
    images: [
      {
        title: "Concept comercial multifuncțional",
        src: "/assets/retail-horeca/horeca1.jpeg",
        alt: "Spațiu comercial luminos cu vitrine pentru patiserie, cafea și produse pescărești",
      },
      {
        title: "Cafenea luminoasă",
        src: "/assets/retail-horeca/horeca.jpeg",
        alt: "Cafenea albă cu tavan organic, bar curbat și mese așezate lângă ferestre",
      },
      {
        title: "Restaurant cu lumină geometrică",
        src: "/assets/retail-horeca/horeca3.jpeg",
        alt: "Restaurant în tonuri închise cu corpuri de iluminat geometrice și bar metalic",
      },
      {
        title: "Spațiu comercial contemporan",
        src: "/assets/retail-horeca/horeca4.jpeg",
        alt: "Spațiu comercial contemporan cu mobilier negru și iluminat liniar integrat",
      },
    ],
  },
];

export const portfolioImages = projects.flatMap((project) =>
  project.images.map((image, index) => ({
    ...image,
    projectTitle: project.title,
    projectSlug: project.slug,
    sequence: `${String(index + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}`,
  })),
);
