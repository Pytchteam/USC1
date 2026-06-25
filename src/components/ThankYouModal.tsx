/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X, Check, Loader2, Sparkles, Shield, ArrowRight, BookOpen, Laptop, Compass, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ThankYouProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouProps) {
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  useEffect(() => {
    if (!isOpen) {
      setLoadingStep(0);
      return;
    }

    // Sequence loading states for simulated checkout
    const timer1 = setTimeout(() => setLoadingStep(1), 800); // Deploying CRM
    const timer2 = setTimeout(() => setLoadingStep(2), 1600); // Granting access
    const timer3 = setTimeout(() => setLoadingStep(3), 2400); // Completed

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isOpen]);

  const toggleCheck = (id: number) => {
    setCheckedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-brand-navy/90 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0b243b] border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full relative overflow-hidden text-white text-center">
        {/* Decorative background grid and spotlight */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50" x2="600" y2="50" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="150" x2="600" y2="150" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-royal/20 rounded-full filter blur-[100px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          id="thank-you-close"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer z-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOADING ANIMATION STATE */}
        {loadingStep < 3 && (
          <div className="py-12 flex flex-col items-center justify-center gap-6 min-h-[350px]">
            <Loader2 className="w-12 h-12 text-brand-orange animate-spin" />
            <div>
              <h3 className="font-display font-bold text-lg">
                {loadingStep === 0 && 'Securing Your Enrollment Seat...'}
                {loadingStep === 1 && 'Deploying Your Preloaded Realtor Hub CRM...'}
                {loadingStep === 2 && 'Enrolling In The Ultimate Success Circle...'}
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-1.5">
                {loadingStep === 0 && 'Verifying payment parameters...'}
                {loadingStep === 1 && 'Integrating lead follow-up pipelines & CRM databases...'}
                {loadingStep === 2 && 'Registering community permissions and coach schedules...'}
              </p>
            </div>
            
            {/* Steps indicator bar */}
            <div className="flex gap-2 items-center mt-4">
              {[0, 1, 2].map((s) => (
                <div 
                  key={s} 
                  className={`w-3.5 h-1.5 rounded-full transition-colors ${loadingStep >= s ? 'bg-brand-orange' : 'bg-gray-800'}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* COMPLETED THANK YOU STATE */}
        {loadingStep === 3 && (
          <div className="text-left flex flex-col gap-5 animate-fade-in">
            {/* Visual Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-xl bg-brand-light/10 border border-brand-light/30 flex items-center justify-center text-brand-light">
                <Sparkles className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-brand-light uppercase tracking-wider block">Enrollment Confirmed</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white">Welcome to the next 100 Days.</h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed">
              We have dispatched your activation instructions. Your journey from licensed agent to systematic entrepreneur commences now. Please review your launch roadmap:
            </p>

            {/* Checklist of next steps */}
            <div className="flex flex-col gap-3 py-2">
              {[
                { id: 1, title: 'Check Your Registered Email Inbox', desc: 'Retrieve your receipt, course logins, and secure CRM installation links.' },
                { id: 2, title: 'Access The 100-Day Course Portal', desc: 'Log in to view Module 1 and download your printable business scorecards.' },
                { id: 3, title: 'Activate Your Realtor Hub Trial Account', desc: 'Claim your 30-day preloaded CRM dashboard and connect your smartphone.' },
                { id: 4, title: 'Join The Ultimate Success Circle Community', desc: 'Enter the private mastermind channel to coordinate live script walkthroughs.' },
                { id: 5, title: 'Submit Your Agent Business Scorecard Report', desc: 'Deliver your initial diagnostic score to Mark and your mastermind partners.' },
                { id: 6, title: 'Begin Module 1: The Entrepreneur Mindset Shift', desc: 'Commence Day 1. Start building with system structure.' }
              ].map((step) => {
                const isChecked = checkedSteps[step.id];
                return (
                  <button
                    key={step.id}
                    id={`onboarding-step-btn-${step.id}`}
                    onClick={() => toggleCheck(step.id)}
                    className="w-full text-left p-3.5 rounded-xl border border-white/5 hover:border-white/15 bg-white/[0.02] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${isChecked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-500 hover:border-brand-light'}`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h4 className={`font-display font-bold text-xs md:text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-white'}`}>
                        0{step.id}. {step.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-sans mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulated actions triggers row */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                <Shield className="w-4 h-4 text-brand-royal" />
                SYSTEM ACTIVE • ACCREDITED
              </div>
              <button
                id="onboarding-complete-btn"
                onClick={onClose}
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/85 text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                Launch Course Dashboard
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
