/* ==============================
   Button – Reusable CTA button
   ============================== */

import { Link } from 'react-router-dom';

function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
    const baseClasses = 'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300';

    const variants = {
        primary: 'glow-btn text-midnight',
        secondary: 'border-2 border-cyan/40 text-cyan hover:bg-cyan/10 hover:border-cyan',
        accent: 'bg-neon text-white hover:bg-neon/80 shadow-lg shadow-neon/20',
    };

    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    // Internal link
    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </Link>
        );
    }

    // External link
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </a>
        );
    }

    // Regular button
    return (
        <button className={classes} {...props}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
}

export default Button;
