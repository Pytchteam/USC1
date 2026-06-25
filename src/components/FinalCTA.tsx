/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Shield } from 'lucide-react';

interface FinalCTAProps {
  onJoinClick: () => void;
}

export default function FinalCTA({ onJoinClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 bg-brand-navy text-white overflow-hidden border-b border-white/10">
      {/* Background blueprint details */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
          backgroundSize: '35px 35px'
        }}
      ></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-royal/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-6 inline-block">
          DECISION MILESTONE
        </span>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight mb-6 max-w-3xl leading-none uppercase">
          Your Next 100 Days <br />
          <span className="text-brand-orange">Need A System.</span>
        </h2>

        {/* Copy */}
        <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          You can keep guessing. Or you can start building with structure, scripts, AI tools, follow-up systems, marketing resources, CRM support, and community guidance. 
          <br /><br />
          Real estate is a business. <strong>Build it like one.</strong>
        </p>

        {/* CTA Button */}
        <button
          id="final-cta-btn"
          onClick={onJoinClick}
          className="px-8 py-5 bg-brand-orange text-white text-lg font-bold uppercase tracking-tight rounded-sm border-b-2 border-black/20 hover:bg-[#e06910] transition-colors cursor-pointer inline-flex items-center gap-2 mb-4 shadow-lg"
        >
          <span>JOIN THE FRAMEWORK & BUILD YOUR BUSINESS</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Microcopy */}
        <p className="text-xs text-brand-light font-mono uppercase tracking-widest font-bold mb-6">
          Licensed is not launched. Start your 100 days today.
        </p>

        <div className="flex items-center gap-2 mt-2 text-xs text-white/40">
          <Shield className="w-4 h-4 text-brand-light" />
          <span>No income guarantees. Solid, practical tools, templates, systems, and execution protocols.</span>
        </div>

      </div>
    </section>
  );
}
