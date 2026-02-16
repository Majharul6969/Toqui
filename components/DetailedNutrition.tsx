
import React from 'react';
import NutritionPanel from './NutritionPanel';

const DetailedNutrition: React.FC = () => {
  const INGREDIENTS_GLOSSARY = [
    { category: "Longevity", name: "NMN", benefit: "Direct NAD+ precursor for cellular repair and energy metabolism." },
    { category: "Longevity", name: "Trans-Resveratrol", benefit: "Potent antioxidant that activates longevity genes (sirtuins)." },
    { category: "Greens", name: "Spirulina", benefit: "Dense source of chlorophyll and essential amino acids for detoxification." },
    { category: "Greens", name: "Chlorella", benefit: "Supports heavy metal detoxification and immune cell function." },
    { category: "Gut Health", name: "L. Plantarum", benefit: "A resilient probiotic strain that supports gut barrier integrity." },
    { category: "Adaptogens", name: "Ashwagandha", benefit: "Clinically proven to reduce cortisol levels and manage stress." },
    { category: "Brain", name: "Lion's Mane", benefit: "Promotes Nerve Growth Factor (NGF) for cognitive longevity." },
    { category: "Heart", name: "CoQ10", benefit: "Essential for mitochondrial energy production in heart muscle." },
  ];

  return (
    <div className="bg-toqui-cream min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-toqui-green/60 text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Scientific Transparency</span>
          <h1 className="font-serif text-5xl md:text-7xl text-toqui-green mb-8">
            Precision at every <span className="italic">milligram.</span>
          </h1>
          <div className="w-24 h-px bg-toqui-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Every Toqui gummy is a masterpiece of nutritional architecture. We balance 75+ functional ingredients 
            to ensure that bioavailability meets culinary excellence. No fillers. No synthetic dyes. No compromises.
          </p>
        </div>

        {/* Clinical Standards Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 border border-gray-100 shadow-sm">
            <h3 className="font-serif text-2xl text-toqui-green mb-4">Bio-Optimization</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our formulation uses methylated vitamins (like Methylcobalamin B12) and chelated minerals 
              to ensure your body can actually use what it absorbs.
            </p>
          </div>
          <div className="bg-white p-10 border border-gray-100 shadow-sm">
            <h3 className="font-serif text-2xl text-toqui-green mb-4">Rigorous Testing</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Each batch undergoes multi-stage 3rd-party testing for heavy metals, purity, 
              and label accuracy in ISO-certified laboratories.
            </p>
          </div>
          <div className="bg-white p-10 border border-gray-100 shadow-sm">
            <h3 className="font-serif text-2xl text-toqui-green mb-4">Synergistic Ratio</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We don't just add ingredients; we calibrate their ratios. Our Longevity Matrix is 
              designed to work in concert with our Super Greens for cumulative impact.
            </p>
          </div>
        </div>

        {/* Existing Nutrition Panel (Integrated) */}
        <div className="mb-24">
          <NutritionPanel />
        </div>

        {/* Expanded Glossary */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="font-serif text-4xl text-toqui-green">Ingredient Deep-Dive</h2>
            <div className="flex-grow h-px bg-toqui-green/10"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {INGREDIENTS_GLOSSARY.map((item, idx) => (
              <div key={idx} className="group">
                <span className="text-[10px] uppercase tracking-widest text-toqui-green font-bold mb-2 block opacity-50">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl text-toqui-black mb-3 border-b border-transparent group-hover:border-toqui-green transition-all pb-1 inline-block">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400 italic">
              +67 other functional botanicals, minerals, and micronutrients.
            </p>
          </div>
        </div>

        {/* The Standard Section */}
        <div className="bg-toqui-green text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">The Toqui Standard</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-5 h-5 flex-shrink-0 border border-white/30 rounded-full mt-1 mr-4 flex items-center justify-center text-[10px]">1</span>
                  <p className="text-sm text-white/70"><strong>Cold-Pressed Integration:</strong> We use proprietary temperature-controlled processing to preserve delicate enzymes.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 flex-shrink-0 border border-white/30 rounded-full mt-1 mr-4 flex items-center justify-center text-[10px]">2</span>
                  <p className="text-sm text-white/70"><strong>Zero-Impact Sweetening:</strong> Our fermented cane sugar base provides structure without the glycemic spike of traditional gummies.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 flex-shrink-0 border border-white/30 rounded-full mt-1 mr-4 flex items-center justify-center text-[10px]">3</span>
                  <p className="text-sm text-white/70"><strong>Natural Preservation:</strong> We utilize the inherent antioxidant properties of our ingredients to maintain shelf stability.</p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Laboratory Glassware" 
                className="rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedNutrition;
