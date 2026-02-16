
import React from 'react';

const MATRICES = [
  {
    title: "Platinum Super Greens Matrix",
    dosage: "1,800 mg",
    ingredients: ["Spirulina", "Chlorella", "Matcha", "Sea Moss"],
    color: "bg-emerald-900/10",
    description: "Alkalizing superfoods that provide a foundational surge of chlorophyll and micro-minerals."
  },
  {
    title: "Longevity + NAD Complex",
    dosage: "1,200 mg",
    ingredients: ["NMN", "Trans-Resveratrol", "CoQ10", "Spermidine"],
    color: "bg-purple-900/10",
    description: "Precision cellular health components designed to support mitochondrial function and repair."
  },
  {
    title: "Gut Health & Digestive Complex",
    dosage: "500 mg",
    ingredients: ["L. plantarum", "B. lactis", "Digestive Enzymes"],
    color: "bg-blue-900/10",
    description: "Highly stable probiotic strains paired with enzymes for optimal nutrient absorption."
  },
  {
    title: "Adaptogen & Mushroom Blend",
    dosage: "300 mg",
    ingredients: ["Ashwagandha", "Lion's Mane", "Reishi"],
    color: "bg-amber-900/10",
    description: "Stress-mitigating botanicals and cognitive boosters for mental clarity and focus."
  }
];

const ProductMatrices: React.FC = () => {
  return (
    <section id="matrices" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-toqui-green mb-6">
            Foundational Nutrition, Elevated.
          </h2>
          <div className="w-20 h-1 bg-toqui-green mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed uppercase tracking-widest text-xs font-semibold">
            Our 4-Stage Synergistic Formula
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MATRICES.map((matrix, idx) => (
            <div key={idx} className={`p-8 border border-gray-100 flex flex-col transition-all hover:shadow-xl group hover:-translate-y-1 ${matrix.color}`}>
              <div className="text-toqui-green font-serif text-2xl mb-2">{matrix.dosage}</div>
              <h3 className="text-lg font-bold text-toqui-black mb-4 h-14 flex items-center">
                {matrix.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {matrix.description}
              </p>
              <div className="mt-auto">
                <div className="text-[10px] uppercase tracking-widest text-toqui-green font-bold mb-3 border-b border-toqui-green/20 pb-2">
                  Key Ingredients
                </div>
                <ul className="space-y-2">
                  {matrix.ingredients.map((ing, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-center">
                      <span className="w-1 h-1 bg-toqui-green rounded-full mr-2"></span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMatrices;
