/* ==============================
   Navbar – Responsive sticky navigation
   ============================== */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { navLinks } from '../data/content';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Track scroll for navbar background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-midnight/90 backdrop-blur-xl shadow-lg shadow-midnight/50 border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-neon flex items-center justify-center font-heading font-bold text-midnight text-lg transition-transform duration-300 group-hover:scale-110">
                            V
                        </div>
                        <span className="font-heading text-xl font-bold text-silver tracking-tight">
                            VISILEN<span className="text-cyan">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${location.pathname === link.path
                                        ? 'text-cyan'
                                        : 'text-silver/70 hover:text-silver hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-cyan rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className="glow-btn px-6 py-2.5 text-sm font-semibold text-midnight inline-block"
                        >
                            <span className="relative z-10">Get in Touch</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-silver/70 hover:text-cyan transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-20 bg-midnight/98 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col items-center gap-2 pt-8 px-6">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`w-full text-center py-4 text-lg font-medium rounded-xl transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-cyan bg-cyan/10'
                                    : 'text-silver/70 hover:text-silver hover:bg-white/5'
                                }`}
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="glow-btn mt-4 w-full text-center py-4 text-lg font-semibold text-midnight"
                    >
                        <span className="relative z-10">Get in Touch</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
