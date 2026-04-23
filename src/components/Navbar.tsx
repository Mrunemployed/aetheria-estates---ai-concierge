/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Properties', href: '/#properties', internal: false },
    { name: 'About', href: '/about', internal: true },
    { name: 'Contact', href: '/#contact', internal: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FBFBF9]/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-serif tracking-widest font-semibold text-primary"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            AETHERIA
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, i) => {
            const Component = link.internal ? Link : 'a';
            const props = link.internal ? { to: link.href } : { href: link.href };
            
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* @ts-ignore */}
                <Component
                  {...props}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-primary/60 hover:text-accent transition-colors"
                >
                  {link.name}
                </Component>
              </motion.div>
            );
          })}
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-accent text-accent text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all cursor-pointer"
          >
            Inquire
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#FBFBF9] border-b border-primary/5 px-6 py-8 flex flex-col space-y-6"
        >
          {navLinks.map((link) => {
            const Component = link.internal ? Link : 'a';
            const props = link.internal ? { to: link.href } : { href: link.href };
            
            return (
              /* @ts-ignore */
              <Component
                key={link.name}
                {...props}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium"
              >
                {link.name}
              </Component>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
