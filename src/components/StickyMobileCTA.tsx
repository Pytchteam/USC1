/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Compass, ArrowRight } from 'lucide-react';

interface StickyProps {
  onJoinClick: () => void;
}

export default function StickyMobileCTA({ onJoinClick }: StickyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#051625]/90 backdrop-blur-md border-t border-white/10 p-4 block md:hidden animate-slide-up">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div className="text-left">
          <span className="font-mono text-[8px] text-brand-orange uppercase block tracking-widest font-bold">LIMITED SEATS</span>
          <span className="text-xs text-white font-display font-bold">100 Days Framework</span>
        </div>
        <button
          id="sticky-mobile-cta-btn"
          onClick={onJoinClick}
          className="bg-brand-orange hover:bg-brand-orange/80 text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1 shadow-md cursor-pointer shrink-0"
        >
          Start Your 100 Days
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
