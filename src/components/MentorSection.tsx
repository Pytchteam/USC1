/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { Award, Star, MessageSquare, Quote } from 'lucide-react';

export default function MentorSection() {
  return (
    <section id="guide-section" className="relative py-20 bg-brand-navy text-white border-b border-white/10 overflow-hidden">
      {/* Background radial spotlight */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
          backgroundSize: '30px 30px'
        }}
      ></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-royal/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Meet Your Guide Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Visual card placeholder representing Mark */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] bg-gradient-to-b from-[#112d46] to-brand-navy border border-white/10 rounded-sm p-6 flex flex-col justify-end overflow-hidden shadow-2xl group">
              {/* Decorative design blueprint lines */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[#071C2F]/40 pointer-events-none"></div>
              
              {/* Minimalist vector illustration representation of coach */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none text-brand-royal">
                <Quote className="w-48 h-48" />
              </div>

              <div className="relative z-10 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-[10px] font-mono uppercase tracking-wider mb-3 font-bold">
                  <Award className="w-3.5 h-3.5" />
                  FOUNDER & MENTOR
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase">Mark Peebles</h3>
                <p className="text-xs text-gray-400 font-sans mt-1">Real Estate Leader, Coach, and Podcast Host</p>
                
                {/* Mini stat */}
                <div className="mt-4 pt-4 border-t border-white/5 flex gap-4 text-[10px] font-mono text-gray-500">
                  <div>
                    <span>ECOSYSTEM:</span>
                    <span className="text-white block font-sans font-bold">ULTIMATE SUCCESS</span>
                  </div>
                  <div>
                    <span>METHOD:</span>
                    <span className="text-white block font-sans font-bold">INTENT-BASED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy details */}
          <div className="lg:col-span-7 text-left flex flex-col items-start justify-center">
            <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
              MEET YOUR GUIDE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-6 uppercase text-white">
              Meet Your Guide: Mark Peebles
            </h2>
            <p className="text-white/80 font-sans text-base leading-relaxed mb-6">
              Mark Peebles created the <strong className="text-white font-semibold">Ultimate Success ecosystem</strong> to help realtors think bigger, build stronger, and operate with more clarity.
              <br /><br />
              His focus is simple: <strong>Help agents stop treating real estate like random activity and start building it like a business.</strong>
              <br /><br />
              Through the course, live sessions, podcast conversations, diagnostic worksheets, and the preloaded Realtor Hub CRM, Mark gives agents access to the exact guidance, scripts, and structures many wish they had when they first started.
            </p>

            {/* Premium Quote Callout */}
            <div className="border-l-4 border-brand-orange pl-5 py-2 mb-2 bg-[#0b243b]/40 border-r border-y border-white/10 rounded-sm max-w-xl text-left">
              <p className="text-lg font-display font-bold uppercase text-white italic leading-tight">
                “Real estate becomes more predictable when your activity becomes visible.”
              </p>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1 block">— Mark Peebles</span>
            </div>
          </div>

        </div>

        {/* Student Wins / Testimonials Grid */}
        <div id="testimonials-section">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
              STUDENT WINS & FEEDBACK
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase">
              Built For Agents Who Want More Than Motivation
            </h3>
            <p className="text-gray-400 font-sans text-sm mt-2">
              As agents begin implementing the framework, this section highlights community wins, student feedback, and real-life implementation stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((test, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b243b]/40 border border-white/5 rounded-sm p-6 flex flex-col justify-between hover:border-white/10 transition-all relative shadow-lg"
              >
                <div>
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4 text-brand-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed mb-6 italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand-royal flex items-center justify-center font-display font-bold text-sm text-brand-light border border-brand-light/20">
                    {test.avatar}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs md:text-sm text-white">{test.name}</h5>
                    <span className="text-[10px] text-gray-500 font-sans block">{test.role}</span>
                    <span className="inline-block mt-1 text-[9px] font-mono uppercase bg-brand-light/10 text-brand-light px-1.5 py-0.5 rounded-sm">
                      {test.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Proof Types placeholder block */}
          <div className="bg-[#051625] rounded-sm border border-white/5 p-4 mt-6 text-center text-xs font-mono text-gray-500">
            METRIC VERIFIED • UPDATED WEEKLY WITH STUDENT WIN SUBMISSIONS
          </div>
        </div>

      </div>
    </section>
  );
}
