/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { AGENT_DATA } from '../constants';
import { Phone, Mail, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function AgentSection() {
  return (
    <section id="about" className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] relative z-10"
          >
            <img 
              src={AGENT_DATA.imageUrl} 
              alt={AGENT_DATA.name} 
              className="w-full h-full object-cover grayscale focus:grayscale-0 hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-accent opacity-20 z-0 hidden lg:block" />
        </div>

        <div className="space-y-12">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-4 block"
            >
              The Visionary
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif leading-tight"
            >
              {AGENT_DATA.name.split(' ')[0]} <br />
              <span className="italic">{AGENT_DATA.name.split(' ')[1]}</span>
            </motion.h2>
            <p className="text-accent text-sm uppercase tracking-widest mt-4">{AGENT_DATA.title}</p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 leading-relaxed max-w-lg text-lg"
          >
            {AGENT_DATA.bio}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-accent/60">Contact Details</span>
              <div className="space-y-2">
                <a href={`tel:${AGENT_DATA.phone}`} className="flex items-center text-sm hover:text-accent transition-colors">
                  <Phone className="w-3 h-3 mr-3" />
                  {AGENT_DATA.phone}
                </a>
                <a href={`mailto:${AGENT_DATA.email}`} className="flex items-center text-sm hover:text-accent transition-colors">
                  <Mail className="w-3 h-3 mr-3" />
                  {AGENT_DATA.email}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-accent/60">Follow Excellence</span>
              <div className="flex space-x-6">
                <a href={AGENT_DATA.socials.instagram} className="hover:text-accent transition-colors"><Instagram size={18} /></a>
                <a href={AGENT_DATA.socials.linkedin} className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
                <a href={AGENT_DATA.socials.twitter} className="hover:text-accent transition-colors"><Twitter size={18} /></a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-10"
          >
            <button className="flex items-center text-sm uppercase tracking-[0.2em] group border-b border-white/20 pb-2 hover:border-accent transition-colors">
              Schedule a Consultation
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
