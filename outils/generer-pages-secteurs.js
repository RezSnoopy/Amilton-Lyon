// Pages secteurs (secteurs/<slug>.html) : une page par grande zone, avec ses communes,
// les biens de l'agence qui s'y trouvent (pris automatiquement dans BIENS) et une FAQ.
// Appelé par generer-pages-biens.js — ne pas lancer seul.
//
// Pour enrichir une page (prix au m², profil des acheteurs…) : compléter le champ `marche`
// du secteur concerné ; le bloc « Le marché immobilier » n'apparaît que s'il est rempli.

const SECTEURS = [
  {
    slug: 'lyon-metropole',
    nom: 'Lyon et la Métropole',
    titre: 'Agence immobilière à Lyon, Caluire-et-Cuire et dans la Métropole',
    h1: 'Immobilier à Lyon et dans la Métropole',
    accroche: "Appartements et maisons à vendre à Lyon 8e, Caluire-et-Cuire, Saint-Fons et Genay : achat, vente et estimation gratuite avec une agence implantée à Lyon.",
    intro: [
      "La Métropole de Lyon concentre une grande partie de la demande immobilière de la région : des appartements recherchés en ville, des communes résidentielles aux portes de Lyon et, plus au nord, le cadre plus calme du Val de Saône.",
      "Amiltone Immobilier y accompagne vendeurs et acquéreurs, de l'estimation jusqu'à la signature, avec un interlocuteur unique qui connaît le secteur.",
    ],
    communes: [
      { nom: 'Lyon 8e', villes: ['Lyon 8e'], texte: "Arrondissement résidentiel du sud-est lyonnais, recherché pour ses appartements familiaux et ses quartiers vivants comme le Moulin à Vent." },
      { nom: 'Caluire-et-Cuire', villes: ['Caluire-et-Cuire'], texte: "Commune limitrophe de Lyon, sur le plateau entre Rhône et Saône. Le quartier Saint-Clair, en bord de Rhône, offre un accès rapide au centre de Lyon." },
      { nom: 'Saint-Fons', villes: ['Saint-Fons'], texte: "Commune du sud de la Métropole, proche de Lyon, où l'on trouve encore des appartements à des prix accessibles." },
      { nom: 'Genay', villes: ['Genay'], texte: "Commune du nord de la Métropole en Val de Saône, appréciée pour son cadre plus calme à proximité de Lyon." },
    ],
    marche: '',
  },
  {
    slug: 'villefranche-beaujolais',
    nom: 'Villefranche-sur-Saône',
    titre: 'Agence immobilière à Villefranche-sur-Saône, Limas et Gleizé',
    h1: 'Immobilier à Villefranche-sur-Saône et alentours',
    accroche: "Maisons, villas et terrains à vendre à Villefranche-sur-Saône, Limas et Gleizé : achat, vente et estimation gratuite dans le Beaujolais.",
    intro: [
      "Capitale du Beaujolais et sous-préfecture du Rhône, Villefranche-sur-Saône se trouve à une trentaine de kilomètres au nord de Lyon, avec une gare et un accès direct à l'autoroute A6.",
      "Avec Limas et Gleizé, ses communes voisines, elle offre des maisons avec jardin et des terrains à bâtir, tout en restant proche de la métropole lyonnaise.",
    ],
    communes: [
      { nom: 'Villefranche-sur-Saône', villes: ['Villefranche-sur-Saône'], texte: "Ville-centre du Beaujolais, avec commerces, services, gare et accès A6 : un bon compromis entre vie urbaine et proximité de Lyon." },
      { nom: 'Limas', villes: ['Limas'], texte: "Commune limitrophe de Villefranche, résidentielle, proche des commodités et de l'entrée d'autoroute." },
      { nom: 'Gleizé', villes: ['Gleizé'], texte: "Commune voisine de Villefranche, aux portes des coteaux du Beaujolais, recherchée pour ses maisons et villas." },
    ],
    marche: '',
  },
  {
    slug: 'beaujolais-maconnais',
    nom: 'Beaujolais et sud Mâconnais',
    titre: 'Agence immobilière à Belleville-en-Beaujolais, Corcelles et Crèches-sur-Saône',
    h1: 'Immobilier dans le Beaujolais et le sud Mâconnais',
    accroche: "Maisons de caractère, fermes restaurées et appartements à vendre à Belleville-en-Beaujolais, Corcelles-en-Beaujolais, Quincié-en-Beaujolais et Crèches-sur-Saône.",
    intro: [
      "Entre les vignes du Beaujolais et le sud du Mâconnais, ce secteur attire les acquéreurs à la recherche d'espace, de maisons de caractère ou de corps de ferme à rénover.",
      "La desserte reste un atout : autoroute A6, gare de Belleville et gare TGV de Mâcon-Loché à proximité de Crèches-sur-Saône et Corcelles-en-Beaujolais.",
    ],
    communes: [
      { nom: 'Belleville-en-Beaujolais', villes: ['Belleville-en-Beaujolais'], texte: "Commune du Val de Saône au pied des vignobles, avec gare et accès autoroute, qui allie services du quotidien et cadre beaujolais." },
      { nom: 'Corcelles-en-Beaujolais', villes: ['Corcelles-en-Beaujolais'], texte: "Village du nord Beaujolais, entre l'entrée d'autoroute et la gare TGV de Mâcon-Loché, propice aux grandes propriétés avec terrain." },
      { nom: 'Quincié-en-Beaujolais', villes: ['Quincié-en-Beaujolais'], texte: "Village viticole au cœur du Beaujolais, pour ceux qui recherchent une maison traditionnelle au calme, entourée de vignes." },
      { nom: 'Crèches-sur-Saône', villes: ['Crèches-sur-Saône'], texte: "Commune de Saône-et-Loire, à environ 10 à 15 minutes de la gare TGV de Mâcon-Loché et du réseau autoroutier." },
    ],
    marche: '',
  },
  {
    slug: 'val-de-saone-dombes',
    nom: 'Val de Saône et Dombes',
    titre: 'Agence immobilière à Parcieux, Montceaux et dans le Val de Saône (Ain)',
    h1: 'Immobilier dans le Val de Saône et la Dombes',
    accroche: "Villas et maisons à vendre à Parcieux, Montceaux et dans le Val de Saône côté Ain : achat, vente et estimation gratuite.",
    intro: [
      "Sur la rive gauche de la Saône, côté Ain, les communes du Val de Saône et de la Dombes offrent un cadre résidentiel et verdoyant, face aux coteaux du Beaujolais.",
      "On y trouve surtout des maisons et des villas avec terrain, à distance raisonnable de Lyon et de Villefranche-sur-Saône.",
    ],
    communes: [
      { nom: 'Parcieux', villes: ['Parcieux'], texte: "Commune de l'Ain en bord de Saône, prisée pour ses villas de plain-pied et sa proximité avec le nord de la Métropole de Lyon." },
      { nom: 'Montceaux', villes: ['Montceaux'], texte: "Commune de l'Ain dans le Val de Saône, au calme, face à Belleville-en-Beaujolais." },
    ],
    marche: '',
  },
];

module.exports = function genererSecteurs({ BIENS, ctx, HEADER, FOOTER, HEAD_ASSETS, write, esc, SITE, fs, path, ROOT }) {
  const faq = (s, biensSecteur) => {
    const types = [...new Set(biensSecteur.map((b) => ({ maison: 'maisons et villas', appartement: 'appartements', terrain: 'terrains' }[b.type])).filter(Boolean))];
    const communes = s.communes.map((c) => c.nom).join(', ');
    return [
      [`Amiltone Immobilier intervient-il à ${s.communes[0].nom} ?`, `Oui. Nous accompagnons l'achat, la vente et l'estimation de biens à ${communes}, ainsi que dans les communes voisines, dans un rayon d'environ 100 km autour de Lyon.`],
      [`Combien vaut mon bien à ${s.communes[0].nom} ?`, `Chaque bien est différent : nous réalisons une estimation gratuite et sans engagement, basée sur les ventes récentes du secteur, avec une réponse sous 48h ouvrées et une visite sur place si nécessaire.`],
      [`Quels biens avez-vous actuellement en vente dans ce secteur ?`, biensSecteur.length
        ? `Nous avons actuellement ${biensSecteur.length} bien${biensSecteur.length > 1 ? 's' : ''} en vente dans ce secteur${types.length ? ` (${types.join(', ')})` : ''}. Ils sont présentés sur cette page avec leurs photos, leur description et leur prix.`
        : `Notre portefeuille évolue régulièrement : contactez-nous pour connaître les biens disponibles ou être informé des prochaines mises en vente.`],
    ];
  };

  const page = (s) => {
    const url = `${SITE}/secteurs/${s.slug}.html`;
    const villes = s.communes.flatMap((c) => c.villes);
    const biensSecteur = BIENS.filter((b) => villes.includes(b.city));
    const qa = faq(s, biensSecteur);
    const autres = SECTEURS.filter((x) => x.slug !== s.slug);
    const schemas = [
      {
        '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'Amiltone Immobilier', url: SITE + '/',
        telephone: '+33652691476', image: `${SITE}/images/logo.png`,
        address: { '@type': 'PostalAddress', addressLocality: 'Lyon', addressCountry: 'FR' },
        areaServed: s.communes.map((c) => ({ '@type': 'City', name: c.nom })),
      },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Secteurs', item: SITE + '/secteurs.html' },
        { '@type': 'ListItem', position: 3, name: s.nom, item: url },
      ] },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ].map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`).join('\n');

    return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<base href="/">
<title>${esc(s.titre)} | Amiltone Immobilier</title>
<meta name="description" content="${esc(s.accroche)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(s.h1)} — Amiltone Immobilier">
<meta property="og:description" content="${esc(s.accroche)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="Amiltone Immobilier">
<meta property="og:image" content="${biensSecteur[0] ? `${SITE}/images/biens/${biensSecteur[0].id}/${biensSecteur[0].id}-cover.webp` : `${SITE}/images/hero.jpg`}">
<link rel="preload" as="image" href="images/hero.webp" imagesrcset="images/hero-900.webp 900w, images/hero.webp 1600w" imagesizes="100vw" fetchpriority="high">
${HEAD_ASSETS}
${schemas}
</head>
<body data-page="secteurs">
${HEADER}

<main>
  <section class="page-hero">
    <div class="wrap">
      <div class="eyebrow">Secteur · ${esc(s.nom)}</div>
      <h1 class="page-title">${esc(s.h1)}</h1>
      <p>${esc(s.accroche)}</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <nav class="pb-crumbs" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a><span>›</span><a href="secteurs.html">Secteurs</a><span>›</span><span>${esc(s.nom)}</span></nav>
      <div class="sx-intro">
        ${s.intro.map((p) => `<p>${esc(p)}</p>`).join('\n        ')}
      </div>
      <div class="sx-communes">
        ${s.communes.map((c) => {
          const n = BIENS.filter((b) => c.villes.includes(b.city)).length;
          return `<div class="sx-commune"><h2>${esc(c.nom)}</h2><p>${esc(c.texte)}</p>${n ? `<span class="sx-count">${n} bien${n > 1 ? 's' : ''} en vente</span>` : ''}</div>`;
        }).join('\n        ')}
      </div>
      ${s.marche ? `<div class="sx-marche"><h2>Le marché immobilier</h2><p>${esc(s.marche)}</p></div>` : ''}
    </div>
  </section>

  ${biensSecteur.length ? `<section class="section alt">
    <div class="wrap">
      <div class="section-head"><h2>Nos biens à vendre — ${esc(s.nom)}</h2></div>
      <div class="biens-grid">
        ${biensSecteur.map((b) => ctx.bienCard(b)).join('\n        ')}
      </div>
    </div>
  </section>` : ''}

  <section class="section sx-cta">
    <div class="wrap">
      <h2>Vous vendez un bien dans ce secteur ?</h2>
      <p>Estimation gratuite et sans engagement, réponse sous 48h ouvrées.</p>
      <a href="estimation.html" class="btn btn-dark">Estimer mon bien</a>
    </div>
  </section>

  <section class="section faq">
    <div class="wrap faq-wrap">
      <div class="section-head"><h2>Questions fréquentes</h2></div>
      <div class="faq-list">
        ${qa.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="wrap">
      <div class="section-head"><h2>Nos autres secteurs</h2></div>
      <div class="sx-autres">
        ${autres.map((x) => `<a href="secteurs/${x.slug}.html" class="sx-autre"><strong>${esc(x.nom)}</strong><span>${esc(x.communes.map((c) => c.nom).join(' · '))}</span></a>`).join('\n        ')}
      </div>
    </div>
  </section>
</main>

${FOOTER}

<script src="script.js"></script>
</body>
</html>
`;
  };

  fs.mkdirSync(path.join(ROOT, 'secteurs'), { recursive: true });
  for (const f of fs.readdirSync(path.join(ROOT, 'secteurs'))) {
    if (f.endsWith('.html') && !SECTEURS.some((s) => `${s.slug}.html` === f)) fs.unlinkSync(path.join(ROOT, 'secteurs', f));
  }
  SECTEURS.forEach((s) => write(`secteurs/${s.slug}.html`, page(s)));

  // Bloc de liens vers les pages secteurs sur secteurs.html (entre les marqueurs)
  const hub = path.join(ROOT, 'secteurs.html');
  let h = fs.readFileSync(hub, 'utf8');
  const bloc = `<!-- PAGES-SECTEURS:DEBUT -->
      <div class="sx-autres">
        ${SECTEURS.map((x) => `<a href="secteurs/${x.slug}.html" class="sx-autre"><strong>${esc(x.nom)}</strong><span>${esc(x.communes.map((c) => c.nom).join(' · '))}</span></a>`).join('\n        ')}
      </div>
      <!-- PAGES-SECTEURS:FIN -->`;
  h = h.replace(/<!-- PAGES-SECTEURS:DEBUT -->[\s\S]*?<!-- PAGES-SECTEURS:FIN -->/, bloc);
  fs.writeFileSync(hub, h);

  return SECTEURS.map((s) => `/secteurs/${s.slug}.html`);
};
