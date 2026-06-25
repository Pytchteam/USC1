/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Mail, Phone, Compass, Copyright, Globe } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#051625] text-gray-400 py-16 border-t border-white/5 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Left Branding Panel (Column) */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 text-white mb-4">
            <Compass className="w-5 h-5 text-brand-orange animate-pulse" />
            <span className="font-display font-bold text-base tracking-wider uppercase">ULTIMATESUCCESS</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            A real estate growth ecosystem led by Mark Peebles, built to help realtors shift from agent to entrepreneur with structure, scripts, and preloaded CRM systems.
          </p>
          <div className="flex flex-col gap-2 font-mono text-[10px]">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-royal" />
              <span>team@ultimatesuccess.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-royal" />
              <span>www.ultimatesuccess.com</span>
            </div>
          </div>
        </div>

        {/* Middle Quick Links Panel (Column) */}
        <div className="md:col-span-4 flex flex-col items-start md:items-center text-left md:text-center">
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-4 font-bold">SYSTEM MAP</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button onClick={() => handleScrollTo('scorecard-section')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">
                Business Diagnostic Audit
              </button>
              <button onClick={() => handleScrollTo('realtor-hub-bonus')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">
                Realtor Hub CRM Tour
              </button>
              <button onClick={() => handleScrollTo('script-vault-section')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">
                Realtor Script Vault
              </button>
              <button onClick={() => handleScrollTo('timeline-section')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">
                100-Day Sprints Path
              </button>
              <button onClick={() => handleScrollTo('pricing-value-stack')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">
                Value Stack & Pricing
              </button>
            </div>
          </div>
        </div>

        {/* Right SEO & Compliance Panel (Column) */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-4 font-bold">SEO META DATA</h4>
          <div className="bg-white/5 border border-white/5 rounded-lg p-3.5 flex flex-col gap-1.5 text-[10px] text-gray-500 font-mono">
            <div>
              <span className="text-gray-400 block font-semibold">SEO REGISTERED TITLE:</span>
              <span className="text-brand-light block">100 Days to $100K Framework | Realtor Business Growth System</span>
            </div>
            <div className="border-t border-white/5 pt-1.5 mt-1">
              <span className="text-gray-400 block font-semibold">META DESCRIPTION:</span>
              <p className="text-gray-500 text-[9px] leading-relaxed">
                A practical 100-day framework for new and growing realtors to build structure, scripts, AI tools, follow-up systems, marketing resources, CRM support, and community guidance.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Compliance / Earnings Legal Notice footer */}
      <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col gap-4 text-[10px] text-gray-500 text-left leading-relaxed">
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-sans">Regulatory & Earnings Disclosure:</strong>
            The term "100 Days to $100K" is a curriculum framework, business modeling concept, and sales planning framework. It is not an income guarantee, financial promise, or representation of earnings potential. Your financial success depends completely on your individual work ethic, professional experience, persistence, skill development, consistency, local housing inventory, client negotiations, and general microeconomic market conditions.
          </div>
        </div>
        <p className="font-sans">
          The Ultimate Success Ecosystem is not affiliated with, endorsed by, or partnered with any specific local real estate brokerage or regional MLS. All trademarks, MLS listings, logo assets, or platform citations (e.g., Meta, Instagram, WhatsApp, ChatGPT) remain the exclusive intellectual property of their respective trademark holders.
        </p>
        <div className="flex justify-between items-center text-[9px] font-mono border-t border-white/5 pt-4 mt-2">
          <span className="flex items-center gap-1">
            <Copyright className="w-3 h-3" />
            2026 Ultimate Success Systems • Mark Peebles Mentor Group.
          </span>
          <span>CRAFTED IN ACCORDANCE WITH REALTOR DESIGN PRINCIPLES</span>
        </div>
      </div>
    </footer>
  );
}
