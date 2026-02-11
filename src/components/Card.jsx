/* ==============================
   Card – Glassmorphism content card
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

// Icon map to resolve string → component
const iconMap = {
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
};

function Card({ icon, title, description, className = '', children }) {
    const IconComponent = iconMap[icon];

    return (
        <div className={`glass-card p-6 md:p-8 ${className}`} data-aos="fade-up">
            {IconComponent && (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-neon/20 flex items-center justify-center mb-5">
                    <IconComponent className="text-cyan" size={24} />
                </div>
            )}
            {title && (
                <h3 className="font-heading text-lg font-semibold text-silver mb-3">{title}</h3>
            )}
            {description && (
                <p className="text-silver/60 text-sm leading-relaxed">{description}</p>
            )}
            {children}
        </div>
    );
}

export default Card;
