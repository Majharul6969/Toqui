
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-toqui-green/5 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/800/800?random=3" 
              alt="Myra Dulac - Founder" 
              className="relative z-10 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <span className="text-toqui-green text-xs font-bold uppercase tracking-[0.4em]">Our Philosophy</span>
            <h2 className="font-serif text-5xl text-toqui-green">A Refined Standard</h2>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "Wellness shouldn't be a chore. It should be a moment of quiet indulgence that fuels your highest potential."
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020 by Myra Dulac in the United States, TOQUI was born from a frustration with the 
              "clinical coldness" of traditional supplements. Myra, a veteran of both the nutrition science 
              and luxury culinary worlds, sought to create a bridge between efficacy and experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began as a boutique experiment in a Miami lab has evolved into the gold standard for 
              longevity supplementation. By merging the rigorous data of 75+ ingredients with the 
              sensory profile of a high-end palate cleanser, we've made health something you don't just 
              need—it's something you crave.
            </p>
            <div className="pt-6">
              <span className="block font-serif text-2xl text-toqui-green">Myra Dulac</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">Founder & CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
