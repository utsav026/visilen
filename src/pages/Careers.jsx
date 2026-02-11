/* ==============================
   Careers Page – Join the team, benefits, internship highlight
   ============================== */

import { HiOutlineArrowRight } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import { careerBenefits } from '../data/content';

function Careers() {
    return (
        <>
            {/* ═══════════ PAGE HERO ═══════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Careers
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Build Your <span className="gradient-text">Career</span> at<br />
                            VISILEN
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg leading-relaxed">
                            Join a team of innovators, creators, and problem-solvers. Whether you're a student or an experienced professional, there's a place for you at VISILEN.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ WHY JOIN US ═══════════ */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                        Why Join Us
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-3xl md:text-4xl font-bold">
                        Perks & <span className="gradient-text">Benefits</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careerBenefits.map((benefit) => (
                        <Card key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} />
                    ))}
                </div>
            </SectionWrapper>

            {/* ═══════════ INTERNSHIP HIGHLIGHT ═══════════ */}
            <SectionWrapper bg="bg-midnight-light/30">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Featured Program
                        </p>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                            Project-Based <span className="gradient-text">Internship</span>
                        </h2>
                        <p className="text-silver/60 leading-relaxed mb-4">
                            Our internship program is designed for students and early-career professionals who want real-world experience, not just theory. You'll work on live projects, learn from mentors, and build a portfolio that stands out.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                'Work on real client projects',
                                'Learn from industry professionals',
                                'Flexible 1, 2, or 3 month programs',
                                'Earn certification & letter of recommendation',
                                'Remote-friendly with flexible hours',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-silver/70 text-sm">
                                    <span className="w-1.5 h-1.5 bg-cyan rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button to="/internship">
                            Explore Program <HiOutlineArrowRight />
                        </Button>
                    </div>

                    {/* Visual */}
                    <div data-aos="fade-left" className="relative">
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/10 rounded-full blur-2xl" />
                            <div className="relative z-10">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan to-neon flex items-center justify-center mx-auto mb-4">
                                        <span className="text-midnight text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-silver">Internship Program</h3>
                                    <p className="text-cyan text-sm mt-1">Now Accepting Applications</p>
                                </div>

                                <div className="space-y-4">
                                    {['Web Development', 'Mobile Apps', 'AI & ML', 'UI/UX Design', 'Software Engineering'].map((domain) => (
                                        <div key={domain} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                            <span className="text-silver/70 text-sm">{domain}</span>
                                            <span className="text-xs text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">Open</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ═══════════ CTA: APPLY NOW ═══════════ */}
            <SectionWrapper>
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-neon/10 to-mint/10" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="relative z-10 p-10 md:p-16 text-center">
                        <h2 data-aos="fade-up" className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Ready to <span className="gradient-text">Apply</span>?
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-silver/60 text-lg mb-8 max-w-2xl mx-auto">
                            Take the first step towards your tech career. Apply for our internship program or reach out to explore other opportunities at VISILEN.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button to="/internship">Apply for Internship</Button>
                            <Button to="/contact" variant="secondary">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}

export default Careers;
