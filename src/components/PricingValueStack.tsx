/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { VALUE_STACK_ITEMS } from '../data';
import { ArrowRight, Check, Shield, HelpCircle, AlertCircle, TrendingUp, DollarSign } from 'lucide-react';

interface PricingProps {
  onJoinClick: () => void;
}

export default function PricingValueStack({ onJoinClick }: PricingProps) {
  // ROI Calculator states
  const [avgCommission, setAvgCommission] = useState<number>(8000);
  const [lostDeals, setLostDeals] = useState<number>(4);

  const revenueLost = avgCommission * lostDeals;
  const costOfFramework = 997;
  const roiMultiplier = Math.round((avgCommission / costOfFramework) * 10) / 10;

  return (
    <section id="pricing-value-stack" className="py-20 bg-brand-offwhite text-brand-dark-text border-b border-gray-200 relative overflow-hidden">
      {/* Background blueprint detail */}
      <div className="absolute bottom-0 right-0 w-80 h-80 border-b border-r border-brand-royal/10 pointer-events-none rounded-br-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
            OFFER VALUE SUMMARY
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-brand-navy mb-4 uppercase">
            Everything You Need To Launch Systematic Activity
          </h2>
          <p className="text-gray-600 font-sans text-base">
            This is not just a digital course. It is an end-to-end realtor business construction toolkit designed to move you from an unstructured licensed agent to an entrepreneur.
          </p>
        </div>

        {/* Value Stack Table list */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-2xl p-6 md:p-8 mb-16">
          <h3 className="text-lg font-display font-black text-brand-navy mb-6 pb-3 border-b border-gray-100 uppercase">
            Framework Curriculum & Bonus Breakdown
          </h3>
          <div className="flex flex-col gap-4">
            {VALUE_STACK_ITEMS.map((item, idx) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50 border border-gray-150 rounded-sm hover:border-brand-royal/30 transition-all text-xs md:text-sm text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-brand-royal/10 text-brand-royal flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="text-brand-navy block font-display uppercase">{item.title}</strong>
                    <p className="text-gray-500 font-sans text-xs mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:justify-end">
                  <span className="font-mono text-gray-400 line-through text-xs">{item.value}</span>
                  <span className="font-mono text-brand-royal font-bold uppercase text-[10px] bg-brand-royal/10 px-2 py-0.5 rounded-sm">Included</span>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value Summary Box */}
          <div className="mt-8 pt-6 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm font-sans">
            <div className="text-left">
              <span className="text-gray-500 block">COMBINED RETAIL VALUE:</span>
              <strong className="text-gray-400 line-through font-mono text-lg font-bold">$5,077</strong>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-brand-orange font-mono font-bold uppercase tracking-wider block">irresistible business launch offer:</span>
              <p className="text-brand-navy font-display font-black uppercase text-base md:text-lg">
                Course Enrollment + 30-Day CRM Suite Access
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic ROI Calculator Tool */}
        <div className="bg-brand-navy text-white rounded-sm border border-white/10 shadow-2xl p-6 md:p-10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Background blueprint details */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
              backgroundSize: '30px 30px'
            }}
          ></div>
          
          {/* Left Calculator Sliders */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
            <div>
              <span className="font-mono text-xs text-brand-orange uppercase block tracking-widest mb-1 font-bold">Interactive Diagnostic</span>
              <h3 className="text-2xl font-display font-black text-white uppercase">Realtor Opportunity Leak Calculator</h3>
              <p className="text-xs text-gray-400 font-sans mt-1">
                Analyze how much commission your real estate business is leaking from weak follow-ups and loose schedules.
              </p>
            </div>

            {/* Slider 1: Commission */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <span className="text-gray-400 uppercase">Average Local Deal Commission:</span>
                <span className="text-brand-light font-bold">${avgCommission.toLocaleString()}</span>
              </div>
              <input 
                id="calc-commission-slider"
                type="range" 
                min={4000} 
                max={25000} 
                step={500} 
                value={avgCommission}
                onChange={(e) => setAvgCommission(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-light"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                <span>$4k</span>
                <span>$25k+</span>
              </div>
            </div>

            {/* Slider 2: Lost Deals */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <span className="text-gray-400 uppercase">Estimated Leads Lost Per Year to Loose Follow-Up:</span>
                <span className="text-brand-orange font-bold">{lostDeals} deal{lostDeals > 1 ? 's' : ''}</span>
              </div>
              <input 
                id="calc-deals-slider"
                type="range" 
                min={1} 
                max={12} 
                step={1} 
                value={lostDeals}
                onChange={(e) => setLostDeals(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                <span>1 deal</span>
                <span>12 deals</span>
              </div>
            </div>
          </div>

          {/* Right Calculated Results ring */}
          <div className="lg:col-span-5 bg-[#051625] rounded-sm border border-white/5 p-6 flex flex-col justify-between h-full relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-brand-orange font-bold uppercase">
                <TrendingUp className="w-4 h-4 text-brand-orange" />
                ANNUAL REVENUE OPPORTUNITY LOSS
              </div>

              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">${revenueLost.toLocaleString()}</span>
                <span className="text-xs text-gray-400 font-mono">/ year</span>
              </div>

              <p className="text-xs text-gray-300 font-sans leading-relaxed mb-6 text-left">
                That is the capital leaking out of your database because you are operating from memory. You do not need more lead motivation. You need a centralized follow-up structure.
              </p>
            </div>

            <div className="bg-[#0b243b] rounded-sm p-3 border border-white/5 text-xs text-gray-400 font-sans flex flex-col gap-1.5 text-left">
              <div className="flex justify-between">
                <span>Cost of the 100-Day Framework:</span>
                <span className="font-mono text-white font-semibold">${costOfFramework}</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-1.5">
                <span>ROI of Recovering Just 1 Deal:</span>
                <span className="font-mono text-brand-light font-bold">{roiMultiplier}x Return</span>
              </div>
            </div>
          </div>

        </div>

        {/* Main Pricing Conversion Card */}
        <div className="max-w-xl mx-auto bg-white border-2 border-brand-royal rounded-sm shadow-2xl p-6 md:p-10 text-center relative overflow-hidden">
          {/* Best value tag */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 bg-brand-royal text-white text-[10px] font-mono uppercase px-4 py-1.5 rounded-b-sm tracking-wider font-bold">
            Most Popular System Offer
          </div>

          <h3 className="text-xl font-display font-black text-brand-navy mt-4 mb-2 uppercase">The 100 Days to $100K Framework</h3>
          <p className="text-xs text-gray-500 font-sans mb-6">Complete business curriculum, script repository, templates, and preloaded CRM suite.</p>

          <div className="mb-6 flex justify-center items-baseline gap-1.5">
            <span className="text-5xl font-display font-black text-brand-navy tracking-tight">$997</span>
            <span className="text-xs text-gray-400 font-mono">One-Time Enrollment</span>
          </div>

          {/* Bonuses bullet points */}
          <div className="text-left flex flex-col gap-3 mb-8 text-xs md:text-sm border-t border-b border-gray-100 py-6">
            {[
              'Full 100 Days to $100K Framework Course ($1,997 value)',
              'Word-for-Word Realtor Script Vault ($497 value)',
              '35 Advanced AI Prompts for Realtors ($297 value)',
              'Buyer/Seller Conversation Builders ($197 value)',
              '30 Days of Realtor Hub CRM Access ($297 value)',
              '30 Days of Private Circle Community Access ($197 value)'
            ].map((bonus, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                <span className="text-gray-700 font-sans">{bonus}</span>
              </div>
            ))}
          </div>

          <button
            id="pricing-card-join-cta"
            onClick={onJoinClick}
            className="w-full bg-brand-orange hover:bg-[#e06910] text-white font-mono text-sm font-bold uppercase tracking-wider py-4 rounded-sm border-b-2 border-black/20 flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-colors"
          >
            <span>Start Your 100 Days Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-gray-400 mt-4 font-sans">
            Start today. Build with structure. Use the tools. Follow the process.
          </p>

          <div className="flex justify-center items-center gap-2 mt-6 text-[10px] text-gray-500 font-mono">
            <Shield className="w-4 h-4 text-brand-royal" />
            SECURE CHECKOUT • NO AUTO-RENEWING CONTRACTS
          </div>
        </div>

        {/* Regulatory disclaimer notes */}
        <div className="max-w-2xl mx-auto text-center text-[10px] text-gray-500 font-mono mt-8 leading-relaxed">
          The $100K name reflects the framework\'s conceptual mindset, business plan, and curriculum goals. Enrollment does not guarantee or represent a promise of income. Individual results depend completely on consistent daily execution, local market dynamics, skill implementation, and persistence.
        </div>

      </div>
    </section>
  );
}
