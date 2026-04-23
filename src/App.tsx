/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySection from './components/PropertySection';
import AgentSection from './components/AgentSection';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import PropertyDetail from './components/PropertyDetail';
import About from './components/About';
import LegalPage from './components/LegalPage';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  return (
    <>
      <Hero />
      <section className="py-32 px-6 bg-white border-y border-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-serif leading-tight text-primary/80"
          >
            "Luxury is not a price point, but a <span className="italic">curated experience</span> of space, light, and materiality."
          </motion.p>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 80 }}
             className="h-px bg-accent mx-auto mt-12"
          />
        </div>
      </section>
      <PropertySection />
      <AgentSection />
      <section className="py-24 bg-[#F2F2EF]">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-12 md:mb-0">
              <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-accent mb-4">Global Network</h3>
              <h2 className="text-4xl font-serif">Unrivaled reach in <br />the world's most <br />coveted locations.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8">
               {[
                 { city: 'London', count: '14' },
                 { city: 'Paris', count: '08' },
                 { city: 'New York', count: '21' },
                 { city: 'Hong Kong', count: '12' }
               ].map((loc) => (
                 <div key={loc.city} className="border-l border-primary/10 pl-6">
                    <p className="text-2xl font-serif mb-1">{loc.count}</p>
                    <p className="text-[10px] uppercase tracking-widest text-primary/40">{loc.city}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative antialiased selection:bg-accent selection:text-white">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-accent z-[101] origin-left" 
          style={{ scaleX }} 
        />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/about" element={<About />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/privacy" element={<LegalPage />} />
              <Route path="/terms" element={<LegalPage />} />
              <Route path="/cookies" element={<LegalPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}
