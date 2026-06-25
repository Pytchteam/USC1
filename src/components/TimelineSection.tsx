/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TIMELINE_PHASES } from '../data';
import { Compass, Calendar, CheckSquare, Shield, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TimelineSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const phase = TIMELINE_PHASES[activePhaseIndex];

  // Side-by-side Drift vs Intent details for contrast
  const DRIFT_VS_INTENT = [
    {
      phase: 1,
      drift: 'Waking up checking email inbox, reacting to fires, endless prep research, and having no central contact database.',
      intent: 'Dedicated daily lead generation time blocks, diagnostic scorecard repair, and a centralized CRM pipeline with 100 contacts.'
    },
    {
      phase: 2,
      drift: 'Winging every conversation, stammering during commission negotiations, and failing to schedule firm appointments.',
      intent: 'Pre-scripted conversation templates, structural objection answers, and customized buyer timeline assessments.'
    },
    {
      phase: 3,
      drift: 'Passive marketing hope, posting generic real estate graphics, and waiting for friends to randomly call.',
      intent: 'Proactive hyper-local market reports, automated social funnels, and an active realtor power circle referral network.'
    },
    {
      phase: 4,
      drift: 'Scattered desk notes, lost client leads, forgetting to follow up with cold opportunities, and erratic monthly income.',
      intent: 'Fully automated CRM follow-up pipelines, missed call text-backs, and a repeatable, weekly business routine.'
    }
  ];

  const contrast = DRIFT_VS_INTENT[activePhaseIndex];

  return (
    <section id="timeline-section" className="relative py-20 bg-brand-navy text-white border-b border-white/10 overflow-hidden">
      {/* Background blueprint details */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
            BUSINESS BLUEPRINT
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tight mb-4 uppercase">
            Your Next 100 Days, Organized.
          </h2>
          <p className="text-white/80 font-sans text-base md:text-lg">
            Stop hoping. Start planning. Here is the sequential, structured path we follow to construct a predictable real estate pipeline.
          </p>
        </div>

        {/* Phase Header Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {TIMELINE_PHASES.map((p, idx) => (
            <button
              key={idx}
              id={`timeline-phase-btn-${idx}`}
              onClick={() => setActivePhaseIndex(idx)}
              className={`text-left p-5 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${activePhaseIndex === idx ? 'bg-brand-royal/30 border-brand-light shadow-lg' : 'bg-[#0b243b]/40 border-white/5 hover:border-white/10'}`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-brand-light bg-brand-light/10 px-2 py-0.5 rounded uppercase font-semibold">
                  Phase 0{p.phase}
                </span>
                <span className="text-xs font-mono text-gray-400">{p.duration}</span>
              </div>
              <div>
                <h4 className="font-display font-black text-sm md:text-base text-white uppercase">{p.name}</h4>
                <span className="text-xs text-gray-400 font-sans mt-1 block">Focus: {p.focus}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Timeline Phase Details Workspace */}
        <div className="bg-[#0b243b] border border-white/10 rounded-sm shadow-2xl p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhaseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              
              {/* Left Side: Deliverables Checklist (Column) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-brand-orange" />
                    <span className="text-[11px] font-mono text-brand-orange uppercase tracking-wider font-bold">
                      SYSTEM MODULE - {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-4 uppercase">
                    Phase {phase.phase}: {phase.name}
                  </h3>
                  <p className="text-white/80 font-sans text-xs md:text-sm leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-4">Core Deliverables Checklist</span>
                  <div className="flex flex-col gap-3.5">
                    {phase.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs md:text-sm">
                        <CheckSquare className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-sans">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
                  <span>METRIC: STRUCTURAL COMPLIANCE</span>
                  <span className="text-brand-light uppercase">FOCUS: {phase.focus}</span>
                </div>
              </div>

              {/* Right Side: Drift vs Intent Contrast (Column) */}
              <div className="lg:col-span-5 bg-[#051625] rounded-sm border border-white/5 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-4">Mindset Transformation Contrast</span>
                  
                  {/* Drift block */}
                  <div className="mb-6 p-4 rounded-sm bg-red-500/5 border border-red-500/10 text-xs text-left">
                    <div className="flex items-center gap-2 text-red-400 font-display font-bold mb-1.5 uppercase">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      DRIFT MODE (The Unstructured Agent)
                    </div>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      {contrast.drift}
                    </p>
                  </div>

                  {/* Intent block */}
                  <div className="p-4 rounded-sm bg-green-500/5 border border-green-500/10 text-xs text-left">
                    <div className="flex items-center gap-2 text-green-400 font-display font-bold mb-1.5 uppercase">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      INTENT MODE (The Systematic Entrepreneur)
                    </div>
                    <p className="text-gray-300 font-sans leading-relaxed">
                      {contrast.intent}
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-[#0b243b] rounded-sm p-3.5 border border-white/5 text-[10px] text-gray-400 font-sans leading-relaxed text-left">
                  <span className="text-brand-light font-mono font-bold uppercase block mb-1">Bottom Line:</span>
                  The next 100 days are coming either way. The question is whether you will drift through them or build them with intention.
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
