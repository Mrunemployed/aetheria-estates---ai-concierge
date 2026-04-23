/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687940-4e524cb56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-primary/60" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
           initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
           animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
           transition={{ duration: 1 }}
           className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-sm shadow-2xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.5em] font-bold mb-8 block text-accent"
          >
            Curating Architectural Excellence
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-9xl font-serif mb-12 leading-[0.85] tracking-tighter"
          >
            Refining the Art <br /> 
            <span className="italic text-accent">of Living</span>
          </motion.h1 >

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#properties"
              className="px-12 py-5 bg-accent text-white uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-accent transition-all duration-500 shadow-xl shadow-accent/20 flex items-center group"
            >
              Explore Collection
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/about"
              className="px-12 py-5 border border-white/30 text-white uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white/10 hover:border-white transition-all duration-500"
            >
              The Agency
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">Scroll to explore</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
