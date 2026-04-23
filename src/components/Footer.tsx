/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FBFBF9] py-20 px-6 border-t border-primary/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif tracking-widest font-bold mb-6">AETHERIA</h2>
          <p className="text-primary/40 text-sm max-w-sm leading-relaxed mb-8">
            Exclusively representing private architectural masterpieces. Our legacy is built on the pillars of discretion, integrity, and exceptional service.
          </p>
          <div className="flex space-x-12">
             <div className="space-y-2">
               <p className="text-[10px] uppercase tracking-widest text-accent font-bold">New York Office</p>
               <p className="text-xs text-primary/60">40 Wall Street, Suite 2100<br />New York, NY 10005</p>
             </div>
             <div className="space-y-2">
               <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Malibu Studio</p>
               <p className="text-xs text-primary/60">21355 Pacific Coast Hwy<br />Malibu, CA 90265</p>
             </div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Connect</h4>
          <ul className="space-y-4 text-xs tracking-widest font-medium text-primary/60">
            <li><a href="https://instagram.com/aetheria" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">INSTAGRAM</a></li>
            <li><a href="https://linkedin.com/company/aetheria" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a></li>
            <li><a href="https://twitter.com/aetheria" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">TWITTER</a></li>
            <li><button className="hover:text-accent transition-colors uppercase">NEWSLETTER</button></li>
          </ul>
        </div>

        <div className="border-l border-primary/5 pl-8 md:pl-12">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-accent">Legal</h4>
          <ul className="space-y-4 text-xs tracking-widest font-medium text-primary/60">
            <li><Link to="/privacy" className="hover:text-accent transition-colors">PRIVACY POLICY</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">TERMS OF SERVICE</Link></li>
            <li><Link to="/cookies" className="hover:text-accent transition-colors">COOKIE POLICY</Link></li>
            <li><button className="hover:text-accent transition-colors uppercase text-left">ACCESSIBILITY</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-primary/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-primary/30">
        <p>© 2026 AETHERIA ESTATES. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY THE ART OF LIVING STUDIO</p>
      </div>
    </footer>
  );
}
