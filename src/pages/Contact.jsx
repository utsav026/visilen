/* ==============================
   Contact Page – Contact info + Google Form embed
   ============================== */

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { companyInfo } from '../data/content';

function Contact() {
    const contactCards = [
        {
            icon: HiOutlineMail,
            title: 'Email Us',
            value: companyInfo.email,
            href: `mailto:${companyInfo.email}`,
            description: 'Drop us a line anytime',
        },
        {
            icon: HiOutlinePhone,
            title: 'Call Us',
            value: companyInfo.phone,
            href: `tel:${companyInfo.phone}`,
            description: 'Mon–Fri, 10 AM – 6 PM IST',
        },
        {
            icon: HiOutlineLocationMarker,
            title: 'Location',
            value: companyInfo.address,
            href: '#',
            description: 'Remote-first company',
        },
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: companyInfo.social.linkedin, label: 'LinkedIn' },
        { icon: FaTwitter, href: companyInfo.social.twitter, label: 'Twitter' },
        { icon: FaInstagram, href: companyInfo.social.instagram, label: 'Instagram' },
        { icon: FaGithub, href: companyInfo.social.github, label: 'GitHub' },
    ];

    return (
        <>
            {/* ═══════════ PAGE HERO ═══════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
                <div className="absolute top-1/3 -left-32 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Contact
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Let's Build Something <br />
                            <span className="gradient-text">Together</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg leading-relaxed">
                            Have a project in mind, or want to learn more about our services and internship programs? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ CONTACT CARDS ═══════════ */}
            <SectionWrapper>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {contactCards.map((card) => (
                        <a
                            key={card.title}
                            href={card.href}
                            className="glass-card p-6 md:p-8 text-center group"
                            data-aos="fade-up"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-neon/20 flex items-center justify-center mx-auto mb-5 group-hover:from-cyan/30 group-hover:to-neon/30 transition-all duration-300">
                                <card.icon className="text-cyan" size={24} />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-silver mb-1">{card.title}</h3>
                            <p className="text-cyan text-sm font-medium mb-1">{card.value}</p>
                            <p className="text-silver/40 text-xs">{card.description}</p>
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-silver/50 text-sm mb-4">Connect with us on social media</p>
                    <div className="flex items-center justify-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver/60 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ CONTACT FORM (Google Form) ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Get in Touch
                        </p>
                        <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Send Us a <span className="gradient-text">Message</span>
                        </h2>
                    </div>

                    {/* Google Form Embed Placeholder */}
                    <div data-aos="fade-up" data-aos-delay="200" className="glass-card p-8 md:p-12">
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-12 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">✉️</span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-silver mb-2">Contact Form</h3>
                            <p className="text-silver/50 text-sm mb-4">
                                Google Form will be embedded here.
                            </p>
                            <p className="text-silver/30 text-xs">
                                Replace this placeholder with your Google Form iframe embed code.
                            </p>
                            {/* 
                INSTRUCTIONS: Replace the placeholder above with:
                <iframe 
                  src="YOUR_GOOGLE_FORM_URL" 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              */}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default Contact;
