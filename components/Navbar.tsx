
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  currentView: 'home' | 'nutrition';
  setView: (view: 'home' | 'nutrition') => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, currentView, setView }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || currentView === 'nutrition' ? 'bg-toqui-green py-3 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView('home')}
          className={`font-serif text-2xl tracking-widest font-bold transition-colors ${
            scrolled || currentView === 'nutrition' ? 'text-white' : 'text-toqui-green'
          }`}
        >
          TOQUI
        </button>
        
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium">
          <button 
            onClick={() => setView('home')}
            className={`${scrolled || currentView === 'nutrition' ? 'text-white/80' : 'text-toqui-green/80'} hover:text-white transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('nutrition')}
            className={`${scrolled || currentView === 'nutrition' ? 'text-white/80' : 'text-toqui-green/80'} hover:text-white transition-colors ${currentView === 'nutrition' ? 'text-white border-b border-white' : ''}`}
          >
            Nutrition
          </button>
          <a href="#about" onClick={() => setView('home')} className={`${scrolled || currentView === 'nutrition' ? 'text-white/80' : 'text-toqui-green/80'} hover:text-white transition-colors`}>Our Story</a>
        </div>

        <button className={`px-6 py-2 text-xs uppercase tracking-widest font-semibold border transition-all ${
          scrolled || currentView === 'nutrition'
            ? 'bg-white text-toqui-green border-white hover:bg-transparent hover:text-white' 
            : 'border-toqui-green text-toqui-green hover:bg-toqui-green hover:text-white'
        }`}>
          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
