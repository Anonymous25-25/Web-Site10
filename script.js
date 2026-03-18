/**
 * CYBERSECURITY PORTFOLIO - MAIN JAVASCRIPT
 * Professional Penetration Tester Portfolio
 */

// ===========================================
// GLOBAL VARIABLES & STATE
// ===========================================
const state = {
    currentLanguage: 'en',
    theme: 'dark',
    isMenuOpen: false
};

// ===========================================
// TRANSLATIONS DATA
// ===========================================
const translations = {
    en: {
        // Navigation
        nav_home: 'Home',
        nav_services: 'Services',
        nav_skills: 'Skills',
        nav_about: 'About',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_badge: '🛡️ Youness Boussedari — Cybersecurity Engineer',
        hero_title: 'Offensive Security Specialist',
        hero_subtitle: 'Offensive Security | Ethical Hacking | Red Team',
        hero_description: 'I build real-world attack chains, validate detection, and deliver high-fidelity findings to help teams harden their systems.',
        hero_btn_primary: 'Request a Pentest',
        hero_btn_secondary: 'Learn More',
        
        // Stats
        stat_projects: 'Projects Completed',
        stat_certifications: 'Certifications',
        stat_satisfaction: 'Client Satisfaction',
        
        // Services
        services_badge: '🎯 What I Do',
        services_title: 'Professional Services',
        services_description: 'Comprehensive security solutions tailored to your organization\'s needs',
        service1_title: 'Penetration Testing',
        service2_title: 'Vulnerability Assessment',
        service3_title: 'Red Team Operations',
        service4_title: 'Security Consulting',
        
        // Skills
        skills_badge: '💻 Technical Expertise',
        skills_title: 'Skills & Technologies',
        skills_description: 'Core competencies and tools that power my security assessments',
        
        // Tools
        tools_badge: '🛠️ Arsenal',
        tools_title: 'Security Tools',
        tools_description: 'Professional tools and frameworks I use for security assessments',
        tools_btn: 'View All Tools',
        
        // Articles
        articles_badge: '📝 Knowledge Base',
        articles_title: 'Research & Writeups',
        articles_description: 'Latest security research, vulnerability disclosures, and technical writeups',
        article_read_more: 'Read More →',
        articles_btn: 'View All Articles',
        
        // Contact
        contact_badge: '📧 Get In Touch',
        contact_title: 'Let\'s Work Together',
        contact_description: 'Have a security project or need consultation? Reach out and let\'s discuss how I can help.',
        contact_email_label: 'Email',
        contact_location_label: 'Location',
        contact_location: 'Morocco',
        contact_phone_label: 'Phone',
        form_name: 'Your Name',
        form_email: 'Your Email',
        form_subject: 'Subject',
        form_message: 'Message',
        form_submit: 'Send Message',
        
        // Footer
        footer_description: 'Junior Penetration Tester specialized in offensive security and ethical hacking.',
        footer_quick_links: 'Quick Links',
        footer_services: 'Services',
        footer_connect: 'Connect',
        footer_tools: 'Tools',
        footer_articles: 'Articles',
        footer_rights: 'All rights reserved.',
        footer_disclaimer: 'This portfolio is for educational and professional purposes only.'
    },
    ar: {
        // Navigation
        nav_home: 'الرئيسية',
        nav_services: 'الخدمات',
        nav_skills: 'المهارات',
        nav_about: 'من أنا',
        nav_projects: 'المشاريع',
        nav_contact: 'اتصل',
        
        // Hero Section
        hero_badge: '🛡️ يونس بوسداري — مهندس أمن سيبراني',
        hero_title: 'أخصائي الأمن الهجومي',
        hero_subtitle: 'الأمن الهجومي | القرصنة الأخلاقية | الفريق الأحمر',
        hero_description: 'أبني سلاسل هجوم واقعية، أتحقق من الاكتشاف، وأوفر تقارير دقيقة لمساعدة الفرق على تعزيز أنظمتها.',
        hero_btn_primary: 'طلب اختبار اختراق',
        hero_btn_secondary: 'اعرف المزيد',
        
        // Stats
        stat_projects: 'مشاريع مكتملة',
        stat_certifications: 'شهادات',
        stat_satisfaction: 'رضا العملاء',
        
        // Services
        services_badge: '🎯 ماذا أفعل',
        services_title: 'الخدمات المهنية',
        services_description: 'حلول أمنية شاملة مصممة خصيصًا لاحتياجات مؤسستك',
        service1_title: 'اختبار الاختراق',
        service2_title: 'تقييم الثغرات',
        service3_title: 'عمليات الفريق الأحمر',
        service4_title: 'الاستشارات الأمنية',
        
        // Skills
        skills_badge: '💻 الخبرة التقنية',
        skills_title: 'المهارات والتقنيات',
        skills_description: 'الكفاءات الأساسية التي تدعم تقييماتي الأمنية',
        
        // Tools
        tools_badge: '🛠️ الترسانة',
        tools_title: 'أدوات الأمن',
        tools_description: 'الأدوات والأطر المهنية التي أستخدمها لتقييمات الأمن',
        tools_btn: 'عرض جميع الأدوات',
        
        // Articles
        articles_badge: '📝 قاعدة المعرفة',
        articles_title: 'البحث والمقالات',
        articles_description: 'أحدث الأبحاث الأمنية والكشف عن الثغرات والمقالات التقنية',
        article_read_more: 'اقرأ المزيد ←',
        articles_btn: 'عرض جميع المقالات',
        
        // Contact
        contact_badge: '📧 تواصل معي',
        contact_title: 'لنعمل معًا',
        contact_description: 'هل لديك مشروع أمني أو تحتاج إلى استشارة؟ تواصل معي ولنناقش كيف يمكنني المساعدة.',
        contact_email_label: 'البريد الإلكتروني',
        contact_location_label: 'الموقع',
        contact_location: 'المغرب',
        contact_phone_label: 'الهاتف',
        form_name: 'اسمك',
        form_email: 'بريدك الإلكتروني',
        form_subject: 'الموضوع',
        form_message: 'الرسالة',
        form_submit: 'إرسال الرسالة',
        
        // Footer
        footer_description: 'اختبار اختراق مبتدئ متخصص في الأمن الهجومي والقرصنة الأخلاقية.',
        footer_quick_links: 'روابط سريعة',
        footer_services: 'الخدمات',
        footer_connect: 'تواصل',
        footer_tools: 'الأدوات',
        footer_articles: 'المقالات',
        footer_rights: 'كل الحقوق محفوظة.',
        footer_disclaimer: 'هذا الموقع للأغراض التعليمية والمهنية فقط.',

        // About page
        about_badge: '🧑‍💻 من أنا',
        about_title: 'يونس بوسداري',
        about_description: 'مهندس أمن سيبراني ومختبر اختراق متخصص في الأمن الهجومي.',
        about_me_title: 'نبذة عني',

        // Services descriptions
        service1_description: 'تقييمات أمنية شاملة لتحديد الثغرات في بنيتك التحتية وتطبيقاتك.',
        service1_feature1: 'اختبار أمان الشبكات',
        service1_feature2: 'اختبار تطبيقات الويب',
        service1_feature3: 'أمان تطبيقات الجوال',
        service2_description: 'فحص منهجي للثغرات الأمنية مع تقارير مفصلة وتوصيات للمعالجة.',
        service2_feature1: 'الفحص الآلي',
        service2_feature2: 'التحقق اليدوي',
        service2_feature3: 'تحديد الأولويات حسب المخاطر',
        service3_description: 'هجمات محاكاة للواقع لاختبار قدرات اكتشاف مؤسستك والاستجابة للتهديدات.',
        service3_feature1: 'الهندسة الاجتماعية',
        service3_feature2: 'اختبار الأمان المادي',
        service3_feature3: 'محاكاة التهديدات',
        service4_description: 'إرشاد خبير حول هندسة الأمان وتطوير السياسات ومتطلبات الامتثال.',
        service4_feature1: 'تدقيق الأمان',
        service4_feature2: 'تقييم الامتثال',
        service4_feature3: 'التدريب والتوعية',

        // Projects section
        projects_badge: '🧪 المختبرات والمشاريع',
        projects_title: 'مختبرات الأمان ودراسات الحالة',
        projects_description: 'مشاريع مختبرية عملية تُظهر تقنيات الأمن الهجومي والتقارير.',

        // Skills
        skill_cat1_title: 'الأمن الهجومي',
        skill1_1: 'اختبار تطبيقات الويب',
        skill1_2: 'اختراق الشبكات',
        skill1_3: 'تطوير الاستغلال',
        skill1_4: 'الهندسة الاجتماعية',
        skill_cat2_title: 'البرمجة والسكريبت',
        skill_cat3_title: 'أطر الأمان',

        // Articles
        article1_category: 'أمان الويب',
        article1_title: 'تقنيات حقن SQL المتقدمة',
        article1_excerpt: 'استكشاف ناقلات حقن SQL الحديثة وتجاوز حماية WAF في التطبيقات المؤسسية.',
        article2_category: 'الفريق الأحمر',
        article2_title: 'استغلال Active Directory',
        article2_excerpt: 'دليل شامل لاختراق بيئات Active Directory من الوصول الأولي إلى السيطرة الكاملة.',
        article3_category: 'أمان الجوال',
        article3_title: 'اختبار اختراق تطبيقات أندرويد',
        article3_excerpt: 'منهجية شاملة لاختبار تطبيقات أندرويد تشمل الهندسة العكسية والتلاعب في وقت التشغيل.',
        article_read_more: 'اقرأ المزيد ←',
        articles_btn: 'عرض جميع المقالات',
        articles_badge: '📝 قاعدة المعرفة',
        articles_title: 'البحث والمقالات',
        articles_description: 'أحدث الأبحاث الأمنية والكشف عن الثغرات والمقالات التقنية',

        // About page - stats
        about_stat1_title: 'التعليم',
        about_stat1_value: 'طالب أمن سيبراني',
        about_stat2_title: 'الخبرة',
        about_stat2_value: '+2 سنوات',
        about_stat3_title: 'الشهادات',
        about_stat3_value: '+15 شهادة نشطة',

        // About page - intro
        about_intro_title: 'مرحباً، أنا يونس',
        about_intro_p1: 'أنا طالب شغوف بالأمن السيبراني متخصص في اختبار الاختراق والأمن الهجومي. بدأت رحلتي في الأمن السيبراني بفضول حول كيفية عمل الأنظمة وكيفية تأمينها ضد المهاجمين.',
        about_intro_p2: 'بفهم قوي لمنهجيات القرصنة الأخلاقية وخبرة عملية في تقييم الثغرات، أسعى إلى مساعدة المنظمات في تحديد نقاط الضعف الأمنية ومعالجتها.',
        about_intro_p3: 'أوسع معرفتي باستمرار من خلال المختبرات العملية ومسابقات CTF ومتابعة أحدث اتجاهات الأمان وناقلات الهجوم.',

        // About page - focus areas
        about_focus_title: 'مجالات التركيز',
        about_focus1: 'أمان تطبيقات الويب',
        about_focus2: 'اختراق الشبكات',
        about_focus3: 'أمان الجوال',
        about_focus4: 'الهندسة الاجتماعية',

        // Certifications
        cert_badge: '🏆 الاعتمادات',
        cert_title: 'الشهادات والتدريب',
        cert1: 'هاكر أخلاقي معتمد',
        cert2: 'مختبر اختراق مبتدئ - eLearnSecurity',
        cert3: 'أساسيات الأمن',
        cert4: 'متخصص أمن هجومي معتمد',
        cert_progress: 'قيد التقدم',

        // Skills detail
        skills_detail_title: 'مجموعة المهارات الشاملة',
        tab_offensive: 'الأمن الهجومي',
        tab_defensive: 'المهارات الدفاعية',
        tab_programming: 'البرمجة',
        tab_tools: 'الأدوات والمنصات',

        skill_detail1_title: 'اختبار تطبيقات الويب',
        skill_detail1_item1: 'حقن SQL وهجمات NoSQL',
        skill_detail1_item2: 'ثغرات XSS و CSRF و XXE',
        skill_detail1_item3: 'المصادقة وإدارة الجلسات',
        skill_detail1_item4: 'اختبار أمان API',
        skill_detail2_title: 'اختراق الشبكات',
        skill_detail2_item1: 'فحص المنافذ والتعداد',
        skill_detail2_item2: 'استغلال الثغرات',
        skill_detail2_item3: 'تقنيات تصعيد الامتيازات',
        skill_detail2_item4: 'الحركة الجانبية',
        skill_detail3_title: 'أمان الشبكات اللاسلكية',
        skill_detail3_item1: 'اختراق WPA/WPA2',
        skill_detail3_item2: 'هجمات النقطة الزائفة',
        skill_detail3_item3: 'أمان Bluetooth',
        skill_detail3_item4: 'تحليل بروتوكول RF',
        skill_detail4_title: 'الهندسة الاجتماعية',
        skill_detail4_item1: 'حملات التصيد الاحتيالي',
        skill_detail4_item2: 'سيناريوهات الادعاء',
        skill_detail4_item3: 'اختبار الأمان المادي',
        skill_detail4_item4: 'استطلاع OSINT',
        skill_defensive1_title: 'الاستجابة للحوادث',
        skill_defensive1_item1: 'البحث عن التهديدات',
        skill_defensive1_item2: 'تحليل السجلات',
        skill_defensive1_item3: 'أساسيات تحليل البرامج الضارة',
        skill_defensive1_item4: 'أساسيات الجنائيات الرقمية',
        skill_defensive2_title: 'تعزيز الأمان',
        skill_defensive2_item1: 'تكوين الأنظمة',
        skill_defensive2_item2: 'إدارة التحديثات',
        skill_defensive2_item3: 'تطبيق التحكم في الوصول',
        skill_defensive2_item4: 'تجزئة الشبكة',
        skill_prog1_item1: 'سكريبتات الأتمتة',
        skill_prog1_item2: 'تطوير الاستغلال المخصص',
        skill_prog1_item3: 'إنشاء أدوات الأمان',
        skill_prog1_item4: 'التفاعل مع API',
        skill_prog2_item1: 'الأتمتة والتنسيق',
        skill_prog2_item2: 'إدارة الأنظمة',
        skill_prog2_item3: 'تحليل البيانات',
        skill_prog2_item4: 'حمولات السطر الواحد',
        skill_prog4_title: 'البرمجة المنخفضة المستوى',
        skill_prog4_item3: 'استغلال تجاوز سعة المخزن المؤقت',
        skill_prog4_item4: 'الهندسة العكسية',

        tool_cat1: 'منصات اختبار الاختراق',
        tool_cat2: 'الاستطلاع',
        tool_cat3: 'اختبار تطبيقات الويب',
        tool_cat4: 'أطر الاستغلال',
        tool_cat5: 'كسر كلمات المرور',
        tool_cat6: 'تحليل الشبكة',

        // Timeline
        timeline_badge: '📅 المسيرة',
        timeline_title: 'مسيرتي في الأمن السيبراني',
        timeline1_title: 'اختبار الاختراق المتقدم',
        timeline1_desc: 'السعي للحصول على شهادة OSCP والتخصص في عمليات الفريق الأحمر والمساهمة في أدوات الأمان مفتوحة المصدر.',
        timeline2_title: 'الشهادات المهنية',
        timeline2_desc: 'الحصول على شهادات CEH و eJPT. إكمال تحديات CTF عديدة والمشاركة في برامج مكافأة الثغرات.',
        timeline3_title: 'دراسات الأمن السيبراني',
        timeline3_desc: 'بدء التعليم الرسمي في الأمن السيبراني. الحصول على CompTIA Security+ وبدء بناء بيئة المختبر المنزلي.',
        timeline4_title: 'البداية',
        timeline4_desc: 'اكتشاف الشغف بالأمن السيبراني من خلال دورات القرصنة الأخلاقية والموارد الإلكترونية. البدء في تعلم Linux وأساسيات الشبكات.',

        // CTA
        cta_title: 'هل أنت مستعد لتأمين أنظمتك؟',
        cta_description: 'لنناقش كيف يمكنني المساعدة في تحديد الثغرات الأمنية ومعالجتها في مؤسستك.',
        cta_btn1: 'تواصل معي',
        cta_btn2: 'عرض أدواتي',

        // Tools page
        tools_page_title: 'ترسانة الأمان الكاملة',
        tools_page_description: 'جميع الأدوات المهنية التي أستخدمها في تقييمات الأمان',
        tools_filter_all: 'الكل',
        tools_filter_recon: 'الاستطلاع',
        tools_filter_exploit: 'الاستغلال',
        tools_filter_web: 'الويب',
        tools_filter_network: 'الشبكات',
        tools_filter_password: 'كلمات المرور',
        tools_filter_forensics: 'الجنائيات',

        // Articles page
        articles_page_title: 'البحث والمقالات',
        articles_page_subtitle: 'أبحاث الأمان وتحليل الثغرات والمقالات التقنية',
        art1_title: 'تقنيات حقن SQL المتقدمة',
        art1_excerpt: 'استكشاف معمق لناقلات حقن SQL الحديثة وتقنيات تجاوز حماية WAF...',
        art2_title: 'استغلال Active Directory',
        art2_excerpt: 'دليل شامل لاختراق بيئات AD من الوصول الأولي إلى السيطرة الكاملة...',
        art3_title: 'اختبار اختراق تطبيقات أندرويد',
        art3_excerpt: 'منهجية شاملة لاختبار تطبيقات أندرويد تشمل الهندسة العكسية...',
        art4_title: 'إساءة تكوين أمان AWS',
        art4_excerpt: 'أخطاء التكوين الشائعة في AWS وكيفية تحديدها واستغلالها...',
        art_cat_web: 'أمان الويب',
        art_cat_redteam: 'الفريق الأحمر',
        art_cat_mobile: 'أمان الجوال',
        art_cat_cloud: 'أمان السحابة',
        art_read_full: 'قراءة المقال كاملاً ←'
    }
};

// ===========================================
// DOM READY
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// ===========================================
// INITIALIZATION
// ===========================================
function initializeApp() {
    // Load saved preferences
    loadPreferences();
    
    // Initialize components
    initializeNavbar();
    initializeSearch();
    initializeLanguageSwitcher();
    initializeThemeSwitcher();
    initializeScrollEffects();
    initializeSkillsAnimation();
    initializeTypingEffect();
    initializeContactForm();
    initializeToolsFilter();
    initializeSkillsTabs();
    initializeLoginForm();
    initializeMobileMenu();
    
    // Apply initial translations
    updatePageLanguage();
}

// ===========================================
// PREFERENCES MANAGEMENT
// ===========================================
function loadPreferences() {
    // Load language
    const savedLang = localStorage.getItem('portfolio_language');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        state.currentLanguage = savedLang;
    } else {
        state.currentLanguage = 'en';
        localStorage.removeItem('portfolio_language');
    }
    
    // Load theme
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) {
        state.theme = savedTheme;
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }
}

function savePreferences() {
    localStorage.setItem('portfolio_language', state.currentLanguage);
    localStorage.setItem('portfolio_theme', state.theme);
}

// ===========================================
// NAVBAR FUNCTIONALITY
// ===========================================
function initializeNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle smooth scrolling for same-page anchors
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Close mobile menu if open
                    closeMobileMenu();
                }
            }
        });
    });
    
    // Scroll spy for active sections
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===========================================
// SEARCH BAR (UI Only)
// ===========================================
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (!searchInput || !searchBtn) return;

    const performSearch = () => {
        const query = searchInput.value.trim();
        if (!query) {
            searchInput.focus();
            return;
        }
        alert(`Search feature coming soon! You searched for: "${query}"`);
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });
}

// ===========================================
// MOBILE MENU
// ===========================================
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            state.isMenuOpen = !state.isMenuOpen;
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (navOverlay) navOverlay.classList.toggle('active');
            document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', () => closeMobileMenu());
        }

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => closeMobileMenu());
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.isMenuOpen) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    if (mobileToggle && navMenu) {
        state.isMenuOpen = false;
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===========================================
// LANGUAGE SWITCHER
// ===========================================
function initializeLanguageSwitcher() {
    // querySelectorAll gets ALL lang-btns including inside mobile menu
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });

        // Set initial active state
        if (btn.getAttribute('data-lang') === state.currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function switchLanguage(lang) {
    // Only allow 'en' and 'ar'
    if (lang !== 'en' && lang !== 'ar') return;

    state.currentLanguage = lang;
    savePreferences();
    updatePageLanguage();

    // Apply RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl-active');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl-active');
    }

    // Update active state on ALL lang buttons
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    // Re-run typing effect if language changes
    if (document.querySelector('.hero-title')) {
        const titleEl = document.querySelector('.hero-title span[data-translate="hero_title"]');
        if (titleEl) {
            titleEl.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
        }
    }
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    const currentTranslations = translations[state.currentLanguage];
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = currentTranslations[key];
            } else {
                element.textContent = currentTranslations[key];
            }
        }
    });
}

// ===========================================
// THEME SWITCHER
// ===========================================
function initializeThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            toggleTheme();
        });
        
        // Update icon
        updateThemeIcon();
    }
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    
    if (state.theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    
    updateThemeIcon();
    savePreferences();
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = state.theme === 'dark' ? '🌙' : '☀️';
    }
}

// ===========================================
// SCROLL EFFECTS
// ===========================================
function initializeScrollEffects() {
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const fadeElements = document.querySelectorAll('.service-card, .article-card, .tool-card, .skill-category');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================================
// SKILLS ANIMATION
// ===========================================
function initializeSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ===========================================
// TYPING EFFECT
// ===========================================
function initializeTypingEffect() {
    const typingElement = document.querySelector('.hero-title');
    
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let index = 0;
    const speed = 100;
    
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Add cursor after typing is done
            const cursor = document.querySelector('.typing-cursor');
            if (cursor) {
                cursor.style.display = 'inline';
            }
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 500);
}

// ===========================================
// CONTACT FORM
// ===========================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ===========================================
// TOOLS FILTER
// ===========================================
function initializeToolsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const toolCards = document.querySelectorAll('.tool-detailed-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter tools
            toolCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===========================================
// SKILLS TABS
// ===========================================
function initializeSkillsTabs() {
    const skillTabs = document.querySelectorAll('.skill-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Update active tab
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show target pane
            tabPanes.forEach(pane => {
                if (pane.id === targetTab) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });
}

// ===========================================
// LOGIN FORM
// ===========================================
function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Demo login
            if (username === 'admin' && password === 'demo123') {
                alert('Login successful! Redirecting to dashboard...');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials. Use: admin / demo123');
            }
        });
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to element
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===========================================
// CONSOLE SIGNATURE
// ===========================================
console.log('%c YOUNES - PENETRATION TESTING PORTFOLIO ', 'background: linear-gradient(135deg, #00f0ff, #a855f7); color: #0A0E1A; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
console.log('%c 🛡️ Professional Cybersecurity Portfolio ', 'color: #00f0ff; font-size: 14px; font-weight: bold;');
console.log('%c ⚠️ If someone told you to copy/paste something here, it\'s a scam! ', 'color: #ef4444; font-size: 12px; font-weight: bold;');

