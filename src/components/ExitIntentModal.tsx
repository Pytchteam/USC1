/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Shield } from 'lucide-react';

interface ExitIntentProps {
  onScorecardScrollTrigger: () => void;
}

export default function ExitIntentModal({ onScorecardScrollTrigger }: ExitIntentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [alreadyShown, setAlreadyShown] = useState(false);

  useEffect(() => {
    // Check if shown before in this session
    const shown = sessionStorage.getItem('exit_intent_shown');
    if (shown) {
      setAlreadyShown(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (alreadyShown || isOpen) return;
      
      // Trigger when mouse leaves the top of the screen (intent to close tab)
      if (e.clientY < 50) {
        setIsOpen(true);
        setAlreadyShown(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [alreadyShown, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    setIsOpen(false);
    onScorecardScrollTrigger();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full relative overflow-hidden text-brand-dark-text">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-brand-royal/10 pointer-events-none rounded-tr-full"></div>
        
        {/* Close Button */}
        <button
          id="exit-modal-close"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-brand-navy transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-mono uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            FREE COMPLIMENTARY DIAGNOSTIC
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-brand-navy leading-tight">
            Before You Go — Get The Realtor Business Scorecard
          </h3>

          <p className="text-gray-600 font-sans text-xs md:text-sm leading-relaxed">
            Find out exactly where your real estate business is strong, where it is leaking client opportunities, and what system gaps to repair first. 
            <br /><br />
            Our interactive auditor takes less than 60 seconds.
          </p>

          <button
            id="exit-modal-cta"
            onClick={handleCTAClick}
            className="w-full bg-brand-navy hover:bg-brand-royal text-white font-sans text-xs md:text-sm font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            Get The Free Scorecard
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-mono mt-1 w-full justify-center">
            <Shield className="w-3.5 h-3.5 text-brand-royal" />
            NO OPT-IN REQUIRED • PRIVATE DIAGNOSTIC ANALYSIS
          </div>
        </div>
      </div>
    </div>
  );
}
