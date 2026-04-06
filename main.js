// Data Definitions
const timelineData = [
    { year: "1744", event: "تأسيس الدولة السعودية الأولى" },
    { year: "1818", event: "سقوط الدولة السعودية الأولى" },
    { year: "1824", event: "تأسيس الدولة السعودية الثانية" },
    { year: "1891", event: "سقوط الدولة السعودية الثانية" },
    { year: "1902", event: "استرجاع الرياض" },
    { year: "1932", event: "توحيد المملكة العربية السعودية" },
    { year: "1938", event: "اكتشاف النفط" },
    { year: "2030", event: "رؤية المملكة 2030" },
];

const heritageItems = {
    food: [
        { id: "kabsa", name: "الكبسة", description: "طبق سعودي تقليدي", details: "الكبسة هي طبق سعودي شهير يتكون من الأرز والدجاج أو اللحم، مع التوابل والبهارات. تُعتبر من أشهر الأطباق السعودية وتُقدم في المناسبات الخاصة." },
        { id: "jareesh", name: "الجريش", description: "طبق تقليدي قديم", details: "الجريش هو طبق تقليدي سعودي قديم يتكون من القمح المطحون والدجاج أو اللحم. يُعتبر من الأطباق الشعبية المشهورة في المملكة." },
        { id: "mutabbaq", name: "المطبق", description: "حلوى سعودية لذيذة", details: "المطبق هو حلوى سعودية شهيرة تُصنع من العجين الرقيق المحشو بالتمر أو الجبن. تُقدم عادة مع القهوة العربية." },
    ],
    clothing: [
        { id: "thobe", name: "الثوب", description: "اللباس التقليدي للرجال", details: "الثوب هو اللباس التقليدي السعودي للرجال. يتميز بلونه الأبيض عادة ويُرتدى في المناسبات الرسمية والحفلات." },
        { id: "abaya", name: "العباية", description: "اللباس التقليدي للنساء", details: "العباية هي اللباس التقليدي السعودي للنساء. تتميز بتصميمها الفضفاض وألوانها الداكنة، وغالباً ما تُزين بالتطريزات الذهبية." },
        { id: "ghutra", name: "الغترة", description: "غطاء الرأس التقليدي", details: "الغترة هي غطاء الرأس التقليدي للرجال السعوديين. تُرتدى مع العقال وتتميز بألوانها البيضاء أو المخططة." },
    ],
    customs: [
        { id: "coffee", name: "القهوة العربية", description: "تقليد عريق", details: "القهوة العربية هي تقليد عريق في الثقافة السعودية. تُقدم للضيوف كعلامة من الترحيب والضيافة، وتُحضر بطريقة خاصة مع الهيل والزعفران." },
        { id: "hospitality", name: "الضيافة", description: "قيمة اجتماعية أساسية", details: "الضيافة هي قيمة اجتماعية أساسية في الثقافة السعودية. يُرحب الضيوف بحرارة ويُقدم لهم الطعام والشراب بكرم." },
        { id: "family", name: "الأسرة", description: "أساس المجتمع", details: "الأسرة هي أساس المجتمع السعودي. تتميز بقوة الروابط العائلية والاحترام المتبادل بين الأجيال." },
    ],
};

const dialects = [
    {
        id: "najd", name: "نجد", icon: "🏜️", color: "#D4AF37", description: "لهجة منطقة نجد",
        details: "لهجة نجد تتميز بخصائص لغوية فريدة. تُستخدم في الرياض وما حولها. تتميز بنطق واضح وسرعة في الكلام.",
        characteristics: ["نطق واضح للحروف", "سرعة في الكلام", "استخدام كلمات خاصة", "تأثر بالعربية الفصحى"],
        questions: [
            { id: 1, word: "شنو", meaning: "؟", options: ["ماذا", "كيف", "أين", "متى"], correctAnswer: 1, explanation: "كلمة 'شنو' في لهجة نجد تعني 'كيف' أو 'ماذا'. تُستخدم للسؤال عن الحالة أو الأشياء." },
            { id: 2, word: "وشلون", meaning: "", options: ["وماذا", "وكيف", "وأين", "ولماذا"], correctAnswer: 1, explanation: "'وشلون' هي إضافة 'و' على 'شلون' وتعني 'وكيف' في لهجة نجد." },
            { id: 3, word: "تمام", meaning: "؟", options: ["سيء", "حسناً", "غريب", "عجيب"], correctAnswer: 1, explanation: "'تمام' كلمة نجدية تعني 'حسناً' أو 'بخير' وتُستخدم للرد الإيجابي." },
            { id: 4, word: "بتقول", meaning: "؟", options: ["تسأل", "تقول", "تفعل", "تذهب"], correctAnswer: 1, explanation: "'بتقول' في نجد تعني 'تقول' وهي صيغة الفعل المضارع المختلفة عن الفصحى." },
            { id: 5, word: "أبغى", meaning: "؟", options: ["أحتاج", "أريد", "أطلب", "أبحث"], correctAnswer: 1, explanation: "'أبغى' كلمة نجدية قديمة تعني 'أريد' وتُستخدم بكثرة في اللهجة النجدية." },
        ]
    },
    {
        id: "hijaz", name: "حجاز", icon: "🕌", color: "#1A3A52", description: "لهجة منطقة الحجاز",
        details: "لهجة الحجاز تُستخدم في مكة والمدينة وجدة. تتميز بنعومة في النطق وتأثر بلهجات إسلامية تاريخية.",
        characteristics: ["نعومة في النطق", "تأثر تاريخي إسلامي", "استخدام كلمات مختلفة", "تنوع في الأصوات"],
        questions: [
            { id: 1, word: "إيش", meaning: "؟", options: ["كيف", "ماذا", "أين", "متى"], correctAnswer: 1, explanation: "'إيش' في لهجة الحجاز تعني 'ماذا' وهي كلمة شهيرة في هذه اللهجة." },
            { id: 2, word: "بتقول", meaning: "؟", options: ["تسأل", "تقول", "تفعل", "تذهب"], correctAnswer: 1, explanation: "'بتقول' في الحجاز تعني 'تقول' وتُستخدم بشكل مشابه للهجة النجدية." },
            { id: 3, word: "والله", meaning: "؟", options: ["بالفعل", "والله", "أعتقد", "ربما"], correctAnswer: 1, explanation: "'والله' في الحجاز تُستخدم كحلف أو تأكيد على الكلام." },
            { id: 4, word: "يلا", meaning: "؟", options: ["انتظر", "هيا", "توقف", "اجلس"], correctAnswer: 1, explanation: "'يلا' كلمة حجازية تعني 'هيا' أو تُستخدم للتسريع والاستعجال." },
            { id: 5, word: "أهلاً", meaning: "؟", options: ["وداعاً", "أهلاً", "شكراً", "عفواً"], correctAnswer: 1, explanation: "'أهلاً' كلمة حجازية تُستخدم للترحيب والاستقبال الحار." },
        ]
    },
    {
        id: "south", name: "جنوب", icon: "🏔️", color: "#D4AF37", description: "لهجة المنطقة الجنوبية",
        details: "لهجة الجنوب تُستخدم في عسير وجازان وأبها. تتميز بخصائص فريدة وتأثر بلهجات يمنية.",
        characteristics: ["خصائص فريدة", "تأثر يمني", "نطق مميز", "كلمات خاصة بالمنطقة"],
        questions: [
            { id: 1, word: "شنو", meaning: "؟", options: ["كيف", "ماذا", "أين", "متى"], correctAnswer: 1, explanation: "'شنو' في لهجة الجنوب تعني 'ماذا' وهي كلمة شهيرة في هذه المنطقة." },
            { id: 2, word: "قال", meaning: "؟", options: ["فعل", "قال", "ذهب", "جاء"], correctAnswer: 1, explanation: "'قال' في الجنوب تُستخدم بصيغة مختلفة قليلاً عن الفصحى." },
            { id: 3, word: "أبو", meaning: "؟", options: ["الأم", "الوالد", "الأخ", "العم"], correctAnswer: 1, explanation: "'أبو' في الجنوب تُستخدم للإشارة إلى الوالد أو الشخص الأكبر سناً." },
            { id: 4, word: "حاضر", meaning: "؟", options: ["غائب", "موافق", "رافض", "متردد"], correctAnswer: 1, explanation: "'حاضر' في الجنوب تعني 'موافق' أو 'حسناً' وتُستخدم للموافقة." },
            { id: 5, word: "يا", meaning: "؟", options: ["من", "يا", "إلى", "عن"], correctAnswer: 1, explanation: "'يا' في الجنوب تُستخدم للنداء والاستدعاء كما في الفصحى." },
        ]
    },
    {
        id: "east", name: "شرق", icon: "🏭", color: "#1A3A52", description: "لهجة المنطقة الشرقية",
        details: "لهجة الشرق تُستخدم في الدمام والخبر والظهران. تتميز بتأثر خليجي واضح.",
        characteristics: ["تأثر خليجي", "نطق مميز", "كلمات خليجية", "تنوع صوتي"],
        questions: [
            { id: 1, word: "شنو", meaning: "؟", options: ["كيف", "ماذا", "أين", "متى"], correctAnswer: 1, explanation: "'شنو' في لهجة الشرق تعني 'ماذا' وهي كلمة خليجية شهيرة." },
            { id: 2, word: "يلا", meaning: "؟", options: ["انتظر", "هيا", "توقف", "اجلس"], correctAnswer: 1, explanation: "'يلا' في الشرق تعني 'هيا' وتُستخدم للتسريع والاستعجال." },
            { id: 3, word: "خلاص", meaning: "؟", options: ["ابدأ", "انتهى", "استمر", "توقف"], correctAnswer: 1, explanation: "'خلاص' في الشرق تعني 'انتهى' أو 'حسناً' وتُستخدم للإنهاء." },
            { id: 4, word: "ويلك", meaning: "؟", options: ["شكراً", "يا له", "عذراً", "أهلاً"], correctAnswer: 1, explanation: "'ويلك' في الشرق تُستخدم للتعجب أو الدهشة من الشيء." },
            { id: 5, word: "ما في", meaning: "؟", options: ["يوجد", "لا يوجد", "قد يكون", "ربما"], correctAnswer: 1, explanation: "'ما في' في الشرق تعني 'لا يوجد' وتُستخدم للنفي." },
        ]
    }
];

// Router Implementation
const routes = {
    '/': renderHome,
    '/history': renderHistory,
    '/heritage': renderHeritage,
    '/dialects': renderDialects,
    '/quiz': renderQuiz
};

function navigate(path) {
    window.history.pushState({}, "", path);
    handleRoute();
}

function handleRoute() {
    const path = window.location.pathname || '/';
    const renderFunc = routes[path] || renderHome;
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    
    // Reset scroll position
    window.scrollTo(0, 0);
    
    renderFunc();
}

window.onpopstate = handleRoute;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Handle Navigation Clicks using event delegation
    document.body.addEventListener('click', (e) => {
        const navLink = e.target.closest('[data-nav]');
        if (navLink) {
            e.preventDefault();
            const path = navLink.getAttribute('href');
            navigate(path);
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    handleRoute();
});

// Render Functions
function renderHome() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663096379376/A5Ro2HMCtU95GefUwtCxEX/hero-saudi-heritage-dA8aXWtPBRE7npWiPKsWXE.webp')">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title fade-in">التراث السعودي</h1>
                <p class="hero-subtitle fade-in" style="animation-delay: 0.2s">اكتشف عمق الثقافة والتاريخ العريق</p>
                <a href="/history" class="btn btn-lg btn-accent fade-in" style="animation-delay: 0.4s" onclick="event.preventDefault(); navigate('/history')">
                    استكشف التاريخ
                </a>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">زمان vs الآن</h2>
                <div class="section-divider"></div>
                <div class="slider-container" id="before-after-slider">
                    <div class="slider-img img-before" style="background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfRTt3yxQrVyMC-MJh_u4O6rva49-Wt_Ft1A1O-9gQUhGZw3qPPG9slWXQhHVwtEQ1kOQ_16Z9UGkWzGiNGqF1rMj0wXupOuexlvnkAqOPLbm7t679k_PbPp9yn8PhYySn6dZl_WxlSMfXbmXEtIz1hxKaxWhzZoIzdwmdRHebei79TF8h-vgp8iZcMX5w/s1000/al-nassr-25-26-home-kit%20(5).jpg')"></div>
                    <div class="slider-img img-after" id="img-after" style="background-image: url('https://ksa-gate.com/wp-content/uploads/2025/10/721440549.jpg')"></div>
                    <div class="slider-handle" id="slider-handle">
                        <div class="slider-button">اسحب</div>
                    </div>
                    <div class="slider-label label-before">زمان</div>
                    <div class="slider-label label-after">الآن</div>
                </div>
            </div>
        </section>

        <section class="section bg-muted">
            <div class="container text-center">
                <h2 class="section-title">هل أنت مستعد للتحدي؟</h2>
                <p class="mb-8">اختبر معلوماتك عن اللهجات السعودية والكلمات الخاصة بكل منطقة</p>
                <a href="/quiz" class="btn btn-lg btn-accent" onclick="event.preventDefault(); navigate('/quiz')">ابدأ التحدي الآن</a>
            </div>
        </section>
    `;
    initSlider();
}

function renderHistory() {
    const main = document.getElementById('main-content');
    let timelineHtml = timelineData.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content heritage-card">
                <div class="timeline-year">${item.year}</div>
                <p>${item.event}</p>
            </div>
        </div>
    `).join('');

    main.innerHTML = `
        <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663096379376/A5Ro2HMCtU95GefUwtCxEX/history-timeline-bg-HcVnN6FjmF8sHApfJ5beNb.webp'); height: 400px;">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title">التاريخ</h1>
                <p class="hero-subtitle">رحلة المملكة عبر العصور</p>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">الخط الزمني</h2>
                <div class="section-divider"></div>
                <div class="timeline">
                    ${timelineHtml}
                </div>
            </div>
        </section>
    `;
}

function renderHeritage() {
    const main = document.getElementById('main-content');
    const categories = [
        { key: "food", title: "الأكل", icon: "🍽️" },
        { key: "clothing", title: "الملابس", icon: "👗" },
        { key: "customs", title: "العادات", icon: "🎭" },
    ];

    let contentHtml = categories.map(cat => `
        <div class="mb-8">
            <h2 class="section-title" style="text-align: right; font-size: 2rem;">${cat.icon} ${cat.title}</h2>
            <div class="heritage-grid">
                ${heritageItems[cat.key].map(item => `
                    <div class="heritage-card" onclick="showModal('${item.id}')">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="read-more">اضغط للمزيد ←</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    main.innerHTML = `
        <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663096379376/A5Ro2HMCtU95GefUwtCxEX/heritage-culture-bg-N6k2zer5e5cZtArRTcQdHt.webp'); height: 400px;">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title">التراث</h1>
                <p class="hero-subtitle">استكشف الثقافة السعودية الغنية</p>
            </div>
        </section>
        <section class="section">
            <div class="container">
                ${contentHtml}
            </div>
        </section>
        <div id="modal" class="modal-overlay" onclick="if(event.target == this) closeModal()">
            <div class="modal-content">
                <button class="close-modal" onclick="closeModal()">&times;</button>
                <h2 id="modal-title" class="mb-4"></h2>
                <p id="modal-body" class="text-lg"></p>
            </div>
        </div>
    `;
}

function showModal(id) {
    const allItems = Object.values(heritageItems).flat();
    const item = allItems.find(i => i.id === id);
    if (item) {
        document.getElementById('modal-title').innerText = item.name;
        document.getElementById('modal-body').innerText = item.details;
        document.getElementById('modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function renderDialects() {
    const main = document.getElementById('main-content');
    let dialectsHtml = dialects.map(d => `
        <div class="heritage-card mb-4" onclick="toggleDialect('${d.id}')">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 1rem; height: 1rem; border-radius: 50%; background-color: ${d.color}"></div>
                    <div>
                        <h3 style="margin: 0;">${d.name}</h3>
                        <p style="margin: 0;">${d.description}</p>
                    </div>
                </div>
                <div id="chevron-${d.id}" style="transition: transform 0.3s;">▼</div>
            </div>
            <div id="details-${d.id}" class="hidden" style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 1rem;">
                <p class="mb-4">${d.details}</p>
                <h4 class="mb-2">الخصائص المميزة:</h4>
                <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; list-style: none;">
                    ${d.characteristics.map(c => `<li><span style="color: ${d.color}">•</span> ${c}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    main.innerHTML = `
        <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663096379376/A5Ro2HMCtU95GefUwtCxEX/dialects-map-bg-ACVRpfvpqvhEWK2yTDehiJ.webp'); height: 400px;">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title">اللهجات</h1>
                <p class="hero-subtitle">تنوع اللهجات في مناطق المملكة</p>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <h2 class="section-title">اللهجات الإقليمية</h2>
                <div class="section-divider"></div>
                <div style="max-width: 800px; margin: 0 auto;">
                    ${dialectsHtml}
                </div>
                
                <h2 class="section-title mt-4">توزيع اللهجات الجغرافي</h2>
                <div class="section-divider"></div>
                <div style="max-width: 800px; margin: 0 auto;">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663096379376/A5Ro2HMCtU95GefUwtCxEX/dialects-map-bg-ACVRpfvpqvhEWK2yTDehiJ.webp" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-md);">
                </div>
            </div>
        </section>
    `;
}

function toggleDialect(id) {
    const details = document.getElementById(`details-${id}`);
    const chevron = document.getElementById(`chevron-${id}`);
    const isHidden = details.classList.contains('hidden');
    
    // Close all
    dialects.forEach(d => {
        document.getElementById(`details-${d.id}`).classList.add('hidden');
        document.getElementById(`chevron-${d.id}`).style.transform = 'rotate(0deg)';
    });
    
    if (isHidden) {
        details.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
    }
}

// Quiz Logic
let currentQuiz = {
    dialect: null,
    questionIndex: 0,
    score: 0,
    answered: false
};

function renderQuiz() {
    const main = document.getElementById('main-content');
    
    if (!currentQuiz.dialect) {
        let dialectsHtml = dialects.map(d => `
            <div class="heritage-card" onclick="startQuiz('${d.id}')">
                <div style="font-size: 3rem; margin-bottom: 1rem;">${d.icon}</div>
                <h3>${d.name}</h3>
                <p>${d.questions.length} أسئلة عن مفردات اللهجة</p>
            </div>
        `).join('');

        main.innerHTML = `
            <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663096379376/A5Ro2HMCtU95GefUwtCxEX/quiz-challenge-bg-ZikERdnPCeSpGzeyAMVXCJ.png'); height: 400px;">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">تحدي اللهجات</h1>
                    <p class="hero-subtitle">اختبر معرفتك بمفردات اللهجات السعودية</p>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <h2 class="section-title">اختر اللهجة التي تريد اختبارها</h2>
                    <div class="section-divider"></div>
                    <div class="dialect-grid">
                        ${dialectsHtml}
                    </div>
                </div>
            </section>
        `;
    } else {
        const d = dialects.find(d => d.id === currentQuiz.dialect);
        const q = d.questions[currentQuiz.questionIndex];
        const progress = ((currentQuiz.questionIndex + 1) / d.questions.length) * 100;

        main.innerHTML = `
            <section class="section">
                <div class="container quiz-container">
                    <div class="heritage-card">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                            <span>السؤال ${currentQuiz.questionIndex + 1} من ${d.questions.length}</span>
                            <span style="background-color: ${d.color}; color: white; padding: 0.2rem 1rem; border-radius: 1rem;">${d.name}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        
                        <div class="mb-8">
                            <p style="color: var(--muted-foreground)">معنى الكلمة:</p>
                            <h2 style="font-size: 2.5rem; color: var(--accent); margin: 0.5rem 0;">${q.word}</h2>
                            <p style="font-size: 1.2rem; font-style: italic;">"${q.meaning}"</p>
                        </div>
                        
                        <div id="options-container">
                            ${q.options.map((opt, i) => `
                                <button class="option-btn" onclick="checkAnswer(${i})">${opt}</button>
                            `).join('')}
                        </div>
                        
                        <div id="explanation-box" class="hidden" style="background-color: var(--muted); padding: 1rem; border-radius: var(--radius); margin-bottom: 1rem;">
                            <p><strong>الشرح:</strong></p>
                            <p>${q.explanation}</p>
                        </div>
                        
                        <button id="next-btn" class="btn btn-accent hidden" style="width: 100%" onclick="nextQuestion()">
                            ${currentQuiz.questionIndex === d.questions.length - 1 ? 'عرض النتائج' : 'السؤال التالي'}
                        </button>
                    </div>
                </div>
            </section>
        `;
    }
}

function startQuiz(dialectId) {
    currentQuiz = {
        dialect: dialectId,
        questionIndex: 0,
        score: 0,
        answered: false
    };
    renderQuiz();
}

function checkAnswer(index) {
    if (currentQuiz.answered) return;
    
    const d = dialects.find(d => d.id === currentQuiz.dialect);
    const q = d.questions[currentQuiz.questionIndex];
    const btns = document.querySelectorAll('.option-btn');
    
    currentQuiz.answered = true;
    
    if (index === q.correctAnswer) {
        currentQuiz.score++;
        btns[index].classList.add('correct');
    } else {
        btns[index].classList.add('wrong');
        btns[q.correctAnswer].classList.add('correct');
    }
    
    document.getElementById('explanation-box').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    const d = dialects.find(d => d.id === currentQuiz.dialect);
    if (currentQuiz.questionIndex < d.questions.length - 1) {
        currentQuiz.questionIndex++;
        currentQuiz.answered = false;
        renderQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    const d = dialects.find(d => d.id === currentQuiz.dialect);
    const main = document.getElementById('main-content');
    
    let message = "";
    if (currentQuiz.score === d.questions.length) message = "ممتاز! أنت خبير في لهجة " + d.name + "! 🎉";
    else if (currentQuiz.score >= d.questions.length * 0.7) message = "رائع! أداء جيد جداً 👏";
    else message = "حاول مرة أخرى وتعلم المزيد 💪";

    main.innerHTML = `
        <section class="section">
            <div class="container quiz-container">
                <div class="heritage-card text-center">
                    <div style="font-size: 4rem; font-weight: 700; color: var(--accent); margin-bottom: 1rem;">
                        ${currentQuiz.score}/${d.questions.length}
                    </div>
                    <h2 class="mb-4">${message}</h2>
                    <p class="mb-8" style="color: var(--muted-foreground)">لقد أجبت بشكل صحيح على ${currentQuiz.score} من ${d.questions.length} أسئلة</p>
                    <div style="display: flex; gap: 1rem; justify-content: center;">
                        <button class="btn btn-accent" onclick="startQuiz('${d.id}')">حاول مرة أخرى</button>
                        <button class="btn btn-outline" onclick="currentQuiz.dialect=null; renderQuiz()">اختر لهجة أخرى</button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Slider Logic
function initSlider() {
    const container = document.getElementById('before-after-slider');
    const handle = document.getElementById('slider-handle');
    const imgAfter = document.getElementById('img-after');
    
    if (!container || !handle || !imgAfter) return;
    
    let isDragging = false;
    
    const onMove = (e) => {
        if (!isDragging) return;
        const rect = container.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        let position = (x / rect.width) * 100;
        
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        
        handle.style.left = `${position}%`;
        imgAfter.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    };
    
    handle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', onMove);
    
    handle.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', onMove);
}
