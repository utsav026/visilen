/* ==============================
   VISILEN Technologies – Content Data
   All static text, services, and site content
   ============================== */

import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineCog,
    HiOutlineLightBulb,
    HiOutlineColorSwatch,
    HiOutlineShieldCheck,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineAcademicCap,
    HiOutlineClock,
    HiOutlineDocumentText,
    HiOutlineBriefcase,
} from 'react-icons/hi';

// ─── Company Info ─────────────────────────────────────────
export const companyInfo = {
    name: 'VISILEN Technologies',
    tagline: 'Where Vision Meets Innovation',
    email: 'contact@visilen.tech',
    phone: '+91 XXXX XXXX XX',
    address: 'India',
    website: 'https://visilen.tech',
    social: {
        linkedin: 'https://linkedin.com/company/visilen',
        twitter: 'https://twitter.com/visilen',
        instagram: 'https://instagram.com/visilen',
        github: 'https://github.com/visilen',
    },
};

// ─── Navigation Links ─────────────────────────────────────
export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Internship', path: '/internship' },
    { name: 'Certificate', path: '/certificate' },
    { name: 'Contact', path: '/contact' },
];

// ─── Stats ────────────────────────────────────────────────
export const stats = [
    { label: 'Projects Delivered', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Interns Trained', value: 200, suffix: '+' },
    { label: 'Technologies', value: 15, suffix: '+' },
];

// ─── Services ─────────────────────────────────────────────
export const services = [
    {
        id: 'web-dev',
        title: 'Web Development',
        shortDesc: 'Custom, responsive websites and web applications built with modern technologies.',
        description:
            'We design and develop high-performance, responsive web applications tailored to your business needs. From landing pages to complex SaaS platforms, we use cutting-edge technologies to deliver scalable, SEO-optimized solutions.',
        features: [
            'Custom responsive design',
            'Progressive Web Apps (PWA)',
            'E-commerce solutions',
            'CMS integration',
            'Performance optimization',
        ],
        useCases: ['Corporate websites', 'SaaS dashboards', 'E-commerce stores', 'Portfolio sites'],
        icon: 'HiOutlineCode',
    },
    {
        id: 'mobile-dev',
        title: 'Mobile App Development',
        shortDesc: 'Native and cross-platform mobile apps for iOS and Android.',
        description:
            'We build beautiful, high-performance mobile applications that provide seamless user experiences across platforms. Using React Native and Flutter, we deliver cost-effective cross-platform solutions.',
        features: [
            'Cross-platform development',
            'Native performance',
            'Push notifications',
            'Offline capabilities',
            'App Store optimization',
        ],
        useCases: ['Business apps', 'Social platforms', 'On-demand services', 'Health & fitness'],
        icon: 'HiOutlineDeviceMobile',
    },
    {
        id: 'software',
        title: 'Software Solutions',
        shortDesc: 'End-to-end software products designed for efficiency and scalability.',
        description:
            'We architect and develop enterprise-grade software solutions that streamline operations, improve productivity, and drive business growth. Our solutions are built for reliability and scale.',
        features: [
            'Custom ERP systems',
            'API development',
            'Cloud-native architecture',
            'Database design',
            'System integration',
        ],
        useCases: ['Inventory management', 'HR platforms', 'CRM systems', 'Workflow automation'],
        icon: 'HiOutlineCog',
    },
    {
        id: 'ai-ml',
        title: 'AI & Automation',
        shortDesc: 'Intelligent automation and machine learning solutions for modern businesses.',
        description:
            'Leverage the power of artificial intelligence and machine learning to automate processes, extract insights, and build intelligent applications that give you a competitive edge.',
        features: [
            'Machine learning models',
            'Natural Language Processing',
            'Computer vision',
            'Predictive analytics',
            'Process automation',
        ],
        useCases: ['Chatbots', 'Recommendation engines', 'Fraud detection', 'Data analytics'],
        icon: 'HiOutlineLightBulb',
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Design',
        shortDesc: 'User-centered design that creates delightful digital experiences.',
        description:
            'Our design team creates intuitive, visually stunning interfaces that users love. We follow a research-driven approach to ensure every pixel serves a purpose and every interaction feels natural.',
        features: [
            'User research & personas',
            'Wireframing & prototyping',
            'Visual design systems',
            'Usability testing',
            'Design sprints',
        ],
        useCases: ['App redesigns', 'Design systems', 'Brand identity', 'User research'],
        icon: 'HiOutlineColorSwatch',
    },
];

// ─── Core Values ──────────────────────────────────────────
export const coreValues = [
    {
        title: 'Innovation',
        description: 'We push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions.',
        icon: 'HiOutlineLightBulb',
    },
    {
        title: 'Quality',
        description: 'Every line of code and every pixel is crafted with precision, ensuring world-class standards.',
        icon: 'HiOutlineShieldCheck',
    },
    {
        title: 'Reliability',
        description: 'We deliver on our promises with consistent quality, meeting deadlines and exceeding expectations.',
        icon: 'HiOutlineStar',
    },
    {
        title: 'Growth',
        description: 'We believe in continuous learning, fostering talent, and growing together with our clients.',
        icon: 'HiOutlineTrendingUp',
    },
];

// ─── Internship Domains ───────────────────────────────────
export const internshipDomains = [
    { title: 'Web Development', description: 'React, Next.js, Node.js, Full-Stack', icon: 'HiOutlineCode' },
    { title: 'Mobile App Development', description: 'React Native, Flutter, Cross-Platform', icon: 'HiOutlineDeviceMobile' },
    { title: 'AI & Machine Learning', description: 'Python, TensorFlow, Data Science', icon: 'HiOutlineLightBulb' },
    { title: 'UI/UX Design', description: 'Figma, Design Systems, Prototyping', icon: 'HiOutlineColorSwatch' },
    { title: 'Software Engineering', description: 'Java, Python, System Design', icon: 'HiOutlineCog' },
];

// ─── Internship Plans ─────────────────────────────────────
export const internshipPlans = [
    {
        duration: '1 Month',
        price: '₹999',
        features: [
            'Live project experience',
            'Mentor guidance',
            'Certificate of completion',
            'Letter of recommendation',
            'Flexible schedule',
        ],
        popular: false,
    },
    {
        duration: '2 Months',
        price: '₹1,799',
        features: [
            'Everything in 1 Month',
            'Advanced project work',
            'Portfolio building',
            'LinkedIn endorsement',
            'Priority support',
            'Career guidance session',
        ],
        popular: true,
    },
    {
        duration: '3 Months',
        price: '₹2,499',
        features: [
            'Everything in 2 Months',
            'Team lead opportunity',
            'Multiple project exposure',
            'Performance bonus eligibility',
            'Extended mentorship',
            'Job referral support',
            'Lifetime community access',
        ],
        popular: false,
    },
];

// ─── Testimonials (Placeholders) ──────────────────────────
export const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Web Dev Intern',
        quote: 'VISILEN gave me real-world project experience that no classroom could. The mentorship was outstanding!',
        avatar: 'PS',
    },
    {
        name: 'Rahul Verma',
        role: 'AI/ML Intern',
        quote: 'The hands-on approach to learning at VISILEN helped me land my first job in tech. Highly recommended!',
        avatar: 'RV',
    },
    {
        name: 'Ananya Patel',
        role: 'UI/UX Intern',
        quote: 'Working with the VISILEN team was an incredible learning experience. The projects were challenging and rewarding.',
        avatar: 'AP',
    },
];

// ─── Career Benefits ──────────────────────────────────────
export const careerBenefits = [
    { title: 'Hands-on Projects', description: 'Work on real client projects, not just training exercises.', icon: 'HiOutlineBriefcase' },
    { title: 'Expert Mentorship', description: 'Learn from experienced industry professionals who guide your growth.', icon: 'HiOutlineAcademicCap' },
    { title: 'Flexible Schedule', description: 'Remote-friendly with flexible hours that fit your academic life.', icon: 'HiOutlineClock' },
    { title: 'Certification', description: 'Earn industry-recognized certificates to boost your resume.', icon: 'HiOutlineDocumentText' },
    { title: 'Career Growth', description: 'Build a strong portfolio and get referrals for future opportunities.', icon: 'HiOutlineTrendingUp' },
    { title: 'Innovation Culture', description: 'Be part of a team that values creativity and cutting-edge tech.', icon: 'HiOutlineLightBulb' },
];

// ─── Growth Roadmap ───────────────────────────────────────
export const roadmap = [
    { year: '2024', title: 'Foundation', description: 'Company established with a focus on web development and student internship programs.' },
    { year: '2025', title: 'Expansion', description: 'Expanding services to include AI/ML, mobile development, and enterprise solutions.' },
    { year: '2026', title: 'Scale', description: 'Growing our intern community to 1000+ and launching dedicated learning platform.' },
    { year: '2027', title: 'Innovation Hub', description: 'Establishing VISILEN as a leading tech innovation hub with global partnerships.' },
];

// ─── Learning Process Steps ───────────────────────────────
export const learningSteps = [
    { step: '01', title: 'Apply & Onboard', description: 'Submit your application and get onboarded with your assigned domain and mentor.' },
    { step: '02', title: 'Learn & Practice', description: 'Study curated resources, attend sessions, and practice with guided exercises.' },
    { step: '03', title: 'Build Projects', description: 'Work on real-world projects with your team, applying what you have learned.' },
    { step: '04', title: 'Certify & Grow', description: 'Complete your internship, receive certification, and launch your career journey.' },
];
