import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import logo from '../assets/images/jvortex.png';
import AboutSection from '../components/AboutSection';
import VenturesSection from '../components/VenturesSection';
import PartnershipSection from '../components/PartnershipSection';

const IgreeLandingPage: React.FC = () => {
  // Section refs - properly typed without null
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const venturesRef = useRef<HTMLElement | null>(null);
  const partnershipRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Slide-up animation for each section
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Filter out null values with proper type assertion
    const sections = [
      heroRef.current,
      aboutRef.current,
      venturesRef.current,
      partnershipRef.current
    ].filter((section): section is HTMLElement => section !== null);

    sections.forEach(section => {
      section.classList.add('slide-up-section');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to section handler with proper type checking
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src={logo} alt="J Vortex Logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(venturesRef)}
              className="hover:text-gray-600 transition-colors"
            >
              Ventures
            </button>
            <button
              onClick={() => scrollToSection(partnershipRef)}
              className="hover:text-gray-600 transition-colors"
            >
              Partnership
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero">
        <Hero />
      </section>
      <section ref={aboutRef} id="about">
        <AboutSection />
      </section>
      <section ref={venturesRef} id="ventures">
        <VenturesSection />
      </section>
      <section ref={partnershipRef} id="partnership">
        <PartnershipSection />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold">
              <img src={logo} alt="J Vortex Logo" className="h-24 w-48" />
            </div>
            <div className="flex space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-600">
            <p>© 2025 Jvortex Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        .slide-up-section {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .slide-up-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default IgreeLandingPage;