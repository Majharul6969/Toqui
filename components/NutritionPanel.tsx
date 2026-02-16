
import React from 'react';

const FACTS = [
  { label: "Vitamin C (as Ascorbic Acid)", amt: "180 mg", dv: "200%" },
  { label: "Vitamin B12 (as Methylcobalamin)", amt: "25 mcg", dv: "1042%" },
  { label: "Biotin", amt: "300 mcg", dv: "1000%" },
  { label: "Zinc (as Zinc Citrate)", amt: "11 mg", dv: "100%" },
  { label: "Platinum Super Greens Blend", amt: "1,800 mg", dv: "**" },
  { label: "Longevity + NAD Complex", amt: "1,200 mg", dv: "**" },
  { label: "Gut Health & Digestive Complex", amt: "500 mg", dv: "**" },
  { label: "Adaptogen & Mushroom Blend", amt: "300 mg", dv: "**" },
];

const NutritionPanel: React.FC = () => {
  return (
    <section id="nutrition" className="py-24 bg-toqui-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl text-toqui-green leading-tight">
              Clinical Potency, <br />
              <span className="italic">Without Compromise.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Most supplements prioritize manufacturing speed. We prioritize biological rhythm. 
              Our "Champagne Berry" profile uses natural extracts from black carrots and Bulgarian rose 
              to mask the earthy notes of high-concentration greens, creating a flavor profile 
              as refined as a Michelin-star palate cleanser.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-toqui-green pl-6 py-2">
                <span className="block text-3xl font-serif text-toqui-green">1042%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Vitamin B12</span>
              </div>
              <div className="border-l-2 border-toqui-green pl-6 py-2">
                <span className="block text-3xl font-serif text-toqui-green">1000%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Biotin</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="border-b-8 border-black pb-2 mb-2">
              <h3 className="text-4xl font-bold font-serif mb-1 uppercase italic">Supplement Facts</h3>
              <p className="text-sm">Serving Size: 2 Gummies (8 g)</p>
              <p className="text-sm">Servings Per Container: 30</p>
            </div>
            
            <div className="border-b-4 border-black py-1 flex justify-between items-end">
              <span className="text-xs font-bold uppercase">Amount Per Serving</span>
              <span className="text-xs font-bold uppercase">% Daily Value</span>
            </div>

            <div className="divide-y divide-black/10">
              {FACTS.map((fact, idx) => (
                <div key={idx} className="py-3 flex justify-between items-center text-sm">
                  <span className={fact.label.includes('Matrix') || fact.label.includes('Complex') || fact.label.includes('Blend') ? 'font-bold' : ''}>
                    {fact.label}
                  </span>
                  <div className="flex space-x-4 min-w-[100px] justify-end">
                    <span>{fact.amt}</span>
                    <span className="font-bold w-12 text-right">{fact.dv}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-4 border-black mt-4 pt-2 text-[10px] italic leading-tight">
              ** Daily Value (DV) not established.
              <br />
              Other ingredients: Pectin, Organic Cane Sugar (Fermented/Zero-Impact), Natural Champagne Berry Flavor, Citric Acid, Black Carrot Extract (Color).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionPanel;
