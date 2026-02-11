/* ==============================
   About Page – Company info, vision, values, roadmap
   ============================== */

import { HiOutlineArrowRight } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import { coreValues, roadmap } from '../data/content';

function About() {
    return (
        <>
            {/* ═══════════ PAGE HERO ═══════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
                <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            About VISILEN
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Driven by <span className="gradient-text">Vision</span>,<br />
                            Powered by <span className="gradient-text">Innovation</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg leading-relaxed">
                            VISILEN Technologies is an emerging IT services company focused on delivering modern digital solutions while cultivating the next generation of tech professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ COMPANY INTRO ═══════════ */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                            Who We <span className="gradient-text">Are</span>
                        </h2>
                        <p className="text-silver/60 leading-relaxed mb-4">
                            Founded with a vision to bridge the gap between education and industry, VISILEN Technologies combines cutting-edge IT services with a robust internship program that gives students the real-world experience they need to succeed.
                        </p>
                        <p className="text-silver/60 leading-relaxed mb-6">
                            We believe that great technology is built by great people. That's why we invest equally in our services and our talent pipeline, creating a virtuous cycle of innovation and growth.
                        </p>
                        <Button to="/services" variant="secondary">
                            See Our Services <HiOutlineArrowRight />
                        </Button>
                    </div>

                    {/* Stats Visual */}
                    <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Founded', value: '2024' },
                            { label: 'Team Members', value: '20+' },
                            { label: 'Projects', value: '50+' },
                            { label: 'Interns', value: '200+' },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-card p-6 text-center">
                                <div className="font-heading text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                <p className="text-silver/50 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ VISION & MISSION ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card p-8 md:p-10" data-aos="fade-up">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-neon/20 flex items-center justify-center mb-5">
                            <span className="text-cyan text-2xl">🔭</span>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-silver mb-4">Our Vision</h3>
                        <p className="text-silver/60 leading-relaxed">
                            To become a globally recognized technology company that empowers businesses with innovative digital solutions while creating a thriving ecosystem for aspiring tech professionals to grow and excel.
                        </p>
                    </div>
                    <div className="glass-card p-8 md:p-10" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-neon/20 flex items-center justify-center mb-5">
                            <span className="text-cyan text-2xl">🚀</span>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-silver mb-4">Our Mission</h3>
                        <p className="text-silver/60 leading-relaxed">
                            To deliver world-class IT services that drive business growth, and to bridge the gap between academic learning and industry needs by providing hands-on, project-based internship experiences.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ CORE VALUES ═══════════ */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Our Principles
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Core <span className="gradient-text">Values</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value) => (
                        <Card key={value.title} icon={value.icon} title={value.title} description={value.description} />
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ GROWTH ROADMAP ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Our Journey
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Growth <span className="gradient-text">Roadmap</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-neon to-mint" />

                    {roadmap.map((item, i) => (
                        <div
                            key={item.year}
                            className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan border-4 border-midnight z-10" />

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="glass-card p-6">
                                    <span className="text-cyan font-heading font-bold text-sm">{item.year}</span>
                                    <h4 className="font-heading text-lg font-semibold text-silver mt-1 mb-2">{item.title}</h4>
                                    <p className="text-silver/60 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ CTA ═══════════ */}
            <SectionWrapper>
                <div className="glass-card p-10 md:p-14 text-center" data-aos="fade-up">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        Ready to Build Something <span className="gradient-text">Amazing</span>?
                    </h2>
                    <p className="text-silver/60 text-lg mb-8 max-w-2xl mx-auto">
                        Whether you're looking for IT services or want to join our internship program, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/contact">Get in Touch</Button>
                        <Button to="/internship" variant="secondary">Apply for Internship</Button>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default About;
