
import React from 'react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 pointer-events-none">
      <div className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-2xl border border-gray-100 flex items-center justify-between p-3 rounded-xl overflow-hidden">
        <div className="pl-2">
          <div className="text-[10px] uppercase tracking-widest font-bold text-toqui-green">Champagne Berry</div>
          <div className="text-xs font-serif italic">$79 / Monthly</div>
        </div>
        <button className="bg-toqui-green text-white px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-lg shadow-lg active:scale-95 transition-all">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
