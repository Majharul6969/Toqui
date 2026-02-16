
import React from 'react';

interface FooterProps {
  setView?: (view: 'home' | 'nutrition') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-toqui-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => setView?.('home')}
              className="font-serif text-4xl mb-6 tracking-tighter hover:opacity-80 transition-opacity"
            >
              TOQUI
            </button>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed uppercase tracking-widest font-light">
              Elevating human longevity through clinical science and culinary artistry.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-white/60">Product</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><button onClick={() => setView?.('home')} className="hover:text-white transition-colors">The Gummy</button></li>
              <li><button onClick={() => setView?.('home')} className="hover:text-white transition-colors">Subscription Benefits</button></li>
              <li><button onClick={() => setView?.('nutrition')} className="hover:text-white transition-colors">Detailed Nutrition</button></li>
              <li><button className="hover:text-white transition-colors">Bulk Orders</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-white/60">Support</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="text-[10px] text-white/40 leading-relaxed max-w-5xl mb-8 uppercase tracking-wider">
            * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/60">
            <div>Distributed by: TOQUI Brands, Miami, FL 33146 USA</div>
            <div className="mt-4 md:mt-0">© 2024 TOQUI ENERGY. ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
