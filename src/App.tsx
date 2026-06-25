/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Compass, Menu, X, ArrowRight, Shield, Award, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular component imports
import HeroSection from './components/HeroSection';
import BusinessScorecard from './components/BusinessScorecard';
import RealtorHubTour from './components/RealtorHubTour';
import ScriptVault from './components/ScriptVault';
import TimelineSection from './components/TimelineSection';
import PricingValueStack from './components/PricingValueStack';
import MentorSection from './components/MentorSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import ExitIntentModal from './components/ExitIntentModal';
import ThankYouModal from './components/ThankYouModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from './components/Footer';

export default function App() {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleJoinFramework = () => {
    setIsThankYouOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-navy font-sans antialiased text-white selection:bg-brand-orange selection:text-white">
      
      {/* 1. Header / Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            id="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 flex flex-col justify-between shrink-0 transition-transform group-hover:scale-105">
              <div className="h-1 bg-[#F47A1F] w-1/2"></div>
              <div className="h-1 bg-[#57B7E8] w-full"></div>
              <div className="h-1 bg-[#1F5F86] w-3/4"></div>
            </div>
            <div>
              <span className="text-white font-black tracking-tight text-lg block font-display leading-none uppercase">ULTIMATE <span className="text-[#57B7E8]">SUCCESS</span></span>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mt-1">100 Days to $100K</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/70 font-semibold">
            <button onClick={() => scrollToSection('scorecard-section')} className="hover:text-brand-orange transition-colors cursor-pointer">
              Audit
            </button>
            <button onClick={() => scrollToSection('realtor-hub-bonus')} className="hover:text-brand-orange transition-colors cursor-pointer">
              Realtor Hub CRM
            </button>
            <button onClick={() => scrollToSection('script-vault-section')} className="hover:text-brand-orange transition-colors cursor-pointer">
              Script Vault
            </button>
            <button onClick={() => scrollToSection('timeline-section')} className="hover:text-brand-orange transition-colors cursor-pointer">
              Roadmap
            </button>
            <button onClick={() => scrollToSection('pricing-value-stack')} className="hover:text-brand-orange transition-colors cursor-pointer">
              Pricing
            </button>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="header-cta-btn"
              onClick={handleJoinFramework}
              className="px-6 py-2.5 bg-brand-orange text-white text-xs font-bold rounded-sm border-b-2 border-black/20 hover:bg-[#e06910] transition-colors uppercase font-mono tracking-wider cursor-pointer"
            >
              JOIN THE FRAMEWORK
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/5 bg-[#051625] px-6 py-6 overflow-hidden"
            >
              <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-gray-400">
                <button onClick={() => scrollToSection('scorecard-section')} className="text-left py-2 border-b border-white/5 hover:text-white cursor-pointer">
                  Business Audit
                </button>
                <button onClick={() => scrollToSection('realtor-hub-bonus')} className="text-left py-2 border-b border-white/5 hover:text-white cursor-pointer">
                  Realtor Hub CRM
                </button>
                <button onClick={() => scrollToSection('script-vault-section')} className="text-left py-2 border-b border-white/5 hover:text-white cursor-pointer">
                  Script Vault
                </button>
                <button onClick={() => scrollToSection('timeline-section')} className="text-left py-2 border-b border-white/5 hover:text-white cursor-pointer">
                  100-Day Roadmap
                </button>
                <button onClick={() => scrollToSection('pricing-value-stack')} className="text-left py-2 border-b border-white/5 hover:text-white cursor-pointer">
                  Value Stack & Pricing
                </button>
                <button
                  id="mobile-nav-join"
                  onClick={handleJoinFramework}
                  className="w-full bg-brand-orange text-white text-center font-sans py-3.5 rounded-sm flex items-center justify-center gap-1.5 font-bold uppercase tracking-wide cursor-pointer shadow-md"
                >
                  JOIN THE FRAMEWORK
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. Hero Section */}
      <HeroSection 
        onJoinClick={handleJoinFramework} 
        onSeeIncludedClick={() => scrollToSection('pricing-value-stack')} 
        onOpenQuizClick={() => scrollToSection('scorecard-section')}
      />

      {/* 3. Pain / Self-Recognition & Diagnostics Scorecard Section */}
      <BusinessScorecard onJoinClick={handleJoinFramework} />

      {/* 4. Reframe: Career to Business Highlight Card */}
      <section className="py-20 bg-brand-navy border-b border-white/10 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-royal/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 text-left">
            <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
              THE ENTREPRENEUR TRANSFORMATION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-tight tracking-tight mb-6 uppercase">
              Real Estate Is Not Just A Career. <br />
              <span className="text-brand-orange">It Is A Business.</span>
            </h2>
            <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed mb-8">
              The agents who grow do not only chase the next commission. They build assets around their license. They stop operating from memory and start building with intention. 
              <br /><br />
              The 100 Days to $100K Framework guides you in constructing these core entrepreneurial assets:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
              {[
                'Centralized CRM Database',
                'Visual Follow-Up Pipelines',
                'Active Referral Networks',
                'Hyper-Local Content Engines',
                'Pre-Scripted Dialogues',
                'Weekly Execution Sprints',
                'Transaction Handbooks',
                'Advanced AI Prompts',
                'Mutual Vendor Circles'
              ].map((asset, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm font-sans text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                  {asset}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0b243b] border border-white/10 rounded-lg p-6 md:p-8 text-left relative flex flex-col justify-between shadow-2xl">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-gray-500">MAPPING: AGENT → ENTREPRENEUR</div>
            
            <div className="mb-6">
              <span className="font-mono text-[10px] text-brand-orange uppercase block mb-1 font-bold">Step 01: License</span>
              <h4 className="font-display font-black text-sm text-white mb-2 uppercase">The Licensed Agent</h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Operates entirely from memory. Reacts to random inbox fires. Wings consultations and pricing negotiations. Struggles with unstable monthly commission cycles.
              </p>
            </div>

            <div className="mb-6 border-t border-white/5 pt-6">
              <span className="font-mono text-[10px] text-brand-light uppercase block mb-1 font-bold">Step 02: Launch</span>
              <h4 className="font-display font-black text-sm text-white mb-2 uppercase">The Systematic Builder</h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Organizes clients in visual CRM pipelines. Employs scheduled daily lead-generation blocks. Handles objections with rehearsed script confidence.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6">
              <span className="font-mono text-[10px] text-brand-orange uppercase block mb-1 font-bold">Step 03: Growth</span>
              <h4 className="font-display font-black text-sm text-white mb-2 uppercase">The Real Estate Entrepreneur</h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Leverages automated follow-up sequences. Commands local authority via targeted local media and content engines. Tracks metrics systematically for stable quarterly growth.
              </p>
            </div>

            <button
              id="transformation-cta"
              onClick={handleJoinFramework}
              className="mt-8 px-6 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase font-mono tracking-wider rounded-sm border-b-2 border-black/20 hover:bg-[#e06910] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              Start Your 100 Days
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Introduce Offer Section */}
      <section className="py-20 bg-brand-navy border-b border-white/10 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
            THE PLATFORM ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-4 uppercase">
            Introducing The 100 Days to $100K Framework
          </h2>
          <p className="text-white/80 font-sans text-base md:text-lg max-w-3xl mx-auto mb-8">
            A practical, sequential real estate business growth system designed for new and growing agents ready to stop guessing and start building. 
            <br /><br />
            This is not just another informational real estate course. It is a structured framework that guides your daily execution, helps you speak with confidence, organizes your databases, and automates your nurtures so you can run an enterprise with clarity.
          </p>

          <div className="bg-[#0b243b] border border-brand-orange/20 rounded-xl p-5 inline-flex items-start gap-3 text-left max-w-2xl mx-auto">
            <Shield className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              <strong className="text-white block font-display mb-0.5">Compliant Language Pledge:</strong>
              The name reflects our sequential planning and curriculum goal. Financial outcomes are never guaranteed. Results depend completely on consistency, implementation, skills, work ethic, and housing market situations.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Realtor Hub CRM Platform Interactive Tour Section */}
      <RealtorHubTour />

      {/* 7. Interactive Script Vault Section */}
      <ScriptVault />

      {/* 8. Paid Circle Community Section */}
      <section className="py-20 bg-[#081e32] border-b border-white/10 relative overflow-hidden text-white">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-5 flex flex-col justify-center text-left bg-brand-navy border border-white/10 rounded-lg p-6 md:p-8 relative shadow-2xl">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-500">MEMBER ACCESS ONLY</div>
            
            <div className="inline-flex items-center gap-1.5 text-xs font-display font-black text-brand-light mb-4 uppercase">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              Ultimate Success Circle Community
            </div>

            <div className="flex flex-col gap-3 text-xs md:text-sm font-sans text-gray-300">
              {[
                'Weekly CRM Setup & Audits',
                'Live Implementation Walkthroughs',
                'Script Roleplay & Objection Training',
                'Hyper-Local Marketing Sprints',
                'Advanced AI Prompts Downloads',
                'Follow-Up Cadence Troubleshooting',
                'New Playbook & Template Releases',
                'Mark Peebles Coaching Q&A Hours'
              ].map((comm, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0"></div>
                  <span>{comm}</span>
                </div>
              ))}
            </div>

            <button
              id="community-join-cta"
              onClick={handleJoinFramework}
              className="mt-8 px-6 py-3.5 bg-brand-orange text-white text-xs font-bold uppercase font-mono tracking-wider rounded-sm border-b-2 border-black/20 hover:bg-[#e06910] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              Join Private Mastermind
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-7 text-left flex flex-col items-start justify-center">
            <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
              SUPPORT & IMPLEMENTATION LAYER
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white leading-tight mb-6 uppercase">
              You Do Not Have To Build Alone.
            </h2>
            <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed mb-6">
              Inside the private <strong className="text-white font-semibold">Ultimate Success Circle community</strong>, members receive ongoing support, script training, CRM audits, marketing feedback, and direct coaching access to Mark.
              <br /><br />
              This is not an idle discussion group. It is an active business laboratory where you see what is currently working in local markets, roleplay commission objections with peers, and receive the daily accountability required to implement the curriculum.
            </p>
          </div>

        </div>
      </section>

      {/* 9. Target Audience Section (Who This Is For) */}
      <section className="py-20 bg-brand-navy border-b border-white/10 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
              AUDIENCE MATCHING
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
              Is This Framework Configured For You?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Who It Is For */}
            <div className="bg-[#0b243b] border border-white/10 rounded-lg p-6 md:p-8 text-left flex flex-col justify-between shadow-xl">
              <div>
                <h4 className="font-display font-black text-lg text-brand-light mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-5 h-5 text-brand-light shrink-0" />
                  This Is Configured For You If...
                </h4>
                <div className="flex flex-col gap-4 text-xs md:text-sm font-sans text-gray-300">
                  {[
                    'You are newly licensed and want a structured business playbook.',
                    'You have your license but do not feel launched yet.',
                    'You are tired of waking up and guessing who to contact every morning.',
                    'You want reliable, preloaded CRM pipelines and reminders.',
                    'You want word-for-word templates to guide consultation conversations.',
                    'You want to deploy advanced AI prompts for fast local analysis.',
                    'You need a robust, non-hype community to provide accountability.',
                    'You are ready to treat your real estate career like a real business.'
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0 mt-1.5"></div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Who It Is NOT For */}
            <div className="bg-[#0b243b] border border-white/10 rounded-lg p-6 md:p-8 text-left flex flex-col justify-between shadow-xl">
              <div>
                <h4 className="font-display font-black text-lg text-brand-orange mb-6 uppercase tracking-wider flex items-center gap-2">
                  <X className="w-5 h-5 text-brand-orange shrink-0" />
                  This Is NOT For You If...
                </h4>
                <div className="flex flex-col gap-4 text-xs md:text-sm font-sans text-gray-300">
                  {[
                    'You are looking for guaranteed checks without consistent daily action.',
                    'You do not want to practice or rehearse phone/consultation dialogues.',
                    'You refuse to log contacts or configure simple CRM databases.',
                    'You want passive "get-rich-quick" loops instead of solid business structure.',
                    'You are not willing to dedicate focus over the next 100 days.',
                    'You prefer scattered sticky notes over organized pipeline models.'
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. The 100-Day Sequential Timeline Roadmaps */}
      <TimelineSection />

      {/* 11. Mentor Mark Authority Biography & Wins */}
      <MentorSection />

      {/* 12. Interactive ROI pricing Calculator & Value Stack */}
      <PricingValueStack onJoinClick={handleJoinFramework} />

      {/* 13. FAQ Accordion Grid */}
      <FAQSection />

      {/* 14. Premium Final closing card */}
      <FinalCTA onJoinClick={handleJoinFramework} />

      {/* 15. Standard Footer and Compliance Legal logs */}
      <Footer />

      {/* INTERACTIVE POPUP / OVERLAY FLOWS */}
      {/* (A) Checkout / Thank-You onboarding Checklist simulator */}
      <ThankYouModal isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} />

      {/* (B) Exit Intent Diagnostic Popup */}
      <ExitIntentModal onScorecardScrollTrigger={() => scrollToSection('scorecard-section')} />

      {/* (C) Sticky Mobile CTA action bar */}
      <StickyMobileCTA onJoinClick={handleJoinFramework} />

    </div>
  );
}
