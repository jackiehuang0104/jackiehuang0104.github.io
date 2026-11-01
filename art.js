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
    mainNavigation:'Main navigation', language:'Language', themeToggle:'Toggle dark mode', chicagoPin:'View the artwork seen in Chicago', athensPin:'View the museum visit in Athens', romePin:'View art and architecture seen in Rome', venicePin:'View art and architecture seen in Venice', navWork:'Work', navArt:'Art', navMore:'More', translationNote:'* translations not proofread',
    pageTitle:'Art I make & meet!', pageIntro:'A growing collection of my own work and the artworks that have stayed with me in museums around the world.',
    myArt:'Things I’ve made', museumTitle:'Art I’ve met', museumCounter:'4 cities mapped', globeLabel:'An interactive rotating globe for artworks seen around the world', globeInstruction:'Drag to turn the globe. Select a pin to see the artwork.',
    museumIntro:'I’m building a map of memorable works I’ve encountered in person. Each pin opens photographs and notes about where I saw them.', chicagoVisit:'Art Institute of Chicago · June 2026', athensGallery:'Sculpture galleries', athensVisit:'National Archaeological Museum, Athens · September 2026', romeTitle:'Rome',romeVisit:'Art, architecture, and archaeology · 2026',romeSacred:'Sacred spaces',romeBorghese:'Galleria Borghese',romeMuseums:'Vatican Museums',romeAncient:'Ancient Rome',veniceTitle:'Venice',veniceVisit:'Churches and museums · 2026',veniceSacred:'Sacred spaces',caPesaro:'Ca’ Pesaro — International Gallery of Modern Art',backToTop:'Back to top',
    altZebra:'Mixed-media artwork of a zebra in a surreal landscape', altBirds:'Red and blue marker drawing of birds', altHands:'Blue and orange ink portrait surrounded by hands', altTomatoes:'Pencil still life study of tomatoes', altHydrangea:'Green hydrangea illustration on yellow', altCat:'Marker portrait of a tortoiseshell cat', altWall:'Jackie standing beside a large wall drawing of faces', altTheKiss:'The Kiss displayed at the Art Institute of Chicago', altAthensGallery:'A sculpture gallery at the National Archaeological Museum in Athens',altAthensArtwork:'A large decorative artwork at the National Archaeological Museum in Athens',altRomeSacred:'Sacred art and architecture in Rome',altRomeBorghese:'Sculpture and gallery interiors at the Galleria Borghese',altRomeMuseums:'Art and displays in the Vatican Museums',altRomeAncient:'Ancient Roman sites and objects',altVeniceSacred:'A sacred interior in Venice',altCaPesaro:'Art at Ca’ Pesaro’s International Gallery of Modern Art',altAccademia:'A gallery at the Gallerie dell’Accademia in Venice',altGuggenheim:'A gallery at the Peggy Guggenheim Collection in Venice'
  },
  'zh-TW': {
    mainNavigation:'主要導覽', language:'語言', themeToggle:'切換深色模式', chicagoPin:'查看在芝加哥看過的作品', athensPin:'查看在雅典參觀的博物館', romePin:'查看在羅馬看過的藝術與建築', venicePin:'查看在威尼斯看過的藝術與建築', navWork:'經歷', navArt:'藝術', navMore:'關於我', translationNote:'* 翻譯尚未校對',
    pageTitle:'我創作與遇見的藝術！', pageIntro:'這裡收藏著我的作品，也記錄那些我在世界各地的博物館裡親眼看過、至今仍難忘的藝術品。',
    myArt:'我的創作', museumTitle:'旅途中遇見的藝術', museumCounter:'已標記 4 座城市', globeLabel:'可旋轉的互動式地球，標記我在世界各地看過的藝術品', globeInstruction:'拖曳即可轉動地球；點選標記可查看作品。',
    museumIntro:'我正在製作一張地圖，記錄那些曾親眼看過、令我難忘的作品。每個標記都會附上照片，以及我在哪裡看到它們的簡短筆記。', chicagoVisit:'芝加哥藝術博物館 · 2026 年 6 月', athensGallery:'雕塑展廳', athensVisit:'雅典國家考古博物館 · 2026 年 9 月',romeTitle:'羅馬',romeVisit:'藝術、建築與考古 · 2026 年',romeSacred:'宗教藝術與建築',romeBorghese:'博爾蓋塞美術館',romeMuseums:'梵蒂岡博物館',romeAncient:'古羅馬',veniceTitle:'威尼斯',veniceVisit:'教堂與博物館 · 2026 年',veniceSacred:'宗教空間',caPesaro:'佩薩羅宮－國際現代藝術館',backToTop:'回到頂端',
    altZebra:'斑馬置身超現實景觀中的複合媒材作品', altBirds:'以紅、藍色麥克筆繪製的鳥', altHands:'被手環繞的藍橘色墨水人物畫', altTomatoes:'番茄的鉛筆靜物素描', altHydrangea:'黃色背景上的綠色繡球花插畫', altCat:'玳瑁貓的麥克筆肖像', altWall:'Jackie 站在一幅大型人臉牆畫旁', altTheKiss:'在芝加哥藝術博物館展出的《The Kiss》', altAthensGallery:'雅典國家考古博物館的雕塑展廳',altAthensArtwork:'雅典國家考古博物館的大型裝飾藝術作品',altRomeSacred:'羅馬的宗教藝術與建築',altRomeBorghese:'博爾蓋塞美術館的雕塑與展廳',altRomeMuseums:'梵蒂岡博物館的藝術作品與展覽',altRomeAncient:'古羅馬遺址與文物',altVeniceSacred:'威尼斯的宗教空間',altCaPesaro:'佩薩羅宮國際現代藝術館展出的藝術作品',altAccademia:'威尼斯學院美術館的展廳',altGuggenheim:'威尼斯佩姬・古根漢美術館的展廳'
  },
  fr: {
    mainNavigation:'Navigation principale', language:'Langue', themeToggle:'Activer ou désactiver le mode sombre', chicagoPin:'Voir l’œuvre découverte à Chicago', athensPin:'Voir la visite du musée à Athènes', romePin:'Voir l’art et l’architecture découverts à Rome', venicePin:'Voir l’art et l’architecture découverts à Venise', navWork:'Parcours', navArt:'Art', navMore:'À propos', translationNote:'* traductions non relues',
    pageTitle:'L’art que je crée et que je découvre !', pageIntro:'Une collection qui s’agrandit au fil du temps : mes propres créations et les œuvres découvertes dans des musées du monde entier qui m’ont marquée.',
    myArt:'Mes créations', museumTitle:'Des œuvres qui m’ont marquée', museumCounter:'4 villes sur la carte', globeLabel:'Globe interactif et rotatif des œuvres découvertes à travers le monde', globeInstruction:'Faites glisser le globe pour le faire tourner. Sélectionnez un repère pour voir l’œuvre.',
    museumIntro:'Je rassemble sur cette carte les œuvres marquantes que j’ai vues en personne. Chaque repère donne accès à des photos et à quelques mots sur les lieux où je les ai découvertes.', chicagoVisit:'Art Institute of Chicago · juin 2026', athensGallery:'Galeries de sculptures', athensVisit:'Musée national archéologique d’Athènes · septembre 2026',romeTitle:'Rome',romeVisit:'Art, architecture et archéologie · 2026',romeSacred:'Art sacré et édifices religieux',romeBorghese:'Galerie Borghèse',romeMuseums:'Musées du Vatican',romeAncient:'Rome antique',veniceTitle:'Venise',veniceVisit:'Églises et musées · 2026',veniceSacred:'Édifices religieux',caPesaro:'Ca’ Pesaro — Galerie internationale d’art moderne',backToTop:'Retour en haut',
    altZebra:'Œuvre en techniques mixtes représentant un zèbre dans un paysage surréaliste', altBirds:'Dessin d’oiseaux au feutre rouge et bleu', altHands:'Portrait à l’encre bleue et orange entouré de mains', altTomatoes:'Étude de tomates au crayon', altHydrangea:'Illustration d’un hortensia vert sur fond jaune', altCat:'Portrait au feutre d’un chat écaille de tortue', altWall:'Jackie devant un grand dessin mural représentant des visages', altTheKiss:'The Kiss exposé à l’Art Institute of Chicago', altAthensGallery:'Une galerie de sculptures au Musée national archéologique d’Athènes',altAthensArtwork:'Une grande œuvre décorative au Musée national archéologique d’Athènes',altRomeSacred:'Art sacré et architecture religieuse à Rome',altRomeBorghese:'Sculptures et salles de la Galerie Borghèse',altRomeMuseums:'Œuvres et espaces d’exposition des Musées du Vatican',altRomeAncient:'Sites et objets de la Rome antique',altVeniceSacred:'Un édifice religieux à Venise',altCaPesaro:'Œuvres exposées à la Galerie internationale d’art moderne de Ca’ Pesaro',altAccademia:'Une salle des Gallerie dell’Accademia à Venise',altGuggenheim:'Une salle de la Collection Peggy Guggenheim à Venise'
  },
  he: {
    mainNavigation:'ניווט ראשי', language:'שפה', themeToggle:'החלפת מצב תצוגה כהה', chicagoPin:'הצגת היצירה שראיתי בשיקגו', athensPin:'הצגת הביקור במוזיאון באתונה', romePin:'הצגת האמנות והאדריכלות שראיתי ברומא', venicePin:'הצגת האמנות והאדריכלות שראיתי בוונציה', navWork:'עשייה', navArt:'אמנות', navMore:'עוד', translationNote:'* התרגומים טרם עברו הגהה',
    pageTitle:'אמנות שאני יוצרת ופוגשת!', pageIntro:'אוסף שהולך וגדל: יצירות שלי, לצד יצירות שראיתי במוזיאונים ברחבי העולם ונשארו איתי.',
    myArt:'יצירות שלי', museumTitle:'יצירות שפגשתי בדרך', museumCounter:'ארבע ערים על המפה', globeLabel:'גלובוס אינטראקטיבי מסתובב של יצירות אמנות שראיתי ברחבי העולם', globeInstruction:'גררו כדי לסובב את הגלובוס. בחרו בנקודה כדי לראות את היצירה.',
    museumIntro:'אני בונה מפה של יצירות בלתי נשכחות שראיתי במו עיניי. כל נקודה נפתחת לתמונות ולכמה מילים על המקומות שבהם ראיתי אותן.', chicagoVisit:'המכון לאמנות של שיקגו · יוני 2026', athensGallery:'גלריות הפסלים', athensVisit:'המוזיאון הארכאולוגי הלאומי, אתונה · ספטמבר 2026',romeTitle:'רומא',romeVisit:'אמנות, אדריכלות וארכאולוגיה · 2026',romeSacred:'אמנות ומרחבים דתיים',romeBorghese:'גלריה בורגזה',romeMuseums:'מוזיאוני הוותיקן',romeAncient:'רומא העתיקה',veniceTitle:'ונציה',veniceVisit:'כנסיות ומוזיאונים · 2026',veniceSacred:'מרחבים דתיים',caPesaro:'קא׳ פזארו — הגלריה הבינלאומית לאמנות מודרנית',backToTop:'חזרה למעלה',
    altZebra:'יצירה בטכניקה מעורבת של זברה בנוף סוריאליסטי', altBirds:'ציור של ציפורים בטושים אדומים וכחולים', altHands:'דיוקן בדיו כחולה וכתומה המוקף בידיים', altTomatoes:'רישום טבע דומם של עגבניות בעיפרון', altHydrangea:'איור של הורטנזיה ירוקה על רקע צהוב', altCat:'דיוקן בטושים של חתול בעל פרווה בגוני צב', altWall:'ג׳קי עומדת ליד ציור קיר גדול של פנים', altTheKiss:'היצירה The Kiss מוצגת במכון לאמנות של שיקגו', altAthensGallery:'גלריית פסלים במוזיאון הארכאולוגי הלאומי באתונה',altAthensArtwork:'יצירת אמנות דקורטיבית גדולה במוזיאון הארכאולוגי הלאומי באתונה',altRomeSacred:'אמנות ואדריכלות דתית ברומא',altRomeBorghese:'פסלים וחללי תצוגה בגלריה בורגזה',altRomeMuseums:'יצירות אמנות וחללי תצוגה במוזיאוני הוותיקן',altRomeAncient:'אתרים וחפצים מרומא העתיקה',altVeniceSacred:'חלל דתי בוונציה',altCaPesaro:'אמנות בגלריה הבינלאומית לאמנות מודרנית בקא׳ פזארו',altAccademia:'חלל תצוגה בגלריית האקדמיה בוונציה',altGuggenheim:'חלל תצוגה באוסף פגי גוגנהיים בוונציה'
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
const chicagoPin = document.querySelector('#chicago-pin');
const athensPin = document.querySelector('#athens-pin');
const romePin = document.querySelector('#rome-pin');
const venicePin = document.querySelector('#venice-pin');
let yaw = .7;
let pitch = .22;
let dragging = false;
let previous = null;
let animationFrame;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let countryFeatures = [];
fetch('assets/world-countries-110m.json')
  .then(response => response.json())
  .then(world => { countryFeatures = topojson.feature(world, world.objects.countries).features; })
  .catch(() => {});

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
  context.globalAlpha = .62;
  context.strokeStyle = accent;
  countryFeatures.forEach(feature => {
    const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    polygons.forEach(polygon => polygon.forEach(ring => {
      drawCurve(ring.map(([longitude, latitude]) => [latitude, longitude]), centerX, centerY, radius);
    }));
  });
  context.globalAlpha = 1;
  context.strokeStyle = line;
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

  const chicago = rotatePoint(41.8796, -87.6237);
  chicagoPin.hidden = chicago.z < 0;
  if (!chicagoPin.hidden) {
    chicagoPin.style.left = `${centerX + chicago.x * radius}px`;
    chicagoPin.style.top = `${centerY - chicago.y * radius}px`;
  }
  const athens = rotatePoint(37.989, 23.732);
  athensPin.hidden = athens.z < 0;
  if (!athensPin.hidden) {
    athensPin.style.left = `${centerX + athens.x * radius + 11}px`;
    athensPin.style.top = `${centerY - athens.y * radius - 9}px`;
  }
  const rome = rotatePoint(41.9028, 12.4964);
  romePin.hidden = rome.z < 0;
  if (!romePin.hidden) {
    romePin.style.left = `${centerX + rome.x * radius - 11}px`;
    romePin.style.top = `${centerY - rome.y * radius + 8}px`;
  }
  const venice = rotatePoint(45.4408, 12.3155);
  venicePin.hidden = venice.z < 0;
  if (!venicePin.hidden) {
    venicePin.style.left = `${centerX + venice.x * radius + 11}px`;
    venicePin.style.top = `${centerY - venice.y * radius + 9}px`;
  }
}

function animate() {
  if (!dragging && !reducedMotion) yaw += .00012;
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
function revealEntry(selector) {
  const entry = document.querySelector(selector);
  entry.scrollIntoView({ behavior:reducedMotion ? 'auto' : 'smooth', block:'center' });
  entry.classList.remove('selected');
  void entry.offsetWidth;
  entry.classList.add('selected');
}
chicagoPin.addEventListener('click', () => revealEntry('#chicago-art-entry'));
athensPin.addEventListener('click', () => revealEntry('#athens-art-entry'));
romePin.addEventListener('click', () => revealEntry('#rome-art-entry'));
venicePin.addEventListener('click', () => revealEntry('#venice-art-entry'));
window.addEventListener('resize', drawGlobe);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelAnimationFrame(animationFrame);
  else animate();
});
animate();
