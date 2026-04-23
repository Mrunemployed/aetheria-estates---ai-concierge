/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PropertyType = 'Villa' | 'Penthouse' | 'Apartment' | 'Cottage' | 'Mansion' | 'Loft' | 'Estate';

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  size: number; // in sqft
  imageUrl: string;
  description: string;
  features: string[];
}

export interface Agent {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  phone: string;
  email: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
