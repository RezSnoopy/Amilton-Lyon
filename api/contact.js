// Fonction Vercel : reçoit les formulaires Contact et Estimation et les envoie par email via Resend.
// Variables d'environnement à définir dans Vercel (Settings → Environment Variables) :
//   RESEND_API_KEY  — clé API Resend (obligatoire)
//   CONTACT_TO      — adresse qui reçoit les demandes (obligatoire)
//   RESEND_FROM     — expéditeur, ex. "Amiltone Lyon <site@amiltone-lyon.com>" une fois le domaine vérifié
//                     (par défaut : onboarding@resend.dev, qui n'envoie qu'à l'adresse du compte Resend)

const FORMS = {
  contact: {
    subject: 'Nouveau message — Amiltone Contact',
    back: '/contact.html',
    fields: { prenom: 'Prénom', nom: 'Nom', email: 'Email', telephone: 'Téléphone', message: 'Message' },
    required: ['prenom', 'nom', 'email', 'message'],
  },
  estimation: {
    subject: "Nouvelle demande d'estimation — Amiltone",
    back: '/estimation.html',
    fields: {
      prenom: 'Prénom', nom: 'Nom', telephone: 'Téléphone', email: 'Email',
      adresse: 'Adresse du bien', type_bien: 'Type de bien', surface: 'Surface (m²)',
    },
    required: ['prenom', 'nom', 'telephone', 'email', 'adresse'],
  },
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v) => (typeof v === 'string' ? v.trim().slice(0, 5000) : '');

function redirect(res, location) {
  res.statusCode = 303;
  res.setHeader('Location', location);
  res.end();
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const raw = typeof req.body === 'string' ? req.body : await new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => { data += c; });
    req.on('end', () => resolve(data));
  });
  return Object.fromEntries(new URLSearchParams(raw));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    return res.end('Méthode non autorisée');
  }

  const body = await readBody(req);
  const form = FORMS[clean(body.formulaire)] || FORMS.contact;

  // Champ piège anti-spam : invisible pour un humain, rempli par les robots.
  if (clean(body.site_web)) return redirect(res, '/merci.html');

  const data = {};
  for (const key of Object.keys(form.fields)) data[key] = clean(body[key]);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (form.required.some((k) => !data[k]) || !emailOk) return redirect(res, form.back + '?erreur=1#formulaire');

  const { RESEND_API_KEY, CONTACT_TO, RESEND_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error('Formulaire : RESEND_API_KEY ou CONTACT_TO manquant');
    return redirect(res, form.back + '?erreur=1#formulaire');
  }

  const rows = Object.entries(form.fields)
    .filter(([k]) => data[k])
    .map(([k, label]) => `<tr><td style="padding:6px 14px 6px 0;color:#666;vertical-align:top">${esc(label)}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(data[k])}</td></tr>`)
    .join('');
  const text = Object.entries(form.fields).filter(([k]) => data[k]).map(([k, label]) => `${label} : ${data[k]}`).join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: RESEND_FROM || 'Site Amiltone <onboarding@resend.dev>',
        to: CONTACT_TO.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: data.email,
        subject: `${form.subject} — ${data.prenom} ${data.nom}`,
        html: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#15150f"><h2 style="margin:0 0 14px">${esc(form.subject)}</h2><table>${rows}</table><p style="color:#888;font-size:12px;margin-top:20px">Répondez directement à cet email pour écrire au prospect.</p></div>`,
        text,
      }),
    });
    if (!r.ok) {
      console.error('Resend', r.status, await r.text());
      return redirect(res, form.back + '?erreur=1#formulaire');
    }
  } catch (e) {
    console.error('Resend injoignable', e);
    return redirect(res, form.back + '?erreur=1#formulaire');
  }

  return redirect(res, '/merci.html');
};
