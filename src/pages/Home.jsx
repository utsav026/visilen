/* ==============================
   Home Page – Landing page with hero, services, stats, internship CTA
   ============================== */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlinePlay } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import { services, stats, testimonials, coreValues } from '../data/content';

/* ── Animated Counter Hook ──────────────────────── */
function useCounter(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !counted.current) {
                    counted.current = true;
                    let start = 0;
                    const step = target / (duration / 16);
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return [count, ref];
}

/* ── Stat Counter Component ─────────────────────── */
function StatCounter({ label, value, suffix }) {
    const [count, ref] = useCounter(value);
    return (
        <div ref={ref} className="text-center">
            <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">
                {count}{suffix}
            </div>
            <p className="text-silver/60 text-sm">{label}</p>
        </div>
    );
}

/* ── Home Page Component ────────────────────────── */
function Home() {
    return (
        <>
            {/* ═══════════ HERO SECTION ═══════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-3xl" />

                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan text-sm font-medium mb-8">
                            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                            Now accepting internship applications
                        </div>

                        {/* Headline */}
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        >
                            Where{' '}
                            <span className="gradient-text">Vision</span>
                            <br />
                            Meets{' '}
                            <span className="gradient-text">Innovation</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-silver/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            We build cutting-edge digital solutions and empower the next generation of tech professionals through hands-on, project-based internships.
                        </p>

                        {/* CTAs */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button to="/services">
                                Explore Services <HiOutlineArrowRight />
                            </Button>
                            <Button to="/internship" variant="secondary">
                                <HiOutlinePlay /> Apply for Internship
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
            </section>

            {/* ═══════════ STATS SECTION ═══════════ */}
            <SectionWrapper className="relative -mt-16 z-10">
                <div className="glass-card p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <StatCounter key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ ABOUT SNAPSHOT ═══════════ */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p data-aos="fade-right" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            About Us
                        </p>
                        <h2 data-aos="fade-right" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold mb-6">
                            Building the Future of{' '}
                            <span className="gradient-text">Technology</span>
                        </h2>
                        <p data-aos="fade-right" data-aos-delay="200" className="text-silver/60 leading-relaxed mb-6">
                            VISILEN Technologies is a modern IT services company dedicated to delivering innovative digital solutions for businesses of all sizes. We combine technical expertise with a passion for mentoring, offering students real-world project experience through our internship programs.
                        </p>
                        <Button to="/about" variant="secondary" data-aos="fade-right" data-aos-delay="300">
                            Learn More <HiOutlineArrowRight />
                        </Button>
                    </div>

                    {/* Visual Element */}
                    <div data-aos="fade-left" className="relative">
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-2xl" />
                            <div className="relative z-10 space-y-6">
                                {coreValues.slice(0, 3).map((value, i) => (
                                    <div key={value.title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/20 to-neon/20 flex items-center justify-center flex-shrink-0">
                                            <span className="text-cyan font-heading font-bold text-sm">0{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-silver text-sm">{value.title}</h4>
                                            <p className="text-silver/50 text-xs mt-1">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ SERVICES OVERVIEW ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Our Services
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Solutions That <span className="gradient-text">Drive Growth</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.slice(0, 4).map((service, i) => (
                        <Card
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.shortDesc}
                        />
                    ))}
                </div>
                <div className="text-center mt-10" data-aos="fade-up">
                    <Button to="/services" variant="secondary">
                        View All Services <HiOutlineArrowRight />
                    </Button>
                </div>
            </SectionWrapper>

            {/* ═══════════ WHY CHOOSE US ═══════════ */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Why VISILEN
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Why Choose <span className="gradient-text">Us</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: 'HiOutlineShieldCheck',
                            title: 'Unmatched Quality',
                            description: 'Every project undergoes rigorous quality assurance, ensuring pixel-perfect delivery and robust performance.',
                        },
                        {
                            icon: 'HiOutlineLightBulb',
                            title: 'Innovation First',
                            description: 'We stay at the forefront of technology, leveraging the latest frameworks and methodologies for modern solutions.',
                        },
                        {
                            icon: 'HiOutlineStar',
                            title: 'Reliable Partners',
                            description: 'We build lasting relationships with our clients, providing ongoing support and transparent communication.',
                        },
                    ].map((item) => (
                        <Card key={item.title} {...item} />
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ INTERNSHIP BANNER ═══════════ */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-neon/10 to-mint/10" />
                <div className="absolute inset-0 grid-bg" />
                <SectionWrapper className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Internship Program
                        </p>
                        <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold mb-6">
                            Start Your <span className="gradient-text">Tech Journey</span> Today
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg mb-8 leading-relaxed">
                            Gain real-world project experience, learn from industry experts, and earn a certification that sets you apart. Choose from Web Development, Mobile Apps, AI/ML, and more.
                        </p>
                        <Button to="/internship" data-aos="fade-up" data-aos-delay="300">
                            Explore Internship Program <HiOutlineArrowRight />
                        </Button>
                    </div>
                </SectionWrapper>
            </section>

            {/* ═══════════ TESTIMONIALS ═══════════ */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Testimonials
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        What Our <span className="gradient-text">Interns Say</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={t.name} className="glass-card p-8" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-neon flex items-center justify-center font-heading font-bold text-midnight">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-silver text-sm">{t.name}</h4>
                                    <p className="text-cyan text-xs">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-silver/60 text-sm leading-relaxed italic">"{t.quote}"</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}

export default Home;
