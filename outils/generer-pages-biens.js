#!/usr/bin/env node
// Génère une page HTML statique par bien (biens/<id>.html) à partir des données BIENS de script.js,
// et met à jour sitemap.xml et la liste structurée de biens.html.
// À relancer après chaque ajout / modification de bien :   node outils/generer-pages-biens.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://www.amiltone-lyon.com';
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);

// ---- Chargement des données depuis script.js ----
let js = read('script.js');
js = js.slice(0, js.indexOf('var modal = null'));
const ctx = { document: { getElementById: () => null, querySelectorAll: () => [], querySelector: () => null } };
vm.createContext(ctx);
vm.runInContext(js, ctx);
const BIENS = ctx.BIENS;

// ---- Gabarit commun (en-tête / pied de page) repris de biens.html ----
const listing = read('biens.html');
const HEADER = listing.slice(listing.indexOf('<header>'), listing.indexOf('</header>') + 9);
const FOOTER = listing.slice(listing.indexOf('<footer'), listing.indexOf('</footer>') + 9);
const HEAD_ASSETS = listing.slice(listing.indexOf('<link rel="preconnect"'), listing.indexOf('<meta name="theme-color"'))
  + '<meta name="theme-color" content="#15150f">';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const num = (s) => String(s || '').replace(/[^\d]/g, '');
const pad = (n) => (n < 10 ? '0' : '') + n;
const img = (b, n, small) => `images/biens/${b.id}/${b.id}-${pad(n)}${small ? '-sm' : ''}.webp`;
const cover = (b) => `images/biens/${b.id}/${b.id}-cover.webp`;
const TYPE_LABEL = { maison: 'Maison', appartement: 'Appartement', terrain: 'Terrain' };

function metaDescription(b) {
  const first = b.desc.find((l) => l.length > 60) || b.desc[0] || '';
  const base = `${b.title} — ${b.surf}, ${b.price}. ${first}`;
  return base.length > 158 ? base.slice(0, 155).replace(/\s+\S*$/, '') + '…' : base;
}

function descHtml(b) {
  return b.desc.map((l) => {
    const m = l.match(/^Notre avis\s*:\s*(.*)$/i);
    if (m) return `<p class="avis-agence"><strong>Notre avis</strong>${esc(m[1])}</p>`;
    if ((l === l.toUpperCase() && /[A-Z]/.test(l)) || (/:$/.test(l) && l.length < 60)) return `<p class="lead-line">${esc(l)}</p>`;
    return `<p>${esc(l)}</p>`;
  }).join('\n            ');
}

function dpeHtml(b) {
  if (!b.dpe) return '';
  if (b.dpe.enCours) return '<p class="dpe-pending">Diagnostic de performance énergétique en cours.</p>';
  return (b.dpe.e ? ctx.dpeScale('e', b.dpe.e, b.dpe.kwh, 'kWh/m².an') : '')
    + (b.dpe.g ? ctx.dpeScale('g', b.dpe.g, b.dpe.kg, 'kg CO₂/m².an') : '');
}

function similaires(b) {
  const autres = BIENS.filter((x) => x.id !== b.id);
  const meme = autres.filter((x) => x.type === b.type);
  return meme.concat(autres.filter((x) => x.type !== b.type)).slice(0, 3);
}

function schema(b) {
  const url = `${SITE}/biens/${b.id}.html`;
  const images = [cover(b)].concat(Array.from({ length: b.photos }, (_, i) => img(b, i + 1))).slice(0, 8).map((p) => `${SITE}/${p}`);
  const listing = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: b.title,
    url,
    description: b.desc.join(' ').slice(0, 500),
    image: images,
    offers: { '@type': 'Offer', price: num(b.price), priceCurrency: 'EUR', availability: 'https://schema.org/InStock',
      seller: { '@type': 'RealEstateAgent', name: 'Amiltone Immobilier', url: SITE + '/', telephone: '+33652691476' } },
    about: {
      '@type': b.type === 'appartement' ? 'Apartment' : b.type === 'terrain' ? 'Landform' : 'SingleFamilyResidence',
      name: b.title,
      address: { '@type': 'PostalAddress', addressLocality: b.city, addressCountry: b.city === 'République dominicaine' ? 'DO' : 'FR' },
      ...(num(b.surf.split('+')[0]) ? { floorSize: { '@type': 'QuantitativeValue', value: num(b.surf.split('+')[0]), unitCode: 'MTK' } } : {}),
    },
  };
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Nos biens', item: SITE + '/biens.html' },
      { '@type': 'ListItem', position: 3, name: b.title, item: url },
    ],
  };
  return [listing, crumbs].map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`).join('\n');
}

function page(b) {
  const url = `${SITE}/biens/${b.id}.html`;
  const title = `${b.title} — ${b.price} | Amiltone Immobilier`;
  const desc = metaDescription(b);
  const n = b.photos;
  const thumbs = Array.from({ length: Math.min(n, 4) }, (_, i) => i + 1)
    .map((i) => `<button class="pb-photo" data-n="${i}" aria-label="Voir la photo ${i} sur ${n}"><img src="${img(b, i, true)}" alt="${esc(b.title)} — photo ${i}" width="480" height="360" loading="lazy" decoding="async">${i === 4 && n > 4 ? `<span class="pb-more">+${n - 4} photos</span>` : ''}</button>`)
    .join('\n          ');
  const dpe = dpeHtml(b);
  const notes = (b.notes || []).map((x) => `<p>${esc(x)}</p>`).join('');
  const visite = `contact.html?bien=${b.id}`;
  const sim = similaires(b).map((x) => ctx.bienCard(x)).join('\n        ');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<base href="/">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(b.title)} — ${esc(b.price)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="Amiltone Immobilier">
<meta property="og:image" content="${SITE}/${cover(b)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" as="image" href="${cover(b)}" fetchpriority="high">
${HEAD_ASSETS}
${schema(b)}
</head>
<body data-page="biens" data-bien="${b.id}">
${HEADER}

<main class="page-bien">
  <section class="pb-top">
    <div class="wrap">
      <nav class="pb-crumbs" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a><span>›</span><a href="biens.html">Nos biens</a><span>›</span><span>${esc(b.city)}</span></nav>
      <div class="pb-head">
        <div>
          <div class="bd-tag">${esc([...new Set([TYPE_LABEL[b.type], b.tag].filter(Boolean))].join(' · '))}${b.badge ? ` · <strong>${esc(b.badge)}</strong>` : ''}</div>
          <h1>${esc(b.title)}</h1>
          <div class="pb-facts"><span>${esc(b.city)}</span><span>${esc(b.surf)}</span></div>
        </div>
        <div class="pb-price">${esc(b.price)}</div>
      </div>
      <div class="pb-gallery${n < 2 ? ' single' : ''}">
        <button class="pb-photo pb-main" data-n="1" aria-label="Voir les ${n} photos"><img src="${cover(b)}" alt="${esc(b.title)}" width="1200" height="900" fetchpriority="high" decoding="async"></button>
        ${n > 1 ? `<div class="pb-thumbs">\n          ${thumbs}\n        </div>` : ''}
      </div>
    </div>
  </section>

  <section class="pb-body">
    <div class="wrap pb-grid">
      <article>
        <h2>Description du bien</h2>
        <div class="bd-desc">
            ${descHtml(b)}
        </div>
        ${dpe || notes ? `<div class="bd-block"><h3>Performance énergétique et informations</h3>${dpe}<div class="bd-notes">${notes}</div></div>` : ''}
        <p class="bd-legal">Prix net, hors frais notarié, d'enregistrement et de publicité foncière. Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site <a href="https://www.georisques.gouv.fr" target="_blank" rel="noopener">Géorisques</a>.</p>
      </article>
      <aside class="pb-card">
        <div class="pb-card-price">${esc(b.price)}</div>
        <p>${esc(b.surf)} · ${esc(b.city)}</p>
        <a href="${visite}" class="btn btn-dark">Demander une visite</a>
        <a href="tel:+33652691476" class="btn btn-ghost">Appeler le 06 52 69 14 76</a>
        <p class="pb-card-note">Réponse sous 24 à 48h, sans engagement.</p>
      </aside>
    </div>
  </section>

  <section class="section pb-similaires">
    <div class="wrap">
      <div class="section-head"><h2>Ces biens peuvent aussi vous intéresser</h2></div>
      <div class="biens-grid">
        ${sim}
      </div>
    </div>
  </section>
</main>

<div class="pb-sticky"><span>${esc(b.price)}</span><a href="${visite}" class="btn btn-dark">Demander une visite</a></div>

${FOOTER}

<script src="script.js"></script>
</body>
</html>
`;
}

// ---- Écriture des pages ----
fs.mkdirSync(path.join(ROOT, 'biens'), { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'biens'))) {
  if (f.endsWith('.html') && !BIENS.some((b) => `${b.id}.html` === f)) fs.unlinkSync(path.join(ROOT, 'biens', f));
}
BIENS.forEach((b) => write(`biens/${b.id}.html`, page(b)));

// ---- Sitemap ----
const today = new Date().toISOString().slice(0, 10);
const pages = [
  ['/', 'weekly', '1.0'], ['/biens.html', 'weekly', '0.9'], ['/estimation.html', 'monthly', '0.8'],
  ['/contact.html', 'monthly', '0.7'], ['/secteurs.html', 'monthly', '0.6'], ['/avis.html', 'monthly', '0.5'],
].concat(BIENS.map((b) => [`/biens/${b.id}.html`, 'weekly', '0.8']));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, f, pr]) => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${f}</changefreq>\n    <priority>${pr}</priority>\n  </url>`).join('\n')}
</urlset>
`);

// ---- Liste structurée de biens.html (pointe vers les vraies pages) ----
const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: BIENS.map((b, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/biens/${b.id}.html`, name: b.title })),
};
const listRe = /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema.org",\s*"@type": "ItemList"[\s\S]*?<\/script>/;
if (listRe.test(listing)) {
  write('biens.html', listing.replace(listRe, `<script type="application/ld+json">\n${JSON.stringify(itemList, null, 2)}\n</script>`));
}

console.log(`${BIENS.length} pages biens générées, sitemap : ${pages.length} URL.`);
