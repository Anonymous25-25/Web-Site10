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
        nav_about: 'About Me',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_badge: '🛡️ Cybersecurity Professional',
        hero_title: 'Penetration Testing',
        hero_subtitle: 'Offensive Security | Ethical Hacking | Red Team',
        hero_description: 'I am Younes, a cybersecurity student specialized in Penetration Testing. I focus on identifying vulnerabilities and helping organizations improve their security.',
        hero_btn_primary: 'Get Started',
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
    fr: {
        // Navigation
        nav_home: 'Accueil',
        nav_services: 'Services',
        nav_skills: 'Compétences',
        nav_about: 'À Propos',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_badge: '🛡️ Professionnel en Cybersécurité',
        hero_title: 'Tests d\'Intrusion',
        hero_subtitle: 'Sécurité Offensive | Hacking Éthique | Red Team',
        hero_description: 'Je suis Younes, étudiant en cybersécurité spécialisé dans les tests d\'intrusion. Je me concentre sur l\'identification des vulnérabilités et l\'amélioration de la sécurité des organisations.',
        hero_btn_primary: 'Commencer',
        hero_btn_secondary: 'En Savoir Plus',
        
        // Stats
        stat_projects: 'Projets Réalisés',
        stat_certifications: 'Certifications',
        stat_satisfaction: 'Satisfaction Client',
        
        // Services
        services_badge: '🎯 Ce Que Je Fais',
        services_title: 'Services Professionnels',
        services_description: 'Solutions de sécurité complètes adaptées aux besoins de votre organisation',
        service1_title: 'Tests d\'Intrusion',
        service2_title: 'Évaluation des Vulnérabilités',
        service3_title: 'Opérations Red Team',
        service4_title: 'Conseil en Sécurité',
        
        // Skills
        skills_badge: '💻 Expertise Technique',
        skills_title: 'Compétences & Technologies',
        skills_description: 'Compétences clés qui alimentent mes évaluations de sécurité',
        
        // Tools
        tools_badge: '🛠️ Arsenal',
        tools_title: 'Outils de Sécurité',
        tools_description: 'Outils et frameworks professionnels que j\'utilise pour les évaluations de sécurité',
        tools_btn: 'Voir Tous les Outils',
        
        // Articles
        articles_badge: '📝 Base de Connaissances',
        articles_title: 'Recherche & Articles',
        articles_description: 'Dernières recherches en sécurité, divulgations de vulnérabilités et articles techniques',
        article_read_more: 'Lire la Suite →',
        articles_btn: 'Voir Tous les Articles',
        
        // Contact
        contact_badge: '📧 Contactez-Moi',
        contact_title: 'Travaillons Ensemble',
        contact_description: 'Vous avez un projet de sécurité ou besoin de consultation ? Contactez-moi et discutons de la manière dont je peux vous aider.',
        contact_email_label: 'Email',
        contact_location_label: 'Localisation',
        contact_location: 'Maroc',
        contact_phone_label: 'Téléphone',
        form_name: 'Votre Nom',
        form_email: 'Votre Email',
        form_subject: 'Sujet',
        form_message: 'Message',
        form_submit: 'Envoyer le Message',
        
        // Footer
        footer_description: 'Pentester Junior spécialisé en sécurité offensive et hacking éthique.',
        footer_quick_links: 'Liens Rapides',
        footer_services: 'Services',
        footer_connect: 'Connecter',
        footer_tools: 'Outils',
        footer_articles: 'Articles',
        footer_rights: 'Tous droits réservés.',
        footer_disclaimer: 'Ce portfolio est à des fins éducatives et professionnelles uniquement.'
    },
    ar: {
        // Navigation
        nav_home: 'الرئيسية',
        nav_services: 'الخدمات',
        nav_skills: 'المهارات',
        nav_about: 'من أنا',
        nav_contact: 'اتصل',
        
        // Hero Section
        hero_badge: '🛡️ محترف أمن سيبراني',
        hero_title: 'اختبار الاختراق',
        hero_subtitle: 'الأمن الهجومي | القرصنة الأخلاقية | الفريق الأحمر',
        hero_description: 'أنا يونس، طالب أمن سيبراني متخصص في اختبار الاختراق. أركز على تحديد الثغرات الأمنية ومساعدة المؤسسات على تحسين أمنها.',
        hero_btn_primary: 'ابدأ الآن',
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
        footer_disclaimer: 'هذا المحفظة للأغراض التعليمية والمهنية فقط.'
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
    if (savedLang) {
        state.currentLanguage = savedLang;
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
// MOBILE MENU
// ===========================================
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            state.isMenuOpen = !state.isMenuOpen;
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (state.isMenuOpen && 
                !mobileToggle.contains(e.target) && 
                !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        state.isMenuOpen = false;
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// ===========================================
// LANGUAGE SWITCHER
// ===========================================
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
        
        // Set initial active state
        if (btn.getAttribute('data-lang') === state.currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function switchLanguage(lang) {
    state.currentLanguage = lang;
    savePreferences();
    updatePageLanguage();
    
    // Apply RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
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

