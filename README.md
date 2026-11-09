# IOLA Concept

Site de prezentare și portofoliu pentru un studio de arhitectură și design interior. Vizitatorii pot explora proiecte rezidențiale, retail și HoReCa, pot vedea ce include fiecare serviciu și pot contacta studioul pe WhatsApp.

## Ce include proiectul

- **Portofoliu de proiecte** cu galerii interactive pe pagina principală și pagini dedicate cu descrieri și imagini.
- **Prezentarea studioului** cu servicii, echipă, procesul de colaborare și întrebări frecvente.
- **Interfață adaptată pentru mobil și desktop**, cu navigare din tastatură, suport pentru mișcare redusă și imagini responsive prin Next Image.
- **SEO tehnic** cu pagini pre-randate, metadate individuale, adrese canonice, date structurate JSON-LD, sitemap cu imagini și previzualizări pentru distribuire.

**Tehnologii:** Next.js 15 (App Router), React 19, TypeScript, CSS, Motion și Phosphor Icons.

## Pornire locală

Cu Node.js și pnpm instalate, rulează din rădăcina proiectului:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Deschide [localhost:3000](http://localhost:3000/). Pentru a valida și previzualiza buildul de producție:

```bash
pnpm build
pnpm start --port 3001
```

## Structura proiectului

```text
app/                  Pagini, stiluri globale și rute pentru SEO
  proiecte/[slug]/    Pagini generate pentru fiecare proiect
  servicii/           Prezentarea serviciilor
components/
  home/               Secțiuni și interacțiuni ale paginii principale
  layout/             Antet, subsol și acces rapid la contact
  pages/              Șabloane pentru paginile de detaliu și cele juridice
  ui/                 Componente de interfață și efecte reutilizabile
lib/
  seo.ts              Metadate, adrese canonice și date structurate
  site-data.ts        Proiecte, servicii, echipă și date de contact
public/
  assets/             Identitate vizuală, portrete și imagini grupate pe proiect
  images/             Imagini din versiunile anterioare
docs/                 Referințe de design
```

La adăugarea unui proiect în `lib/site-data.ts`, pagina lui este generată la build și inclusă în sitemap. Referința vizuală a proiectului se află în [docs/design-reference.md](docs/design-reference.md).

## Configurare pentru publicare

| Variabilă | Rol |
| --- | --- |
| `SITE_URL` | Adresa publică finală, cu HTTPS. Valoarea implicită este `https://www.iola-arhitecture.com`. Seteaz-o înainte de build dacă publici pe alt domeniu. |
| `GOOGLE_SITE_VERIFICATION` | Cod opțional pentru verificarea proprietății în Google Search Console. |

După publicare, verifică `/robots.txt` și `/sitemap.xml` pe domeniul final. Pentru validarea locală, rulează `pnpm build` și verifică navigarea, galeriile și linkurile de contact la lățimi de 390, 768 și 1440 px.
