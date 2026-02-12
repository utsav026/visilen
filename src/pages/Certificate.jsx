/* ==============================
   Certificate Verification Page – Real API integration with Google Apps Script
   ============================== */

import { useState } from 'react';
import { HiOutlineSearch, HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';

// ⚠️ REPLACE THIS with your Google Apps Script Web App URL (see setup-instructions.md Step 7)
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL';

function Certificate() {
    const [certId, setCertId] = useState('');
    const [status, setStatus] = useState(null); // null | 'valid' | 'invalid' | 'error'
    const [certData, setCertData] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const handleVerify = async (e) => {
        e.preventDefault();
        if (!certId.trim()) return;

        setIsSearching(true);
        setStatus(null);
        setCertData(null);

        try {
            // If Apps Script URL is not configured, use fallback demo mode
            if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_WEB_APP_URL') {
                // Demo mode — simulates API response
                await new Promise((r) => setTimeout(r, 1500));
                if (certId.toUpperCase().startsWith('VIS-')) {
                    setStatus('valid');
                    setCertData({
                        id: certId.toUpperCase(),
                        name: 'Demo Student',
                        domain: 'Web Development',
                        duration: '2 Months',
                        status: 'Valid',
                        issuedBy: 'VISILEN Technologies',
                    });
                } else {
                    setStatus('invalid');
                }
            } else {
                // Real API call to Google Apps Script
                const url = `${APPS_SCRIPT_URL}?id=${encodeURIComponent(certId.trim())}`;
                const response = await fetch(url);
                const data = await response.json();

                if (data.success && data.certificate) {
                    setStatus('valid');
                    setCertData(data.certificate);
                } else {
                    setStatus('invalid');
                }
            }
        } catch (err) {
            console.error('Verification error:', err);
            setStatus('error');
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <>
            {/* ═══════════ PAGE HERO ═══════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
                <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <p data-aos="fade-up" className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                            Verification
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Verify Your <span className="gradient-text">Certificate</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-silver/60 text-lg leading-relaxed">
                            Enter your certificate ID to verify its authenticity. All certificates issued by VISILEN Technologies can be verified here.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ VERIFICATION FORM ═══════════ */}
            <SectionWrapper>
                <div className="max-w-2xl mx-auto">
                    {/* Search Form */}
                    <form onSubmit={handleVerify} className="mb-10" data-aos="fade-up">
                        <div className="glass-card p-2 flex items-center gap-2">
                            <div className="flex-1 flex items-center gap-3 px-4">
                                <HiOutlineSearch className="text-silver/40 flex-shrink-0" size={20} />
                                <input
                                    type="text"
                                    value={certId}
                                    onChange={(e) => setCertId(e.target.value)}
                                    placeholder="Enter Certificate ID (e.g., VIS-2025-0001)"
                                    className="w-full bg-transparent text-silver placeholder-silver/30 text-sm py-4 outline-none font-body"
                                    aria-label="Certificate ID"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSearching}
                                className="glow-btn px-8 py-4 text-midnight font-semibold text-sm rounded-xl flex-shrink-0 disabled:opacity-50"
                            >
                                <span className="relative z-10">
                                    {isSearching ? 'Verifying...' : 'Verify'}
                                </span>
                            </button>
                        </div>
                    </form>

                    {/* Loading State */}
                    {isSearching && (
                        <div className="glass-card p-12 text-center" data-aos="fade-up">
                            <div className="w-12 h-12 border-4 border-cyan/20 border-t-cyan rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-silver/60 text-sm">Verifying certificate...</p>
                        </div>
                    )}

                    {/* Valid Certificate Result */}
                    {status === 'valid' && !isSearching && certData && (
                        <div className="glass-card p-8 md:p-10 border-green-500/20" data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-6">
                                <HiOutlineCheckCircle className="text-green-400" size={28} />
                                <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                                    ✓ Valid Certificate
                                </span>
                            </div>

                            <div className="border border-white/10 rounded-xl p-6 bg-midnight/50 mb-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-silver/40 text-xs uppercase tracking-wider mb-1">Certificate ID</p>
                                        <p className="text-silver font-heading font-semibold">{certData.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-silver/40 text-xs uppercase tracking-wider mb-1">Issued To</p>
                                        <p className="text-silver font-heading font-semibold">{certData.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-silver/40 text-xs uppercase tracking-wider mb-1">Program</p>
                                        <p className="text-silver font-heading font-semibold">{certData.domain}</p>
                                    </div>
                                    <div>
                                        <p className="text-silver/40 text-xs uppercase tracking-wider mb-1">Duration</p>
                                        <p className="text-silver font-heading font-semibold">{certData.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-silver/40 text-xs uppercase tracking-wider mb-1">Issued By</p>
                                        <p className="text-silver font-heading font-semibold">{certData.issuedBy}</p>
                                    </div>
                                    <div>
                                        <p className="text-silver/40 text-xs uppercase tracking-wider mb-1">Status</p>
                                        <p className="text-green-400 font-heading font-semibold">{certData.status}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-silver/40 text-xs text-center">
                                This certificate has been verified by VISILEN Technologies.
                            </p>
                        </div>
                    )}

                    {/* Invalid Certificate Result */}
                    {status === 'invalid' && !isSearching && (
                        <div className="glass-card p-8 md:p-10 border-red-500/20" data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-6">
                                <HiOutlineXCircle className="text-red-400" size={28} />
                                <span className="bg-red-500/10 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
                                    ✗ Certificate Not Found
                                </span>
                            </div>
                            <p className="text-silver/60 text-sm mb-4">
                                No certificate was found with the ID <strong className="text-silver">"{certId}"</strong>. Please check the ID and try again.
                            </p>
                            <p className="text-silver/40 text-xs">
                                If you believe this is an error, please contact us at{' '}
                                <a href="mailto:contact@visilen.tech" className="text-cyan hover:underline">
                                    contact@visilen.tech
                                </a>
                            </p>
                        </div>
                    )}

                    {/* Error State */}
                    {status === 'error' && !isSearching && (
                        <div className="glass-card p-8 md:p-10 border-yellow-500/20" data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-yellow-400 text-xl">⚠️</span>
                                <span className="bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                                    Connection Error
                                </span>
                            </div>
                            <p className="text-silver/60 text-sm">
                                Unable to verify at this time. Please try again later or contact us at{' '}
                                <a href="mailto:contact@visilen.tech" className="text-cyan hover:underline">
                                    contact@visilen.tech
                                </a>
                            </p>
                        </div>
                    )}

                    {/* Help Text */}
                    {!status && !isSearching && (
                        <div className="glass-card p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🔍</span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-silver mb-2">How to Verify</h3>
                            <p className="text-silver/50 text-sm max-w-md mx-auto">
                                Enter the certificate ID found on your VISILEN Technologies certificate. The ID starts with "VIS-" followed by the year and a unique number (e.g., VIS-2025-0001).
                            </p>
                        </div>
                    )}
                </div>
            </SectionWrapper>
        </>
    );
}

export default Certificate;
