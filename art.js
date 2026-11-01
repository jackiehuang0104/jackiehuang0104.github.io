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
    mainNavigation:'Main navigation', language:'Language', themeToggle:'Toggle dark mode', chicagoPin:'View the artwork seen in Chicago', athensPin:'View the museum visit in Athens', romePin:'View art and architecture seen in Rome', venicePin:'View art and architecture seen in Venice', netherlandsPin:'View artworks seen in the Netherlands', suzhouPin:'View architecture seen in Suzhou', bostonPin:'View artworks seen in Boston', newYorkPin:'View artworks seen in New York', malaysiaPin:'View architecture seen in Malaysia', californiaPin:'View art and architecture seen in California', dcPin:'View art and landmarks seen in Washington, DC', philadelphiaPin:'View artworks seen in Philadelphia', navWork:'Work', navArt:'Art', navMore:'More', translationNote:'* translations not proofread',
    pageTitle:'Art I make & meet!', pageIntro:'A growing collection of my own work and the artworks that have stayed with me in museums around the world.',
    myArt:'Things I’ve made', museumTitle:'Art I’ve met', museumCounter:'12 places mapped', globeLabel:'An interactive rotating globe for artworks seen around the world', globeInstruction:'Drag to turn the globe. Select a pin to see the artwork.',
    museumIntro:'I’m building a map of memorable works I’ve encountered in person. Each pin opens photographs and notes about where I saw them.', chicagoTitle:'Chicago',chicagoVisit:'Art Institute of Chicago · multiple visits',october2024:'October 2024',may2025:'May 2025',june2026:'June 2026', athensTitle:'Athens',athensGallery:'National Archaeological Museum', athensVisit:'National Archaeological Museum · September 2026', romeTitle:'Rome',romeVisit:'Art, architecture, and archaeology · 2026',romeSacred:'Sacred spaces',romeBorghese:'Galleria Borghese',romeMuseums:'Vatican Museums',romeAncient:'Ancient Rome',veniceTitle:'Venice',veniceVisit:'Churches and museums · 2026',veniceSacred:'Sacred spaces',caPesaro:'Ca’ Pesaro — International Gallery of Modern Art',netherlandsTitle:'The Netherlands',netherlandsVisit:'The Hague & Amsterdam · January 2023 and January 2024',vanGoghMuseum:'Van Gogh Museum',rijksmuseumVisit:'Rijksmuseum · January 2024',suzhouTitle:'Suzhou',suzhouVisit:'Architecture · June 2024',suzhouArchitecture:'Historic architecture',bostonTitle:'Boston',bostonVisit:'Museums · November 2024',mfaBoston:'Museum of Fine Arts, Boston',newYorkTitle:'New York City',newYorkVisit:'Museums · March 2025',moma:'Museum of Modern Art (MoMA)',metMuseum:'The Metropolitan Museum of Art',malaysiaTitle:'Malaysia',malaysiaVisit:'Street and temple architecture · August 2025',malaysiaArchitecture:'Architecture and streets',californiaTitle:'California',californiaVisit:'San Francisco, Stanford & Los Angeles · November 2025',sanFrancisco:'San Francisco',losAngeles:'Los Angeles',dcPhillyTitle:'Washington, DC & Philadelphia',dcPhillyVisit:'Museums, monuments, and architecture · March 2026',washingtonDc:'Washington, DC',philadelphia:'Philadelphia',backToTop:'Back to top',
    altZebra:'Mixed-media artwork of a zebra in a surreal landscape', altBirds:'Red and blue marker drawing of birds', altHands:'Blue and orange ink portrait surrounded by hands', altTomatoes:'Pencil still life study of tomatoes', altHydrangea:'Green hydrangea illustration on yellow', altCat:'Marker portrait of a tortoiseshell cat', altWall:'Jackie standing beside a large wall drawing of faces', altTheKiss:'The Kiss displayed at the Art Institute of Chicago',altAic:'Artwork at the Art Institute of Chicago', altAthensGallery:'A sculpture gallery at the National Archaeological Museum in Athens',altAthensArtwork:'A large decorative artwork at the National Archaeological Museum in Athens',altRomeSacred:'Sacred art and architecture in Rome',altRomeBorghese:'Sculpture and gallery interiors at the Galleria Borghese',altRomeMuseums:'Art and displays in the Vatican Museums',altRomeAncient:'Ancient Roman sites and objects',altVeniceSacred:'A sacred interior in Venice',altCaPesaro:'Art at Ca’ Pesaro’s International Gallery of Modern Art',altAccademia:'A gallery at the Gallerie dell’Accademia in Venice',altGuggenheim:'A gallery at the Peggy Guggenheim Collection in Venice',altMauritshuis:'Art and gallery interiors at the Mauritshuis in The Hague',altVanGoghMuseum:'Paintings at the Van Gogh Museum in Amsterdam',altRijksmuseum:'The Milkmaid by Johannes Vermeer at the Rijksmuseum',altSuzhou:'Historic pagoda in Suzhou',altHarvard:'Artwork at Harvard Art Museums',altMfaBoston:'Artwork at the Museum of Fine Arts, Boston',altGardner:'Interiors of the Isabella Stewart Gardner Museum',altMoma:'Artwork at the Museum of Modern Art in New York',altMalaysia:'Street and temple architecture in Malaysia',altSanFrancisco:'Art and architecture in San Francisco',altStanford:'Art and architecture at Stanford',altLosAngeles:'Art and artifacts in Los Angeles',altMet:'Artwork at the Metropolitan Museum of Art',altDc:'Art, architecture, and landmarks in Washington, DC',altPhiladelphia:'Art and museum interiors in Philadelphia'
  },
  'zh-TW': {
    mainNavigation:'主要導覽', language:'語言', themeToggle:'切換深色模式', chicagoPin:'查看在芝加哥看過的作品', athensPin:'查看在雅典參觀的博物館', romePin:'查看在羅馬看過的藝術與建築', venicePin:'查看在威尼斯看過的藝術與建築', netherlandsPin:'查看在荷蘭看過的藝術作品', suzhouPin:'查看在蘇州看過的建築', bostonPin:'查看在波士頓看過的藝術作品', newYorkPin:'查看在紐約看過的藝術作品', malaysiaPin:'查看在馬來西亞看過的建築', californiaPin:'查看在加州看過的藝術與建築', dcPin:'查看在華盛頓特區看過的藝術與地標', philadelphiaPin:'查看在費城看過的藝術作品', navWork:'經歷', navArt:'藝術', navMore:'關於我', translationNote:'* 翻譯尚未校對',
    pageTitle:'我創作與遇見的藝術！', pageIntro:'這裡收藏著我的作品，也記錄那些我在世界各地的博物館裡親眼看過、至今仍難忘的藝術品。',
    myArt:'我的創作', museumTitle:'旅途中遇見的藝術', museumCounter:'已標記 12 個地點', globeLabel:'可旋轉的互動式地球，標記我在世界各地看過的藝術品', globeInstruction:'拖曳即可轉動地球；點選標記可查看作品。',
    museumIntro:'我正在製作一張地圖，記錄那些曾親眼看過、令我難忘的作品。每個標記都會附上照片，以及我在哪裡看到它們的簡短筆記。', chicagoTitle:'芝加哥',chicagoVisit:'芝加哥藝術博物館 · 多次參觀',october2024:'2024 年 10 月',may2025:'2025 年 5 月',june2026:'2026 年 6 月', athensTitle:'雅典',athensGallery:'雅典國家考古博物館', athensVisit:'雅典國家考古博物館 · 2026 年 9 月',romeTitle:'羅馬',romeVisit:'藝術、建築與考古 · 2026 年',romeSacred:'宗教藝術與建築',romeBorghese:'博爾蓋塞美術館',romeMuseums:'梵蒂岡博物館',romeAncient:'古羅馬',veniceTitle:'威尼斯',veniceVisit:'教堂與博物館 · 2026 年',veniceSacred:'宗教空間',caPesaro:'佩薩羅宮－國際現代藝術館',netherlandsTitle:'荷蘭',netherlandsVisit:'海牙與阿姆斯特丹 · 2023 年 1 月及 2024 年 1 月',vanGoghMuseum:'梵谷博物館',rijksmuseumVisit:'荷蘭國家博物館 · 2024 年 1 月',suzhouTitle:'蘇州',suzhouVisit:'建築 · 2024 年 6 月',suzhouArchitecture:'歷史建築',bostonTitle:'波士頓',bostonVisit:'博物館 · 2024 年 11 月',mfaBoston:'波士頓美術館',newYorkTitle:'紐約',newYorkVisit:'博物館 · 2025 年 3 月',moma:'紐約現代藝術博物館（MoMA）',metMuseum:'大都會藝術博物館',malaysiaTitle:'馬來西亞',malaysiaVisit:'街道與寺廟建築 · 2025 年 8 月',malaysiaArchitecture:'建築與街景',californiaTitle:'加州',californiaVisit:'舊金山、史丹佛與洛杉磯 · 2025 年 11 月',sanFrancisco:'舊金山',losAngeles:'洛杉磯',dcPhillyTitle:'華盛頓特區與費城',dcPhillyVisit:'博物館、紀念碑與建築 · 2026 年 3 月',washingtonDc:'華盛頓特區',philadelphia:'費城',backToTop:'回到頂端',
    altZebra:'斑馬置身超現實景觀中的複合媒材作品', altBirds:'以紅、藍色麥克筆繪製的鳥', altHands:'被手環繞的藍橘色墨水人物畫', altTomatoes:'番茄的鉛筆靜物素描', altHydrangea:'黃色背景上的綠色繡球花插畫', altCat:'玳瑁貓的麥克筆肖像', altWall:'Jackie 站在一幅大型人臉牆畫旁', altTheKiss:'在芝加哥藝術博物館展出的《The Kiss》',altAic:'芝加哥藝術博物館展出的藝術作品', altAthensGallery:'雅典國家考古博物館的雕塑展廳',altAthensArtwork:'雅典國家考古博物館的大型裝飾藝術作品',altRomeSacred:'羅馬的宗教藝術與建築',altRomeBorghese:'博爾蓋塞美術館的雕塑與展廳',altRomeMuseums:'梵蒂岡博物館的藝術作品與展覽',altRomeAncient:'古羅馬遺址與文物',altVeniceSacred:'威尼斯的宗教空間',altCaPesaro:'佩薩羅宮國際現代藝術館展出的藝術作品',altAccademia:'威尼斯學院美術館的展廳',altGuggenheim:'威尼斯佩姬・古根漢美術館的展廳',altMauritshuis:'海牙莫瑞泰斯皇家美術館的藝術作品與展廳',altVanGoghMuseum:'阿姆斯特丹梵谷博物館的畫作',altRijksmuseum:'荷蘭國家博物館展出的維梅爾《倒牛奶的女僕》',altSuzhou:'蘇州的歷史寶塔',altHarvard:'哈佛藝術博物館展出的藝術作品',altMfaBoston:'波士頓美術館展出的藝術作品',altGardner:'伊莎貝拉・史都華・嘉納藝術博物館的室內空間',altMoma:'紐約現代藝術博物館展出的藝術作品',altMalaysia:'馬來西亞的街景與寺廟建築',altSanFrancisco:'舊金山的藝術與建築',altStanford:'史丹佛的藝術與建築',altLosAngeles:'洛杉磯的藝術與展品',altMet:'大都會藝術博物館展出的藝術作品',altDc:'華盛頓特區的藝術、建築與地標',altPhiladelphia:'費城的藝術與博物館空間'
  },
  fr: {
    mainNavigation:'Navigation principale', language:'Langue', themeToggle:'Activer ou désactiver le mode sombre', chicagoPin:'Voir l’œuvre découverte à Chicago', athensPin:'Voir la visite du musée à Athènes', romePin:'Voir l’art et l’architecture découverts à Rome', venicePin:'Voir l’art et l’architecture découverts à Venise', netherlandsPin:'Voir les œuvres découvertes aux Pays-Bas', suzhouPin:'Voir l’architecture découverte à Suzhou', bostonPin:'Voir les œuvres découvertes à Boston', newYorkPin:'Voir les œuvres découvertes à New York', malaysiaPin:'Voir l’architecture découverte en Malaisie', californiaPin:'Voir l’art et l’architecture découverts en Californie', dcPin:'Voir l’art et les monuments découverts à Washington', philadelphiaPin:'Voir les œuvres découvertes à Philadelphie', navWork:'Parcours', navArt:'Art', navMore:'À propos', translationNote:'* traductions non relues',
    pageTitle:'L’art que je crée et que je découvre !', pageIntro:'Une collection qui s’agrandit au fil du temps : mes propres créations et les œuvres découvertes dans des musées du monde entier qui m’ont marquée.',
    myArt:'Mes créations', museumTitle:'Des œuvres qui m’ont marquée', museumCounter:'12 lieux sur la carte', globeLabel:'Globe interactif et rotatif des œuvres découvertes à travers le monde', globeInstruction:'Faites glisser le globe pour le faire tourner. Sélectionnez un repère pour voir l’œuvre.',
    museumIntro:'Je rassemble sur cette carte les œuvres marquantes que j’ai vues en personne. Chaque repère donne accès à des photos et à quelques mots sur les lieux où je les ai découvertes.', chicagoTitle:'Chicago',chicagoVisit:'Art Institute of Chicago · plusieurs visites',october2024:'octobre 2024',may2025:'mai 2025',june2026:'juin 2026', athensTitle:'Athènes',athensGallery:'Musée national archéologique d’Athènes', athensVisit:'Musée national archéologique d’Athènes · septembre 2026',romeTitle:'Rome',romeVisit:'Art, architecture et archéologie · 2026',romeSacred:'Art sacré et édifices religieux',romeBorghese:'Galerie Borghèse',romeMuseums:'Musées du Vatican',romeAncient:'Rome antique',veniceTitle:'Venise',veniceVisit:'Églises et musées · 2026',veniceSacred:'Édifices religieux',caPesaro:'Ca’ Pesaro — Galerie internationale d’art moderne',netherlandsTitle:'Pays-Bas',netherlandsVisit:'La Haye et Amsterdam · janvier 2023 et janvier 2024',vanGoghMuseum:'Musée Van Gogh',rijksmuseumVisit:'Rijksmuseum · janvier 2024',suzhouTitle:'Suzhou',suzhouVisit:'Architecture · juin 2024',suzhouArchitecture:'Architecture historique',bostonTitle:'Boston',bostonVisit:'Musées · novembre 2024',mfaBoston:'Musée des Beaux-Arts de Boston',newYorkTitle:'New York',newYorkVisit:'Musées · mars 2025',moma:'Museum of Modern Art (MoMA)',metMuseum:'Metropolitan Museum of Art',malaysiaTitle:'Malaisie',malaysiaVisit:'Rues et architecture religieuse · août 2025',malaysiaArchitecture:'Architecture et rues',californiaTitle:'Californie',californiaVisit:'San Francisco, Stanford et Los Angeles · novembre 2025',sanFrancisco:'San Francisco',losAngeles:'Los Angeles',dcPhillyTitle:'Washington et Philadelphie',dcPhillyVisit:'Musées, monuments et architecture · mars 2026',washingtonDc:'Washington',philadelphia:'Philadelphie',backToTop:'Retour en haut',
    altZebra:'Œuvre en techniques mixtes représentant un zèbre dans un paysage surréaliste', altBirds:'Dessin d’oiseaux au feutre rouge et bleu', altHands:'Portrait à l’encre bleue et orange entouré de mains', altTomatoes:'Étude de tomates au crayon', altHydrangea:'Illustration d’un hortensia vert sur fond jaune', altCat:'Portrait au feutre d’un chat écaille de tortue', altWall:'Jackie devant un grand dessin mural représentant des visages', altTheKiss:'The Kiss exposé à l’Art Institute of Chicago',altAic:'Œuvre exposée à l’Art Institute of Chicago', altAthensGallery:'Une galerie de sculptures au Musée national archéologique d’Athènes',altAthensArtwork:'Une grande œuvre décorative au Musée national archéologique d’Athènes',altRomeSacred:'Art sacré et architecture religieuse à Rome',altRomeBorghese:'Sculptures et salles de la Galerie Borghèse',altRomeMuseums:'Œuvres et espaces d’exposition des Musées du Vatican',altRomeAncient:'Sites et objets de la Rome antique',altVeniceSacred:'Un édifice religieux à Venise',altCaPesaro:'Œuvres exposées à la Galerie internationale d’art moderne de Ca’ Pesaro',altAccademia:'Une salle des Gallerie dell’Accademia à Venise',altGuggenheim:'Une salle de la Collection Peggy Guggenheim à Venise',altMauritshuis:'Œuvres et salles du Mauritshuis à La Haye',altVanGoghMuseum:'Tableaux du Musée Van Gogh à Amsterdam',altRijksmuseum:'La Laitière de Johannes Vermeer au Rijksmuseum',altSuzhou:'Pagode historique à Suzhou',altHarvard:'Œuvres exposées aux Harvard Art Museums',altMfaBoston:'Œuvres exposées au Musée des Beaux-Arts de Boston',altGardner:'Intérieurs de l’Isabella Stewart Gardner Museum',altMoma:'Œuvres exposées au Museum of Modern Art de New York',altMalaysia:'Rues et architecture religieuse en Malaisie',altSanFrancisco:'Art et architecture à San Francisco',altStanford:'Art et architecture à Stanford',altLosAngeles:'Œuvres et objets exposés à Los Angeles',altMet:'Œuvres exposées au Metropolitan Museum of Art',altDc:'Art, architecture et monuments à Washington',altPhiladelphia:'Art et espaces muséaux à Philadelphie'
  },
  he: {
    mainNavigation:'ניווט ראשי', language:'שפה', themeToggle:'החלפת מצב תצוגה כהה', chicagoPin:'הצגת היצירה שראיתי בשיקגו', athensPin:'הצגת הביקור במוזיאון באתונה', romePin:'הצגת האמנות והאדריכלות שראיתי ברומא', venicePin:'הצגת האמנות והאדריכלות שראיתי בוונציה', netherlandsPin:'הצגת יצירות אמנות שראיתי בהולנד', suzhouPin:'הצגת אדריכלות שראיתי בסוג׳ואו', bostonPin:'הצגת יצירות אמנות שראיתי בבוסטון', newYorkPin:'הצגת יצירות אמנות שראיתי בניו יורק', malaysiaPin:'הצגת אדריכלות שראיתי במלזיה', californiaPin:'הצגת אמנות ואדריכלות שראיתי בקליפורניה', dcPin:'הצגת אמנות ואתרים שראיתי בוושינגטון', philadelphiaPin:'הצגת יצירות אמנות שראיתי בפילדלפיה', navWork:'עשייה', navArt:'אמנות', navMore:'עוד', translationNote:'* התרגומים טרם עברו הגהה',
    pageTitle:'אמנות שאני יוצרת ופוגשת!', pageIntro:'אוסף שהולך וגדל: יצירות שלי, לצד יצירות שראיתי במוזיאונים ברחבי העולם ונשארו איתי.',
    myArt:'יצירות שלי', museumTitle:'יצירות שפגשתי בדרך', museumCounter:'שנים עשר מקומות על המפה', globeLabel:'גלובוס אינטראקטיבי מסתובב של יצירות אמנות שראיתי ברחבי העולם', globeInstruction:'גררו כדי לסובב את הגלובוס. בחרו בנקודה כדי לראות את היצירה.',
    museumIntro:'אני בונה מפה של יצירות בלתי נשכחות שראיתי במו עיניי. כל נקודה נפתחת לתמונות ולכמה מילים על המקומות שבהם ראיתי אותן.', chicagoTitle:'שיקגו',chicagoVisit:'המכון לאמנות של שיקגו · כמה ביקורים',october2024:'אוקטובר 2024',may2025:'מאי 2025',june2026:'יוני 2026', athensTitle:'אתונה',athensGallery:'המוזיאון הארכאולוגי הלאומי של אתונה', athensVisit:'המוזיאון הארכאולוגי הלאומי של אתונה · ספטמבר 2026',romeTitle:'רומא',romeVisit:'אמנות, אדריכלות וארכאולוגיה · 2026',romeSacred:'אמנות ומרחבים דתיים',romeBorghese:'גלריה בורגזה',romeMuseums:'מוזיאוני הוותיקן',romeAncient:'רומא העתיקה',veniceTitle:'ונציה',veniceVisit:'כנסיות ומוזיאונים · 2026',veniceSacred:'מרחבים דתיים',caPesaro:'קא׳ פזארו — הגלריה הבינלאומית לאמנות מודרנית',netherlandsTitle:'הולנד',netherlandsVisit:'האג ואמסטרדם · ינואר 2023 וינואר 2024',vanGoghMuseum:'מוזיאון ואן גוך',rijksmuseumVisit:'רייקסמוזיאום · ינואר 2024',suzhouTitle:'סוג׳ואו',suzhouVisit:'אדריכלות · יוני 2024',suzhouArchitecture:'אדריכלות היסטורית',bostonTitle:'בוסטון',bostonVisit:'מוזיאונים · נובמבר 2024',mfaBoston:'המוזיאון לאמנויות יפות בבוסטון',newYorkTitle:'ניו יורק',newYorkVisit:'מוזיאונים · מרץ 2025',moma:'המוזיאון לאמנות מודרנית (MoMA)',metMuseum:'מוזיאון המטרופוליטן לאמנות',malaysiaTitle:'מלזיה',malaysiaVisit:'רחובות ואדריכלות מקדשים · אוגוסט 2025',malaysiaArchitecture:'אדריכלות ורחובות',californiaTitle:'קליפורניה',californiaVisit:'סן פרנסיסקו, סטנפורד ולוס אנג׳לס · נובמבר 2025',sanFrancisco:'סן פרנסיסקו',losAngeles:'לוס אנג׳לס',dcPhillyTitle:'וושינגטון ופילדלפיה',dcPhillyVisit:'מוזיאונים, אנדרטאות ואדריכלות · מרץ 2026',washingtonDc:'וושינגטון',philadelphia:'פילדלפיה',backToTop:'חזרה למעלה',
    altZebra:'יצירה בטכניקה מעורבת של זברה בנוף סוריאליסטי', altBirds:'ציור של ציפורים בטושים אדומים וכחולים', altHands:'דיוקן בדיו כחולה וכתומה המוקף בידיים', altTomatoes:'רישום טבע דומם של עגבניות בעיפרון', altHydrangea:'איור של הורטנזיה ירוקה על רקע צהוב', altCat:'דיוקן בטושים של חתול בעל פרווה בגוני צב', altWall:'ג׳קי עומדת ליד ציור קיר גדול של פנים', altTheKiss:'היצירה The Kiss מוצגת במכון לאמנות של שיקגו',altAic:'יצירת אמנות במכון לאמנות של שיקגו', altAthensGallery:'גלריית פסלים במוזיאון הארכאולוגי הלאומי באתונה',altAthensArtwork:'יצירת אמנות דקורטיבית גדולה במוזיאון הארכאולוגי הלאומי באתונה',altRomeSacred:'אמנות ואדריכלות דתית ברומא',altRomeBorghese:'פסלים וחללי תצוגה בגלריה בורגזה',altRomeMuseums:'יצירות אמנות וחללי תצוגה במוזיאוני הוותיקן',altRomeAncient:'אתרים וחפצים מרומא העתיקה',altVeniceSacred:'חלל דתי בוונציה',altCaPesaro:'אמנות בגלריה הבינלאומית לאמנות מודרנית בקא׳ פזארו',altAccademia:'חלל תצוגה בגלריית האקדמיה בוונציה',altGuggenheim:'חלל תצוגה באוסף פגי גוגנהיים בוונציה',altMauritshuis:'יצירות אמנות וחללי תצוגה במאוריצהאוס שבהאג',altVanGoghMuseum:'ציורים במוזיאון ואן גוך באמסטרדם',altRijksmuseum:'הציור החלבנית מאת יוהנס ורמיר ברייקסמוזיאום',altSuzhou:'פגודה היסטורית בסוג׳ואו',altHarvard:'יצירות אמנות במוזיאוני האמנות של הרווארד',altMfaBoston:'יצירות אמנות במוזיאון לאמנויות יפות בבוסטון',altGardner:'חללי הפנים של מוזיאון איזבלה סטיוארט גרדנר',altMoma:'יצירות אמנות במוזיאון לאמנות מודרנית בניו יורק',altMalaysia:'רחובות ואדריכלות מקדשים במלזיה',altSanFrancisco:'אמנות ואדריכלות בסן פרנסיסקו',altStanford:'אמנות ואדריכלות בסטנפורד',altLosAngeles:'אמנות ומוצגים בלוס אנג׳לס',altMet:'יצירות אמנות במוזיאון המטרופוליטן לאמנות',altDc:'אמנות, אדריכלות ואתרים בוושינגטון',altPhiladelphia:'אמנות וחללי מוזיאונים בפילדלפיה'
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
const netherlandsPin = document.querySelector('#netherlands-pin');
const suzhouPin = document.querySelector('#suzhou-pin');
const bostonPin = document.querySelector('#boston-pin');
const newYorkPin = document.querySelector('#new-york-pin');
const malaysiaPin = document.querySelector('#malaysia-pin');
const californiaPin = document.querySelector('#california-pin');
const dcPin = document.querySelector('#dc-pin');
const philadelphiaPin = document.querySelector('#philadelphia-pin');
let yaw = .7;
let pitch = .22;
let dragging = false;
let previous = null;
let animationFrame;
let globeVisible = true;
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
  const netherlands = rotatePoint(52.2, 5.3);
  netherlandsPin.hidden = netherlands.z < 0;
  if (!netherlandsPin.hidden) {
    netherlandsPin.style.left = `${centerX + netherlands.x * radius - 10}px`;
    netherlandsPin.style.top = `${centerY - netherlands.y * radius - 10}px`;
  }
  const suzhou = rotatePoint(31.2989, 120.5853);
  suzhouPin.hidden = suzhou.z < 0;
  if (!suzhouPin.hidden) {
    suzhouPin.style.left = `${centerX + suzhou.x * radius}px`;
    suzhouPin.style.top = `${centerY - suzhou.y * radius}px`;
  }
  const boston = rotatePoint(42.3601, -71.0589);
  bostonPin.hidden = boston.z < 0;
  if (!bostonPin.hidden) {
    bostonPin.style.left = `${centerX + boston.x * radius - 10}px`;
    bostonPin.style.top = `${centerY - boston.y * radius - 10}px`;
  }
  const newYork = rotatePoint(40.7128, -74.006);
  newYorkPin.hidden = newYork.z < 0;
  if (!newYorkPin.hidden) {
    newYorkPin.style.left = `${centerX + newYork.x * radius + 10}px`;
    newYorkPin.style.top = `${centerY - newYork.y * radius + 10}px`;
  }
  const malaysia = rotatePoint(4.2105, 101.9758);
  malaysiaPin.hidden = malaysia.z < 0;
  if (!malaysiaPin.hidden) {
    malaysiaPin.style.left = `${centerX + malaysia.x * radius}px`;
    malaysiaPin.style.top = `${centerY - malaysia.y * radius}px`;
  }
  const california = rotatePoint(36.7783, -119.4179);
  californiaPin.hidden = california.z < 0;
  if (!californiaPin.hidden) {
    californiaPin.style.left = `${centerX + california.x * radius}px`;
    californiaPin.style.top = `${centerY - california.y * radius}px`;
  }
  const dc = rotatePoint(38.9072, -77.0369);
  dcPin.hidden = dc.z < 0;
  if (!dcPin.hidden) {
    dcPin.style.left = `${centerX + dc.x * radius - 10}px`;
    dcPin.style.top = `${centerY - dc.y * radius - 10}px`;
  }
  const philadelphia = rotatePoint(39.9526, -75.1652);
  philadelphiaPin.hidden = philadelphia.z < 0;
  if (!philadelphiaPin.hidden) {
    philadelphiaPin.style.left = `${centerX + philadelphia.x * radius + 10}px`;
    philadelphiaPin.style.top = `${centerY - philadelphia.y * radius + 10}px`;
  }
}

function animate() {
  if (!globeVisible || document.hidden) {
    animationFrame = null;
    return;
  }
  if (!dragging && !reducedMotion) yaw += .00012;
  drawGlobe();
  animationFrame = requestAnimationFrame(animate);
}

function startGlobeAnimation() {
  if (animationFrame == null && globeVisible && !document.hidden) animate();
}

new IntersectionObserver(entries => {
  globeVisible = entries[0].isIntersecting;
  if (globeVisible) startGlobeAnimation();
  else if (animationFrame != null) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
}, { rootMargin:'120px' }).observe(canvas);

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
  const copy = document.querySelector('.museum-copy');
  copy.prepend(entry);
  entry.classList.remove('selected');
  void entry.offsetWidth;
  entry.classList.add('selected');
}
chicagoPin.addEventListener('click', () => revealEntry('#chicago-art-entry'));
athensPin.addEventListener('click', () => revealEntry('#athens-art-entry'));
romePin.addEventListener('click', () => revealEntry('#rome-art-entry'));
venicePin.addEventListener('click', () => revealEntry('#venice-art-entry'));
netherlandsPin.addEventListener('click', () => revealEntry('#netherlands-art-entry'));
suzhouPin.addEventListener('click', () => revealEntry('#suzhou-art-entry'));
bostonPin.addEventListener('click', () => revealEntry('#boston-art-entry'));
newYorkPin.addEventListener('click', () => revealEntry('#new-york-art-entry'));
malaysiaPin.addEventListener('click', () => revealEntry('#malaysia-art-entry'));
californiaPin.addEventListener('click', () => revealEntry('#california-art-entry'));
dcPin.addEventListener('click', () => revealEntry('#dc-philly-art-entry'));
philadelphiaPin.addEventListener('click', () => revealEntry('#dc-philly-art-entry'));
window.addEventListener('resize', drawGlobe);
document.addEventListener('visibilitychange', () => {
  if (document.hidden && animationFrame != null) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  } else startGlobeAnimation();
});
startGlobeAnimation();
