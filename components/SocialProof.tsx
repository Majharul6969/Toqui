
import React from 'react';

const BADGES = [
  "Zero Sugar",
  "Non-GMO",
  "Gluten-Free",
  "Third-Party Tested",
  "FDA-Registered Facility"
];

const SocialProof: React.FC = () => {
  return (
    <section className="bg-toqui-green py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-80">
          {BADGES.map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-white">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
