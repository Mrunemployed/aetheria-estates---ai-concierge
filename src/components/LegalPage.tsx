/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

const LEGAL_CONTENT: Record<string, { title: string; content: string[] }> = {
  '/privacy': {
    title: 'Privacy Policy',
    content: [
      'At Aetheria Estates, we take your privacy with the same seriousness we apply to our property selections. This policy outlines how we protect and manage your personal data.',
      'Data Collection: We only collect information necessary to provide our premium services, including contact details and property preferences.',
      'Confidentiality: Your data is never shared with third parties without your explicit consent. We utilize military-grade encryption for all client communications.',
      'Your Rights: You have the right to request access to, correction of, or deletion of your personal information at any time.'
    ]
  },
  '/terms': {
    title: 'Terms of Service',
    content: [
      'By using the Aetheria Estates platform, you agree to abide by our standards of professional conduct and integrity.',
      'Limited License: All architectural photography and descriptive content are the intellectual property of Aetheria Estates.',
      'Inquiry Process: Submitting an inquiry does not constitute a contractual agreement. All listings are subject to prior sale or withdrawal.',
      'Liability: Aetheria Estates provides curated information as a starting point for property acquisition. We are not responsible for architectural discrepancies found post-purchase.'
    ]
  },
  '/cookies': {
    title: 'Cookie Policy',
    content: [
      'We use cookies to refine your browsing experience and remember your property preferences.',
      'Essential Cookies: Necessary for the platform to function securely.',
      'Analytical Cookies: Help us understand which properties are garnering the most interest.',
      'Experience Cookies: Remember your search filters and area preferences for future visits.'
    ]
  }
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const data = LEGAL_CONTENT[pathname] || LEGAL_CONTENT['/privacy'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-[#FBFBF9] min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-serif mb-12">{data.title}</h1>
        <div className="space-y-10">
          {data.content.map((p, i) => (
            <section key={i} className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Section 0{i + 1}</span>
              <p className="text-lg text-primary/70 leading-relaxed font-serif italic">
                {p}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-20 pt-10 border-t border-primary/5">
          <p className="text-[10px] uppercase tracking-widest text-primary/30">Last Updated: April 2026</p>
        </div>
      </div>
    </motion.div>
  );
}
