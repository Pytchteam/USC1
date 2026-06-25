/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Shield, Flame, Compass, Target } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onSeeIncludedClick: () => void;
  onOpenQuizClick: () => void;
}

export default function HeroSection({ onJoinClick, onSeeIncludedClick, onOpenQuizClick }: HeroProps) {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/10">
      {/* Sleek Dot Grid Architectural Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1.5px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-royal/20 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Core Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                For New & Growing Realtors
              </span>
              <div className="h-px w-20 bg-brand-light/30"></div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7.5xl font-display font-black text-white leading-[0.92] tracking-tighter mb-6 uppercase"
            >
              Licensed Is <br />
              <span className="text-brand-orange">
                Not Launched.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 font-sans leading-relaxed max-w-2xl mb-6"
            >
              The <strong className="text-white font-semibold">100 Days to $100K Framework</strong> helps realtors turn their license into a real business with structure, scripts, AI tools, follow-up systems, marketing resources, CRM support, and community guidance.
            </motion.p>

            {/* Quote Block / Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-brand-orange pl-4 py-1 mb-8 text-sm md:text-base text-gray-400 font-sans italic"
            >
              "Most agents do not need more motivation. They need a pattern, a plan, and a system they can follow."
            </motion.div>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 mb-4"
            >
              <button 
                id="hero-cta-join"
                onClick={onJoinClick}
                className="px-8 py-4 bg-brand-orange text-white text-lg font-bold uppercase tracking-tight rounded-sm hover:scale-105 transition-transform shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Start Your 100 Days
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                id="hero-cta-included"
                onClick={onSeeIncludedClick}
                className="px-8 py-4 border border-white/20 text-white text-lg font-medium uppercase tracking-tight hover:bg-white/5 rounded-sm transition-all cursor-pointer inline-flex items-center justify-center"
              >
                See What's Included
              </button>
            </motion.div>

            {/* Microcopy & Compliance */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-2 mt-2 text-xs text-white/40"
            >
              <Shield className="w-3.5 h-3.5 text-brand-light" />
              <span>*No income guarantees. Success depends on effort, market conditions, and consistency.</span>
            </motion.div>
          </div>

          {/* Right Column - Sleek Dynamic Framework Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[380px] md:max-w-[420px] relative flex flex-col gap-4"
            >
              {/* Foundation */}
              <div className="bg-gradient-to-br from-brand-royal to-brand-navy border border-white/10 rounded-lg p-6 flex flex-col justify-end min-h-[110px] text-left relative overflow-hidden group hover:border-brand-light/30 transition-all">
                <span className="text-[10px] text-brand-light font-black uppercase mb-1 tracking-widest">Phase 01</span>
                <h3 className="text-white font-bold text-lg leading-none">FOUNDATION</h3>
                <p className="text-[11px] text-gray-400 font-sans mt-1">Daily sprint structures & diagnostic business blueprint planning.</p>
              </div>

              {/* System */}
              <div className="bg-gradient-to-br from-brand-light to-brand-royal border border-white/10 rounded-lg p-6 flex flex-col justify-end min-h-[110px] text-left relative overflow-hidden group hover:border-white/20 transition-all">
                <span className="text-[10px] text-white font-black uppercase mb-1 tracking-widest">Phase 02</span>
                <h3 className="text-white font-bold text-lg leading-none">SYSTEMS & AI</h3>
                <p className="text-[11px] text-white/80 font-sans mt-1">Preloaded CRM databases, follow-up automation, and advanced AI prompts.</p>
              </div>

              {/* Business */}
              <div className="bg-white p-6 rounded-lg flex flex-col justify-end min-h-[110px] shadow-2xl relative text-left text-brand-dark-text group border border-white/20 transition-all">
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-orange flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-orange rotate-45"></div>
                  </div>
                </div>
                <span className="text-[10px] text-brand-navy font-black uppercase mb-1 tracking-widest">Phase 03</span>
                <h3 className="text-brand-navy font-black text-xl leading-none">ENTREPRENEUR</h3>
                <p className="text-[11px] text-brand-navy/70 font-sans mt-1">Active client acquisition, local marketing media, and predictable scaling.</p>
              </div>

              {/* Interactive Audit Action */}
              <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4 flex flex-col gap-2 items-stretch">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-300 font-sans">Is your business leaking client deals?</span>
                  <span className="text-[10px] font-mono text-brand-light uppercase bg-brand-royal/30 px-2 py-0.5 rounded-sm">Free Audit</span>
                </div>
                <button 
                  id="hero-scorecard-btn"
                  onClick={onOpenQuizClick}
                  className="w-full bg-brand-royal hover:bg-brand-royal/80 text-white font-sans text-xs py-2.5 rounded-sm transition-colors cursor-pointer text-center font-bold uppercase tracking-wider"
                >
                  Diagnose Your Business
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

