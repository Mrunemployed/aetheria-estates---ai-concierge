/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PROPERTIES, PROPERTY_TYPES, AREAS } from '../constants';
import { BedDouble, Bath, Maximize, Search } from 'lucide-react';
import { Property } from '../types';
import { Link } from 'react-router-dom';

export default function PropertySection() {
  const [filterType, setFilterType] = useState('All');
  const [filterArea, setFilterArea] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = PROPERTIES.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesArea = filterArea === 'All' || p.area === filterArea;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesArea && matchesSearch;
  });

  return (
    <section id="properties" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-accent font-semibold mb-4 block"
          >
            Private Listings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif"
          >
            The Collection
          </motion.h2>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
            <input 
              type="text"
              placeholder="Search properties..."
              className="pl-10 pr-4 py-2 bg-transparent border-b border-primary/10 focus:border-accent outline-none text-sm w-full md:w-64 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-6">
            <select 
              className="bg-transparent text-[10px] uppercase tracking-widest font-medium outline-none cursor-pointer border-none"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t} TYPE</option>)}
            </select>
            <select 
              className="bg-transparent text-[10px] uppercase tracking-widest font-medium outline-none cursor-pointer border-none"
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
            >
              {AREAS.map(a => <option key={a} value={a}>{a} AREA</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </AnimatePresence>
      </div>
      
      {filtered.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-primary/40 font-serif italic text-xl">No properties matches your criteria in our private collection.</p>
        </motion.div>
      )}
    </section>
  );
}

function PropertyCard({ property }: { property: Property; key?: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group cursor-pointer"
    >
      <Link to={`/property/${property.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden mb-6">
          <img 
            src={property.imageUrl} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            {property.type}
          </div>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white text-primary px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold">
              View Details
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-serif mb-1 group-hover:text-accent transition-colors">{property.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary/40">{property.location}</p>
            </div>
            <p className="text-lg font-medium text-accent">
              ${(property.price / 1000000).toFixed(1)}M
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[10px] uppercase tracking-widest text-primary/60 border-t border-primary/5 pt-4">
            <div className="flex items-center">
              <BedDouble className="w-3 h-3 mr-2" />
              {property.bedrooms} Beds
            </div>
            <div className="flex items-center">
              <Bath className="w-3 h-3 mr-2" />
              {property.bathrooms} Baths
            </div>
            <div className="flex items-center">
              <Maximize className="w-3 h-3 mr-2" />
              {property.size.toLocaleString()} SQFT
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
