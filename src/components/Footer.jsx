/* ==============================
   Footer – Site-wide footer
   ============================== */

import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { companyInfo } from '../data/content';

function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
            ],
        },
        {
            title: 'Services',
            links: [
                { name: 'Web Development', path: '/services' },
                { name: 'Mobile Apps', path: '/services' },
                { name: 'AI & Automation', path: '/services' },
                { name: 'UI/UX Design', path: '/services' },
            ],
        },
        {
            title: 'Programs',
            links: [
                { name: 'Internship', path: '/internship' },
                { name: 'Certificate Verification', path: '/certificate' },
            ],
        },
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: companyInfo.social.linkedin, label: 'LinkedIn' },
        { icon: FaTwitter, href: companyInfo.social.twitter, label: 'Twitter' },
        { icon: FaInstagram, href: companyInfo.social.instagram, label: 'Instagram' },
        { icon: FaGithub, href: companyInfo.social.github, label: 'GitHub' },
    ];

    return (
        <footer className="bg-midnight border-t border-white/5">
            {/* Gradient Divider */}
            <div className="gradient-divider" />

            <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-neon flex items-center justify-center font-heading font-bold text-midnight text-lg">
                                V
                            </div>
                            <span className="font-heading text-xl font-bold text-silver">
                                VISILEN<span className="text-cyan">.</span>
                            </span>
                        </Link>
                        <p className="text-silver/60 text-sm leading-relaxed max-w-sm mb-6">
                            Empowering businesses with cutting-edge technology solutions and nurturing the next generation of tech talent through project-based internships.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-silver/60 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-300"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-heading font-semibold text-silver mb-4 text-sm uppercase tracking-wider">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-silver/50 hover:text-cyan text-sm transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-silver/40 text-sm">
                        © {currentYear} VISILEN Technologies. All rights reserved.
                    </p>
                    <p className="text-silver/30 text-xs">
                        Built with vision and innovation.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
