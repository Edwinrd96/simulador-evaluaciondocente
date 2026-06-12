/* ═══════════════════════════════════════════════════════════════
   MINERD — Simulador EDD 2025-2026
   app.js — Sistema completo con gestión dinámica de usuarios
   Versión 2.0 — Refactorizado y mejorado
═══════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════
   SECCIÓN 1: CONFIGURACIÓN BASE Y CONSTANTES
════════════════════════════════════════════════════════════ */

/** Configuración de todos los bancos disponibles en el sistema */
const BANCOS_CFG = {
  psicologo: {
    banco: () => fusionarBanco('psicologo', bancoPreguntas),
    preguntas: 35, tiempo: (52 * 60) + 30, tiempoLbl: '52:30',
    icon: '🧠', titulo: 'Evaluación Inicial',
    subtitulo: 'Psicología Escolar — Prueba de Juicio Situacional y Marco Legal.',
    aprobacion: 25, color: '#7c3aed', colorL: '#ede9fe', chipT: '52:30 min'
  },
  psicologoExterno: {
    banco: () => fusionarBanco('psicologoExterno', bancoFormularios),
    preguntas: 35, tiempo: (52 * 60) + 30, tiempoLbl: '52:30',
    icon: '📝', titulo: 'Evaluación de Formularios Externos',
    subtitulo: 'Psicología Escolar — Formularios y situaciones de evaluación profesional.',
    aprobacion: 25, color: '#0d9488', colorL: '#ccfbf1', chipT: 'Complementario'
  },
  primaria: {
    banco: () => fusionarBanco('primaria', bancoPrimaria),
    preguntas: 40, tiempo: 60 * 60, tiempoLbl: '60:00',
    icon: '📚', titulo: 'Evaluación Inicial',
    subtitulo: 'Nivel Primario — Análisis de Casos Pedagógicos. Ordenanza 04-2023.',
    aprobacion: 28, color: '#2563eb', colorL: '#dbeafe', chipT: '60:00 min'
  },
  rimariaFiltrada: {
    banco: () => fusionarBanco('rimariaFiltrada', bancoFiltrado),
    preguntas: 40, tiempo: 60 * 60, tiempoLbl: '60:00',
    icon: '🔍', titulo: 'Evaluación Filtrada',
    subtitulo: 'Nivel Primario — Inclusión educativa y casos pedagógicos específicos.',
    aprobacion: 8, color: '#d97706', colorL: '#fef3c7', chipT: 'Filtrado'
  },
  tecnicoDistrital: {
    banco: () => fusionarBanco('tecnicoDistrital', bancoTecnicoDistrital),
    preguntas: 35, tiempo: (52 * 60) + 30, tiempoLbl: '52:30',
    icon: '🏛️', titulo: 'Evaluación Inicial',
    subtitulo: 'Técnico/a Distrital — Gestión y Asesoría Técnica Distrital.',
    aprobacion: 25, color: '#003876', colorL: '#dbeafe', chipT: '52:30 min'
  },
  tecnicoProfesional: {
    banco: () => fusionarBanco('tecnicoProfesional', bancoTecnicoProfesional),
    preguntas: 40, tiempo: 60 * 60, tiempoLbl: '60:00',
    icon: '🔧', titulo: 'Evaluación Inicial',
    subtitulo: 'Docente Técnico Profesional — Modalidad Técnico Profesional (MTP).',
    aprobacion: 14, color: '#059669', colorL: '#d1fae5', chipT: '60:00 min'
  }
};

/** Etiquetas legibles de los bancos */
const BANCO_LABELS = {
  psicologo:          '🧠 Psicólogo/a — Evaluación Inicial',
  psicologoExterno:   '📝 Psicólogo/a — Formularios Externos',
  primaria:           '📚 Primaria — Evaluación Inicial',
  rimariaFiltrada:    '🔍 Primaria — Evaluación Filtrada',
  tecnicoDistrital:   '🏛️ Técnico/a Distrital',
  tecnicoProfesional: '🔧 Técnico Profesional'
};

/** Mensajes de aliento diarios — 42 mensajes, uno diferente por día */
const MENSAJES_ALIENTO = [
  { msg: "¡El conocimiento es tu mejor herramienta! Cada pregunta que practicas te acerca más a tu meta.", emoji: "🚀" },
  { msg: "La constancia vence al talento cuando el talento no es constante. ¡Tú lo tienes todo!", emoji: "💪" },
  { msg: "No temas a la prueba real. Temes lo desconocido, pero ya lo estás conociendo.", emoji: "🎯" },
  { msg: "Cada error aquí es una lección ganada para allá. ¡Bien hecho por practicar!", emoji: "📖" },
  { msg: "El éxito en la EDD no es suerte, es preparación. ¡Y tú te estás preparando!", emoji: "🏆" },
  { msg: "Las docentes que más brillan son las que más estudian. ¡Ese eres tú hoy!", emoji: "⭐" },
  { msg: "Cada sesión de práctica construye la confianza que necesitas el día D.", emoji: "🧱" },
  { msg: "¡Vas por buen camino! La disciplina de hoy es el resultado de mañana.", emoji: "🌟" },
  { msg: "Recuerda: el MINERD evalúa tu compromiso con la educación. ¡Demuéstralo!", emoji: "🎓" },
  { msg: "No compares tu progreso con el de otros. Tu única competencia eres tú misma/o.", emoji: "🌱" },
  { msg: "El marco normativo es tu aliado. Cada ordenanza que dominas es un punto ganado.", emoji: "📋" },
  { msg: "¡La evaluación real está cerca! Cada práctica cuenta. ¡No te detengas!", emoji: "⏰" },
  { msg: "Eres más capaz de lo que crees. Los resultados de hoy lo demuestran.", emoji: "💡" },
  { msg: "La educación dominicana necesita docentes comprometidos. ¡Tú eres uno de ellos!", emoji: "🇩🇴" },
  { msg: "Cuando el día de la prueba llegue, tu mente recordará todo lo que practicaste.", emoji: "🧠" },
  { msg: "¡No te rindas! Cada intento te hace más fuerte y más sabio/a.", emoji: "🔥" },
  { msg: "Los grandes educadores no nacen, se forman. ¡Tú te estás formando ahora mismo!", emoji: "✨" },
  { msg: "Practicar hoy para brillar mañana. ¡Eso es exactamente lo que haces!", emoji: "🌅" },
  { msg: "Tu dedicación a la formación es un ejemplo para tus estudiantes. ¡Sigue así!", emoji: "👏" },
  { msg: "La EDD no es un obstáculo, es una oportunidad de demostrar lo que vales.", emoji: "🎯" },
  { msg: "Cada categoría que dominas es una fortaleza más en tu arsenal docente.", emoji: "🛡️" },
  { msg: "¡El esfuerzo de hoy se convierte en la seguridad de mañana!", emoji: "💎" },
  { msg: "Confía en el proceso. La preparación sistemática siempre da resultados.", emoji: "📈" },
  { msg: "Eres parte de la transformación educativa de República Dominicana. ¡Orgullosamente!", emoji: "🌺" },
  { msg: "¡Cada pregunta respondida correctamente es una victoria! Celebra tu avance.", emoji: "🎉" },
  { msg: "El conocimiento que acumulas hoy beneficiará a cientos de estudiantes mañana.", emoji: "❤️" },
  { msg: "¡Sigue adelante! Los mejores resultados llegan a quienes no se rinden.", emoji: "⚡" },
  { msg: "Tu compromiso con la evaluación dice mucho de tu vocación docente.", emoji: "🌠" },
  { msg: "La práctica hace al maestro, literalmente. ¡Y tú practicas cada día!", emoji: "🎵" },
  { msg: "No importa cuántas veces repitas. Cada repetición graba el conocimiento más profundo.", emoji: "🔄" },
  { msg: "¡Hoy es un buen día para aprender! Y tú ya lo elegiste así.", emoji: "☀️" },
  { msg: "El nerviosismo antes de la prueba es señal de que te importa. ¡Bien por ti!", emoji: "🦋" },
  { msg: "Cada minuto de estudio es una inversión en tu carrera y en tus estudiantes.", emoji: "💰" },
  { msg: "¡Eres imparable! La constancia que demuestras aquí te llevará lejos.", emoji: "🚂" },
  { msg: "Los docentes excepcionales se diferencian por su preparación. ¡Tú eres uno de ellos!", emoji: "👑" },
  { msg: "¡Que el conocimiento te acompañe el día de la prueba! Hoy lo estás construyendo.", emoji: "🌈" },
  { msg: "Cada sesión de práctica es un paso firme hacia la excelencia docente.", emoji: "👣" },
  { msg: "¡Tu futuro brillante como docente comienza con este esfuerzo presente!", emoji: "🌟" },
  { msg: "La educación transforma vidas. Primero la tuya, luego la de tus estudiantes.", emoji: "🦁" },
  { msg: "¡Vamos! El único límite es el que tú mismo/a te pones. ¡Rompe esos límites!", emoji: "💥" },
  { msg: "Practicar con disciplina hoy significa responder con confianza mañana.", emoji: "🎸" },
  { msg: "¡Cada intento cuenta! La perseverancia es el secreto de los grandes docentes.", emoji: "🏅" }
];

/* ════════════════════════════════════════════════════════════
   SECCIÓN 2: STORAGE — Firebase Firestore (tiempo real)
   
   TODOS los datos viven en Firestore, accesibles desde
   cualquier dispositivo en tiempo real:
   
   Colecciones:
     /usuarios/{key}         — perfiles y bancos asignados
     /sesiones/{usuario_rol} — sesión activa por banco/usuario
     /resultados/{id}        — resultados de exámenes
     /extra/{banco}          — preguntas agregadas por admin
   
   localStorage solo se usa como caché local para velocidad.
════════════════════════════════════════════════════════════ */

/** 
 * CONFIGURACIÓN FIREBASE
 * 1. Ve a https://console.firebase.google.com
 * 2. Crea un proyecto (ej: minerd-simulador)
 * 3. Agrega una app web → copia el firebaseConfig
 * 4. En Firestore → Reglas → pega las reglas de abajo
 * Edwin ingresa estos valores desde el panel admin (Configuración).
 * Se guardan en localStorage solo en su dispositivo como admin.
 */
let _fbApp = null;
let _db    = null;
let _fbCfg = null;

function fbGetCfg() {
  try { return JSON.parse(localStorage.getItem('__fb_cfg__') || 'null'); } catch(e) { return null; }
}
function fbSetCfg(cfg) {
  try { localStorage.setItem('__fb_cfg__', JSON.stringify(cfg)); } catch(e) {}
}

/** ¿Firebase está listo? */
function fbListo() { return !!_db; }

/** Inicializar Firebase con la config guardada */
async function fbInit(cfg) {
  if (!cfg || !cfg.apiKey) return false;
  try {
    // Cargar SDK de Firebase dinámicamente
    if (!window.firebase) {
      await _loadScript('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
      await _loadScript('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js');
    }
    if (firebase.apps.length === 0) {
      _fbApp = firebase.initializeApp(cfg);
    } else {
      _fbApp = firebase.apps[0];
    }
    _db = firebase.firestore();
    _fbCfg = cfg;
    return true;
  } catch(e) {
    console.error('Firebase init error:', e);
    return false;
  }
}

function _loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

/* ── CRUD genérico sobre Firestore ─────────────────────── */

async function fbSet(col, docId, data) {
  if (!fbListo()) return false;
  try {
    await _db.collection(col).doc(docId).set(data, { merge: true });
    return true;
  } catch(e) { console.error('fbSet error', e); return false; }
}

async function fbGet(col, docId) {
  if (!fbListo()) return null;
  try {
    const snap = await _db.collection(col).doc(docId).get();
    return snap.exists ? snap.data() : null;
  } catch(e) { return null; }
}

async function fbGetAll(col) {
  if (!fbListo()) return [];
  try {
    const snap = await _db.collection(col).get();
    return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
  } catch(e) { return []; }
}

async function fbDel(col, docId) {
  if (!fbListo()) return;
  try { await _db.collection(col).doc(docId).delete(); } catch(e) {}
}

async function fbAdd(col, data) {
  if (!fbListo()) return null;
  try {
    const ref = await _db.collection(col).add({ ...data, _ts: Date.now() });
    return ref.id;
  } catch(e) { return null; }
}

/** Escuchar cambios en tiempo real en una colección */
function fbListen(col, onChange) {
  if (!fbListo()) return () => {};
  const unsub = _db.collection(col).onSnapshot(snap => {
    const docs = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
    onChange(docs);
  });
  return unsub; // llamar para dejar de escuchar
}

/* ── localStorage como caché local (fallback sin red) ───── */

const CACHE_KEYS = {
  POOL:    'minerd_pool_v3',
  RESULTS: 'minerd_results_cache',
  EXTRA:   'minerd_extra_cache',
  USERS:   'minerd_users_cache'
};

const TTL = {
  POOL:    21 * 24 * 3600 * 1000,
  SESSION: 24 * 3600 * 1000
};

function sSave(key, val, ttl) {
  try { localStorage.setItem(key, JSON.stringify({ v: val, exp: Date.now() + (ttl || 999 * 24 * 3600 * 1000) })); } catch (e) {}
}
function sLoad(key) {
  try {
    const r = localStorage.getItem(key);
    if (!r) return null;
    const o = JSON.parse(r);
    if (o.exp && Date.now() > o.exp) { localStorage.removeItem(key); return null; }
    return o.v;
  } catch (e) { return null; }
}
function sDel(key) { try { localStorage.removeItem(key); } catch (e) {} }
function _sesKey(rol, usuario) { return `minerd_ses_v4_${usuario}_${rol}`; }

/* ── API de datos (usa Firebase si está listo, caché si no) */

/** USUARIOS */
async function dbGetUsuarios() {
  if (fbListo()) {
    const docs = await fbGetAll('usuarios');
    const map = {};
    docs.forEach(d => { const { _id, ...rest } = d; map[_id] = rest; });
    sSave(CACHE_KEYS.USERS, map, 0);  // actualizar caché
    return { ...USUARIOS_DEFAULT, ...map };
  }
  const cached = sLoad(CACHE_KEYS.USERS) || {};
  return { ...USUARIOS_DEFAULT, ...cached };
}
function getUsuarios() {
  // Síncrono desde caché — la versión async es dbGetUsuarios()
  const cached = sLoad(CACHE_KEYS.USERS) || {};
  return { ...USUARIOS_DEFAULT, ...cached };
}
async function dbSaveUsuario(key, data) {
  sSave(CACHE_KEYS.USERS, { ...(sLoad(CACHE_KEYS.USERS) || {}), [key]: data }, 0);
  if (fbListo()) await fbSet('usuarios', key, data);
  if (ghConfigurado()) ghPushUsuarios({ ...(sLoad(CACHE_KEYS.USERS) || {}) });
}
async function dbDelUsuario(key) {
  const cache = sLoad(CACHE_KEYS.USERS) || {};
  delete cache[key];
  sSave(CACHE_KEYS.USERS, cache, 0);
  if (fbListo()) await fbDel('usuarios', key);
}

/** RESULTADOS */
async function dbGuardarResultado(puntos, total) {
  const rec = {
    usuario: estado.usuario,
    rol: estado.rolActual,
    titulo: BANCOS_CFG[estado.rolActual]?.titulo || estado.rolActual,
    puntos, total,
    pct: ((puntos / total) * 100).toFixed(1),
    fecha: new Date().toLocaleString('es-DO'),
    ts: Date.now()
  };
  // Guardar en caché local también
  const arr = loadResults();
  arr.push(rec);
  localStorage.setItem(CACHE_KEYS.RESULTS, JSON.stringify(arr.slice(-500)));
  // Guardar en Firestore
  if (fbListo()) await fbAdd('resultados', rec);
}
function loadResults() {
  try { const r = localStorage.getItem(CACHE_KEYS.RESULTS); return r ? JSON.parse(r) : []; } catch(e) { return []; }
}
async function dbLoadResults() {
  if (!fbListo()) return loadResults();
  const docs = await fbGetAll('resultados');
  const arr  = docs.map(({ _id, ...d }) => d).sort((a, b) => (b.ts || 0) - (a.ts || 0));
  // Actualizar caché
  localStorage.setItem(CACHE_KEYS.RESULTS, JSON.stringify(arr.slice(-500)));
  return arr;
}

/** SESIONES (activa por banco/usuario) */
async function dbGuardarSesion(rol, usuario, data) {
  const key = `${usuario}_${rol}`;
  sSave(_sesKey(rol, usuario), data, TTL.SESSION);
  if (fbListo()) await fbSet('sesiones', key, { ...data, _ts: Date.now() });
}
async function dbCargarSesion(rol, usuario) {
  const key = `${usuario}_${rol}`;
  if (fbListo()) {
    const remote = await fbGet('sesiones', key);
    if (remote) { sSave(_sesKey(rol, usuario), remote, TTL.SESSION); return remote; }
  }
  return sLoad(_sesKey(rol, usuario));
}
async function dbBorrarSesion(rol, usuario) {
  sDel(_sesKey(rol, usuario));
  if (fbListo()) await fbDel('sesiones', `${usuario}_${rol}`);
}
async function dbCargarSesionesUsuario(usuario) {
  if (fbListo()) {
    const todas = await fbGetAll('sesiones');
    return todas.filter(s => s.usuario === usuario);
  }
  return Object.keys(BANCOS_CFG).map(rol => sLoad(_sesKey(rol, usuario))).filter(Boolean);
}

/** PREGUNTAS EXTRA */
function getExtra() {
  return sLoad(CACHE_KEYS.EXTRA) || {};
}
async function dbGetExtra() {
  if (fbListo()) {
    const docs = await fbGetAll('extra');
    const map  = {};
    docs.forEach(d => { const { _id, preguntas } = d; map[_id] = preguntas || []; });
    sSave(CACHE_KEYS.EXTRA, map, 0);
    return map;
  }
  return getExtra();
}
async function dbSaveExtra(bancoKey, preguntas) {
  const cache = sLoad(CACHE_KEYS.EXTRA) || {};
  cache[bancoKey] = preguntas;
  sSave(CACHE_KEYS.EXTRA, cache, 0);
  if (fbListo()) await fbSet('extra', bancoKey, { preguntas });
  if (ghConfigurado()) ghAgregarPreguntas(bancoKey, preguntas).catch(console.error);
}
function saveExtra(data) {
  sSave(CACHE_KEYS.EXTRA, data, 0);
  if (_pendienteGH) {
    const { bancoKey, preguntas } = _pendienteGH;
    _pendienteGH = null;
    if (fbListo()) fbSet('extra', bancoKey, { preguntas: data[bancoKey] || [] });
    if (ghConfigurado()) ghAgregarPreguntas(bancoKey, preguntas).catch(console.error);
  }
}

/** Compatibilidad: saveUsuarios antiguo → ahora es async por banco */
function saveUsuarios(data) {
  sSave(CACHE_KEYS.USERS, data, 0);
  if (fbListo()) {
    Object.entries(data).forEach(([key, val]) => fbSet('usuarios', key, val));
  }
}

/** Compatibilidad: guardarResultadoAdmin → ahora llama a dbGuardarResultado */
function guardarResultadoAdmin(puntos, total) {
  dbGuardarResultado(puntos, total);
}

/* ── GITHUB (solo para escritura de preguntas al .js) ───── */

const GH_CONFIG = {
  owner: 'Edwinrd96',
  repo:  'simulador-evaluaciondocente'
};
function ghGetToken() { try { return localStorage.getItem('__gh_tok__') || ''; } catch(e) { return ''; } }
function ghSetToken(t) { try { localStorage.setItem('__gh_tok__', t.trim()); } catch(e) {} }
function ghConfigurado() { return ghGetToken().length > 10; }

const GH_BANCOS_MAP = {
  psicologo:          { file: 'preguntas.js',                      varName: 'bancoPreguntas'          },
  psicologoExterno:   { file: 'preguntasdelformulariosexternos.js', varName: 'bancoFormularios'        },
  primaria:           { file: 'preguntasprimaria.js',               varName: 'bancoPrimaria'           },
  rimariaFiltrada:    { file: 'preguntasfiltradas.js',              varName: 'bancoFiltrado'           },
  tecnicoDistrital:   { file: 'tecnicodistrital.js',                varName: 'bancoTecnicoDistrital'   },
  tecnicoProfesional: { file: 'tecnicoprofesional.js',              varName: 'bancoTecnicoProfesional' }
};

function ghShowSync(msg, est) {
  let el = document.getElementById('gh-sync-badge');
  if (!el) {
    el = document.createElement('div');
    el.id = 'gh-sync-badge';
    el.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:9999;padding:10px 16px;border-radius:11px;font-size:.78rem;font-weight:800;display:flex;align-items:center;gap:8px;box-shadow:0 4px 18px rgba(0,0,0,.28);transition:opacity .5s;opacity:0';
    document.body.appendChild(el);
  }
  el.style.background = est === 'ok' ? '#14532d' : est === 'error' ? '#7f1d1d' : '#1e293b';
  el.style.color = est === 'ok' ? '#dcfce7' : est === 'error' ? '#fee2e2' : '#fff';
  el.style.opacity = '1';
  const icons = { working: '🔄', ok: '✅', error: '❌' };
  el.innerHTML = `<span>${icons[est] || '🔄'}</span><span>${msg}</span>`;
  clearTimeout(el._t);
  if (est !== 'working') el._t = setTimeout(() => { el.style.opacity = '0'; }, 3500);
}

async function ghReadFile(filename) {
  const url = `https://api.github.com/repos/${GH_CONFIG.owner}/${GH_CONFIG.repo}/contents/${filename}`;
  const r = await fetch(url, { headers: { Authorization: `token ${ghGetToken()}`, Accept: 'application/vnd.github.v3+json' } });
  if (!r.ok) throw new Error(`GitHub no pudo leer ${filename}: ${r.status}`);
  const json = await r.json();
  return { content: decodeURIComponent(escape(atob(json.content.replace(/\n/g, '')))), sha: json.sha };
}

async function ghWriteFile(filename, newContent, sha, commitMsg) {
  const url = `https://api.github.com/repos/${GH_CONFIG.owner}/${GH_CONFIG.repo}/contents/${filename}`;
  const r = await fetch(url, {
    method: 'PUT',
    headers: { Authorization: `token ${ghGetToken()}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: commitMsg || `admin: actualizar ${filename}`, content: btoa(unescape(encodeURIComponent(newContent))), sha })
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.message || `Error ${r.status}`); }
  return true;
}

async function ghAgregarPreguntas(bancoKey, nuevas) {
  if (!ghConfigurado()) return false;
  const map = GH_BANCOS_MAP[bancoKey];
  if (!map) return false;
  ghShowSync(`Guardando en ${map.file}…`, 'working');
  try {
    const { content, sha } = await ghReadFile(map.file);
    const arrayStart = content.indexOf('['), arrayEnd = content.lastIndexOf(']');
    if (arrayStart === -1 || arrayEnd === -1) throw new Error('Array no encontrado');
    let arrayStr = content.slice(arrayStart + 1, arrayEnd).trimEnd();
    if (arrayStr.trim() && !arrayStr.trimEnd().endsWith(',')) arrayStr = arrayStr.trimEnd() + ',';
    const existingIds = [...content.matchAll(/"id":\s*(\d+)/g)].map(m => parseInt(m[1]));
    let nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
    const nuevasStr = nuevas.map(p => '  ' + JSON.stringify({ id: nextId++, ...p }, null, 2).replace(/\n/g, '\n  ')).join(',\n  ');
    const newFile = `${content.slice(0, arrayStart + 1)}\n  ${arrayStr}\n  ${nuevasStr}\n${content.slice(arrayEnd)}`;
    await ghWriteFile(map.file, newFile, sha, `admin: +${nuevas.length} pregunta(s) en ${bancoKey}`);
    ghShowSync(`✓ ${nuevas.length} pregunta(s) en ${map.file}`, 'ok');
    return true;
  } catch(e) { ghShowSync('Error GitHub: ' + e.message, 'error'); return false; }
}

async function ghPushUsuarios(data) {
  if (!ghConfigurado()) return;
  ghShowSync('Guardando usuarios en GitHub…', 'working');
  try {
    let sha = null;
    try { const f = await ghReadFile('data/usuarios_extra.json'); sha = f.sha; } catch(e) {}
    const url = `https://api.github.com/repos/${GH_CONFIG.owner}/${GH_CONFIG.repo}/contents/data/usuarios_extra.json`;
    const body = { message: 'admin: actualizar usuarios', content: btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2)))) };
    if (sha) body.sha = sha;
    const r = await fetch(url, { method: 'PUT', headers: { Authorization: `token ${ghGetToken()}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (r.ok) ghShowSync('Usuarios en GitHub ✓', 'ok');
    else ghShowSync('Error al guardar usuarios en GitHub', 'error');
  } catch(e) { ghShowSync('Error: ' + e.message, 'error'); }
}

let _pendienteGH = null;

/* ════════════════════════════════════════════════════════════
   SECCIÓN 3: GESTIÓN DINÁMICA DE USUARIOS
   Usuarios guardados en localStorage, admin puede CRUD completo
════════════════════════════════════════════════════════════ */

/** Usuarios predeterminados del sistema */
const USUARIOS_DEFAULT = {
  marileidy: {
    nombre: 'Marileidy',
    av: '🧠',
    bancos: ['psicologo', 'psicologoExterno'],
    sub: 'Psicóloga Escolar — EDD 2025-2026'
  },
  fatima: {
    nombre: 'Fátima',
    av: '📚',
    bancos: ['primaria', 'rimariaFiltrada'],
    sub: 'Maestra de Primaria — EDD 2025-2026'
  },
  katherine: {
    nombre: 'Katherine',
    av: '🔧',
    bancos: ['tecnicoProfesional'],
    sub: 'Docente Técnico Profesional — EDD 2025-2026'
  },
  tecnico: {
    nombre: 'Técnico Distrital',
    av: '🏛️',
    bancos: ['tecnicoDistrital'],
    sub: 'Técnico/a Distrital — EDD 2025-2026'
  }
};

/** Admin fijo — nunca se guarda en el storage dinámico */
const ADMIN = {
  nombre: 'Edwin',
  av: '🛡️',
  sub: 'Administrador del Sistema EDD — Acceso Total'
};

/** Cargar todos los usuarios (default + dinámicos guardados) */
function getUsuarios() {
  const guardados = sLoad(CACHE_KEYS.USERS) || {};
  return { ...USUARIOS_DEFAULT, ...guardados };
}

/** Guardar cambios de usuarios dinámicos (no toca los defaults) */
function saveUsuarios(data) {
  const soloGuardados = {};
  Object.entries(data).forEach(([k, v]) => {
    const isDefault = USUARIOS_DEFAULT[k];
    if (!isDefault || JSON.stringify(isDefault.bancos) !== JSON.stringify(v.bancos) ||
        isDefault.nombre !== v.nombre || isDefault.av !== v.av) {
      soloGuardados[k] = v;
    }
  });
  sSave(CACHE_KEYS.USERS, soloGuardados, 0);
  if (ghConfigurado()) {
    ghShowSync('Guardando usuarios…', false);
    ghPushUsuarios(soloGuardados).then(() => ghShowSync('Usuarios sincronizados ✓', true));
  }
}

/** Verificar acceso — retorna info del usuario o null */
function resolverUsuario(key) {
  if (key === 'edwinrd') return { ...ADMIN, esAdmin: true, bancos: Object.keys(BANCOS_CFG) };
  const usuarios = getUsuarios();
  if (usuarios[key]) return { ...usuarios[key], esAdmin: false };
  return null;
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 4: BANCO EXTRA (preguntas agregadas por admin)
════════════════════════════════════════════════════════════ */

function fusionarBanco(rol, base) {
  const extra = getExtra();
  const adicionales = (extra[rol] || []).map((p, i) => ({
    ...p,
    id: p.id || `extra_${rol}_${i}`,
    _esExtra: true
  }));
  return [...(base || []), ...adicionales];
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 5: ESTADO GLOBAL DE LA APLICACIÓN
════════════════════════════════════════════════════════════ */

let estado = {
  usuario: '',
  esAdmin: false,
  bancosActivos: [],   // bancos que el usuario puede usar
  rolActual: null,
  preguntas: [],
  mapas: [],
  idx: 0,
  respuestas: {},
  tiempoR: 0,
  timer: null,
  impersonando: null,  // key del admin cuando impersona
  pool: sLoad(CACHE_KEYS.POOL) || {}
};

/* ════════════════════════════════════════════════════════════
   SECCIÓN 6: UTILIDADES GENERALES
════════════════════════════════════════════════════════════ */

const SCREENS = ['access-screen', 'profile-screen', 'start-screen', 'quiz-screen', 'result-screen', 'admin-screen'];
function show(id) {
  SCREENS.forEach(s => { const e = document.getElementById(s); if (e) e.classList.add('hidden'); });
  document.getElementById(id).classList.remove('hidden');
}

function norm(s) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
}
function clean(txt) { return (txt || '').replace(/^[A-Fa-f]\)\s*/, '').trim(); }

function getMensajeHoy() {
  const diaDel = Math.floor(Date.now() / (24 * 3600 * 1000));
  return MENSAJES_ALIENTO[diaDel % MENSAJES_ALIENTO.length];
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 7: MODAL GENÉRICO
════════════════════════════════════════════════════════════ */

function modal({ ico = '❓', icoClass = 'shake', title, msg, btns = [] }) {
  const bg = document.getElementById('modal-bg');
  bg.innerHTML = `
    <div class="modal">
      <span class="modal-ico ${icoClass}">${ico}</span>
      <h3>${title}</h3>
      <p>${msg}</p>
      <div class="modal-btns">
        ${btns.map((b, i) => `<button class="mb ${b.cls || 'sec'}" onclick="modalAct(${i})">${b.label}</button>`).join('')}
      </div>
    </div>`;
  bg.classList.remove('hidden');
  bg._cbs = btns.map(b => b.action || null);
}
function modalAct(i) {
  const bg = document.getElementById('modal-bg');
  bg.classList.add('hidden');
  if (bg._cbs && bg._cbs[i]) bg._cbs[i]();
}
function closeModal() { document.getElementById('modal-bg').classList.add('hidden'); }

/* ════════════════════════════════════════════════════════════
   SECCIÓN 8: ACCESO / LOGIN — Flujo por cargo
   Paso 1: seleccionar cargo (Técnico / Docente / Psicólogo)
   Paso 2: si no es Técnico, escribir nombre de usuario
════════════════════════════════════════════════════════════ */

/**
 * CARGOS definidos:
 *  tecnico   → acceso directo con key 'tecnico' (sin nombre)
 *  docente   → pide nombre; bancos: primaria, rimariaFiltrada, tecnicoProfesional
 *  psicologo → pide nombre; bancos: psicologo, psicologoExterno
 *
 * Los Técnicos Distritales usan el cargo "Técnico".
 * Los Docentes de carrera técnica (Técnico Profesional) usan "Docente".
 */
const CARGOS = {
  tecnico:   { label: 'Técnico Distrital', emoji: '🏛️', desc: 'Acceso directo — banco Técnico Distrital', direct: true  },
  docente:   { label: 'Docente',           emoji: '📚', desc: 'Primaria y Técnico Profesional',           direct: false },
  psicologo: { label: 'Psicólogo/a',       emoji: '🧠', desc: 'Psicología Escolar',                      direct: false }
};

let _cargoSeleccionado = null;

/** Renderizar los botones de cargo en la pantalla de acceso */
function renderCargos() {
  const cont = document.getElementById('ac-cargo-btns');
  if (!cont) return;
  cont.innerHTML = Object.entries(CARGOS).map(([key, c]) => `
    <button class="cargo-btn" id="cbtn-${key}" onclick="seleccionarCargo('${key}')">
      <span class="cargo-ico">${c.emoji}</span>
      <span class="cargo-lbl">${c.label}</span>
      <span class="cargo-desc">${c.desc}</span>
    </button>`).join('');
}

/** El usuario selecciona su cargo */
function seleccionarCargo(key) {
  _cargoSeleccionado = key;
  // Marcar visualmente el botón seleccionado
  document.querySelectorAll('.cargo-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById(`cbtn-${key}`);
  if (btn) btn.classList.add('selected');

  const cargo = CARGOS[key];
  const paso2 = document.getElementById('ac-paso2');
  const err   = document.getElementById('ac-err');
  if (err) err.textContent = '';

  if (cargo.direct) {
    // Técnico: mostrar botón de acceder directo, ocultar campo nombre
    paso2.innerHTML = `
      <div class="cargo-direct-msg">
        <span style="font-size:1.5rem">🏛️</span>
        <span>Acceso como <strong>Técnico Distrital</strong></span>
      </div>
      <button class="btn-go" onclick="verificarAcceso()">Acceder al Simulador →</button>`;
  } else {
    // Docente / Psicólogo: mostrar campo de nombre
    paso2.innerHTML = `
      <label class="ac-label" for="ac-inp">Tu nombre de acceso</label>
      <input type="text" id="ac-inp" class="ac-input"
        placeholder="Escribe tu nombre registrado..."
        autocomplete="off" spellcheck="false"
        onkeydown="if(event.key==='Enter') verificarAcceso()">
      <div class="ac-err" id="ac-err"></div>
      <button class="btn-go" onclick="verificarAcceso()">Acceder al Simulador →</button>`;
    setTimeout(() => { const i = document.getElementById('ac-inp'); if (i) i.focus(); }, 80);
  }
}

/** Ejecutar el acceso según cargo seleccionado */
function verificarAcceso() {
  const err = document.getElementById('ac-err');
  if (err) { err.textContent = ''; }

  if (!_cargoSeleccionado) {
    // No seleccionó cargo — resaltar la sección
    const cont = document.getElementById('ac-cargo-btns');
    if (cont) { cont.style.animation = 'none'; cont.offsetHeight; cont.style.animation = 'inpShk .35s ease'; }
    if (err) err.textContent = 'Selecciona tu cargo primero.';
    return;
  }

  const cargo = CARGOS[_cargoSeleccionado];
  let key;

  if (cargo.direct) {
    // Técnico: key fija
    key = 'tecnico';
  } else {
    // Docente / Psicólogo: normalizar nombre escrito
    const inp = document.getElementById('ac-inp');
    if (!inp || !inp.value.trim()) {
      if (err) { err.textContent = 'Por favor escribe tu nombre.'; }
      if (inp) { inp.classList.add('err'); setTimeout(() => inp.classList.remove('err'), 600); }
      return;
    }
    key = norm(inp.value);
  }

  const info = resolverUsuario(key);
  if (!info) {
    const msg = cargo.direct
      ? 'El acceso técnico no está configurado. Contacta al administrador.'
      : `El nombre <strong>"${document.getElementById('ac-inp')?.value.trim() || key}"</strong> no está registrado. Verifica o contacta al administrador.`;
    modal({
      ico: '🚫', icoClass: 'alert',
      title: 'Acceso denegado',
      msg,
      btns: [{ label: 'Intentar de nuevo', cls: 'pri', action() {
        const i = document.getElementById('ac-inp'); if (i) { i.value = ''; i.focus(); }
      }}]
    });
    if (err) err.textContent = 'Acceso no encontrado.';
    return;
  }

  estado.usuario = key;
  estado.esAdmin = info.esAdmin;
  estado.bancosActivos = info.bancos || [];

  const savedPool = sLoad(CACHE_KEYS.POOL);
  if (savedPool) estado.pool = savedPool;

  // Inicializar Firebase si hay config guardada, luego continuar
  const fbCfg = fbGetCfg();
  if (fbCfg) {
    fbInit(fbCfg).then(ok => {
      if (ok) ghShowSync('Firebase conectado ✓', 'ok');
      _continueLogin(key);
    });
  } else {
    _continueLogin(key);
  }
}

async function _continueLogin(key) {
  // Buscar sesiones activas en Firebase (todos los bancos) o caché local
  let sesionesActivas = [];
  if (fbListo()) {
    sesionesActivas = await dbCargarSesionesUsuario(key);
  } else {
    sesionesActivas = Object.keys(BANCOS_CFG)
      .map(rol => sLoad(_sesKey(rol, key)))
      .filter(s => s && s.usuario === key);
  }

  if (sesionesActivas.length > 0) {
    const ses = sesionesActivas.sort((a, b) =>
      Object.keys(b.respuestas || {}).length - Object.keys(a.respuestas || {}).length
    )[0];
    const cfg  = BANCOS_CFG[ses.rolActual];
    if (!cfg) { mostrarPerfil(); return; }
    const resp = Object.keys(ses.respuestas || {}).length;
    const total = ses.preguntas || '?';
    const restantes = total !== '?' ? total - resp : '?';
    modal({
      ico: '🔔', icoClass: 'shake',
      title: '¿Continuar donde lo dejaste?',
      msg: `Tienes <strong>${cfg.titulo}</strong> en progreso.<br>
            📍 Pregunta <strong>${(ses.idx || 0) + 1} de ${total}</strong><br>
            ✅ Respondidas: <strong>${resp}</strong> &nbsp;·&nbsp; ⏳ Pendientes: <strong>${restantes}</strong>`,
      btns: [
        { label: '▶ Continuar', cls: 'pri', action: () => restaurarSesion(ses) },
        { label: '🏠 Ir al inicio', cls: 'sec', action() {
          dbBorrarSesion(ses.rolActual, key);
          mostrarPerfil();
        }}
      ]
    });
  } else {
    mostrarPerfil();
  }
}

function errInput(inp, err, msg) {
  if (err) err.textContent = msg;
  if (inp) { inp.classList.add('err'); setTimeout(() => inp.classList.remove('err'), 600); }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCargos();
});

/** Mostrar/ocultar el panel de acceso admin */
function toggleAdminAccess() {
  const panel = document.getElementById('ac-admin-panel');
  if (!panel) return;
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    setTimeout(() => { const i = document.getElementById('ac-admin-inp'); if (i) i.focus(); }, 60);
  }
}

/** Entrar como administrador con la clave edwinrd01 */
function accederAdmin() {
  const inp = document.getElementById('ac-admin-inp');
  const err = document.getElementById('ac-err');
  if (!inp) return;
  const clave = inp.value.trim();
  if (!clave) { if (err) err.textContent = 'Escribe la clave.'; return; }

  const info = resolverUsuario(norm(clave));
  if (!info || !info.esAdmin) {
    if (err) err.textContent = 'Clave incorrecta.';
    inp.classList.add('err');
    inp.value = '';
    setTimeout(() => inp.classList.remove('err'), 600);
    return;
  }

  estado.usuario      = norm(clave);
  estado.esAdmin      = true;
  estado.bancosActivos = Object.keys(BANCOS_CFG);

  const savedPool = sLoad(CACHE_KEYS.POOL);
  if (savedPool) estado.pool = savedPool;

  if (ghConfigurado()) {
    ghShowSync('Sincronizando datos…', false);
    Promise.all([ghPullUsuarios(), ghPullExtra()]).then(() => {
      ghShowSync('Datos actualizados ✓', true);
      _continueLogin(norm(clave));
    });
  } else {
    _continueLogin(norm(clave));
  }
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 9: PERFIL DEL USUARIO
════════════════════════════════════════════════════════════ */

function salirImpersonacion() {
  if (!estado.impersonando) return;
  const adminKey = estado.impersonando;
  estado.impersonando = null;
  estado.usuario = adminKey;
  estado.esAdmin = true;
  estado.bancosActivos = Object.keys(BANCOS_CFG);
  showAdmin();
}

function mostrarPerfil() {
  // Obtener info actualizada del usuario
  const info = estado.esAdmin ? ADMIN : (getUsuarios()[estado.usuario] || { av: '🎓', nombre: estado.usuario, sub: 'EDD 2025-2026' });

  document.getElementById('w-av').textContent = info.av;
  document.getElementById('w-name').textContent = `¡Bienvenida/o, ${info.nombre}!`;
  document.getElementById('w-sub').textContent = info.sub;

  // Banner de impersonación
  const banner = document.getElementById('imp-banner');
  if (banner) {
    if (estado.impersonando) {
      banner.classList.remove('hidden');
      document.getElementById('imp-banner-txt').textContent =
        `Estás viendo la cuenta de ${info.nombre}`;
    } else {
      banner.classList.add('hidden');
    }
  }

  const grid = document.getElementById('eval-grid');
  grid.innerHTML = '';

  // Botón de panel admin
  if (estado.esAdmin && !estado.impersonando) {
    const adminBtn = document.createElement('div');
    adminBtn.className = 'eval-card';
    adminBtn.style.setProperty('--c', '#6d28d9');
    adminBtn.style.setProperty('--c-l', '#ede9fe');
    adminBtn.innerHTML = `
      <div class="ec-ico" style="background:#ede9fe;font-size:2rem">🛡️</div>
      <div class="ec-name" style="color:#6d28d9">Panel Administrador</div>
      <div class="ec-desc">Gestionar usuarios, asignar bancos, estadísticas y editor de preguntas.</div>
      <div class="ec-chips"><span class="chip" style="background:#ede9fe;color:#6d28d9">Acceso total</span></div>`;
    adminBtn.onclick = () => showAdmin();
    grid.appendChild(adminBtn);
  }

  // Tarjetas de evaluaciones
  estado.bancosActivos.forEach((rol, i) => {
    const cfg = BANCOS_CFG[rol];
    if (!cfg) return;
    if (!estado.pool[rol]) estado.pool[rol] = { ids: [], ts: Date.now() };
    const banco = cfg.banco ? cfg.banco() : [];
    const total = banco.length;
    const usados = estado.pool[rol].ids?.length || 0;
    const disp = Math.max(0, total - usados);
    const extra = getExtra()[rol]?.length || 0;
    const pct = total > 0 ? Math.round((usados / total) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'eval-card';
    card.style.setProperty('--c', cfg.color);
    card.style.setProperty('--c-l', cfg.colorL);
    card.style.animationDelay = `${i * 0.09}s`;
    card.innerHTML = `
      <div class="ec-ico" style="background:${cfg.colorL}">${cfg.icon}</div>
      <div class="ec-name">${cfg.titulo}</div>
      <div class="ec-desc">${cfg.subtitulo}</div>
      <div class="ec-chips">
        <span class="chip">${cfg.preguntas} preguntas</span>
        <span class="chip g">${cfg.chipT}</span>
        ${extra > 0 ? `<span class="chip" style="background:#dcfce7;color:#15803d">+${extra} nuevas</span>` : ''}
      </div>
      <div class="ec-pool">
        <span class="pdot${disp === 0 ? ' pdot-done' : ''}"></span>
        ${disp > 0
          ? `<strong>${disp}</strong> disponibles sin repetir`
          : '<span style="color:var(--gold-d);font-weight:800">Ciclo completo — reiniciando</span>'}
        · <span style="color:var(--muted)">banco: ${total}</span>
      </div>
      <div class="pool-bar-wrap">
        <div class="pool-bar-fill" style="width:${pct}%;background:${disp === 0 ? 'var(--gold)' : 'var(--green)'}"></div>
      </div>
      <div style="font-size:.66rem;color:var(--muted);margin-top:2px">${usados} practicadas · ${pct}% del ciclo</div>`;
    card.onclick = () => abrirStart(rol);
    grid.appendChild(card);
  });

  ocultarHdrQuiz();
  show('profile-screen');

  // Refresco del pool en vivo cada 5 seg
  clearInterval(window._poolRefreshTimer);
  window._poolRefreshTimer = setInterval(() => {
    if (!document.getElementById('profile-screen').classList.contains('hidden')) {
      estado.pool = sLoad(CACHE_KEYS.POOL) || estado.pool;
      mostrarPerfil();
    } else {
      clearInterval(window._poolRefreshTimer);
    }
  }, 5000);
}

function volverPerfil() {
  resetEstado();
  estado.rolActual = null;
  ocultarHdrQuiz();
  if (estado.impersonando) {
    salirImpersonacion();
  } else {
    mostrarPerfil();
  }
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 10: PANTALLA DE INICIO DE EVALUACIÓN
════════════════════════════════════════════════════════════ */

function abrirStart(rol) {
  estado.rolActual = rol;
  const cfg = BANCOS_CFG[rol];
  estado.tiempoR = cfg.tiempo;
  document.getElementById('st-ico').textContent   = cfg.icon;
  document.getElementById('st-title').textContent = cfg.titulo;
  document.getElementById('st-sub').textContent   = cfg.subtitulo;
  document.getElementById('st-pregs').textContent = cfg.preguntas + ' preguntas';
  document.getElementById('st-tiempo').textContent = cfg.tiempoLbl + ' min';

  if (!estado.pool[rol]) estado.pool[rol] = { ids: [], ts: Date.now() };
  const banco = cfg.banco() || [];
  const total = banco.length, usados = estado.pool[rol].ids?.length || 0, disp = Math.max(0, total - usados);
  const extra = getExtra()[rol]?.length || 0;
  document.getElementById('pool-info').innerHTML =
    `📦 Banco total: <strong>${total}</strong>${extra ? ` (incluye <strong>${extra}</strong> preguntas nuevas)` : ''} &nbsp;·&nbsp;
     ✅ Ya practicadas: <strong>${usados}</strong> &nbsp;·&nbsp;
     🔄 Sin repetir: <strong>${disp}</strong>
     ${disp === 0 ? '<br>⚡ El banco se reinicia automáticamente.' : ''}`;
  show('start-screen');
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 11: LÓGICA DEL POOL DE PREGUNTAS
════════════════════════════════════════════════════════════ */

function sacarPool(rol, n) {
  const banco = BANCOS_CFG[rol].banco();
  if (!banco || !banco.length) return [];
  if (!estado.pool[rol] || typeof estado.pool[rol] !== 'object')
    estado.pool[rol] = { ids: [], ts: Date.now() };
  const ahora = Date.now();
  if ((ahora - (estado.pool[rol].ts || 0)) > TTL.POOL || estado.pool[rol].ids.length >= banco.length) {
    estado.pool[rol] = { ids: [], ts: ahora };
  }
  const disp = banco.filter(p => !estado.pool[rol].ids.includes(p.id ?? banco.indexOf(p)));
  const sel = [...disp].sort(() => Math.random() - 0.5).slice(0, Math.min(n, disp.length));
  sel.forEach(p => {
    const id = p.id ?? banco.indexOf(p);
    if (!estado.pool[rol].ids.includes(id)) estado.pool[rol].ids.push(id);
  });
  sSave(CACHE_KEYS.POOL, estado.pool, TTL.POOL);
  return sel;
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 12: MEZCLA DE OPCIONES
════════════════════════════════════════════════════════════ */

function mezclar(p) {
  const n = p.opciones.length, ix = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ix[i], ix[j]] = [ix[j], ix[i]];
  }
  return { opciones: ix.map(i => p.opciones[i]), mapa: ix };
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 13: SESIÓN PERSISTENTE (Firebase + caché local)
════════════════════════════════════════════════════════════ */

function guardarSesion() {
  if (!estado.preguntas.length || !estado.rolActual) return;
  const banco = BANCOS_CFG[estado.rolActual]?.banco() || [];
  const data = {
    usuario: estado.usuario,
    rolActual: estado.rolActual,
    tiempoR: estado.tiempoR,
    idx: estado.idx,
    respuestas: estado.respuestas,
    mapas: estado.mapas,
    preguntas: estado.preguntas.length,
    pregIdxs: estado.preguntas.map(p => {
      return banco.findIndex(b => (b.id ?? banco.indexOf(b)) === (p.id ?? banco.indexOf(p)));
    })
  };
  // Guardar local siempre (rápido)
  sSave(_sesKey(estado.rolActual, estado.usuario), data, TTL.SESSION);
  // Guardar en Firebase en segundo plano (sin bloquear el quiz)
  dbGuardarSesion(estado.rolActual, estado.usuario, data);
}

function restaurarSesion(ses) {
  estado.rolActual = ses.rolActual;
  const cfg = BANCOS_CFG[estado.rolActual];
  if (!cfg) { mostrarPerfil(); return; }
  const banco = cfg.banco() || [];
  estado.preguntas = (ses.pregIdxs || []).map(i => banco[i]).filter(Boolean);
  if (!estado.preguntas.length) { mostrarPerfil(); return; }
  estado.mapas      = ses.mapas || estado.preguntas.map(p => mezclar(p));
  estado.idx        = ses.idx || 0;
  estado.respuestas = ses.respuestas || {};
  estado.tiempoR    = ses.tiempoR || cfg.tiempo;
  show('quiz-screen');
  mostrarHdrQuiz();
  startTimer();
  renderPregunta();
  updHdrProg();
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 14: INICIAR Y MANEJAR EL EXAMEN
════════════════════════════════════════════════════════════ */

function iniciarExamen() {
  const cfg = BANCOS_CFG[estado.rolActual];
  const sel = sacarPool(estado.rolActual, cfg.preguntas);
  if (!sel || !sel.length) {
    modal({ ico: '⚠️', icoClass: '', title: 'Error de banco',
      msg: 'No se encontraron preguntas disponibles.',
      btns: [{ label: 'OK', cls: 'pri', action: null }] });
    return;
  }
  estado.preguntas  = sel;
  estado.mapas      = estado.preguntas.map(p => mezclar(p));
  estado.idx        = 0;
  estado.respuestas = {};
  estado.tiempoR    = cfg.tiempo;
  // Limpiar sesión previa de este banco
  dbBorrarSesion(estado.rolActual, estado.usuario);
  show('quiz-screen');
  mostrarHdrQuiz();
  startTimer();
  renderPregunta();
  updHdrProg();
}

function renderPregunta() {
  const p = estado.preguntas[estado.idx], total = estado.preguntas.length;
  const { opciones } = estado.mapas[estado.idx];
  const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
  const esUltima = estado.idx === total - 1;

  document.getElementById('q-num').textContent   = `Pregunta ${estado.idx + 1} de ${total}`;
  document.getElementById('q-cat').textContent   = p.categoria || 'General';
  document.getElementById('q-txt').textContent   = p.pregunta;
  document.getElementById('mob-cnt').textContent = `${estado.idx + 1}/${total}`;
  document.getElementById('q-prog-fill').style.width = `${((estado.idx + 1) / total) * 100}%`;

  ['btn-prev', 'btn-prev-m'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.style.visibility = estado.idx === 0 ? 'hidden' : 'visible';
  });

  const nl = esUltima ? 'Finalizar ✓' : 'Siguiente →';
  const nlm = esUltima ? 'Fin ✓' : 'Sig. →';
  document.getElementById('btn-next').textContent = nl;
  const bm = document.getElementById('btn-next-m');
  if (bm) bm.textContent = nlm;
  setNext(estado.respuestas[estado.idx] !== undefined);

  const cont = document.getElementById('opts');
  cont.innerHTML = '';
  const sel = estado.respuestas[estado.idx];
  opciones.forEach((opc, j) => {
    const btn = document.createElement('button');
    btn.className = `opt${sel === j ? ' sel' : ''}`;
    btn.innerHTML = `<span class="opt-ltr">${letras[j] || j}</span><span>${clean(opc)}</span>`;
    btn.onclick = () => elegir(j, btn);
    cont.appendChild(btn);
  });
  updNav();
  updHdrProg();
  guardarSesion();
}

function elegir(j, btnRef) {
  estado.respuestas[estado.idx] = j;
  document.querySelectorAll('.opt').forEach(b => b.classList.remove('sel'));
  btnRef.classList.add('sel');
  updNav();
  setNext(true);
  updHdrProg();
  guardarSesion();
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 15: NAVEGACIÓN DEL QUIZ
════════════════════════════════════════════════════════════ */

function updNav() {
  const total = estado.preguntas.length;
  const resp  = Object.keys(estado.respuestas).length;
  const nav   = document.getElementById('qs-nav');
  nav.innerHTML = '';
  const mob = document.getElementById('mob-qrow');
  mob.innerHTML = '';

  estado.preguntas.forEach((_, i) => {
    const isCur = i === estado.idx, isAns = estado.respuestas[i] !== undefined;
    const cls = isCur ? 'cur' : (isAns ? 'ans' : '');

    const d = document.createElement('button');
    d.className = `nb${cls ? ' ' + cls : ''}`;
    d.textContent = i + 1;
    d.onclick = () => { estado.idx = i; renderPregunta(); };
    nav.appendChild(d);

    const m = document.createElement('button');
    m.className = `mob-nb${cls ? ' ' + cls : ''}`;
    m.textContent = i + 1;
    m.onclick = () => { estado.idx = i; renderPregunta(); scrollMob(i); };
    mob.appendChild(m);
  });

  document.getElementById('sb-prg').textContent = `${resp}/${total}`;
  scrollMob(estado.idx);
}

function scrollMob(i) {
  const row = document.getElementById('mob-qrow'), scroller = row?.parentElement;
  if (!scroller) return;
  const btn = row.children[i];
  if (btn) scroller.scrollTo({ left: btn.offsetLeft - (scroller.offsetWidth / 2) + (btn.offsetWidth / 2), behavior: 'smooth' });
}

function setNext(on) {
  const esUltima = estado.idx === estado.preguntas.length - 1;
  ['btn-next', 'btn-next-m'].forEach(id => {
    const b = document.getElementById(id);
    if (!b) return;
    b.disabled = !on;
    b.classList.toggle('btn-fin', on && esUltima);
  });
}

function irSiguiente() {
  if (estado.idx < estado.preguntas.length - 1) {
    estado.idx++;
    renderPregunta();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    finalizarExamen();
  }
}

function irAnterior() {
  if (estado.idx > 0) {
    estado.idx--;
    renderPregunta();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 16: HEADER DEL QUIZ (TIMER + PROGRESO)
════════════════════════════════════════════════════════════ */

function mostrarHdrQuiz() {
  document.getElementById('hdr-timer').classList.remove('hidden');
  document.getElementById('hdr-prog-wrap').classList.remove('hidden');
}
function ocultarHdrQuiz() {
  document.getElementById('hdr-timer').classList.add('hidden');
  document.getElementById('hdr-prog-wrap').classList.add('hidden');
}
function updHdrProg() {
  const total = estado.preguntas.length;
  const resp  = Object.keys(estado.respuestas).length;
  const pct   = total > 0 ? Math.round((resp / total) * 100) : 0;
  document.getElementById('hdr-prog-lbl').textContent = `${resp}/${total}`;
  document.getElementById('hdr-prog-fill').style.width = pct + '%';
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 17: TIMER
════════════════════════════════════════════════════════════ */

function startTimer() {
  if (estado.timer) clearInterval(estado.timer);
  updTimer();
  estado.timer = setInterval(() => {
    if (estado.tiempoR > 0) {
      estado.tiempoR--;
      updTimer();
      guardarSesion();
    } else {
      clearInterval(estado.timer);
      finalizarExamen();
    }
  }, 1000);
}

function updTimer() {
  const el = document.getElementById('hdr-timer-txt');
  if (!el) return;
  const m = Math.floor(estado.tiempoR / 60), s = estado.tiempoR % 60;
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  el.className = estado.tiempoR <= 60 ? 'crit' : estado.tiempoR <= 300 ? 'warn' : '';
}

window.addEventListener('beforeunload', e => {
  if (estado.preguntas.length && estado.rolActual && Object.keys(estado.respuestas).length > 0) {
    guardarSesion();
    e.preventDefault();
    e.returnValue = '';
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && estado.preguntas.length) guardarSesion();
});

/* ════════════════════════════════════════════════════════════
   SECCIÓN 18: FINALIZAR Y MOSTRAR RESULTADOS MEJORADOS
════════════════════════════════════════════════════════════ */

function finalizarExamen() {
  clearInterval(estado.timer);
  dbBorrarSesion(estado.rolActual, estado.usuario);
  ocultarHdrQuiz();
  show('result-screen');

  let puntos = 0;
  const totalQ = estado.preguntas.length;
  const categoriaStats = {};   // { catName: { ok, total } }
  const revCards = [];

  estado.preguntas.forEach((p, i) => {
    const visU  = estado.respuestas[i];
    const { opciones, mapa } = estado.mapas[i];
    const origU = visU !== undefined ? mapa[visU] : undefined;
    const ok    = origU === p.respuestaCorrecta;
    if (ok) puntos++;

    // Stats por categoría
    const cat = p.categoria || 'General';
    if (!categoriaStats[cat]) categoriaStats[cat] = { ok: 0, total: 0 };
    categoriaStats[cat].total++;
    if (ok) categoriaStats[cat].ok++;

    const posCorr = mapa.indexOf(p.respuestaCorrecta);
    const letras  = ['A', 'B', 'C', 'D', 'E', 'F'];
    const txtU    = visU !== undefined ? clean(opciones[visU]) : '<em>No respondida</em>';
    const txtC    = clean(opciones[posCorr]);

    revCards.push({ p, i, ok, visU, letras, txtU, txtC, posCorr });
  });

  guardarResultadoAdmin(puntos, totalQ);

  const pct = ((puntos / totalQ) * 100).toFixed(1);
  const n   = parseFloat(pct);
  let cls, ico, headline, msg;

  if (n >= 80)      { cls = 'rh-win';  ico = '🏆'; headline = '¡Sobresaliente!';          msg = 'Rendimiento excepcional. Dominas el contenido y estás listo/a para la evaluación real. ¡Continúa así!'; }
  else if (n >= 65) { cls = 'rh-win';  ico = '🎯'; headline = '¡Excelente trabajo!';       msg = 'Muy buen desempeño. Refuerza las áreas con errores y estarás lista/o.'; }
  else if (n >= 50) { cls = 'rh-ok';   ico = '📖'; headline = 'Vas por buen camino';        msg = 'Tienes una base sólida. Repasa los temas con más errores y vuelve a intentarlo.'; }
  else if (n >= 35) { cls = 'rh-ok';   ico = '💡'; headline = 'Sigue practicando';          msg = 'Hay áreas importantes que reforzar. Revisa el marco normativo e inténtalo de nuevo.'; }
  else              { cls = 'rh-fail'; ico = '💪'; headline = '¡Tú puedes superarlo!';      msg = 'Estudia el marco legal y los casos pedagógicos. ¡Cada intento es un aprendizaje!'; }

  document.getElementById('result-hero').className = `result-hero ${cls}`;
  document.getElementById('r-ico').textContent      = ico;
  document.getElementById('r-headline').textContent = headline;
  document.getElementById('r-score').innerHTML      = `${puntos} <span>/ ${totalQ}</span>`;
  document.getElementById('r-pct').textContent      = `${pct}% de precisión`;
  document.getElementById('r-msg').textContent      = msg;

  // Stats principales
  const noResp = totalQ - Object.keys(estado.respuestas).length;
  document.getElementById('result-stats').innerHTML = `
    <div class="rs-box"><span class="rs-n" style="color:var(--green)">${puntos}</span><span class="rs-l">Correctas</span></div>
    <div class="rs-box"><span class="rs-n" style="color:var(--red)">${totalQ - puntos - noResp}</span><span class="rs-l">Incorrectas</span></div>
    <div class="rs-box"><span class="rs-n" style="color:var(--blue)">${pct}%</span><span class="rs-l">Precisión</span></div>
    ${noResp > 0 ? `<div class="rs-box"><span class="rs-n" style="color:var(--gold-d)">${noResp}</span><span class="rs-l">Sin responder</span></div>` : ''}`;

  // Análisis por categoría
  _renderCategoriaStats(categoriaStats, n);

  // Mensaje de aliento diario
  _renderMensajeAliento(n);

  // Revisión detallada — con filtros
  _renderRevision(revCards);

  if (n >= 65)       lanzarConfeti();
  else if (n >= 40)  lanzarEstrellas();
  else               lanzarAnimo();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Render del análisis por categorías */
function _renderCategoriaStats(stats, pct) {
  const cats = Object.entries(stats).sort((a, b) => (b[1].ok / b[1].total) - (a[1].ok / a[1].total));
  if (!cats.length) return;

  const container = document.getElementById('result-cats');
  if (!container) return;

  const items = cats.map(([cat, s]) => {
    const catPct = Math.round((s.ok / s.total) * 100);
    const color  = catPct >= 70 ? 'var(--green)' : catPct >= 50 ? 'var(--gold-d)' : 'var(--red)';
    return `
      <div class="cat-stat-row">
        <div class="cat-stat-name">${cat}</div>
        <div class="cat-stat-bar-wrap">
          <div class="cat-stat-bar-fill" style="width:${catPct}%;background:${color}"></div>
        </div>
        <div class="cat-stat-num" style="color:${color}">${s.ok}/${s.total}</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="rev-title" style="margin-top:24px">Rendimiento por categoría</div>
    <div class="cat-stats-wrap">${items}</div>`;
}

/** Render del mensaje de aliento diario */
function _renderMensajeAliento(pct) {
  const container = document.getElementById('result-aliento');
  if (!container) return;
  const hoy = getMensajeHoy();
  container.innerHTML = `
    <div class="aliento-card">
      <span class="aliento-emoji">${hoy.emoji}</span>
      <p class="aliento-msg">"${hoy.msg}"</p>
      <span class="aliento-sub">Mensaje del día para la prueba real</span>
    </div>`;
}

/** Render de la revisión detallada con filtros */
let _revFiltro = 'todos';
let _revCardsData = [];

function _renderRevision(cards) {
  _revCardsData = cards;
  _revFiltro    = 'todos';
  const rev = document.getElementById('review');
  rev.innerHTML = `
    <div class="rev-filtros">
      <button class="rev-fBtn on" onclick="filtrarRevision('todos',this)">Todas (${cards.length})</button>
      <button class="rev-fBtn" onclick="filtrarRevision('fail',this)">❌ Incorrectas (${cards.filter(c => !c.ok).length})</button>
      <button class="rev-fBtn" onclick="filtrarRevision('ok',this)">✅ Correctas (${cards.filter(c => c.ok).length})</button>
    </div>
    <div id="rev-list"></div>`;
  _pintarRevision('todos');
}

function filtrarRevision(tipo, btn) {
  _revFiltro = tipo;
  document.querySelectorAll('.rev-fBtn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  _pintarRevision(tipo);
}

function _pintarRevision(tipo) {
  const list = document.getElementById('rev-list');
  if (!list) return;
  const cards = tipo === 'todos' ? _revCardsData
    : tipo === 'ok'   ? _revCardsData.filter(c => c.ok)
    : _revCardsData.filter(c => !c.ok);

  list.innerHTML = cards.map(({ p, i, ok, visU, letras, txtU, txtC, posCorr }) => {
    const noResp = visU === undefined;
    return `
      <div class="rev-card ${ok ? 'ok' : 'fail'}">
        <div class="rev-hdr">
          <span class="rev-num">Pregunta ${i + 1} · ${p.categoria || 'General'}</span>
          <span class="rev-badge ${ok ? 'badge-ok' : noResp ? 'badge-skip' : 'badge-fail'}">
            ${ok ? '✅ Correcta' : noResp ? '⏭ Omitida' : '❌ Incorrecta'}
          </span>
        </div>
        <p class="rev-q">${p.pregunta}</p>
        <div class="rev-opciones">
          ${estado.mapas[i].opciones.map((opc, j) => {
            const origJ   = estado.mapas[i].mapa[j];
            const isCorr  = origJ === p.respuestaCorrecta;
            const isUser  = j === visU;
            let cls = '';
            if (isCorr && isUser)  cls = 'rev-opt corr-user';
            else if (isCorr)       cls = 'rev-opt corr-only';
            else if (isUser)       cls = 'rev-opt user-wrong';
            else                   cls = 'rev-opt neutral';
            return `<div class="${cls}">
              <span class="rev-opt-ltr">${letras[j]}</span>
              <span>${clean(opc)}</span>
              ${isCorr ? '<span class="rev-opt-tag tag-corr">✓ Correcta</span>' : ''}
              ${isUser && !isCorr ? '<span class="rev-opt-tag tag-user">Tu respuesta</span>' : ''}
            </div>`;
          }).join('')}
        </div>
        ${p.explicacion ? `<div class="rev-exp"><strong>📌 Fundamento:</strong> ${p.explicacion}</div>` : ''}
      </div>`;
  }).join('') || '<p style="color:var(--muted);text-align:center;padding:20px">No hay preguntas en este filtro.</p>';
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 19: ANIMACIONES DE CELEBRACIÓN
════════════════════════════════════════════════════════════ */

function lanzarConfeti() {
  const canvas = document.getElementById('cel'), ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const cols = ['#f9b233', '#003876', '#22c55e', '#a855f7', '#ef4444', '#3b82f6', '#fbbf24', '#ec4899'];
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width, y: -20,
    w: 6 + Math.random() * 8, h: 10 + Math.random() * 10,
    color: cols[Math.floor(Math.random() * cols.length)],
    rot: Math.random() * 360, rotS: (Math.random() - 0.5) * 8,
    vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4,
    alpha: 1, circle: Math.random() > 0.5
  }));
  let f = 0;
  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
      if (p.circle) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
      ctx.restore();
      p.x += p.vx; p.y += p.vy; p.rot += p.rotS; p.vy += 0.04;
      if (f > 120) p.alpha -= 0.01;
    });
    f++;
    if (f < 220) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}

function lanzarEstrellas() { _emojiRain(['⭐', '🌟', '✨', '💫', '🎉', '🎊'], 16); }
function lanzarAnimo()    { _emojiRain(['💪', '📚', '🌱', '✏️', '🎯', '🔥', '🧠'], 12); }

function _emojiRain(emojis, count) {
  const ov = document.getElementById('cel'), ctx = ov.getContext('2d');
  ov.width = window.innerWidth; ov.height = window.innerHeight;
  const items = Array.from({ length: count }, () => ({
    x: Math.random() * ov.width * 0.9 + ov.width * 0.05,
    y: Math.random() * ov.height * 0.8 + ov.height * 0.05,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    size: 30 + Math.random() * 30, alpha: 0, scale: 0
  }));
  let f = 0;
  (function draw() {
    ctx.clearRect(0, 0, ov.width, ov.height);
    items.forEach((it, i) => {
      const delay = i * 4;
      if (f > delay) {
        if (it.scale < 1) it.scale = Math.min(1, it.scale + 0.08);
        it.alpha = f > delay + 30 ? Math.max(0, 1 - ((f - delay - 30) / 80)) : it.scale;
      }
      if (it.alpha > 0) {
        ctx.save(); ctx.globalAlpha = it.alpha; ctx.translate(it.x, it.y);
        ctx.scale(it.scale, it.scale); ctx.font = `${it.size}px serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(it.emoji, 0, 0); ctx.restore();
      }
    });
    f++;
    if (f < 200) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, ov.width, ov.height);
  })();
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 20: ADMIN — GUARDAR Y CARGAR RESULTADOS
════════════════════════════════════════════════════════════ */

function guardarResultadoAdmin(puntos, total) {
  try {
    const raw = localStorage.getItem(CACHE_KEYS.RESULTS);
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({
      usuario: estado.usuario,
      rol: estado.rolActual,
      titulo: BANCOS_CFG[estado.rolActual]?.titulo,
      puntos, total,
      pct: ((puntos / total) * 100).toFixed(1),
      fecha: new Date().toLocaleString('es-DO'),
      ts: Date.now()
    });
    localStorage.setItem(CACHE_KEYS.RESULTS, JSON.stringify(arr.slice(-300)));
  } catch (e) {}
}

function loadResults() {
  try { const r = localStorage.getItem(CACHE_KEYS.RESULTS); return r ? JSON.parse(r) : []; } catch (e) { return []; }
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 21: PANEL DE ADMINISTRACIÓN
════════════════════════════════════════════════════════════ */

function showAdmin() {
  ocultarHdrQuiz();
  show('admin-screen');
  document.querySelector('.admin-tabs').innerHTML = `
    <button class="atab on"  onclick="adminTab('stats',this)">📊 Estadísticas</button>
    <button class="atab"     onclick="adminTab('users',this)">👥 Usuarios</button>
    <button class="atab"     onclick="adminTab('sessions',this)">📋 Sesiones</button>
    <button class="atab"     onclick="adminTab('banks',this)">📚 Bancos</button>
    <button class="atab"     onclick="adminTab('editor',this)">✏️ Editor</button>`;
  adminTab('stats', null);
}

let _tabActual = 'stats';

function adminTab(tab, btn) {
  _tabActual = tab;
  document.querySelectorAll('.atab').forEach(b => b.classList.remove('on'));
  if (btn) {
    btn.classList.add('on');
  } else {
    const tabs = ['stats', 'users', 'sessions', 'banks', 'editor'];
    document.querySelectorAll('.atab').forEach((b, i) => { if (tabs[i] === tab) b.classList.add('on'); });
  }
  const panel = document.getElementById('apanel');
  panel.innerHTML = '<div style="padding:30px;text-align:center;color:var(--muted)">⏳ Cargando datos…</div>';

  // Cargar resultados desde Firebase (o caché) luego renderizar
  dbLoadResults().then(results => {
    if (tab === 'stats')       renderTabStats(panel, results);
    else if (tab === 'users')  renderTabUsers(panel, results);
    else if (tab === 'sessions') renderTabSessions(panel, results);
    else if (tab === 'banks')  renderTabBanks(panel);
    else if (tab === 'editor') renderEditor();
  });
}

/* ── TAB: ESTADÍSTICAS ─────────────────────────────────── */
function renderTabStats(panel, results) {
  const tot   = results.length;
  const avg   = tot > 0 ? (results.reduce((a, r) => a + parseFloat(r.pct), 0) / tot).toFixed(1) : '0.0';
  const users = [...new Set(results.map(r => r.usuario))];
  const byRol = {};
  results.forEach(r => { if (!byRol[r.rol]) byRol[r.rol] = { count: 0, sumPct: 0 }; byRol[r.rol].count++; byRol[r.rol].sumPct += parseFloat(r.pct); });
  const extra = getExtra();
  const totalExtra = Object.values(extra).reduce((a, v) => a + (v.length || 0), 0);
  const fbOk = fbListo();
  const ghOk = ghConfigurado();
  const savedFbCfg = fbGetCfg();

  panel.innerHTML = `
    <!-- ══ FIREBASE ══ -->
    <div style="background:${fbOk?'#f0fdf4':'#fffbeb'};border:2px solid ${fbOk?'#22c55e':'#f9b233'};border-radius:14px;padding:16px 18px;margin-bottom:14px">
      <div style="font-weight:900;font-size:.9rem;margin-bottom:8px">${fbOk?'✅ Firebase conectado — datos en tiempo real':'⚙️ Configurar Firebase (datos en tiempo real)'}</div>
      ${fbOk
        ? `<div style="font-size:.75rem;color:var(--muted)">Proyecto: <strong>${savedFbCfg?.projectId||'—'}</strong> · Resultados, sesiones y usuarios sincronizados en tiempo real desde cualquier dispositivo.</div>`
        : `<div style="font-size:.75rem;color:#92400e;margin-bottom:10px;line-height:1.5">Sin Firebase los datos solo existen en este dispositivo. Configúralo para ver estadísticas de todos los usuarios desde cualquier lugar.</div>
           <textarea id="fb-cfg-inp" rows="6" placeholder='Pega aquí el objeto firebaseConfig:\n{\n  "apiKey": "...",\n  "authDomain": "...",\n  "projectId": "...",\n  "storageBucket": "...",\n  "messagingSenderId": "...",\n  "appId": "..."\n}' style="width:100%;box-sizing:border-box;padding:9px;border:2px solid var(--border);border-radius:9px;font-family:monospace;font-size:.75rem;resize:vertical"></textarea>
           <button onclick="guardarFirebaseCfg()" style="margin-top:8px;padding:9px 16px;background:var(--blue);color:#fff;border:none;border-radius:9px;font-family:'Nunito',sans-serif;font-size:.83rem;font-weight:800;cursor:pointer">Conectar Firebase →</button>`}
      <div id="fb-cfg-fb" style="font-size:.76rem;margin-top:7px;font-weight:800"></div>
    </div>
    <!-- ══ GITHUB ══ -->
    <div style="background:${ghOk?'#f0fdf4':'#f8fafc'};border:2px solid ${ghOk?'#22c55e':'var(--border)'};border-radius:14px;padding:13px 18px;margin-bottom:22px">
      <div style="font-weight:900;font-size:.85rem;margin-bottom:8px">${ghOk?'✅ GitHub configurado — preguntas se escriben en el código':'⚙️ GitHub Token (para guardar preguntas en el código)'}</div>
      <div style="display:flex;gap:8px;align-items:center">
        <input type="password" id="gh-tok-inp" placeholder="Token ghp_..." style="flex:1;padding:8px 12px;border:2px solid var(--border);border-radius:9px;font-family:'Nunito',sans-serif;font-size:.82rem" value="${ghOk?'•'.repeat(16):''}">
        <button onclick="guardarToken()" style="padding:8px 14px;background:var(--blue);color:#fff;border:none;border-radius:9px;font-family:'Nunito',sans-serif;font-size:.82rem;font-weight:800;cursor:pointer">Guardar</button>
        ${ghOk?`<button onclick="borrarToken()" style="padding:8px 10px;background:var(--red-l);color:var(--red);border:2px solid var(--red);border-radius:9px;font-size:.82rem;cursor:pointer">🗑</button>`:''}
      </div>
      <div id="gh-tok-fb" style="font-size:.75rem;margin-top:6px;font-weight:800"></div>
    </div>
    <h3>📊 Estadísticas del Sistema</h3>
    <div class="a-stat-row">
      <div class="a-stat"><div class="n">${tot}</div><div class="l">Exámenes completados</div></div>
      <div class="a-stat"><div class="n">${users.length}</div><div class="l">Usuarios únicos</div></div>
      <div class="a-stat"><div class="n">${avg}%</div><div class="l">Precisión promedio</div></div>
      <div class="a-stat"><div class="n" style="color:var(--green)">${totalExtra}</div><div class="l">Preguntas agregadas</div></div>
    </div>
    <h3 style="margin-bottom:12px">Rendimiento por evaluación</h3>
    <div class="a-stat-row">
      ${Object.entries(byRol).map(([r,s])=>{const p=(s.sumPct/s.count).toFixed(1);return`<div class="a-stat"><div class="n">${s.count}</div><div class="l" style="font-size:.62rem">${BANCOS_CFG[r]?.titulo||r}</div><div style="font-size:.72rem;color:${parseFloat(p)>=60?'var(--green)':'var(--red)'};margin-top:4px;font-weight:800">Prom: ${p}%</div></div>`;}).join('')}
      ${Object.keys(byRol).length===0?'<p style="color:var(--muted);font-size:.85rem">Sin datos aún.</p>':''}
    </div>
    ${_renderGraficoUsuarios(results)}`;
}

async function guardarFirebaseCfg() {
  const inp = document.getElementById('fb-cfg-inp');
  const fb2 = document.getElementById('fb-cfg-fb');
  if (!inp) return;
  try {
    const jsonStr = inp.value.trim().replace(/([{,]\s*)(\w+)(\s*:)/g,'$1"$2"$3');
    const cfg = JSON.parse(jsonStr);
    if (!cfg.apiKey || !cfg.projectId) throw new Error('Faltan apiKey o projectId');
    fbSetCfg(cfg);
    fb2.textContent = '⏳ Conectando…'; fb2.style.color = 'var(--muted)';
    const ok = await fbInit(cfg);
    if (ok) { fb2.textContent = '✅ Firebase conectado.'; fb2.style.color = 'var(--green)'; setTimeout(() => adminTab('stats', null), 1000); }
    else { fb2.textContent = '❌ No se pudo conectar. Verifica la config.'; fb2.style.color = 'var(--red)'; }
  } catch(e) { const fb2b = document.getElementById('fb-cfg-fb'); if(fb2b){fb2b.textContent='❌ '+e.message;fb2b.style.color='var(--red)';} }
}

function guardarToken() {
  const inp = document.getElementById('gh-tok-inp'), fb2 = document.getElementById('gh-tok-fb');
  if (!inp) return;
  const val = inp.value.trim();
  if (!val || val.includes('•')) { fb2.textContent='⚠️ Pega el token real (empieza con ghp_).'; fb2.style.color='var(--red)'; return; }
  ghSetToken(val);
  fb2.textContent = '✅ Token guardado. Las preguntas nuevas se escribirán en el código del simulador.';
  fb2.style.color = 'var(--green)'; inp.value = '•'.repeat(16);
}

function borrarToken() { ghSetToken(''); adminTab('stats', null); }

function _renderGraficoUsuarios(results) {
  if (!results.length) return '';
  const usuarios = getUsuarios();
  const porUsuario = {};
  results.forEach(r => {
    if (!porUsuario[r.usuario]) porUsuario[r.usuario] = { count: 0, sumPct: 0 };
    porUsuario[r.usuario].count++;
    porUsuario[r.usuario].sumPct += parseFloat(r.pct);
  });
  const rows = Object.entries(porUsuario).map(([key, s]) => {
    const info = key === 'edwin' ? ADMIN : (usuarios[key] || { av: '👤', nombre: key });
    const prom = (s.sumPct / s.count).toFixed(1);
    const color = parseFloat(prom) >= 60 ? 'var(--green)' : parseFloat(prom) >= 40 ? 'var(--gold-d)' : 'var(--red)';
    return `
      <div class="urow">
        <div class="urow-av">${info.av || '👤'}</div>
        <div class="urow-info">
          <div class="urow-name">${info.nombre || key}</div>
          <div class="urow-det">${s.count} examen${s.count !== 1 ? 'es' : ''} completado${s.count !== 1 ? 's' : ''}</div>
        </div>
        <div class="urow-sc" style="color:${color}">${prom}% promedio</div>
      </div>`;
  }).join('');
  return `<h3 style="margin-bottom:12px">Rendimiento por usuario</h3>${rows}`;
}

/**
 * Actualiza solo el grid de usuarios sin re-renderizar todo el tab,
 * evitando el parpadeo al crear/editar/eliminar usuarios.
 */
function _actualizarUsersGrid() {
  const grid = document.getElementById('users-grid');
  if (!grid) { adminTab('users', null); return; }
  const usuarios = getUsuarios();
  const results  = loadResults();
  grid.innerHTML = Object.entries(usuarios)
    .map(([key, info]) => _renderUserCard(key, info, results))
    .join('');
}

/* ── TAB: GESTIÓN DE USUARIOS ──────────────────────────── */
function renderTabUsers(panel, results) {
  const usuarios = getUsuarios();
  panel.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:18px">
      <h3 style="margin:0">👥 Gestión de Usuarios</h3>
      <button onclick="abrirModalNuevoUsuario()" class="btn-adm-add">➕ Nuevo usuario</button>
    </div>
    <p style="font-size:.82rem;color:var(--muted);margin-bottom:18px;line-height:1.6">
      Administra los usuarios del sistema. Asigna o quita bancos de preguntas, edita información y visualiza su actividad.
    </p>
    <div id="users-grid" style="display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(290px,1fr))">
      ${Object.entries(usuarios).map(([key, info]) => _renderUserCard(key, info, results)).join('')}
    </div>`;
}

function _renderUserCard(key, info, results) {
  const userResults = results.filter(r => r.usuario === key);
  const lastRes     = userResults.sort((a, b) => b.ts - a.ts)[0];
  const avgPct      = userResults.length > 0
    ? (userResults.reduce((a, r) => a + parseFloat(r.pct), 0) / userResults.length).toFixed(1)
    : null;
  const bancos      = info.bancos || [];
  const isDefault   = !!USUARIOS_DEFAULT[key];

  return `
    <div class="user-admin-card" id="ucard-${key}">
      <div class="uac-top">
        <div class="uac-av">${info.av || '👤'}</div>
        <div class="uac-info">
          <div class="uac-name">${info.nombre}</div>
          <div class="uac-sub">${info.sub || ''}</div>
        </div>
        ${isDefault ? '<span class="uac-badge-default">Predeterminado</span>' : ''}
      </div>
      <div class="uac-bancos-label">Bancos asignados (${bancos.length})</div>
      <div class="uac-bancos">
        ${bancos.length > 0
          ? bancos.map(b => `<span class="uac-banco-chip" title="${BANCO_LABELS[b] || b}">${BANCOS_CFG[b]?.icon || '📋'} ${BANCOS_CFG[b]?.titulo || b}</span>`).join('')
          : '<span style="color:var(--muted);font-size:.76rem">Sin bancos asignados</span>'}
      </div>
      <div class="uac-stats">
        ${avgPct !== null
          ? `<span>📊 Promedio: <strong style="color:${parseFloat(avgPct)>=60?'var(--green)':'var(--red)'}">${avgPct}%</strong></span>`
          : '<span style="color:var(--muted)">Sin exámenes aún</span>'}
        ${lastRes ? `<span>🕐 Último: ${lastRes.fecha}</span>` : ''}
      </div>
      <div class="uac-actions">
        <button onclick="abrirModalEditarUsuario('${key}')" class="uac-btn-edit">✏️ Editar</button>
        <button onclick="abrirModalAsignarBancos('${key}')" class="uac-btn-banks">📚 Bancos</button>
        <button onclick="impersonarUsuario('${key}')" class="uac-btn-view">🔍 Ver como</button>
        ${!isDefault ? `<button onclick="confirmarEliminarUsuario('${key}')" class="uac-btn-del">🗑</button>` : ''}
      </div>
    </div>`;
}

/* ── MODALES DE GESTIÓN DE USUARIOS ─────────────────────── */
function abrirModalNuevoUsuario() {
  const bg = document.getElementById('modal-bg');
  const avatares = ['👤','🧠','📚','🔧','🏛️','🎓','📝','🌟','💼','🎯','🌺','⭐'];
  bg.innerHTML = `
    <div class="modal" style="max-width:480px;text-align:left">
      <span class="modal-ico">➕</span>
      <h3 style="text-align:center">Nuevo Usuario</h3>
      <div class="ef-row">
        <label class="ef-label">Nombre de acceso (sin tildes, sin espacios) *</label>
        <input type="text" id="nu-key" class="ef-input" placeholder="ej: ana, carmen, jose" style="text-transform:lowercase">
      </div>
      <div class="ef-row">
        <label class="ef-label">Nombre completo *</label>
        <input type="text" id="nu-nombre" class="ef-input" placeholder="Ej: Ana García">
      </div>
      <div class="ef-row">
        <label class="ef-label">Descripción / cargo</label>
        <input type="text" id="nu-sub" class="ef-input" placeholder="Ej: Psicóloga Escolar — EDD 2025-2026">
      </div>
      <div class="ef-row">
        <label class="ef-label">Ícono de avatar</label>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:4px">
          ${avatares.map((av, i) => `
            <button onclick="selAvatar(this,'${av}')" class="av-btn${i === 0 ? ' av-sel' : ''}" data-av="${av}"
              style="width:38px;height:38px;border-radius:9px;border:2px solid var(--border);background:var(--bg);font-size:1.2rem;cursor:pointer;transition:all .2s${i === 0 ? ';border-color:var(--blue);background:var(--blue-l)' : ''}">
              ${av}
            </button>`).join('')}
        </div>
        <input type="hidden" id="nu-av" value="${avatares[0]}">
      </div>
      <div id="nu-err" style="color:var(--red);font-size:.8rem;font-weight:800;min-height:16px;margin-bottom:8px"></div>
      <div class="modal-btns">
        <button class="mb sec" onclick="closeModal()">Cancelar</button>
        <button class="mb pri" onclick="crearUsuario()">Crear usuario →</button>
      </div>
    </div>`;
  bg.classList.remove('hidden');
}

function selAvatar(btn, av) {
  document.querySelectorAll('.av-btn').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.background  = 'var(--bg)';
  });
  btn.style.borderColor = 'var(--blue)';
  btn.style.background  = 'var(--blue-l)';
  document.getElementById('nu-av').value = av;
}

function crearUsuario() {
  const key    = norm(document.getElementById('nu-key').value);
  const nombre = document.getElementById('nu-nombre').value.trim();
  const sub    = document.getElementById('nu-sub').value.trim();
  const av     = document.getElementById('nu-av').value;
  const errEl  = document.getElementById('nu-err');

  if (!key)    { errEl.textContent = '⚠️ El nombre de acceso es obligatorio.'; return; }
  if (!nombre) { errEl.textContent = '⚠️ El nombre completo es obligatorio.'; return; }
  if (key === 'edwin') { errEl.textContent = '⚠️ No puedes usar "edwin" como nombre.'; return; }

  const usuarios = getUsuarios();
  if (usuarios[key]) { errEl.textContent = `⚠️ Ya existe un usuario con el nombre "${key}".`; return; }

  usuarios[key] = { nombre, av, sub: sub || 'Usuario — EDD 2025-2026', bancos: [] };
  saveUsuarios(usuarios);
  closeModal();
  _actualizarUsersGrid();
}

function abrirModalEditarUsuario(key) {
  const usuarios = getUsuarios();
  const info     = usuarios[key];
  if (!info) return;
  const avatares = ['👤','🧠','📚','🔧','🏛️','🎓','📝','🌟','💼','🎯','🌺','⭐'];
  const bg = document.getElementById('modal-bg');
  bg.innerHTML = `
    <div class="modal" style="max-width:480px;text-align:left">
      <span class="modal-ico">✏️</span>
      <h3 style="text-align:center">Editar Usuario</h3>
      <div class="ef-row">
        <label class="ef-label">Nombre de acceso</label>
        <input type="text" class="ef-input" value="${key}" disabled style="opacity:.6;cursor:not-allowed">
      </div>
      <div class="ef-row">
        <label class="ef-label">Nombre completo *</label>
        <input type="text" id="eu-nombre" class="ef-input" value="${info.nombre}">
      </div>
      <div class="ef-row">
        <label class="ef-label">Descripción / cargo</label>
        <input type="text" id="eu-sub" class="ef-input" value="${info.sub || ''}">
      </div>
      <div class="ef-row">
        <label class="ef-label">Ícono de avatar</label>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:4px">
          ${avatares.map(av => `
            <button onclick="selAvatarEditar(this,'${av}')" class="av-btn-e${info.av === av ? ' av-sel' : ''}" data-av="${av}"
              style="width:38px;height:38px;border-radius:9px;border:${info.av === av ? '2px solid var(--blue)' : '2px solid var(--border)'};background:${info.av === av ? 'var(--blue-l)' : 'var(--bg)'};font-size:1.2rem;cursor:pointer;transition:all .2s">
              ${av}
            </button>`).join('')}
        </div>
        <input type="hidden" id="eu-av" value="${info.av}">
      </div>
      <div id="eu-err" style="color:var(--red);font-size:.8rem;font-weight:800;min-height:16px;margin-bottom:8px"></div>
      <div class="modal-btns">
        <button class="mb sec" onclick="closeModal()">Cancelar</button>
        <button class="mb pri" onclick="guardarEdicionUsuario('${key}')">Guardar cambios →</button>
      </div>
    </div>`;
  bg.classList.remove('hidden');
}

function selAvatarEditar(btn, av) {
  document.querySelectorAll('.av-btn-e').forEach(b => { b.style.borderColor = 'var(--border)'; b.style.background = 'var(--bg)'; });
  btn.style.borderColor = 'var(--blue)';
  btn.style.background  = 'var(--blue-l)';
  document.getElementById('eu-av').value = av;
}

function guardarEdicionUsuario(key) {
  const nombre = document.getElementById('eu-nombre').value.trim();
  const sub    = document.getElementById('eu-sub').value.trim();
  const av     = document.getElementById('eu-av').value;
  const errEl  = document.getElementById('eu-err');
  if (!nombre) { errEl.textContent = '⚠️ El nombre es obligatorio.'; return; }
  const usuarios  = getUsuarios();
  usuarios[key].nombre = nombre;
  usuarios[key].sub    = sub;
  usuarios[key].av     = av;
  saveUsuarios(usuarios);
  closeModal();
  _actualizarUsersGrid();
}

function abrirModalAsignarBancos(key) {
  const usuarios = getUsuarios();
  const info     = usuarios[key];
  if (!info) return;
  const bg = document.getElementById('modal-bg');
  bg.innerHTML = `
    <div class="modal" style="max-width:520px;text-align:left">
      <span class="modal-ico">📚</span>
      <h3 style="text-align:center">Bancos de ${info.nombre}</h3>
      <p style="font-size:.83rem;color:var(--muted);margin-bottom:16px;text-align:center;line-height:1.5">
        Selecciona los bancos de preguntas a los que tendrá acceso este usuario.
      </p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px">
        ${Object.entries(BANCO_LABELS).map(([bancoKey, label]) => {
          const asignado   = (info.bancos || []).includes(bancoKey);
          const totalPregs = (BANCOS_CFG[bancoKey]?.banco() || []).length;
          return `
            <label style="display:flex;align-items:center;gap:14px;padding:13px 15px;background:var(--bg);border-radius:11px;border:2px solid ${asignado ? 'var(--blue)' : 'var(--border)'};cursor:pointer;transition:all .2s" onclick="toggleBancoLabel(this)">
              <input type="checkbox" id="bk-${bancoKey}" value="${bancoKey}" ${asignado ? 'checked' : ''}
                style="width:18px;height:18px;accent-color:var(--blue);cursor:pointer;flex-shrink:0">
              <div style="flex:1">
                <div style="font-weight:800;font-size:.87rem;color:var(--text)">${label}</div>
                <div style="font-size:.72rem;color:var(--muted);margin-top:2px">${totalPregs} preguntas disponibles · ${BANCOS_CFG[bancoKey]?.tiempoLbl || ''} min</div>
              </div>
            </label>`;
        }).join('')}
      </div>
      <div class="modal-btns">
        <button class="mb sec" onclick="closeModal()">Cancelar</button>
        <button class="mb pri" onclick="guardarBancosUsuario('${key}')">💾 Guardar asignación →</button>
      </div>
    </div>`;
  bg.classList.remove('hidden');
}

function toggleBancoLabel(label) {
  const cb = label.querySelector('input[type=checkbox]');
  cb.checked = !cb.checked;
  label.style.borderColor = cb.checked ? 'var(--blue)' : 'var(--border)';
}

function guardarBancosUsuario(key) {
  const usuarios  = getUsuarios();
  const seleccionados = Array.from(document.querySelectorAll('[id^="bk-"]'))
    .filter(cb => cb.checked)
    .map(cb => cb.value);
  usuarios[key].bancos = seleccionados;
  saveUsuarios(usuarios);
  closeModal();
  _actualizarUsersGrid();
}

function confirmarEliminarUsuario(key) {
  const usuarios = getUsuarios();
  const info     = usuarios[key];
  modal({
    ico: '🗑️', icoClass: '',
    title: `¿Eliminar a ${info?.nombre || key}?`,
    msg: `Esta acción eliminará al usuario y no se puede deshacer. Sus resultados históricos se conservarán.`,
    btns: [
      {
        label: 'Sí, eliminar', cls: 'danger', action() {
          const u = getUsuarios();
          delete u[key];
          saveUsuarios(u);
          _actualizarUsersGrid();
        }
      },
      { label: 'Cancelar', cls: 'sec', action: null }
    ]
  });
}

/** Admin entra como un usuario para ver su perspectiva */
function impersonarUsuario(key) {
  if (!estado.esAdmin) return;
  estado.impersonando = estado.usuario;
  estado.usuario      = key;
  estado.esAdmin      = false;
  const info = getUsuarios()[key];
  estado.bancosActivos = info?.bancos || [];
  mostrarPerfil();
}

/* ── TAB: SESIONES ─────────────────────────────────────── */
function renderTabSessions(panel, results) {
  const sorted = [...results].sort((a, b) => b.ts - a.ts);
  panel.innerHTML = `
    <h3>📋 Historial de Sesiones (${results.length})</h3>
    <input class="srch" placeholder="🔍 Buscar por nombre o evaluación..." oninput="filtrarSes(this.value)">
    <div id="ses-list">
      ${_renderSesiones(sorted.slice(0, 80))}
      ${sorted.length === 0 ? '<p style="color:var(--muted);font-size:.85rem;padding:14px">No hay sesiones registradas aún.</p>' : ''}
    </div>`;
}

function _renderSesiones(items) {
  const usuarios = getUsuarios();
  return items.map(r => {
    const info  = r.usuario === 'edwin' ? ADMIN : (usuarios[r.usuario] || { av: '👤', nombre: r.usuario });
    const color = parseFloat(r.pct) >= 60 ? 'var(--green)' : parseFloat(r.pct) >= 40 ? 'var(--gold-d)' : 'var(--red)';
    return `
      <div class="urow">
        <div class="urow-av">${info.av || '👤'}</div>
        <div class="urow-info">
          <div class="urow-name">${info.nombre || r.usuario}</div>
          <div class="urow-det">${r.titulo || r.rol} · ${r.fecha}</div>
        </div>
        <div class="urow-sc" style="color:${color}">${r.puntos}/${r.total} · ${r.pct}%</div>
      </div>`;
  }).join('');
}

function filtrarSes(q) {
  const results = loadResults().filter(r =>
    r.usuario.includes(q.toLowerCase()) || (r.titulo || '').toLowerCase().includes(q.toLowerCase()));
  const list = document.getElementById('ses-list');
  if (!list) return;
  const sorted = [...results].sort((a, b) => b.ts - a.ts);
  list.innerHTML = _renderSesiones(sorted.slice(0, 80)) ||
    '<p style="color:var(--muted);font-size:.85rem;padding:12px">Sin resultados.</p>';
}

/* ── TAB: BANCOS DE PREGUNTAS ─────────────────────────── */
function renderTabBanks(panel) {
  const bankList = Object.entries(BANCO_LABELS);
  panel.innerHTML = `
    <h3>📚 Bancos de Preguntas</h3>
    <input class="srch" id="bank-srch" placeholder="🔍 Buscar pregunta..." oninput="filtrarBanco(this.value)">
    <div id="bank-list">
      ${bankList.map(([rolKey, label]) => {
        const banco = BANCOS_CFG[rolKey]?.banco() || [];
        const extra = getExtra()[rolKey]?.length || 0;
        const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
        return `
          <details style="margin-bottom:10px;background:var(--bg);border-radius:11px;border:1.5px solid var(--border);overflow:hidden">
            <summary style="padding:13px 16px;cursor:pointer;font-weight:800;font-size:.87rem;color:var(--blue);list-style:none;display:flex;justify-content:space-between;align-items:center">
              <span>${label}</span>
              <span style="font-weight:600;color:var(--muted);font-size:.76rem">${banco.length} preguntas${extra ? ` (+${extra} nuevas)` : ''}</span>
            </summary>
            <div style="padding:10px 13px 14px" id="bank-${rolKey}">
              ${banco.map((p, i) => `
                <div class="q-adm" data-texto="${(p.pregunta || '').toLowerCase()}">
                  <div class="q-adm-num">
                    #${p.id || i + 1} · ${p.categoria || 'General'}
                    ${p._esExtra ? '<span style="background:#dcfce7;color:#15803d;font-size:.6rem;padding:2px 7px;border-radius:99px;margin-left:6px;font-weight:800">NUEVA</span>' : ''}
                  </div>
                  <div class="q-adm-txt">${p.pregunta}</div>
                  <div class="q-adm-opts">
                    ${p.opciones.map((o, j) => `<div class="q-opt${j === p.respuestaCorrecta ? ' corr' : ''}">${letras[j]}) ${clean(o)}${j === p.respuestaCorrecta ? ' ✅' : ''}</div>`).join('')}
                  </div>
                  ${p._esExtra ? `<button onclick="eliminarPreguntaExtra('${rolKey}',${i - (banco.length - (getExtra()[rolKey]?.length || 0))})" style="margin-top:8px;padding:4px 12px;border:1.5px solid var(--red);background:var(--red-l);color:var(--red);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">🗑 Eliminar</button>` : ''}
                </div>`).join('')}
            </div>
          </details>`;
      }).join('')}
    </div>`;
}

function filtrarBanco(q) {
  document.querySelectorAll('.q-adm').forEach(el => {
    const txt = el.getAttribute('data-texto') || '';
    el.style.display = (!q || txt.includes(q.toLowerCase())) ? '' : 'none';
  });
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 22: EDITOR DE PREGUNTAS
════════════════════════════════════════════════════════════ */

let efOpciones = 4, efCorrecta = -1, _editando = null;

/**
 * Actualiza solo la sección de lista de preguntas guardadas en el editor,
 * sin re-renderizar el formulario (evita el parpadeo incomodo).
 */
function _actualizarEditorList() {
  const listEl = document.getElementById('editor-list');
  if (!listEl) { renderEditor(); return; }
  const extra  = getExtra();
  const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
  const total  = Object.values(extra).reduce((a, v) => a + (v.length || 0), 0);
  // Actualizar contador del título
  const tit = listEl.previousElementSibling;
  if (tit) tit.innerHTML = `📋 Preguntas agregadas (${total} total)`;

  listEl.innerHTML = Object.entries(BANCO_LABELS).map(([rolKey, label]) => {
    const items = extra[rolKey] || [];
    if (!items.length) return '';
    return `
      <details open style="margin-bottom:12px;background:var(--bg);border-radius:11px;border:1.5px solid var(--border);overflow:hidden">
        <summary style="padding:12px 15px;cursor:pointer;font-weight:800;font-size:.85rem;color:var(--blue);list-style:none;display:flex;justify-content:space-between;align-items:center">
          ${label} <span style="color:var(--muted);font-weight:600;font-size:.76rem">${items.length} preguntas nuevas</span>
        </summary>
        <div style="padding:10px 13px 14px">
          ${items.map((p, i) => `
            <div class="q-adm">
              <div class="q-adm-num">
                Nueva #${i + 1} · ${p.categoria || 'General'}
                <span style="background:#dcfce7;color:#15803d;font-size:.6rem;padding:2px 7px;border-radius:99px;margin-left:6px;font-weight:800">NUEVA</span>
              </div>
              <div class="q-adm-txt">${p.pregunta}</div>
              <div class="q-adm-opts">
                ${p.opciones.map((o, j) => `<div class="q-opt${j === p.respuestaCorrecta ? ' corr' : ''}">${letras[j]}) ${clean(o)}${j === p.respuestaCorrecta ? ' ✅' : ''}</div>`).join('')}
              </div>
              <div class="rev-exp" style="margin-top:8px"><strong>Justificación:</strong> ${p.explicacion || '—'}</div>
              <div style="display:flex;gap:8px;margin-top:8px">
                <button onclick="editarPreguntaExtra('${rolKey}',${i})" style="padding:5px 13px;border:1.5px solid var(--blue);background:var(--blue-l);color:var(--blue);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">✏️ Editar</button>
                <button onclick="eliminarPreguntaExtra('${rolKey}',${i})" style="padding:5px 13px;border:1.5px solid var(--red);background:var(--red-l);color:var(--red);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">🗑 Eliminar</button>
              </div>
            </div>`).join('')}
        </div>
      </details>`;
  }).filter(Boolean).join('') || '<p style="color:var(--muted);font-size:.83rem;padding:10px">Aún no has agregado preguntas.</p>';
}

function renderEditor() {
  const panel = document.getElementById('apanel');
  const extra = getExtra();
  panel.innerHTML = `
    <h3>✏️ Editor de Preguntas</h3>
    <p style="font-size:.83rem;color:var(--muted);margin-bottom:18px;line-height:1.6">
      Agrega nuevas preguntas a cualquier banco sin tocar el código. Se guardan localmente y se fusionan automáticamente.
    </p>

    <!-- FORMULARIO NUEVA PREGUNTA -->
    <div id="editor-form" style="background:var(--bg);border-radius:14px;border:2px solid var(--border);padding:22px;margin-bottom:24px">
      <div style="font-size:.85rem;font-weight:900;color:var(--blue);margin-bottom:16px">➕ Nueva pregunta</div>

      <div class="ef-row">
        <label class="ef-label">Banco de preguntas *</label>
        <select id="ef-banco" class="ef-input">
          ${Object.entries(BANCO_LABELS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}
        </select>
      </div>
      <div class="ef-row">
        <label class="ef-label">Categoría</label>
        <input type="text" id="ef-cat" class="ef-input" placeholder="Ej: Convivencia, Inclusión, Planificación...">
      </div>
      <div class="ef-row">
        <label class="ef-label">Pregunta *</label>
        <textarea id="ef-pregunta" class="ef-input" rows="4" placeholder="Escribe la pregunta aquí..."></textarea>
      </div>
      <div class="ef-row">
        <label class="ef-label">Opciones de respuesta *</label>
        <div id="ef-opts">
          ${['A', 'B', 'C', 'D'].map((l, i) => `
            <div class="ef-opt-row" id="ef-opt-wrap-${i}">
              <span class="ef-opt-ltr">${l}</span>
              <input type="text" id="ef-opt-${i}" class="ef-opt-input" placeholder="Opción ${l}...">
              <button onclick="marcarCorrecta(${i})" class="ef-mark-btn" id="ef-mark-${i}" title="Marcar como correcta">✓</button>
              ${i >= 2 ? `<button onclick="quitarOpcion(${i})" class="ef-del-btn" title="Eliminar">✕</button>` : ''}
            </div>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button onclick="agregarOpcion()" class="ef-add-btn">+ Agregar opción</button>
        </div>
        <div style="margin-top:8px;font-size:.76rem;color:var(--muted)" id="ef-corr-info">ℹ️ Haz clic en ✓ para marcar la respuesta correcta</div>
      </div>
      <div class="ef-row">
        <label class="ef-label">Justificación / Explicación técnica *</label>
        <textarea id="ef-exp" class="ef-input" rows="3" placeholder="Base legal, fundamento técnico, ordenanza aplicable..."></textarea>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px">
        <button onclick="guardarPregunta()" class="ef-save-btn">💾 Guardar pregunta</button>
        <button onclick="limpiarFormulario()" class="ef-clear-btn">🗑 Limpiar</button>
      </div>
      <div id="ef-feedback" style="margin-top:12px;font-size:.83rem;font-weight:800;min-height:20px"></div>
    </div>

    <!-- IMPORTAR JSON MASIVO -->
    <div style="background:var(--bg);border-radius:14px;border:2px dashed var(--blue2);padding:22px;margin-bottom:24px">
      <div style="font-size:.85rem;font-weight:900;color:var(--blue);margin-bottom:6px">📥 Importar preguntas por JSON</div>
      <p style="font-size:.78rem;color:var(--muted);margin-bottom:14px;line-height:1.6">
        Pega un objeto <code>{...}</code> o arreglo <code>[{...}]</code> en el formato de los bancos. 1 o 100 preguntas a la vez.
      </p>
      <div class="ef-row">
        <label class="ef-label">Banco destino *</label>
        <select id="imp-banco" class="ef-input">
          ${Object.entries(BANCO_LABELS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}
        </select>
      </div>
      <div class="ef-row">
        <label class="ef-label">Pega el JSON aquí</label>
        <textarea id="imp-json" class="ef-input" rows="9" style="font-family:'DM Mono',monospace;font-size:.75rem"
          placeholder='{ "pregunta": "...", "opciones": ["...","...","...","..."], "respuestaCorrecta": 0, "categoria": "...", "explicacion": "..." }'></textarea>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button onclick="importarJSON()" style="padding:11px 22px;border:none;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;font-family:'Nunito',sans-serif;font-size:.88rem;font-weight:900;cursor:pointer;box-shadow:0 3px 10px rgba(0,56,118,.2)">📥 Importar al banco</button>
        <button onclick="document.getElementById('imp-json').value=''" style="padding:11px 18px;border:2px solid var(--border);border-radius:10px;background:var(--card);color:var(--muted);font-family:'Nunito',sans-serif;font-size:.85rem;font-weight:800;cursor:pointer">🗑 Limpiar</button>
      </div>
      <div id="imp-feedback" style="margin-top:12px;font-size:.83rem;font-weight:800;min-height:20px"></div>
    </div>

    <!-- PREGUNTAS GUARDADAS POR BANCO -->
    <div style="font-size:.85rem;font-weight:900;color:var(--blue);margin-bottom:14px">
      📋 Preguntas agregadas (${Object.values(extra).reduce((a, v) => a + (v.length || 0), 0)} total)
    </div>
    <div id="editor-list">
      ${Object.entries(BANCO_LABELS).map(([rolKey, label]) => {
        const items  = extra[rolKey] || [];
        if (!items.length) return '';
        const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
        return `
          <details open style="margin-bottom:12px;background:var(--bg);border-radius:11px;border:1.5px solid var(--border);overflow:hidden">
            <summary style="padding:12px 15px;cursor:pointer;font-weight:800;font-size:.85rem;color:var(--blue);list-style:none;display:flex;justify-content:space-between;align-items:center">
              ${label} <span style="color:var(--muted);font-weight:600;font-size:.76rem">${items.length} preguntas nuevas</span>
            </summary>
            <div style="padding:10px 13px 14px">
              ${items.map((p, i) => `
                <div class="q-adm">
                  <div class="q-adm-num">
                    Nueva #${i + 1} · ${p.categoria || 'General'}
                    <span style="background:#dcfce7;color:#15803d;font-size:.6rem;padding:2px 7px;border-radius:99px;margin-left:6px;font-weight:800">NUEVA</span>
                  </div>
                  <div class="q-adm-txt">${p.pregunta}</div>
                  <div class="q-adm-opts">
                    ${p.opciones.map((o, j) => `<div class="q-opt${j === p.respuestaCorrecta ? ' corr' : ''}">${letras[j]}) ${clean(o)}${j === p.respuestaCorrecta ? ' ✅' : ''}</div>`).join('')}
                  </div>
                  <div class="rev-exp" style="margin-top:8px"><strong>Justificación:</strong> ${p.explicacion || '—'}</div>
                  <div style="display:flex;gap:8px;margin-top:8px">
                    <button onclick="editarPreguntaExtra('${rolKey}',${i})" style="padding:5px 13px;border:1.5px solid var(--blue);background:var(--blue-l);color:var(--blue);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">✏️ Editar</button>
                    <button onclick="eliminarPreguntaExtra('${rolKey}',${i})" style="padding:5px 13px;border:1.5px solid var(--red);background:var(--red-l);color:var(--red);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">🗑 Eliminar</button>
                  </div>
                </div>`).join('')}
            </div>
          </details>`;
      }).filter(Boolean).join('') || '<p style="color:var(--muted);font-size:.83rem;padding:10px">Aún no has agregado preguntas.</p>'}
    </div>`;
}

function marcarCorrecta(i) {
  efCorrecta = i;
  document.querySelectorAll('.ef-mark-btn').forEach((b, j) => {
    b.style.background   = j === i ? 'var(--green)' : '';
    b.style.color        = j === i ? '#fff' : '';
    b.style.borderColor  = j === i ? 'var(--green)' : '';
  });
  document.getElementById('ef-corr-info').textContent = `✅ Respuesta correcta: Opción ${['A', 'B', 'C', 'D', 'E', 'F'][i]}`;
  document.getElementById('ef-corr-info').style.color = 'var(--green)';
}

function agregarOpcion() {
  if (efOpciones >= 6) { alert('Máximo 6 opciones.'); return; }
  const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
  const i = efOpciones++;
  const div = document.createElement('div');
  div.className = 'ef-opt-row'; div.id = `ef-opt-wrap-${i}`;
  div.innerHTML = `
    <span class="ef-opt-ltr" id="ef-ltr-${i}">${letras[i]}</span>
    <input type="text" id="ef-opt-${i}" class="ef-opt-input" placeholder="Opción ${letras[i]}...">
    <button onclick="marcarCorrecta(${i})" class="ef-mark-btn" id="ef-mark-${i}" title="Marcar como correcta">✓</button>
    <button onclick="quitarOpcion(${i})" class="ef-del-btn" title="Eliminar">✕</button>`;
  document.getElementById('ef-opts').appendChild(div);
}

function quitarOpcion(i) {
  const el = document.getElementById(`ef-opt-wrap-${i}`);
  if (el) { el.remove(); efOpciones--; if (efCorrecta === i) efCorrecta = -1; }
}

function importarJSON() {
  const fb    = document.getElementById('imp-feedback');
  const banco = document.getElementById('imp-banco').value;
  let raw     = document.getElementById('imp-json').value.trim();
  if (!raw) { fb.textContent = '❌ El campo JSON está vacío.'; fb.style.color = 'var(--red)'; return; }

  let parsed;
  try {
    const jsonLike = raw
      .replace(/^\s*(\w+)\s*:/gm, '"$1":')
      .replace(/,\s*\n?\s*\}/g, '}')
      .replace(/,\s*\n?\s*\]/g, ']');
    parsed = JSON.parse(jsonLike);
  } catch (e) {
    try { parsed = JSON.parse(raw); } catch (e2) {
      fb.textContent = '❌ JSON inválido: ' + e2.message; fb.style.color = 'var(--red)'; return;
    }
  }

  const items = Array.isArray(parsed) ? parsed : [parsed];
  if (!items.length) { fb.textContent = '❌ No se encontraron preguntas.'; fb.style.color = 'var(--red)'; return; }

  const requeridos = ['pregunta', 'opciones', 'respuestaCorrecta'];
  const invalidas  = items.filter(p => !requeridos.every(k => k in p));
  if (invalidas.length) {
    fb.textContent = `❌ ${invalidas.length} pregunta(s) sin campos requeridos (pregunta, opciones, respuestaCorrecta).`;
    fb.style.color = 'var(--red)'; return;
  }

  const extra = getExtra();
  if (!extra[banco]) extra[banco] = [];
  const limpias = items.map(p => ({
    pregunta: String(p.pregunta),
    categoria: p.categoria || p.subcategoria || 'General',
    opciones: p.opciones.map(String),
    respuestaCorrecta: Number(p.respuestaCorrecta),
    explicacion: p.explicacion || (p.fundamentoNormativo?.justificacion) || '',
    ...(p.nivelDificultad ? { nivelDificultad: p.nivelDificultad } : {}),
    ...(p.competenciaEvaluada ? { competenciaEvaluada: p.competenciaEvaluada } : {})
  }));
  extra[banco].push(...limpias);
  // Marcar como pendiente para subir al repo
  _pendienteGH = { bancoKey: banco, preguntas: limpias };
  saveExtra(extra);
  fb.textContent = `✅ ${limpias.length} pregunta(s) importada(s) al banco "${BANCO_LABELS[banco]}".`;
  fb.style.color = 'var(--green)';
  document.getElementById('imp-json').value = '';
  setTimeout(() => _actualizarEditorList(), 1200);
}

function guardarPregunta() {
  const fb    = document.getElementById('ef-feedback');
  const banco = document.getElementById('ef-banco').value;
  const cat   = document.getElementById('ef-cat').value.trim();
  const preg  = document.getElementById('ef-pregunta').value.trim();
  const exp   = document.getElementById('ef-exp').value.trim();
  const letras = ['A', 'B', 'C', 'D', 'E', 'F'];

  const opts = [];
  for (let i = 0; i < efOpciones; i++) {
    const el = document.getElementById(`ef-opt-${i}`);
    if (el) opts.push(el.value.trim());
  }

  if (!preg)                { fb.textContent = '❌ La pregunta no puede estar vacía.'; fb.style.color = 'var(--red)'; return; }
  const optsValidas = opts.filter(o => o);
  if (optsValidas.length < 2) { fb.textContent = '❌ Necesitas al menos 2 opciones.'; fb.style.color = 'var(--red)'; return; }
  if (efCorrecta < 0 || efCorrecta >= optsValidas.length) { fb.textContent = '❌ Debes marcar cuál es la respuesta correcta.'; fb.style.color = 'var(--red)'; return; }
  if (!exp)                 { fb.textContent = '❌ La justificación técnica es obligatoria.'; fb.style.color = 'var(--red)'; return; }

  const nueva = { pregunta: preg, categoria: cat || 'General', opciones: optsValidas, respuestaCorrecta: efCorrecta, explicacion: exp };
  const extra = getExtra();
  if (!extra[banco]) extra[banco] = [];

  if (_editando && _editando.rol === banco) {
    extra[banco][_editando.idx] = nueva;
    _editando = null;
    fb.textContent = '✅ Pregunta actualizada correctamente.';
    // Edición: no se agrega al código, solo se actualiza en localStorage
  } else {
    extra[banco].push(nueva);
    fb.textContent = `✅ Pregunta agregada al banco "${BANCO_LABELS[banco]}".`;
    // Marcar pregunta nueva para que saveExtra la suba al repo
    _pendienteGH = { bancoKey: banco, preguntas: [nueva] };
  }
  fb.style.color = 'var(--green)';
  saveExtra(extra);
  setTimeout(() => { limpiarFormulario(); _actualizarEditorList(); }, 900);
}

function limpiarFormulario() {
  document.getElementById('ef-cat').value      = '';
  document.getElementById('ef-pregunta').value = '';
  document.getElementById('ef-exp').value      = '';
  document.getElementById('ef-feedback').textContent = '';
  efOpciones = 4; efCorrecta = -1; _editando = null;
  const cont   = document.getElementById('ef-opts');
  if (!cont) return;
  const letras = ['A', 'B', 'C', 'D'];
  cont.innerHTML = letras.map((l, i) => `
    <div class="ef-opt-row" id="ef-opt-wrap-${i}">
      <span class="ef-opt-ltr">${l}</span>
      <input type="text" id="ef-opt-${i}" class="ef-opt-input" placeholder="Opción ${l}...">
      <button onclick="marcarCorrecta(${i})" class="ef-mark-btn" id="ef-mark-${i}" title="Marcar como correcta">✓</button>
      ${i >= 2 ? `<button onclick="quitarOpcion(${i})" class="ef-del-btn" title="Eliminar opción">✕</button>` : ''}
    </div>`).join('');
  document.getElementById('ef-corr-info').textContent = 'ℹ️ Haz clic en ✓ para marcar la respuesta correcta';
  document.getElementById('ef-corr-info').style.color = '';
}

function editarPreguntaExtra(rolKey, i) {
  const extra = getExtra();
  const p     = (extra[rolKey] || [])[i];
  if (!p) return;
  _editando = { rol: rolKey, idx: i };
  document.getElementById('ef-banco').value    = rolKey;
  document.getElementById('ef-cat').value      = p.categoria || '';
  document.getElementById('ef-pregunta').value = p.pregunta || '';
  document.getElementById('ef-exp').value      = p.explicacion || '';
  efOpciones = p.opciones.length; efCorrecta = p.respuestaCorrecta;
  const cont   = document.getElementById('ef-opts');
  cont.innerHTML = '';
  const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
  p.opciones.forEach((o, j) => {
    const div = document.createElement('div');
    div.className = 'ef-opt-row'; div.id = `ef-opt-wrap-${j}`;
    div.innerHTML = `
      <span class="ef-opt-ltr">${letras[j]}</span>
      <input type="text" id="ef-opt-${j}" class="ef-opt-input" value="${o.replace(/"/g, '&quot;')}">
      <button onclick="marcarCorrecta(${j})" class="ef-mark-btn" id="ef-mark-${j}"
        style="${j === efCorrecta ? 'background:var(--green);color:#fff;border-color:var(--green)' : ''}" title="Marcar como correcta">✓</button>
      ${j >= 2 ? `<button onclick="quitarOpcion(${j})" class="ef-del-btn" title="Eliminar">✕</button>` : ''}`;
    cont.appendChild(div);
  });
  document.getElementById('ef-corr-info').textContent = `✅ Respuesta correcta: Opción ${letras[efCorrecta]}`;
  document.getElementById('ef-corr-info').style.color = 'var(--green)';
  document.getElementById('ef-feedback').textContent  = '📝 Editando pregunta. Guarda cuando termines.';
  document.getElementById('ef-feedback').style.color  = 'var(--blue)';
  document.getElementById('editor-form').scrollIntoView({ behavior: 'smooth' });
}

function eliminarPreguntaExtra(rolKey, i) {
  modal({
    ico: '🗑️', icoClass: '',
    title: '¿Eliminar pregunta?',
    msg: 'Esta acción no se puede deshacer. La pregunta será eliminada permanentemente del banco.',
    btns: [
      {
        label: 'Sí, eliminar', cls: 'danger', action() {
          const extra = getExtra();
          if (extra[rolKey]) extra[rolKey].splice(i, 1);
          saveExtra(extra);
          _actualizarEditorList();
        }
      },
      { label: 'Cancelar', cls: 'sec', action: null }
    ]
  });
}

/* ════════════════════════════════════════════════════════════
   SECCIÓN 23: RESET Y REPETIR
════════════════════════════════════════════════════════════ */

function resetEstado() {
  clearInterval(estado.timer);
  estado.timer     = null;
  estado.preguntas = [];
  estado.mapas     = [];
  estado.idx       = 0;
  estado.respuestas = {};
  estado.tiempoR   = 0;
}

function repetirExamen() {
  resetEstado();
  abrirStart(estado.rolActual);
}
