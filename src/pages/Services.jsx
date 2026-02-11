/* ==============================
   Services Page – Detailed service listings
   ============================== */

import { HiOutlineArrowRight, HiOutlineCheck } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import { services } from '../data/content';

function Services() {
    return (
        <>
            {/* ═══════════ PAGE HERO ═══════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
                <div className="absolute top-1/3 -left-32 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Our Services
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Solutions Built for <br />
                            <span className="gradient-text">Modern Business</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg leading-relaxed">
                            From web applications to AI-powered automation, we deliver end-to-end technology solutions that drive real business results.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ SERVICE CARDS OVERVIEW ═══════════ */}
            <SectionWrapper>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service) => (
                        <a key={service.id} href={`#${service.id}`} className="block">
                            <Card icon={service.icon} title={service.title} description={service.shortDesc} className="h-full hover:border-cyan/40 cursor-pointer" />
                        </a>
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ DETAILED SERVICES ═══════════ */}
            {services.map((service, i) => (
                <SectionWrapper key={service.id} bg={i % 2 === 0 ? '' : 'bg-midnight-light/30'} id={service.id}>
                    <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:direction-rtl' : ''}`}>
                        {/* Text Content */}
                        <div className={i % 2 !== 0 ? 'md:order-2' : ''} data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
                                Service
                            </div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                {service.title}
                            </h2>
                            <p className="text-silver/60 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Key Features */}
                            <div className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0">
                                            <HiOutlineCheck className="text-cyan" size={12} />
                                        </div>
                                        <span className="text-silver/70 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button to="/contact" variant="secondary">
                                Discuss Your Project <HiOutlineArrowRight />
                            </Button>
                        </div>

                        {/* Use Cases Card */}
                        <div className={i % 2 !== 0 ? 'md:order-1' : ''} data-aos="fade-left">
                            <div className="glass-card p-8 md:p-10">
                                <h3 className="font-heading text-lg font-semibold text-silver mb-6">
                                    Use Cases
                                </h3>
                                <div className="space-y-4">
                                    {service.useCases.map((useCase, j) => (
                                        <div
                                            key={useCase}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan/20 transition-all duration-300"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan/20 to-neon/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-cyan font-heading font-bold text-xs">{String(j + 1).padStart(2, '0')}</span>
                                            </div>
                                            <span className="text-silver/70 text-sm">{useCase}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            ))}

            {/* ═══════════ CTA ═══════════ */}
            <SectionWrapper>
                <div className="glass-card p-10 md:p-14 text-center" data-aos="fade-up">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        Have a Project in <span className="gradient-text">Mind</span>?
                    </h2>
                    <p className="text-silver/60 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how VISILEN Technologies can help bring your ideas to life with our expert team and proven processes.
                    </p>
                    <Button to="/contact">
                        Start a Conversation <HiOutlineArrowRight />
                    </Button>
                </div>
            </SectionWrapper>
        </>
    );
}

export default Services;
