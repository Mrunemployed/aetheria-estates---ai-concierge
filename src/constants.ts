/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Property, Agent } from './types';

export const AGENT_DATA: Agent = {
  name: 'Eleanor Vance',
  title: 'Principal Consultant & Founder',
  bio: 'With over 15 years of experience in high-end real estate, Eleanor has specialized in connecting discerning clients with architectural masterpieces. Her approach combines deep market intelligence with an unwavering commitment to discretion and excellence.',
  imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  phone: '+1 (555) 012-3456',
  email: 'eleanor@aetheriaestates.com',
  socials: {
    instagram: 'https://instagram.com/eleanorvance',
    linkedin: 'https://linkedin.com/in/eleanorvance',
    twitter: 'https://twitter.com/eleanorvance'
  }
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Obsidian Villa',
    price: 4500000,
    location: 'Beverly Hills, CA',
    area: 'Western Hills',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    size: 6500,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of contemporary architecture featuring floor-to-ceiling obsidian glass and a cantilevered infinity pool.',
    features: ['Infinity Pool', 'Smart Home', 'Home Cinema', 'Wine Cellar', 'Security', 'Spa']
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    price: 2850000,
    location: 'Lower Manhattan, NY',
    area: 'Downtown',
    type: 'Penthouse',
    bedrooms: 3,
    bathrooms: 3,
    size: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Breathtaking 360-degree views of the Manhattan skyline from this ultra-minimalist triplex.',
    features: ['Private Terrace', '24/7 Concierge', 'Chef\'s Kitchen', 'Custom Lighting', 'Art Gallery']
  },
  {
    id: '3',
    title: 'Serene Forest Retreat',
    price: 1200000,
    location: 'Aspen, CO',
    area: 'Silver Pine',
    type: 'Cottage',
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    description: 'A modern take on the traditional mountain cabin, nestled deep within a private pine forest.',
    features: ['Underfloor Heating', 'Guest House', 'Hiking Trails', 'Solar Power', 'Security']
  },
  {
    id: '4',
    title: 'Azure Coast Mansion',
    price: 8900000,
    location: 'Malibu, CA',
    area: 'Malibu Shores',
    type: 'Mansion',
    bedrooms: 7,
    bathrooms: 9,
    size: 11000,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    description: 'Vast oceanfront estate with private beach access and a professional-grade tennis court.',
    features: ['Beach Access', 'Tennis Court', 'Heli-pad', 'Spa', 'Smart Home', 'Wine Cellar']
  },
  {
    id: '5',
    title: 'Neo-Classic Apartment',
    price: 950000,
    location: 'Paris, France',
    area: 'Le Marais',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    size: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    description: 'Historic charm meets modern luxury in this renovated 19th-century apartment in the heart of Paris.',
    features: ['High Ceilings', 'Original Parquet', 'Balcony', 'Art Gallery', 'Custom Lighting']
  },
  {
    id: '6',
    title: 'The Glass Pavilion',
    price: 5200000,
    location: 'Austin, TX',
    area: 'Lake Travis',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 5,
    size: 5800,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A seamless blend of indoor and outdoor living, constructed entirely of architectural glass and steel.',
    features: ['Solar Power', 'Custom Lighting', 'Art Gallery', 'Smart Home', 'Private Terrace']
  },
  {
    id: '7',
    title: 'Sapphire Bay Villa',
    price: 12500000,
    location: 'Providenciales, Turks & Caicos',
    area: 'Sapphire Bay',
    type: 'Villa',
    bedrooms: 6,
    bathrooms: 7,
    size: 8200,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultra-exclusive beachfront villa with 200 feet of private white sand beach and coral reef access.',
    features: ['Infinity Pool', 'Beach Access', '24/7 Concierge', 'Chef\'s Kitchen', 'Security']
  },
  {
    id: '8',
    title: 'Emerald City Loft',
    price: 1850000,
    location: 'Seattle, WA',
    area: 'Capitol Hill',
    type: 'Loft',
    bedrooms: 2,
    bathrooms: 2,
    size: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
    description: 'A converted industrial space in the heart of Seattle, featuring original brickwork and modern tech integration.',
    features: ['High Ceilings', 'Smart Home', 'Private Terrace', 'Custom Lighting', 'Security']
  },
  {
    id: '9',
    title: 'Golden Gate Manor',
    price: 7200000,
    location: 'San Francisco, CA',
    area: 'Pacific Heights',
    type: 'Mansion',
    bedrooms: 6,
    bathrooms: 6,
    size: 7800,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
    description: 'Historic Victorian manor reimagined for the modern age, with sweeping views of the Golden Gate Bridge.',
    features: ['Wine Cellar', 'Spa', 'Home Cinema', 'Original Parquet', 'Art Gallery']
  },
  {
    id: '10',
    title: 'Kyoto Zen Estate',
    price: 3600000,
    location: 'Kyoto, Japan',
    area: 'Higashiyama',
    type: 'Estate',
    bedrooms: 4,
    bathrooms: 4,
    size: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    description: 'A tranquil sanctuary blending traditional Japanese craftsmanship with vanguard sustainable technology.',
    features: ['Solar Power', 'Custom Lighting', 'Hiking Trails', '24/7 Concierge', 'Spa']
  }
];

export const PROPERTY_TYPES: string[] = ['All', 'Villa', 'Penthouse', 'Apartment', 'Cottage', 'Mansion', 'Loft', 'Estate'];
export const AREAS: string[] = ['All', 'Western Hills', 'Downtown', 'Silver Pine', 'Malibu Shores', 'Le Marais', 'Lake Travis', 'Sapphire Bay', 'Capitol Hill', 'Pacific Heights', 'Higashiyama'];
