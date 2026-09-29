// ---- DATA ----
var BIENS = [
  {id:"ferme-corcelles-en-beaujolais", type:"maison", tag:"Ferme restaurée", title:"Ferme restaurée — Corcelles-en-Beaujolais (69220)", city:"Corcelles-en-Beaujolais", surf:"250 m²", price:"489 000 €", photos:7, desc:["Située au Nord de Belleville Sur Saône dans le Beaujolais, entre l'entrée sur l'autoroute et la gare TGV Macon Loché, nous vous présentons cette ferme restaurée du 19ème s, en deux logements, gîte plus habitation, sur son terrain plat de 3285 m² avec piscine et terrain de boules.", "Cuisine équipée avec électroménager,", "Chauffage poêle à granule plus chaudière fioul.", "Garage plus abris voitures", "Notre avis : Enorme potentiel avec ses deux logements pour exercer une activité de gîte ou pour location ou pour avoir simplement une habitation indépendante, pour ses parents ou sa famille.", "Possible évidemment d'occuper le tout dans son ensemble.", "Consommation moyenne énergétique annuelle: 1364 € (compris abonnements)", "Consommation énergie primaire : 30958 KWH"], dpe:{"e": "C", "kwh": "103", "g": "A", "kg": "5"}},
  {id:"maison-proche-creches-sur-saone", type:"maison", tag:"Maison", title:"Maison proche Crèches-sur-Saône", city:"Crèches-sur-Saône", surf:"106 m²", price:"249 000 €", photos:10, desc:["Idéalement situé proche de Crèches sur Saône, à 10/15 mn de la gare TGV et réseau autoroutier, nous vous présentons ce joli corps de ferme restaurée, d’environ 106 m² habitable avec son jardin d’environ 300 m².", "Vous trouverez 3 chambres, une cuisine équipée, un salon séjour , salle de bain et toilettes.", "Notre avis : Il s’agit là d’une maison joliment restaurée qui possède comme atout fort, un excellent indice de performance énergétique à C et A pour le gaz à effet de serre."], dpe:{"e": "F", "kwh": "366", "g": "F", "kg": "80"}, notes:["Consommation moyenne énergétique annuelle: entre 1090 € et 1510 € (prix moyens indexés au 1er janvier 2021 compris abonnement)"]},
  {id:"villa-parcieux", type:"maison", tag:"Villa", title:"Villa plain-pied — Parcieux (01600)", city:"Parcieux", surf:"110 m²", price:"370 000 €", photos:11, desc:["Parcieux 20 mn de Lyon, hors lotissement au calme sur son terrain de 800 m², clos et arboré, venez découvrir cette jolie villa de plain-pied.", "D'une surface de 93 m², vous trouverez une entrée, un grand séjour salon avec cheminée, une cuisine équipée avec son électroménager récent, 3 chambres, une salle d'eau avec douche à l'italienne et toilettes.", "Également garage pour deux voitures.", "Type de chauffage: électrique et bois", "Notre avis : il s'agit là d'une belle villa de construction traditionnelle et soigné, produit rare de plain pied et hors lotissement pour une vie à la campagne à seulement 20 mn de Lyon et proche de toutes commodités et réseaux routiers."], dpe:{"e": "E", "kwh": "292", "g": "B", "kg": "9"}},
  {id:"villa-montceaux", type:"maison", tag:"Villa", title:"Villa — Montceaux (01090)", city:"Montceaux", surf:"220 m²", price:"475 000 €", photos:6, desc:["Idéalement situé à Monceaux 01090, proche de Belleville sur Saône, 5mn réseau autoroute, nous vous présentons cette belle villa de 220m2 avec terrasses sur son terrain de 3300m2 .", "Vous découvrirez une très grande pièce à vivre d'environ 80 m² avec sa cheminé et sa mezzanine, une cuisine équipée, un bureau, trois chambres dont une en suite parentale avec sa salle d'eau, une salle de bains et un toilette séparé .", "Climatisation, garage double, portail électrique, grand terrain plat arboré et entretenu.", "Chauffage fioul", "Consommation énergétique moyenne annuelle : 2077 € (abonnement compris)", "Notre avis : Belle villa récente, idéale famille pour vivre à la campagne mais en restant proche de la ville et des différents réseaux autoroutier."], dpe:{"e": "C", "kwh": "139", "g": "D", "kg": "29"}},
  {id:"villa-republique-dominicaine", type:"maison", tag:"Propriété de prestige", title:"Villa de prestige — Palmar de Los Lidos, République dominicaine", city:"République dominicaine", surf:"758 m²", price:"1 300 000 €", photos:17, desc:["République dominicaine, secteur résidentiel, éloigné tourisme de masse.", "Sublime villa d'architecte offrant une vue panoramique face à l'océan sur un jardin tropical luxuriant de 3000 m².", "Cette propriété de 758 m² habitable est dotée de plusieurs réceptions et terrasses avec un grand salon ouvrant sur une magnifique piscine à débordement.", "Vous découvrirez 6 grandes suites avec salle de bain, toilette et dressing privés et accès terrasse face à l'océan. (qui seraient totalement adaptées à une exploitation en gîte de prestige).", "Prestations haut de gamme, très bon état, sans vis-à-vis.", "Appartement de gardien indépendant.", "Grand parking plus garage fermé pour deux voitures", "Grande planta (groupe électrogène plus batteries et inverseur)", "Grande citerne d'eau et récupération d'eau de pluie, laverie.", "Notre avis : Véritable coup de cœur pour cette propriété exceptionnelle à 1h de Miami et 9 h de Paris", "Celle-ci pourrait convenir à une grande famille ou à un entrepreneur/investisseur pour une exploitation en chambres d'hôtes ou en gîte de vacances en location."]},
  {id:"propriete-fontanes", type:"maison", tag:"Propriété", title:"Propriété en pierre — Fontanès (34270), proche Montpellier", city:"Fontanès", surf:"240 + 90 m²", price:"898 000 €", photos:16, desc:["Idéalement situé au calme dans les secteur Pic Saint Loup, sur la commune de Fontanès, à 20 mn de Montpellier, nous vous présentons cette belle propriété en pierre entièrement rénovée sur son terrain de 1000 m².", "Vous découvrirez une première habitation principale d'environ 240 m², également une seconde habitation attenante d'environ 90 m², cette dernière pouvant à nouveau se scinder en deux habitats distincts.", "Concernant l'habitation principale, :", "Au RDC : une grande pièce avec cuisine équipée ouverte sur la salle à manger et le salon, un cellier et un WC indépendant.", "Au 1er étage : une suite parentale avec salle d'eau, 2 chambres, un espace bureau, avec vue sur les vignes, deux salles d'eau et un WC.", "Au 2ème étage : vous trouverez un coin chambre et une pièce faisant office de salle de cinéma", "A l'extérieur : vous pourrez profiter de 130m² de terrasses dont deux parties couvertes, une piscine hors sol et un terrain de jeu de boule.", "Concernant la seconde habitation :", "Au RDC : un appartement d'environ 44 m², avec une pièce principale et sa cuisine équipée, une chambre et une salle d'eau avec WC.", "Au 1er étage : vous trouverez une pièce principale, une salle de bain et un WC.", "Cet étage peut se transformer en un habitat distinct.", "A l'extérieur : vous profiterez d'une terrasse couverte d'environ 35 m² et d'un jardin d'environ 90 m².", "Points forts :", "Vue dégagée", "Menuiseries neuves double vitrage et galandage ,", "Chauffage électrique plus climatisation réversible", "Possibilité d'exploiter une partie du terrain toujours constructible.", "Notre avis : voici une belle propriété réhabilitée avec soin, qui vous permettra de vous projeter aussi bien pour usage professionnel que personnel avec la possibilité d'utiliser des habitats distincts.", "Idéal gîte ou résidence touristique, famille recomposée, lieu de vacances.", "Consommation moyenne annuelle énergétique entre 2050 € et 2830 € abonnement compris"], dpe:{"e": "B", "kwh": "104", "g": "A", "kg": "3"}},
  {id:"terrain-villefranche-sur-saone", type:"terrain", tag:"Terrain", title:"Terrain à bâtir libre constructeur — Villefranche-sur-Saône", city:"Villefranche-sur-Saône", surf:"467 m²", price:"120 000 €", photos:1, desc:["Situé proche du centre Villefranche sur Saône suite découpe parcellaire, rue de l'égalité", "terrain à bâtir de 467 m²,", "-viabilité en bordure,", "-proche toutes commodités et écoles", "-libre constructeur", "Notre avis: produit rare à saisir"]},
  {id:"maison-limas", type:"maison", tag:"Maison", title:"Maison — Limas (69400)", city:"Limas", surf:"100 m²", price:"270 000 €", photos:17, desc:["À saisir : une maison idéale à Limas", "Découvrez cette charmante villa mitoyenne, idéalement située à Limas, à deux pas de Villefranche-sur-Saône. Nichée dans une impasse paisible, elle vous offre un cadre de vie privilégié, à 5 minutes de l’entrée d’autoroute, proche de toutes commodités et des écoles.", "Vous découvrirez au Rez-de-chaussée: une entrée accueillante, cuisine équipée, salle à manger conviviale, WC", "A l’étage : un palier desservant 4 chambres lumineuses et une salle de bain", "Terrain : Près de 500 m² arboré, offrant espace et tranquillité", "Garage : qui peut accueillir 2 voitures", "Confort moderne :Chauffage central au gaz de ville avec chaudière récente", "Notre avis : une opportunité à ne pas manquer pour ce bien à rafraichir selon ses goûts, avec une construction solide des années 70, ce bien proposé à moins de 300 000 € en fait un excellent rapport qualité-prix !", "Ne tardez pas ! Contactez-nous dès maintenant pour visiter cette maison pleine de potentiel"], dpe:{"enCours": true}},
  {id:"t3-pressense-moulin-a-vent", type:"appartement", tag:"Appartement", title:"T3 Pressensé — Moulin à Vent, Lyon 8e", city:"Lyon 8e", surf:"66 m²", price:"159 000 €", photos:14, desc:["Appartement Moulin à Vent – Pressensé", "Idéalement situé angle Ernest Renan et Francis de Pressensé, nous vous proposons ce bel appartement type T3 de 66 m² environ.", "Il est proche de toutes les commodités : transports en commun, commerces de proximité et supermarchés, écoles publiques et privés. Également proches de parcs publics et piscines municipales et non loin du boulevard périphérique.", "Il se situe au sein d’une petite copropriété sécurisée, au calme au 6ème et dernier étage avec vues dégagées, donnant Sud Est et Nord Est, traversant et lumineux avec de grandes ouvertures.", "Il est constitué d’une cuisine avec un cellier, une grande pièce à vivre avec porte fenêtre coulissante, deux chambres dont l’une avec dressing, une salle de bain avec douche et des toilettes indépendantes.", "Fenêtres et portes fenêtres récentes double vitrage, salle de bain entièrement rénovée.", "Également une cave et une place de parking en surface complètent ce bien.", "Eau et chauffage collectif", "Notre avis : Idéal premier achat, voici une belle opportunité pour cet appartement qui a beaucoup de potentiel et qui coche beaucoup de cases, quartier et environnement, lumineux et traversant, petite copropriété bien gérée et entretenue ( de nombreux travaux ont déjà été initiés, chauffage urbain, sécurisation, végétalisation, etc )", "Il est prêt à vivre mais il va pouvoir offrir toute l’opportunité de le mettre à son goût avec un petit rafraichissement, l’essentiel étant là."], dpe:{"e": "D", "kwh": "150", "g": "D", "kg": "32"}, notes:["Consommation moyenne annuelle : entre 790 € et 1 110 € par an (abonnement inclus), prix moyen 2021,2022 et 2023. Diagnostics réalisés le 24 02 2025."]},
  {id:"t2-caluire-saint-clair", type:"appartement", tag:"Appartement", title:"T2 — Caluire Saint-Clair", city:"Caluire-et-Cuire", surf:"43 m²", price:"124 000 €", photos:10, desc:["Nous vous proposons ce T2 d’environ 43 m² au 1er étage d’un immeuble ancien. Idéalement situé sur Caluire et Cuire , quartier Saint Clair, proche de toutes commodités, commerces, supermarchés, pharmacie etc , transports en communs (bus 9, 32 et 71, C1) Ecoles (Petit Versailles, Montessuy, Gilliard, Parcs, Roseraie, parc de la jeunesse)", "Notre avis : petit prix, idéal pour un premier investissement locatif avec travaux pour location saisonnière ou longue durée avec une demande forte venant de la Cité internationale ou d’étudiants.", "Quartier en renouveau proche de la Cité Internationale et du parc de la tête d’or, 5mn par la passerelle, de nombreuses places arborées, Skate Park, Roseraie de Caluire."], dpe:{"e": "E", "kwh": "259", "g": "B", "kg": "10"}, notes:["Consommation moyenne annuelle : entre 1050 € et 1470 € (abonnement compris)", "Prix moyens des énergies indexés sur les années 2021, 2022, 2023. Diagnostic effectués le 04 03 2025"]},
  {id:"maison-quincie-en-beaujolais", type:"maison", tag:"Maison", title:"Maison — Quincié-en-Beaujolais (69430)", city:"Quincié-en-Beaujolais", surf:"150 m²", price:"250 000 €", photos:11, desc:["Maison traditionnelle en plein coeur des vignes et des vallons du Beaujolais", "D'environ 95 m² sur deux niveaux cette maison se compose sur deux étages de :", "une entrée, une cuisine salle à manger, 4 chambres , une salle d'eau plus une toilette indépendante.", "Vous trouverez également : une cave , un cellier et deux grands garages.", "Pompe à chaleur récente", "Terrain fermé d'environ 1500 m²", "Notre Avis: Il s'agit là d'une maison de qualité, de construction traditionnelle qui pourra servir de base également pour un rafraichissement / rénovation pour correspondre à ses gouts. Du potentiel sur le RdC pour aménager pourquoi pas un studio."], dpe:{"e": "D", "kwh": "219", "g": "C", "kg": "11"}},
  {id:"maison-ancienne-genay", type:"maison", tag:"Maison", title:"Maison ancienne restaurée — Genay", city:"Genay", surf:"110 m²", price:"399 000 €", photos:12, desc:["MAISON ANCIENNE RESTAUREE GENAY", "Idéalement situé à Genay au calme, à 5mn à pieds de toutes commodités, commerces, bus et école, à environ 15 km de Lyon.", "Venez découvrir cette belle maison ancienne en pisé, de 110 m² habitable, 5 pièces, entièrement restaurée,", "Vous trouverez un salon avec cheminée donnant sur une véranda, 2 très grandes chambres (possible divisible) plus un bureau, 2 wc, une salle d’eau.", "Agrémenté d’un jardin de 322 m², plat et joliment arboré, avec un abri de jardin.", "Grande cave enterrée, chauffage central gaz de ville", "Autonomie électrique avec panneaux photovoltaïque récents", "Notre avis : Il s’agit là d’une maison pleine de charme, avec le potentiel de pouvoir créer 1 pièce de plus, prête à vivre avec en bonus une installation d’autosuffisance électrique récente."], dpe:{"e": "D", "kwh": "195", "g": "C", "kg": "23"}, notes:["Consommation moyenne annuelle : entre 1700 € et 2310 € (abonnement compris)", "Prix moyens des énergies indexés sur les années 2021, 2022, 2023. Diagnostic effectués le 25 10 24"]},
  {id:"t1-caluire-saint-clair", type:"appartement", tag:"Appartement", title:"T1 — Caluire Saint-Clair", city:"Caluire-et-Cuire", surf:"44 m²", price:"137 000 €", photos:10, desc:["T3 Caluire Saint Clair A RENOVER", "Nous vous proposons ce T3 d’environ 44 m² à rénover au 3e étage d’un immeuble ancien. Idéalement situé sur Caluire et Cuire , quartier Saint Clair, proche de toutes commodités, commerces, supermarchés, pharmacie etc , transports en communs (bus 9, 32 et 71, C1) Ecoles (Petit Versailles, Montessuy, Gilliard, Parcs, Roseraie, parc de la jeunesse) également de la Cité internationale et de la DOUA avec passage par la passerelle.", "Quartier en pleine mutation, de nombreux investissements et rénovations du quartier ont déjà eu lieu, Roseraie, Skate Park de renommée nationale, etc", "Notre avis : idéal pour un investissement locatif avec travaux à déduire ou premier achat habitation."], dpe:{"e": "E", "kwh": "326", "g": "B", "kg": "10"}, notes:["Consommation moyenne annuelle : entre 1140 € et 1600 € (abonnement compris)", "Prix moyens des énergies indexés sur les années 2021, 2022, 2023. Diagnostic effectués le 03 03 2025"]},
  {id:"maison-villefranche-sur-saone", type:"maison", tag:"Maison", title:"Maison de caractère — Villefranche-sur-Saône", city:"Villefranche-sur-Saône", surf:"120 m²", price:"299 000 €", photos:11, badge:"Prix en baisse", desc:["A saisir prix en baisse:", "Idéalement située, à proximité immédiate du centre de Villefranche, des commerces et de l’autoroute, cette charmante maison ancienne offre une belle surface habitable d’environ 120 m² sur deux étages, plus des combles aménageables.", "Au rez-de-chaussée : hall d’entrée, cuisine équipée, salon, séjour et WC.", "À l’étage : quatre chambres, salle d’eau avec WC.", "Vous apprécierez également la véranda d’été accessible depuis la cuisine ou l’extérieur, la cave en sous-sol et le grand garage. Le terrain clos d’environ 450 m² complète l’ensemble.", "Beaucoup de cachet : perron d’entrée, petit balcon à l’étage, charme des maisons du début du siècle.", "Notre avis : idéal pour une famille, avec possibilité d’agrandissement et création de chambres ou bureau supplémentaires."], dpe:{"e": "F", "kwh": "366", "g": "F", "kg": "80"}, notes:["Consommation moyenne énergétique annuelle: entre 2530 € et 3450 € (compris abonnement)"]},
  {id:"t3-belleville-sur-saone", type:"appartement", tag:"Appartement", title:"T3 — Belleville-sur-Saône", city:"Belleville-en-Beaujolais", surf:"88 m²", price:"152 000 €", photos:6, desc:["Idéalement situé au centre de Belleville-sur-Saône, cet appartement T3 de belle superficie de 88 m² vous séduira par ses volumes et son charme préservé.", "Il se compose de deux chambres, dont une disposant d’une alcôve offrant un espace complémentaire appréciable (bureau, dressing, coin lecture…), d’un séjour lumineux de 23 m² et d’une grande cuisine indépendante.", "Situé au 1er étage sans ascenseur, l’appartement bénéficie d’un grand balcon exposé plein sud, idéal pour profiter des beaux jours. Le sol ancien conservé apporte un véritable cachet à l’ensemble.", "Bien isolé, équipé d’une chaudière individuelle gaz récente et de fenêtres en double vitrage.", "Charges trimestrielles : environ 150 € (eau froide incluse).", "Bien soumis au régime de la copropriété.", "Notre avis : un bien en bon état, avec du charme et de faibles charges, parfait pour un premier achat ou un investissement locatif."], dpe:{"e": "D", "g": "D"}, notes:["Consommation moyenne énergétique annuelle: entre 1600 € et 2210 € (abonnement inclus – prix moyens 2021, 2022 et 2023). Diagnostics réalisés le 03/10/2024."]},
  {id:"t2-toit-terrasse-saint-fons", type:"appartement", tag:"Appartement", title:"T2 toit terrasse — centre Saint-Fons", city:"Saint-Fons", surf:"42 m²", price:"134 000 €", photos:10, desc:["En plein centre de Saint-Fons, rue Paul Bert, découvrez ce T2 en Rooftop offrant un cadre de vie lumineux et agréable, au sein d’une petite copropriété récente et sécurisée.", "Situé au 5ᵉ et dernier étage, il bénéficie d’un environnement calme et de vues dégagées. Traversant sud-est / nord-est, il profite d’une belle clarté tout au long de la journée.", "L’espace intérieur propose une grande pièce de vie avec cuisine ouverte, une chambre avec accès direct à la terrasse et une salle de bain récente. Les portes-fenêtres en double vitrage apportent confort et isolation.", "La terrasse de plus de 40 m² constitue un véritable prolongement de l’appartement. Une pièce indépendante de plus de 13 m², accessible depuis la terrasse, complète l’ensemble et offre de multiples possibilités d’aménagement.", "Cave et box fermé en sous-sol inclus.", "À proximité immédiate : commerces, écoles, transports, espaces verts et accès rapide aux grands axes.", "Notre avis: Un bien rare sur le secteur, idéal pour un premier achat ou pour ceux qui recherchent un extérieur spacieux sans s’éloigner des commodités."], dpe:{"e": "D", "kwh": "200", "g": "B", "kg": "7"}, notes:["Consommation moyenne énergétique annuelle: entre 890 € et 1269 € (abonnement inclus – prix moyens 2021, 2022 et 2023). Diagnostics réalisés janvier 2024."]},
  {id:"villa-architecte-gleize", type:"maison", tag:"Villa d'architecte", title:"Villa d'architecte — Gleizé", city:"Gleizé", surf:"178 m²", price:"489 000 €", photos:7, desc:["Idéalement placé dans un quartier résidentiel de Gleizé / Villefranche sur Saône, proche des commerces non loin de la rue Nat, proche également des écoles de Montgri ou louis Armand, nous vous proposons cette maison d’architecte de 178 m² habitable sur sous sol aménageable.", "Cette maison de famille offre 5 chambres, une pièce de réception baignée de lumière, le tout au charme vintage haut de gamme.", "Un garage double de 44 m², dépendances et véranda viennent compléter ce bien.", "Terrain de 1287 m² arboré.", "Notre avis : Il s’agit d’une belle maison d’architecte de conception moderne et intemporelle, avec un beau potentiel qui gardera son charme et saura ravir de nouveaux occupants."], dpe:{"e": "F", "kwh": "310", "g": "F", "kg": "79"}, notes:["Consommation moyenne énergétique annuelle: entre 6350 € et 8670 € (abonnement inclus – Diagnostics réalisés 09 10 2025."]},
  {id:"t4-duplex-neuf-creches-sur-saone", type:"appartement", tag:"Appartement neuf", title:"T4 duplex neuf — Crèches-sur-Saône", city:"Crèches-sur-Saône", surf:"90 m²", price:"229 000 €", photos:11, desc:["COUP DE CŒUR ASSURÉ À CRÈCHES-SUR-SAÔNE", "À seulement quelques minutes des commerces, des accès autoroutiers et de la gare TGV, découvrez ce superbe appartement neuf en duplex d’environ 90 m², niché au sein d’une charmante copropriété issue de la réhabilitation complète d’une ancienne bâtisse de caractère.", "Dès l’entrée, vous serez séduits par l’alliance réussie du cachet de l’ancien et des prestations contemporaines. Pensé pour offrir confort et convivialité, l’appartement propose une vaste pièce de vie baignée de lumière, idéale pour recevoir, ainsi qu’une cuisine aménagée au design sobre et élégant.", "L’espace nuit se compose de trois belles chambres, parfaites pour accueillir une famille, aménager un bureau ou créer un espace cocooning selon vos envies. Une salle d’eau moderne ainsi qu’un WC indépendant complètent l’ensemble.", "Côté prestations :", "Appartement neuf aux normes actuelles d’isolation", "Matériaux de qualité et finitions soignées", "Faibles consommations énergétiques", "Deux places de stationnement privatives", "Petite copropriété de seulement 19 lots", "Un bien rare sur le secteur, offrant un cadre de vie idéal entre praticité, confort moderne et charme authentique.", "Parfait pour une résidence principale, un premier achat ou un investissement locatif sécurisé."], dpe:{"e": "C", "kwh": "117", "g": "A", "kg": "3"}, notes:["Consommation moyenne énergétique annuelle: entre 830 € et 1180 € (abonnement inclus )", "Charges de copropriété : en cours", "Taxe foncière : 594 €"]}
];
var AVIS = [
  {i:'JR', n:'Jean Rabatel', c:'Client Amiltone', q:"Amiltone Lyon a su trouver le bien idéal pour moi. Service impeccable et équipe à l'écoute."}
];

// ---- IMAGES DES BIENS : images/biens/<id>/<id>-01.webp (1600px), -01-sm.webp (480px), <id>-cover.webp (800x600) ----
function bienImg(b, n, small){
  var num = (n < 10 ? '0' : '') + n;
  return 'images/biens/'+b.id+'/'+b.id+'-'+num+(small ? '-sm' : '')+'.webp';
}
function bienCover(b){ return 'images/biens/'+b.id+'/'+b.id+'-cover.webp'; }
function escAttr(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function bienCard(b){
  return '<a class="bien-card" href="biens.html#'+b.id+'" id="bien-'+b.id+'" data-id="'+b.id+'" data-type="'+b.type+'">'+
    '<div class="bien-media"><img src="'+bienCover(b)+'" alt="'+escAttr(b.title)+'" width="800" height="600" loading="lazy" decoding="async">'+
    '<span class="bien-tag">'+b.tag+'</span>'+
    (b.badge ? '<span class="bien-badge">'+b.badge+'</span>' : '')+
    (b.photos > 1 ? '<span class="bien-count">'+b.photos+' photos</span>' : '')+'</div>'+
    '<div class="bien-body"><h3>'+b.title+'</h3><div class="bien-meta"><span class="surf">'+b.surf+'</span><span class="price">'+b.price+'</span></div></div></a>';
}
function avisCard(a){
  return '<div class="avis-card"><div class="stars">★★★★★</div><p class="quote">'+a.q+'</p>'+
    '<div class="avis-who"><div class="avis-avatar">'+a.i+'</div><div><div class="n">'+a.n+'</div><div class="c">'+a.c+'</div></div></div></div>';
}
function fillIfPresent(id, html){
  var el = document.getElementById(id);
  if(el) el.innerHTML = html;
}
fillIfPresent('home-biens-preview', BIENS.slice(0,3).map(bienCard).join(''));
fillIfPresent('biens-full-grid', BIENS.map(bienCard).join(''));
fillIfPresent('home-avis-preview', AVIS.slice(0,3).map(avisCard).join(''));
fillIfPresent('avis-full-grid', AVIS.map(avisCard).join(''));

// ---- FILTERS (page Nos biens) ----
document.querySelectorAll('.filter-chip').forEach(function(chip){
  chip.addEventListener('click', function(){
    document.querySelectorAll('.filter-chip').forEach(function(c){c.classList.remove('active');});
    chip.classList.add('active');
    var f = chip.getAttribute('data-filter');
    document.querySelectorAll('#biens-full-grid .bien-card').forEach(function(card){
      card.style.display = (f==='tous' || card.getAttribute('data-type')===f) ? '' : 'none';
    });
  });
});

// ---- FICHE BIEN (galerie + description) ----
var DPE_COLORS = {
  e:{A:'#319834',B:'#33cc31',C:'#cbfc34',D:'#fbfe06',E:'#fbcc05',F:'#fc9935',G:'#fc0205'},
  g:{A:'#f6edfd',B:'#e4c7fb',C:'#d5aaf6',D:'#cb95f3',E:'#ba72ef',F:'#a74deb',G:'#8a19df'}
};
function dpeScale(kind, cls, val, unit){
  var html = '';
  'ABCDEFG'.split('').forEach(function(l){
    html += '<span class="dpe-cell'+(l===cls?' on':'')+'" style="background:'+DPE_COLORS[kind][l]+'">'+l+'</span>';
  });
  return '<div class="dpe-row"><div class="dpe-label">'+(kind==='e'?'Classe énergie':'Émissions de GES')+
    (val ? '<span>'+val+' '+unit+'</span>' : '')+'</div><div class="dpe-scale">'+html+'</div></div>';
}
function bienDetail(b){
  var desc = b.desc.map(function(l){
    var m = l.match(/^Notre avis\s*:\s*(.*)$/i);
    if(m) return '<p class="avis-agence"><strong>Notre avis</strong>'+m[1]+'</p>';
    if(l === l.toUpperCase() && /[A-Z]/.test(l) || (/:$/.test(l) && l.length < 60)) return '<p class="lead-line">'+l+'</p>';
    return '<p>'+l+'</p>';
  }).join('');
  var dpe = '';
  if(b.dpe && b.dpe.enCours) dpe = '<p class="dpe-pending">Diagnostic de performance énergétique en cours.</p>';
  else if(b.dpe) dpe = (b.dpe.e ? dpeScale('e', b.dpe.e, b.dpe.kwh, 'kWh/m².an') : '') + (b.dpe.g ? dpeScale('g', b.dpe.g, b.dpe.kg, 'kg CO₂/m².an') : '');
  var notes = (b.notes || []).map(function(n){ return '<p>'+n+'</p>'; }).join('');
  return '<div class="bd-tag">'+b.tag+(b.badge ? ' · <strong>'+b.badge+'</strong>' : '')+'</div>'+
    '<h2 id="bd-title">'+b.title+'</h2>'+
    '<div class="bd-meta"><span>'+b.surf+'</span><span class="price">'+b.price+'</span></div>'+
    '<div class="bd-desc">'+desc+'</div>'+
    (dpe || notes ? '<div class="bd-block"><h3>Informations complémentaires</h3>'+dpe+'<div class="bd-notes">'+notes+'</div></div>' : '')+
    '<p class="bd-legal">Prix net, hors frais notarié, d\'enregistrement et de publicité foncière. Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site <a href="https://www.georisques.gouv.fr" target="_blank" rel="noopener">Géorisques</a>.</p>'+
    '<div class="bd-actions"><a href="contact.html" class="btn btn-dark">Demander une visite</a><a href="contact.html" class="btn btn-ghost">Poser une question</a></div>';
}

var modal = null, current = null, idx = 1, lastFocus = null;
function buildModal(){
  modal = document.createElement('div');
  modal.className = 'bien-modal';
  modal.setAttribute('role','dialog');
  modal.setAttribute('aria-modal','true');
  modal.setAttribute('aria-labelledby','bd-title');
  modal.hidden = true;
  modal.innerHTML =
    '<div class="bm-backdrop" data-close></div>'+
    '<div class="bm-panel">'+
      '<button class="bm-close" data-close aria-label="Fermer">×</button>'+
      '<div class="bm-gallery">'+
        '<div class="bm-stage"><img class="bm-img" alt="">'+
          '<button class="bm-nav prev" aria-label="Photo précédente">‹</button>'+
          '<button class="bm-nav next" aria-label="Photo suivante">›</button>'+
          '<span class="bm-counter"></span></div>'+
        '<div class="bm-thumbs"></div>'+
      '</div>'+
      '<div class="bm-info"></div>'+
    '</div>';
  document.body.appendChild(modal);
  modal.addEventListener('click', function(e){
    if(e.target.hasAttribute('data-close')) closeBien();
    var t = e.target.closest('.bm-thumb');
    if(t) showPhoto(+t.getAttribute('data-n'));
  });
  modal.querySelector('.prev').addEventListener('click', function(){ showPhoto(idx - 1); });
  modal.querySelector('.next').addEventListener('click', function(){ showPhoto(idx + 1); });
  var x0 = null, stage = modal.querySelector('.bm-stage');
  stage.addEventListener('touchstart', function(e){ x0 = e.touches[0].clientX; }, {passive:true});
  stage.addEventListener('touchend', function(e){
    if(x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if(Math.abs(dx) > 40) showPhoto(idx + (dx < 0 ? 1 : -1));
  });
  document.addEventListener('keydown', function(e){
    if(modal.hidden) return;
    if(e.key === 'Escape') closeBien();
    if(e.key === 'ArrowLeft') showPhoto(idx - 1);
    if(e.key === 'ArrowRight') showPhoto(idx + 1);
  });
}
function showPhoto(n){
  var b = current, total = b.photos;
  idx = ((n - 1 + total) % total) + 1;
  var img = modal.querySelector('.bm-img');
  img.src = bienImg(b, idx);
  img.alt = b.title+' — photo '+idx+' sur '+total;
  modal.querySelector('.bm-counter').textContent = idx+' / '+total;
  modal.querySelectorAll('.bm-thumb').forEach(function(t){
    var on = +t.getAttribute('data-n') === idx;
    t.classList.toggle('on', on);
    if(on) t.scrollIntoView({block:'nearest', inline:'nearest'});
  });
  if(idx < total){ new Image().src = bienImg(b, idx + 1); }
}
function openBien(id){
  var b = BIENS.filter(function(x){ return x.id === id; })[0];
  if(!b) return;
  if(!modal) buildModal();
  current = b;
  lastFocus = document.activeElement;
  var thumbs = '';
  for(var i = 1; i <= b.photos; i++){
    thumbs += '<button class="bm-thumb" data-n="'+i+'" aria-label="Photo '+i+'"><img src="'+bienImg(b, i, true)+'" alt="" loading="lazy"></button>';
  }
  modal.querySelector('.bm-thumbs').innerHTML = thumbs;
  modal.querySelector('.bm-thumbs').hidden = b.photos < 2;
  modal.querySelectorAll('.bm-nav').forEach(function(btn){ btn.hidden = b.photos < 2; });
  modal.querySelector('.bm-info').innerHTML = bienDetail(b);
  modal.querySelector('.bm-info').scrollTop = 0;
  modal.hidden = false;
  document.documentElement.classList.add('modal-open');
  showPhoto(1);
  modal.querySelector('.bm-close').focus();
  if(location.hash !== '#'+id) history.replaceState(null, '', '#'+id);
  document.title = b.title+' — Amiltone Immobilier';
}
var baseTitle = document.title;
function closeBien(){
  if(!modal || modal.hidden) return;
  modal.hidden = true;
  document.documentElement.classList.remove('modal-open');
  history.replaceState(null, '', location.pathname + location.search);
  document.title = baseTitle;
  if(lastFocus) lastFocus.focus();
}

var fullGrid = document.getElementById('biens-full-grid');
if(fullGrid){
  fullGrid.addEventListener('click', function(e){
    var card = e.target.closest('.bien-card');
    if(!card) return;
    e.preventDefault();
    openBien(card.getAttribute('data-id'));
  });
  var openFromHash = function(){
    var id = location.hash.slice(1);
    if(id && BIENS.some(function(b){ return b.id === id; })) openBien(id);
  };
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
}

// ---- PARALLAXE DU HERO : l'image défile moins vite que la page ----
var heroEl = document.querySelector('.hero, .page-hero');
if(heroEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  var ticking = false;
  var updateParallax = function(){
    var y = Math.min(window.scrollY, heroEl.offsetHeight);
    heroEl.style.setProperty('--parallax', (y * 0.4).toFixed(1) + 'px');
    ticking = false;
  };
  window.addEventListener('scroll', function(){
    if(!ticking){ ticking = true; requestAnimationFrame(updateParallax); }
  }, {passive:true});
  updateParallax();
}

// ---- NAV ACTIVE STATE (basé sur data-page du body) ----
var currentPage = document.body.getAttribute('data-page') || 'accueil';
document.querySelectorAll('.navlinks a[data-nav]').forEach(function(a){
  a.classList.toggle('active', a.getAttribute('data-nav') === currentPage);
});

// ---- MOBILE MENU ----
var burger = document.querySelector('.burger');
var navlinks = document.querySelector('.navlinks');
if(burger && navlinks){
  burger.addEventListener('click', function(){
    var open = navlinks.classList.contains('mobile-open');
    navlinks.classList.toggle('mobile-open', !open);
  });
}
