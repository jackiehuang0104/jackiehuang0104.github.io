const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});

window.addEventListener('pointermove', event => {
  root.style.setProperty('--mouse-x', `${event.clientX}px`);
  root.style.setProperty('--mouse-y', `${event.clientY}px`);
}, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

const translations = {
  en: {
    mainNavigation:'Main navigation', language:'Language', themeToggle:'Toggle dark mode', navWork:'Work', navArt:'Art', navMore:'More', translationNote:'* translations not proofread',
    pageEyebrow:'A visual notebook', pageTitle:'Art I make, and art I meet.', pageIntro:'A growing collection of my own work and the artworks that have stayed with me in museums around the world.',
    myArt:'Things I’ve made', museumTitle:'Art I’ve met', museumCounter:'0 works mapped — for now', globeLabel:'An interactive rotating globe for artworks seen around the world', globeInstruction:'Drag to turn the globe.',
    museumIntro:'I’m building a map of memorable works I’ve encountered in person. Each pin will open a photograph and a note about where I saw it.', museumEmpty:'The first museum stops are coming soon.', backToTop:'Back to top',
    altZebra:'Mixed-media artwork of a zebra in a surreal landscape', altBirds:'Red and blue marker drawing of birds', altHands:'Blue and orange ink portrait surrounded by hands', altTomatoes:'Pencil still life study of tomatoes', altHydrangea:'Green hydrangea illustration on yellow', altCat:'Marker portrait of a tortoiseshell cat', altWall:'Jackie standing beside a large wall drawing of faces'
  },
  'zh-TW': {
    mainNavigation:'主要導覽', language:'語言', themeToggle:'切換深色模式', navWork:'經歷', navArt:'藝術', navMore:'關於我', translationNote:'* 翻譯尚未校對',
    pageEyebrow:'視覺筆記', pageTitle:'我的創作，以及旅途中遇見的藝術。', pageIntro:'這裡收藏著我的作品，也記錄那些我在世界各地的博物館裡親眼看過、至今仍難忘的藝術品。',
    myArt:'我的創作', museumTitle:'旅途中遇見的藝術', museumCounter:'目前標記了 0 件作品', globeLabel:'可旋轉的互動式地球，將用來標記我在世界各地看過的藝術品', globeInstruction:'拖曳即可轉動地球。',
    museumIntro:'我正在製作一張地圖，記錄那些曾親眼看過、令我難忘的作品。之後每個標記都會附上照片，以及我在哪裡看到它的簡短筆記。', museumEmpty:'第一批博物館參觀紀錄即將加入。', backToTop:'回到頂端',
    altZebra:'斑馬置身超現實景觀中的複合媒材作品', altBirds:'以紅、藍色麥克筆繪製的鳥', altHands:'被手環繞的藍橘色墨水人物畫', altTomatoes:'番茄的鉛筆靜物素描', altHydrangea:'黃色背景上的綠色繡球花插畫', altCat:'玳瑁貓的麥克筆肖像', altWall:'Jackie 站在一幅大型人臉牆畫旁'
  },
  fr: {
    mainNavigation:'Navigation principale', language:'Langue', themeToggle:'Activer ou désactiver le mode sombre', navWork:'Parcours', navArt:'Art', navMore:'À propos', translationNote:'* traductions non relues',
    pageEyebrow:'Carnet visuel', pageTitle:'Ce que je crée, ce que je découvre.', pageIntro:'Une collection qui s’agrandit au fil du temps : mes propres créations et les œuvres découvertes dans des musées du monde entier qui m’ont marquée.',
    myArt:'Mes créations', museumTitle:'Des œuvres qui m’ont marquée', museumCounter:'0 œuvre sur la carte — pour l’instant', globeLabel:'Globe interactif et rotatif des œuvres découvertes à travers le monde', globeInstruction:'Faites glisser le globe pour le faire tourner.',
    museumIntro:'Je rassemble sur cette carte les œuvres marquantes que j’ai vues en personne. Chaque repère donnera accès à une photo et à quelques mots sur le lieu où je les ai découvertes.', museumEmpty:'Les premières visites seront bientôt ajoutées.', backToTop:'Retour en haut',
    altZebra:'Œuvre en techniques mixtes représentant un zèbre dans un paysage surréaliste', altBirds:'Dessin d’oiseaux au feutre rouge et bleu', altHands:'Portrait à l’encre bleue et orange entouré de mains', altTomatoes:'Étude de tomates au crayon', altHydrangea:'Illustration d’un hortensia vert sur fond jaune', altCat:'Portrait au feutre d’un chat écaille de tortue', altWall:'Jackie devant un grand dessin mural représentant des visages'
  },
  he: {
    mainNavigation:'ניווט ראשי', language:'שפה', themeToggle:'החלפת מצב תצוגה כהה', navWork:'עשייה', navArt:'אמנות', navMore:'עוד', translationNote:'* התרגומים טרם עברו הגהה',
    pageEyebrow:'מחברת חזותית', pageTitle:'אמנות שאני יוצרת, ואמנות שאני פוגשת.', pageIntro:'אוסף שהולך וגדל: יצירות שלי, לצד יצירות שראיתי במוזיאונים ברחבי העולם ונשארו איתי.',
    myArt:'יצירות שלי', museumTitle:'יצירות שפגשתי בדרך', museumCounter:'0 יצירות על המפה — בינתיים', globeLabel:'גלובוס אינטראקטיבי מסתובב של יצירות אמנות שראיתי ברחבי העולם', globeInstruction:'גררו כדי לסובב את הגלובוס.',
    museumIntro:'אני בונה מפה של יצירות בלתי נשכחות שראיתי במו עיניי. כל נקודה תיפתח לתמונה ולכמה מילים על המקום שבו ראיתי את היצירה.', museumEmpty:'הביקורים הראשונים במוזיאונים יתווספו בקרוב.', backToTop:'חזרה למעלה',
    altZebra:'יצירה בטכניקה מעורבת של זברה בנוף סוריאליסטי', altBirds:'ציור של ציפורים בטושים אדומים וכחולים', altHands:'דיוקן בדיו כחולה וכתומה המוקף בידיים', altTomatoes:'רישום טבע דומם של עגבניות בעיפרון', altHydrangea:'איור של הורטנזיה ירוקה על רקע צהוב', altCat:'דיוקן בטושים של חתול בעל פרווה בגוני צב', altWall:'ג׳קי עומדת ליד ציור קיר גדול של פנים'
  }
};

const languageSelect = document.querySelector('#language-select');
let currentLanguage = localStorage.getItem('language') || 'en';
if (!translations[currentLanguage]) currentLanguage = 'en';
languageSelect.value = currentLanguage;

function applyLanguage(language) {
  const copy = translations[language];
  root.lang = language;
  root.dir = language === 'he' ? 'rtl' : 'ltr';
  document.title = language === 'en' ? 'Art — Jackie Huang' : `${copy.navArt} — Jackie Huang`;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n] ?? translations.en[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = copy[element.dataset.i18nAlt] ?? translations.en[element.dataset.i18nAlt];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria] ?? translations.en[element.dataset.i18nAria]);
  });
  localStorage.setItem('language', language);
}

languageSelect.addEventListener('change', event => {
  currentLanguage = event.target.value;
  applyLanguage(currentLanguage);
});
applyLanguage(currentLanguage);

const canvas = document.querySelector('#museum-globe');
const context = canvas.getContext('2d');
let yaw = -.55;
let pitch = .22;
let dragging = false;
let previous = null;
let animationFrame;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function rotatePoint(latitude, longitude) {
  const lat = latitude * Math.PI / 180;
  const lon = longitude * Math.PI / 180 + yaw;
  const x = Math.cos(lat) * Math.sin(lon);
  const y0 = Math.sin(lat);
  const z0 = Math.cos(lat) * Math.cos(lon);
  return { x, y: y0 * Math.cos(pitch) - z0 * Math.sin(pitch), z: y0 * Math.sin(pitch) + z0 * Math.cos(pitch) };
}

function drawCurve(points, centerX, centerY, radius) {
  let drawing = false;
  context.beginPath();
  points.forEach(([lat, lon]) => {
    const point = rotatePoint(lat, lon);
    if (point.z < 0) { drawing = false; return; }
    const x = centerX + point.x * radius;
    const y = centerY - point.y * radius;
    if (!drawing) { context.moveTo(x, y); drawing = true; }
    else context.lineTo(x, y);
  });
  context.stroke();
}

function drawGlobe() {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
  }
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);
  const style = getComputedStyle(root);
  const text = style.getPropertyValue('--text').trim();
  const line = style.getPropertyValue('--line').trim();
  const accent = style.getPropertyValue('--accent').trim();
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * .42;

  const glow = context.createRadialGradient(centerX - radius * .35, centerY - radius * .4, radius * .06, centerX, centerY, radius);
  glow.addColorStop(0, `${accent}55`);
  glow.addColorStop(1, `${accent}08`);
  context.fillStyle = glow;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = text;
  context.lineWidth = 1.25;
  context.stroke();

  context.save();
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.clip();
  context.strokeStyle = line;
  context.lineWidth = .8;
  for (let lat = -60; lat <= 60; lat += 30) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 3) points.push([lat, lon]);
    drawCurve(points, centerX, centerY, radius);
  }
  for (let lon = -150; lon <= 180; lon += 30) {
    const points = [];
    for (let lat = -90; lat <= 90; lat += 3) points.push([lat, lon]);
    drawCurve(points, centerX, centerY, radius);
  }
  context.restore();
}

function animate() {
  if (!dragging && !reducedMotion) yaw += .0007;
  drawGlobe();
  animationFrame = requestAnimationFrame(animate);
}

canvas.addEventListener('pointerdown', event => {
  dragging = true;
  previous = { x:event.clientX, y:event.clientY };
  canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener('pointermove', event => {
  if (!dragging) return;
  yaw += (event.clientX - previous.x) * .008;
  pitch = Math.max(-1.1, Math.min(1.1, pitch - (event.clientY - previous.y) * .006));
  previous = { x:event.clientX, y:event.clientY };
});
canvas.addEventListener('pointerup', () => { dragging = false; previous = null; });
canvas.addEventListener('pointercancel', () => { dragging = false; previous = null; });
window.addEventListener('resize', drawGlobe);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelAnimationFrame(animationFrame);
  else animate();
});
animate();
