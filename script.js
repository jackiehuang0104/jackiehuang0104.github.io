const root = document.documentElement;
const theme = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');
window.addEventListener('pointermove', event => {
  root.style.setProperty('--mouse-x', `${event.clientX}px`);
  root.style.setProperty('--mouse-y', `${event.clientY}px`);
}, { passive: true });
theme.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});
document.querySelector('#year').textContent = new Date().getFullYear();

const translations = {
  en: { navWork:'Work',navArt:'Art',navMore:'More',location:'Chicago, IL',intro:'Hi, I’m Jackie. I’m from Taiwan, and I currently study economics and philosophy at the University of Chicago.',interests:'I’m interested in AI safety, technology policy, and how complex ideas get communicated.',safetyIntro:'I make accessible AI safety content through <a href="https://www.instagram.com/aisafety_today/" target="_blank" rel="noreferrer">AI Safety Today</a>. This site is also where I keep track of what I’ve worked on, what I’m learning, and the things I make outside of work.',workTitle:'Work and projects',aisDescription:'Short, source-grounded explanations of AI safety and policy.',xlabRole:'Generalist Organizer, UChicago XLab AI Safety Group',xlabDescription:'Supporting AI safety programming and community at UChicago.',writing:'Writing',writingDescription:'Essays and notes on AI safety and life in general (inchoate as of yet).',moreProjects:'More research, roles, and projects will go here.',moreTitle:'More about me',moreText:'I’m currently learning Hebrew. I previously studied French. I also like traveling, museums, baking, and making art.',reading:'Currently reading: <cite>Never Let Me Go</cite> by Kazuo Ishiguro and <cite>Brave New World</cite> by Aldous Huxley.',feedbackTitle:'Anonymous feedback',feedbackPrompt:'What should I know?',feedbackPlaceholder:'Leave a thought, suggestion, or correction.',feedbackPrivacy:'No name or email requested.',feedbackSend:'Send anonymously ↗',contact:'Contact',selectedArt:'Selected art',distraction:'A small distraction',clear:'clear',canvasHint:'Click anywhere below. Nearby points will find each other.',backToTop:'Back to top',nameLabels:['what I go by','official Chinese name','official English name'] },
  'zh-TW': { navWork:'經歷',navArt:'藝術',navMore:'關於我',location:'美國芝加哥',intro:'嗨，我是 Jackie。我來自台灣，目前在芝加哥大學主修經濟學與哲學。',interests:'我關注 AI 安全、科技政策，以及如何清楚地傳達複雜的想法。',safetyIntro:'我透過 <a href="https://www.instagram.com/aisafety_today/" target="_blank" rel="noreferrer">AI Safety Today</a> 製作易懂的 AI 安全內容。這個網站也記錄我的經歷、正在學習的事，以及工作之外的創作。',workTitle:'經歷與計畫',aisDescription:'以可靠來源為基礎，簡明介紹 AI 安全與政策。',xlabRole:'芝加哥大學 XLab AI Safety Group 通才組織者',xlabDescription:'協助芝加哥大學的 AI 安全活動與社群發展。',writing:'文章',writingDescription:'發表於 Substack 的文章與隨筆。',moreProjects:'之後會在這裡加入更多研究、職務與計畫。',moreTitle:'更多關於我',moreText:'我目前正在學希伯來文，之前學過法文。我也喜歡旅行、逛博物館、烘焙和藝術創作。',reading:'最近在讀：石黑一雄的《<cite>Never Let Me Go</cite>》與阿道斯・赫胥黎的《<cite>Brave New World</cite>》。',contact:'聯絡方式',selectedArt:'藝術作品選集',distraction:'小小分心一下',clear:'清除',canvasHint:'點一下下方任意位置。附近的點會彼此相連。',backToTop:'回到頂端',nameLabels:['平常使用的名字','正式中文姓名','正式英文姓名'] },
  fr: { navWork:'Parcours',navArt:'Art',navMore:'À propos',location:'Chicago, Illinois',intro:'Bonjour, je suis Jackie. Je viens de Taïwan et j’étudie actuellement l’économie et la philosophie à l’Université de Chicago.',interests:'Je m’intéresse à la sûreté de l’IA, aux politiques technologiques et à la manière de rendre les idées complexes accessibles.',safetyIntro:'Je crée du contenu accessible sur la sûreté de l’IA avec <a href="https://www.instagram.com/aisafety_today/" target="_blank" rel="noreferrer">AI Safety Today</a>. Ce site me permet aussi de garder une trace de mes projets, de ce que j’apprends et de mes créations en dehors du travail.',workTitle:'Parcours et projets',aisDescription:'Des explications courtes, documentées et accessibles sur la sûreté et les politiques de l’IA.',xlabRole:'Generalist Organizer, UChicago XLab AI Safety Group',xlabDescription:'Je contribue aux activités et à la communauté de sûreté de l’IA à UChicago.',writing:'Écrits',writingDescription:'Essais et notes publiés sur Substack.',moreProjects:'J’ajouterai bientôt d’autres recherches, rôles et projets.',moreTitle:'Un peu plus sur moi',moreText:'J’apprends actuellement l’hébreu et j’ai étudié le français. J’aime aussi voyager, visiter des musées, faire de la pâtisserie et créer de l’art.',reading:'En ce moment, je lis <cite>Never Let Me Go</cite> de Kazuo Ishiguro et <cite>Brave New World</cite> d’Aldous Huxley.',contact:'Contact',selectedArt:'Œuvres choisies',distraction:'Une petite distraction',clear:'effacer',canvasHint:'Cliquez ci-dessous. Les points proches se retrouveront.',backToTop:'Retour en haut',nameLabels:['le prénom que j’utilise','nom chinois officiel','nom anglais officiel'] },
  he: { navWork:'עשייה',navArt:'אמנות',navMore:'עוד',location:'שיקגו, אילינוי',intro:'היי, אני ג׳קי. אני מטאיוואן, וכיום לומדת כלכלה ופילוסופיה באוניברסיטת שיקגו.',interests:'אני מתעניינת בבטיחות בינה מלאכותית, במדיניות טכנולוגיה ובדרכים להנגיש רעיונות מורכבים.',safetyIntro:'אני יוצרת תוכן נגיש על בטיחות בינה מלאכותית במסגרת <a href="https://www.instagram.com/aisafety_today/" target="_blank" rel="noreferrer">AI Safety Today</a>. באתר הזה אני גם מתעדת את העשייה שלי, את הדברים שאני לומדת ואת היצירה שלי מחוץ לעבודה.',workTitle:'עשייה ופרויקטים',aisDescription:'הסברים קצרים ונגישים על בטיחות ומדיניות בינה מלאכותית, המבוססים על מקורות.',xlabRole:'מארגנת כללית, UChicago XLab AI Safety Group',xlabDescription:'מסייעת בפעילות ובבניית הקהילה לבטיחות בינה מלאכותית באוניברסיטת שיקגו.',writing:'כתיבה',writingDescription:'מסות ורשימות ב-Substack.',moreProjects:'מחקרים, תפקידים ופרויקטים נוספים יתווספו כאן.',moreTitle:'עוד עליי',moreText:'אני לומדת עכשיו עברית ולמדתי בעבר צרפתית. אני גם אוהבת לטייל, לבקר במוזיאונים, לאפות וליצור אמנות.',reading:'קוראת עכשיו את <cite>Never Let Me Go</cite> מאת קזואו אישיגורו ואת <cite>Brave New World</cite> מאת אלדוס האקסלי.',contact:'יצירת קשר',selectedArt:'עבודות נבחרות',distraction:'הסחת דעת קטנה',clear:'ניקוי',canvasHint:'לחצו בכל מקום למטה. נקודות קרובות ימצאו זו את זו.',backToTop:'חזרה למעלה',nameLabels:['השם שבו אני משתמשת','השם הסיני הרשמי','השם האנגלי הרשמי'] }
};
let currentLanguage = localStorage.getItem('language') || 'en';
const languageSelect = document.querySelector('#language-select');
if (!translations[currentLanguage]) currentLanguage = 'en';
languageSelect.value = currentLanguage;
function applyLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(element => { const key = element.dataset.i18n; element.textContent = copy[key] ?? translations.en[key]; });
  document.querySelectorAll('[data-i18n-html]').forEach(element => { const key = element.dataset.i18nHtml; element.innerHTML = copy[key] ?? translations.en[key]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { element.placeholder = copy[element.dataset.i18nPlaceholder] || translations.en[element.dataset.i18nPlaceholder]; });
  names.forEach((item, index) => { item.label = copy.nameLabels[index]; });
  slotLabel.textContent = names[nameIndex].label;
  localStorage.setItem('language', language);
}
languageSelect.addEventListener('change', event => { currentLanguage = event.target.value; applyLanguage(currentLanguage); });

const names = [
  { name: 'Jackie Huang', label: 'what I go by' },
  { name: 'Chih-Yi Huang', label: 'official Chinese name' },
  { name: 'Jacqueline Huang', label: 'official English name' }
];
let nameIndex = 0;
const nameWindow = document.querySelector('.name-window');
const slotName = document.querySelector('#slot-name');
const slotLabel = document.querySelector('#slot-label');
applyLanguage(currentLanguage);
document.querySelector('#name-lever').addEventListener('click', () => {
  nameIndex = (nameIndex + 1) % names.length;
  nameWindow.classList.remove('spinning');
  void nameWindow.offsetWidth;
  nameWindow.classList.add('spinning');
  setTimeout(() => {
    slotName.textContent = names[nameIndex].name;
    slotName.classList.toggle('long-name', nameIndex === 2);
    slotLabel.textContent = names[nameIndex].label;
  }, 190);
});

const canvas = document.querySelector('#constellation');
const context = canvas.getContext('2d');
let points = [];
function resize() {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  draw();
}
function draw() {
  const style = getComputedStyle(root);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = style.getPropertyValue('--text');
  context.strokeStyle = style.getPropertyValue('--muted');
  context.lineWidth = .75;
  points.forEach((point, index) => {
    for (let i = index + 1; i < points.length; i++) {
      const other = points[i];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 145) { context.globalAlpha = 1 - distance / 145; context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke(); }
    }
    context.globalAlpha = 1; context.beginPath(); context.arc(point.x, point.y, 2.2, 0, Math.PI * 2); context.fill();
  });
}
canvas.addEventListener('pointerdown', event => { const rect=canvas.getBoundingClientRect(); points.push({x:event.clientX-rect.left,y:event.clientY-rect.top}); draw(); });
document.querySelector('#clear-canvas').addEventListener('click',()=>{points=[];draw();});
theme.addEventListener('click', draw);
window.addEventListener('resize', resize);
resize();
