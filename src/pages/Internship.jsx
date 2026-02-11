/* ==============================
   Internship Page – Program details, domains, pricing, application
   ============================== */

import { HiOutlineArrowRight, HiOutlineCheck, HiOutlineStar } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import { internshipDomains, internshipPlans, learningSteps } from '../data/content';

function Internship() {
    return (
        <>
            {/* ═══════════ PAGE HERO ═══════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
                <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                            Applications Open
                        </div>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Project-Based <br />
                            <span className="gradient-text">Internship Program</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg leading-relaxed">
                            Gain real-world experience working on live projects. Learn from industry mentors, build your portfolio, and earn a certification that accelerates your tech career.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ PROGRAM HIGHLIGHTS ═══════════ */}
            <SectionWrapper>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { value: '5+', label: 'Domains Available' },
                        { value: '1-3', label: 'Months Duration' },
                        { value: '100%', label: 'Remote Friendly' },
                        { value: 'Live', label: 'Project Experience' },
                    ].map((item) => (
                        <div key={item.label} className="glass-card p-6 text-center" data-aos="fade-up">
                            <div className="font-heading text-3xl font-bold gradient-text mb-2">{item.value}</div>
                            <p className="text-silver/60 text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ DOMAINS ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Domains
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Choose Your <span className="gradient-text">Path</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {internshipDomains.map((domain) => (
                        <Card key={domain.title} icon={domain.icon} title={domain.title} description={domain.description} />
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ LEARNING PROCESS ═══════════ */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        How It Works
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Your Learning <span className="gradient-text">Journey</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {learningSteps.map((step, i) => (
                        <div key={step.step} className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay={i * 100}>
                            {/* Connector line */}
                            {i < learningSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan/30 to-transparent" />
                            )}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-neon flex items-center justify-center font-heading font-bold text-midnight text-lg mb-5">
                                {step.step}
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-silver mb-2">{step.title}</h3>
                            <p className="text-silver/60 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ CERTIFICATION ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Certification
                        </p>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                            Earn Your <span className="gradient-text">Certificate</span>
                        </h2>
                        <p className="text-silver/60 leading-relaxed mb-4">
                            Upon successful completion of the internship, you'll receive an industry-recognized certificate from VISILEN Technologies that validates your skills and project experience.
                        </p>
                        <ul className="space-y-3 mb-6">
                            {[
                                'Verifiable certificate with unique ID',
                                'Letter of recommendation',
                                'LinkedIn-compatible credential',
                                'Portfolio-ready project documentation',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-silver/70 text-sm">
                                    <HiOutlineCheck className="text-cyan flex-shrink-0" size={16} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button to="/certificate" variant="secondary">
                            Verify Certificate <HiOutlineArrowRight />
                        </Button>
                    </div>

                    {/* Certificate Preview */}
                    <div data-aos="fade-left">
                        <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-2xl" />
                            <div className="relative z-10">
                                <div className="border border-white/10 rounded-xl p-8 bg-midnight/50">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-neon flex items-center justify-center mx-auto mb-4">
                                        <span className="text-midnight font-heading font-bold text-2xl">V</span>
                                    </div>
                                    <p className="text-silver/40 text-xs uppercase tracking-widest mb-2">Certificate of Completion</p>
                                    <h3 className="font-heading text-xl font-bold text-silver mb-1">Web Development Internship</h3>
                                    <p className="text-cyan text-sm mb-4">VISILEN Technologies</p>
                                    <div className="gradient-divider mb-4" />
                                    <p className="text-silver/40 text-xs">Certificate ID: VIS-2025-XXXX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ PRICING PLANS ═══════════ */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Pricing
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Choose Your <span className="gradient-text">Plan</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {internshipPlans.map((plan) => (
                        <div
                            key={plan.duration}
                            className={`glass-card p-8 relative ${plan.popular ? 'border-cyan/40 scale-[1.02] md:scale-105' : ''
                                }`}
                            data-aos="fade-up"
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan to-neon rounded-full text-midnight text-xs font-bold flex items-center gap-1">
                                    <HiOutlineStar size={12} /> Most Popular
                                </div>
                            )}
                            <div className="text-center mb-6">
                                <h3 className="font-heading text-xl font-bold text-silver mb-2">{plan.duration}</h3>
                                <div className="font-heading text-4xl font-bold gradient-text">{plan.price}</div>
                                <p className="text-silver/50 text-xs mt-1">one-time payment</p>
                            </div>
                            <div className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0">
                                            <HiOutlineCheck className="text-cyan" size={12} />
                                        </div>
                                        <span className="text-silver/70 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Button
                                href="#apply"
                                variant={plan.popular ? 'primary' : 'secondary'}
                                className="w-full justify-center"
                            >
                                Apply Now
                            </Button>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ APPLICATION FORM ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30" id="apply">
                <div className="max-w-3xl mx-auto text-center">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Apply Now
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        Start Your <span className="gradient-text">Application</span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 mb-10">
                        Fill out the form below to apply for our internship program. Our team will review your application and get back to you within 48 hours.
                    </p>

                    {/* Google Form Embed Placeholder */}
                    <div data-aos="fade-up" data-aos-delay="300" className="glass-card p-8 md:p-12">
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-12 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📝</span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-silver mb-2">Application Form</h3>
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
                  height="800" 
                  frameBorder="0" 
                  title="Internship Application"
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

export default Internship;
