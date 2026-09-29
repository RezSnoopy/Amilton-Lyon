// ---- DATA ----
var BIENS = [
  {id:'caluire', type:'appartement', tag:'Appartement', title:'T1 — Caluire Saint-Clair', surf:'44 m²', price:'137 000 €',
   svg:'<svg viewBox="0 0 300 225" aria-hidden="true" focusable="false"><rect width="300" height="225" fill="#efe9dc"/><g stroke="#3d3c36" stroke-width="1.2" fill="none"><rect x="60" y="70" width="180" height="120"/><line x1="150" y1="70" x2="150" y2="190"/><rect x="80" y="95" width="30" height="30"/><rect x="190" y="95" width="30" height="30"/></g></svg>'},
  {id:'parcieux', type:'villa', tag:'Villa', title:'Villa — Parcieux (01600)', surf:'110 m²', price:'370 000 €',
   svg:'<svg viewBox="0 0 300 225" aria-hidden="true" focusable="false"><rect width="300" height="225" fill="#efe9dc"/><g stroke="#3d3c36" stroke-width="1.2" fill="none"><path d="M50 140 L150 80 L250 140 V190 H50 Z"/><rect x="130" y="140" width="40" height="50"/></g></svg>'},
  {id:'monceaux', type:'villa', tag:'Villa', title:'Villa — Monceaux (01090)', surf:'220 m²', price:'475 000 €',
   svg:'<svg viewBox="0 0 300 225" aria-hidden="true" focusable="false"><rect width="300" height="225" fill="#efe9dc"/><g stroke="#3d3c36" stroke-width="1.2" fill="none"><path d="M40 150 L150 90 L260 150"/><rect x="60" y="150" width="180" height="45"/><rect x="140" y="150" width="24" height="45"/></g></svg>'},
  {id:'saintfons', type:'appartement', tag:'Appartement', title:'T2 toit terrasse — Saint-Fons', surf:'42 m²', price:'134 000 €',
   svg:'<svg viewBox="0 0 300 225" aria-hidden="true" focusable="false"><rect width="300" height="225" fill="#efe9dc"/><g stroke="#3d3c36" stroke-width="1.2" fill="none"><rect x="70" y="60" width="160" height="140"/><rect x="90" y="140" width="120" height="30"/></g></svg>'},
  {id:'villefranche', type:'terrain', tag:'Terrain', title:'Terrain constructible — Villefranche', surf:'450 m²', price:'145 000 €',
   svg:'<svg viewBox="0 0 300 225" aria-hidden="true" focusable="false"><rect width="300" height="225" fill="#efe9dc"/><g stroke="#3d3c36" stroke-width="1.2" fill="none"><rect x="60" y="60" width="180" height="120"/><line x1="60" y1="120" x2="240" y2="120"/><line x1="150" y1="60" x2="150" y2="180"/></g></svg>'},
  {id:'trevoux', type:'appartement', tag:'Appartement', title:'T3 lumineux — Trévoux', surf:'68 m²', price:'215 000 €',
   svg:'<svg viewBox="0 0 300 225" aria-hidden="true" focusable="false"><rect width="300" height="225" fill="#efe9dc"/><g stroke="#3d3c36" stroke-width="1.2" fill="none"><rect x="65" y="65" width="170" height="130"/><rect x="85" y="90" width="25" height="25"/><rect x="190" y="90" width="25" height="25"/></g></svg>'}
];
var AVIS = [
  {i:'MV', n:'Mathilde V.', c:'Caluire-et-Cuire', q:'Accompagnement au top du début à la fin, disponibilité et écoute réelle sur notre projet de vente.'},
  {i:'JR', n:'Julien R.', c:'Villefranche-sur-Saône', q:'Vente conclue en moins de trois semaines, avec un suivi clair à chaque étape. Je recommande.'},
  {i:'SL', n:'Sophie L.', c:'Lyon 6e', q:"Estimation précise et honnête, très différente de ce qu'on nous avait annoncé ailleurs."},
  {i:'PD', n:'Pierre D.', c:'Trévoux', q:'Équipe réactive, très bonne connaissance du secteur. Achat finalisé sans stress.'}
];

function bienCard(b){
  return '<div class="bien-card" id="bien-'+b.id+'" data-type="'+b.type+'">'+
    '<div class="bien-media"><span class="bien-tag">'+b.tag+'</span>'+b.svg+'</div>'+
    '<div class="bien-body"><h3>'+b.title+'</h3><div class="bien-meta"><span class="surf">'+b.surf+'</span><span class="price">'+b.price+'</span></div></div></div>';
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
