/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Globe, Building } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-[#FBFBF9]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold block"
            >
              The Aetheria Legacy
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif leading-[0.9]"
            >
              Excellence <br /> <span className="italic text-accent">Without Compromise</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-primary/60 leading-relaxed max-w-lg"
            >
              Founded on the principles of discretion and architectural appreciation, Aetheria Estates has become the global benchmark for luxury real estate services.
            </motion.p>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: Award, title: 'Unrivaled Quality', desc: 'We only represent properties that meet our stringent standards for architectural integrity and aesthetic value.' },
            { icon: Users, title: 'Discreet Service', desc: 'Our clients value their privacy above all. We provide a fortress of confidentiality for every transaction.' },
            { icon: Globe, title: 'Global Reach', desc: 'With strategic partnerships in London, Paris, and Hong Kong, we bring the world to your doorstep.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-primary/5 rounded-2xl hover:shadow-xl transition-all"
            >
              <item.icon className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-sm text-primary/40 leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-white p-20 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-serif text-accent mb-2">15+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Years of Pursuit</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-accent mb-2">$4.2B</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Total Portfolio Value</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-accent mb-2">180+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Curated Estates</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-accent mb-2">24/7</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Global Concierge</p>
            </div>
          </div>
          <Building className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 rotate-12" />
        </div>
      </div>
    </motion.div>
  );
}
