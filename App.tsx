
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductMatrices from './components/ProductMatrices';
import SocialProof from './components/SocialProof';
import NutritionPanel from './components/NutritionPanel';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import DetailedNutrition from './components/DetailedNutrition';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'nutrition'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero setView={setView} />
            <SocialProof />
            <ProductMatrices />
            <NutritionPanel />
            <AboutSection />
          </>
        ) : (
          <DetailedNutrition />
        )}
      </main>

      <Footer setView={setView} />
      
      <StickyCTA />
    </div>
  );
};

export default App;
