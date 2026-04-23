/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROPERTIES } from '../constants';
import { ArrowLeft, BedDouble, Bath, Maximize, MapPin, CheckCircle2, Calendar, Phone, Mail, Waves, Cpu, Film, Wine, Cloud, ConciergeBell, ChefHat, Thermometer, Home, Trees, Palmtree, Zap, Lightbulb, Palette, Dumbbell, Plane, ShieldCheck, ArrowUpCircle } from 'lucide-react';
import { useEffect } from 'react';

const FEATURE_ICONS: Record<string, any> = {
  'Infinity Pool': Waves,
  'Smart Home': Cpu,
  'Home Cinema': Film,
  'Wine Cellar': Wine,
  'Private Terrace': Cloud,
  '24/7 Concierge': ConciergeBell,
  'Chef\'s Kitchen': ChefHat,
  'Underfloor Heating': Thermometer,
  'Guest House': Home,
  'Hiking Trails': Trees,
  'Beach Access': Palmtree,
  'Tennis Court': Dumbbell,
  'Heli-pad': Plane,
  'Spa': Dumbbell,
  'High Ceilings': ArrowUpCircle,
  'Original Parquet': Home,
  'Balcony': Cloud,
  'Solar Power': Zap,
  'Custom Lighting': Lightbulb,
  'Art Gallery': Palette,
  'Security': ShieldCheck
};

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif text-2xl italic text-primary/40">
        Property not found.
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FBFBF9] pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 aspect-[16/9] overflow-hidden shadow-2xl"
          >
            <img 
              src={property.imageUrl} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                tabIndex={0}
                className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block"
              >
                {property.type} • {property.area}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-serif leading-tight mb-4"
              >
                {property.title}
              </motion.h1>
              <div className="flex items-center text-primary/40 text-sm tracking-wide">
                <MapPin className="w-4 h-4 mr-2" />
                {property.location}
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-serif text-accent"
            >
              ${property.price.toLocaleString()}
            </motion.p>

            <div className="grid grid-cols-3 gap-6 py-8 border-y border-primary/5">
              <div className="text-center">
                <BedDouble className="w-5 h-5 mx-auto mb-2 text-primary/30" />
                <p className="text-[10px] uppercase tracking-widest font-bold">{property.bedrooms} Beds</p>
              </div>
              <div className="text-center">
                <Bath className="w-5 h-5 mx-auto mb-2 text-primary/30" />
                <p className="text-[10px] uppercase tracking-widest font-bold">{property.bathrooms} Baths</p>
              </div>
              <div className="text-center">
                <Maximize className="w-5 h-5 mx-auto mb-2 text-primary/30" />
                <p className="text-[10px] uppercase tracking-widest font-bold">{property.size} SQFT</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-primary text-white uppercase text-xs tracking-[0.2em] font-bold hover:bg-primary/90 transition-all flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-3" />
              Schedule Private Viewing
            </motion.button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-[12px] uppercase tracking-[0.4em] font-bold text-primary/20 mb-6 underline-offset-8 underline decoration-accent/30">Description</h2>
              <p className="text-xl leading-relaxed text-primary/70 font-serif">
                {property.description} This residence represents the pinnacle of modern architecture and luxury living. Every detail has been meticulously curated to ensure an unparalleled experience for the discerning homeowner.
              </p>
            </section>

            <section>
              <h2 className="text-[12px] uppercase tracking-[0.4em] font-bold text-primary/20 mb-8 underline-offset-8 underline decoration-accent/30">Luxury Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {property.features.map((feature, i) => {
                  const Icon = FEATURE_ICONS[feature] || CheckCircle2;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex items-start space-x-5 p-6 bg-white border border-primary/5 rounded-2xl shadow-sm hover:shadow-md hover:border-accent/10 transition-all"
                    >
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary/30 group-hover:text-accent transition-colors" />
                      </div>
                      <div className="pt-1">
                        <span className="text-sm font-semibold tracking-wide text-primary block mb-1 uppercase tracking-widest">{feature}</span>
                        <p className="text-[10px] text-primary/40 leading-relaxed uppercase tracking-widest">Premium curated feature of Aetheria Estates</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-8 border border-primary/5 rounded-2xl shadow-xl shadow-primary/5 sticky top-24">
              <h3 className="text-2xl font-serif mb-8">Inquire Privately</h3>
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary/30 mb-2 block">Full Name</label>
                  <input type="text" className="w-full bg-primary/5 border-none outline-none p-4 text-sm rounded-lg" placeholder="John Stewart" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary/30 mb-2 block">Email Address</label>
                  <input type="email" className="w-full bg-primary/5 border-none outline-none p-4 text-sm rounded-lg" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary/30 mb-2 block">Message</label>
                  <textarea className="w-full bg-primary/5 border-none outline-none p-4 text-sm rounded-lg h-32" placeholder="I am interested in viewing this property..."></textarea>
                </div>
                <button className="w-full py-5 bg-accent text-white uppercase text-xs tracking-[0.2em] font-bold hover:bg-accent/90 transition-all rounded-lg">
                  Submit Inquiry
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-primary/5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary/40" />
                  </div>
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary/40" />
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary/20">Ref: AET-00{property.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
