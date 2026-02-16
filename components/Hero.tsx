
import React from 'react';

interface HeroProps {
  setView: (view: 'home' | 'nutrition') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-toqui-cream">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1550966841-36f86c8a7732?auto=format&fit=crop&q=80&w=1200" 
          alt="Macro textures" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <span className="inline-block text-toqui-green/60 text-xs uppercase tracking-[0.3em] mb-4 font-semibold">
            EST. 2020 • THE REFINED STANDARD
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-toqui-green leading-tight mb-6">
            Own your health.<br />
            <span className="italic">Crave the ritual.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-light">
            The Next-Generation Longevity Green Gummy. 75+ functional ingredients. 
            Zero sugar. Michelin-inspired Champagne Berry flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-toqui-green text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-toqui-black transition-all shadow-2xl">
              Subscribe & Save
            </button>
            <button 
              onClick={() => setView('nutrition')}
              className="border border-toqui-green text-toqui-green px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-toqui-green/5 transition-all"
            >
              View Nutrition
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 opacity-60">
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-toqui-green">75+</span>
              <span className="text-[10px] uppercase tracking-wider">Superfoods</span>
            </div>
            <div className="w-px h-8 bg-toqui-green/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-toqui-green">0g</span>
              <span className="text-[10px] uppercase tracking-wider">Added Sugar</span>
            </div>
            <div className="w-px h-8 bg-toqui-green/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-toqui-green">100%</span>
              <span className="text-[10px] uppercase tracking-wider">Bioavailable</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-toqui-green/5 rounded-full blur-3xl group-hover:bg-toqui-green/10 transition-all duration-1000"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
              alt="Toqui Gummy Textures" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-serif italic">"This doesn’t taste like wellness. It tastes like something thoughtfully crafted."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
