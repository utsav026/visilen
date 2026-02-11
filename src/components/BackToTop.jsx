/* ==============================
   BackToTop – Floating scroll-to-top button
   ============================== */

import { useState, useEffect } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-neon flex items-center justify-center text-midnight shadow-lg shadow-cyan/20 transition-all duration-500 hover:scale-110 hover:shadow-cyan/40 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            <HiOutlineArrowUp size={20} />
        </button>
    );
}

export default BackToTop;
