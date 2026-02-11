/* ==============================
   App.jsx – Main Application with Routing
   ============================== */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Internship from './pages/Internship';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';

function App() {
    const location = useLocation();

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        });
    }, []);

    // Refresh AOS on route change
    useEffect(() => {
        AOS.refresh();
    }, [location]);

    return (
        <div className="min-h-screen bg-midnight font-body text-silver">
            <ScrollToTop />
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/internship" element={<Internship />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
