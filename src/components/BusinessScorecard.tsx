/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SCORECARD_QUESTIONS } from '../data';
import { Shield, ArrowRight, CheckCircle2, RotateCcw, AlertTriangle, AlertCircle, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScorecardProps {
  onJoinClick: () => void;
}

export default function BusinessScorecard({ onJoinClick }: ScorecardProps) {
  const [currentStep, setCurrentStep] = useState<-1 | number>(-1); // -1 is intro
  const [answers, setAnswers] = useState<Record<string, { score: number; text: string; feedback: string }>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const handleStart = () => {
    setCurrentStep(0);
    setAnswers({});
    setQuizFinished(false);
  };

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    const question = SCORECARD_QUESTIONS[currentStep as number];
    const option = question.options[optionIndex];
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        score: option.score,
        text: option.text,
        feedback: option.feedback
      }
    }));

    if (currentStep < SCORECARD_QUESTIONS.length - 1) {
      setCurrentStep(prev => (prev as number) + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => (prev as number) - 1);
    } else if (currentStep === 0) {
      setCurrentStep(-1);
    }
  };

  const calculateResults = () => {
    let score = 0;
    const maxScore = SCORECARD_QUESTIONS.length * 3;
    const leaks: string[] = [];
    
    Object.entries(answers).forEach(([key, val]) => {
      const typedVal = val as { score: number; text: string; feedback: string };
      score += typedVal.score;
      if (typedVal.score < 3) {
        const matchingQuestion = SCORECARD_QUESTIONS.find(q => q.id === key);
        if (matchingQuestion) {
          leaks.push(matchingQuestion.category);
        }
      }
    });

    const percentage = Math.round((score / maxScore) * 100);
    let grade = 'C';
    let status = 'Loose Foundation';
    let recommendation = '';

    if (percentage >= 85) {
      grade = 'A';
      status = 'Systematic Builder';
      recommendation = 'You have a healthy, structured business rhythm! Your primary opportunity is optimizing through advanced CRM automations, scaling with AI prompts, and training your referral partners to elevate your high-performing systems.';
    } else if (percentage >= 60) {
      grade = 'B';
      status = 'Sporadic Hustler';
      recommendation = 'You have ambition and sales drive, but you lack predictable infrastructure. Your business is likely experiencing high-income months followed by sharp zero-dollar quarters. You need to stop operating from memory, organize your database pipelines, and automate your follow-ups.';
    } else {
      grade = 'F';
      status = 'High-Risk Leakage';
      recommendation = 'Your business is in reactive survival mode. Relying on passive referrals, memory-based follow-ups, and scattered notes means you are losing up to 80% of client opportunities. You need to establish a structured, non-negotiable daily pipeline rhythm immediately.';
    }

    return {
      score,
      maxScore,
      percentage,
      grade,
      status,
      leaks,
      recommendation
    };
  };

  const results = quizFinished ? calculateResults() : null;

  return (
    <section id="scorecard-section" className="py-20 bg-brand-offwhite text-brand-dark-text border-b border-gray-200 relative overflow-hidden">
      {/* Visual blueprint accents */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-brand-royal/10 pointer-events-none rounded-tr-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 border-l border-b border-brand-royal/10 pointer-events-none rounded-bl-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Intro View */}
        {currentStep === -1 && !quizFinished && (
          <div className="text-center flex flex-col items-center">
            <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
              Self-Recognition Audit
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-brand-navy mb-6 max-w-2xl leading-tight uppercase">
              Most Realtors Are Not Lazy. <br />
              <span className="text-brand-royal">They Are Unstructured.</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed max-w-2xl mb-8">
              A lot of agents enter real estate with ambition, excitement, and a license — but no clear daily rhythm for building the business. They find themselves asking: <em>Who should I call today? What should I post? How do I follow up without sounding pushy?</em>
              <br /><br />
              That is not a talent problem. <strong>That is a structure problem.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl w-full mb-8">
              {[
                'Who should I call today?',
                'What should I post?',
                'How do I follow up without being pushy?',
                'Where is my next client coming from?',
                'How do I turn chats into meetings?',
                'How do I stop starting over every month?'
              ].map((q, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-gray-200 rounded-sm shadow-sm text-sm text-gray-700">
                  <span className="text-brand-orange font-bold font-mono">?</span>
                  {q}
                </div>
              ))}
            </div>

            <div className="bg-brand-navy text-white rounded-sm p-5 mb-8 max-w-xl w-full border border-brand-royal/10 shadow-md">
              <span className="text-brand-orange font-mono text-xs uppercase tracking-widest block mb-1 font-bold">Core Positioning</span>
              <p className="font-display font-bold uppercase text-lg leading-tight">
                "A license gives you permission. A system gives you direction."
              </p>
            </div>

            <button
              id="start-audit-btn"
              onClick={handleStart}
              className="px-6 py-3.5 bg-brand-navy text-white text-xs font-bold uppercase font-mono tracking-wider rounded-sm border-b-2 border-black/20 hover:bg-brand-royal transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              Start Free Business Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Active Quiz Steps */}
        {currentStep >= 0 && !quizFinished && (
          <div className="bg-white border border-gray-200 rounded-sm shadow-2xl p-6 md:p-10 text-left">
            {/* Header / Progress */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <button
                id="audit-prev-btn"
                onClick={handlePrev}
                className="text-xs text-gray-400 hover:text-brand-royal font-mono font-bold uppercase flex items-center gap-1 cursor-pointer"
              >
                ← Back
              </button>
              <span className="font-mono text-xs text-brand-royal font-bold uppercase tracking-wider">
                Question {currentStep + 1} of {SCORECARD_QUESTIONS.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full bg-brand-royal transition-all duration-300"
                style={{ width: `${((currentStep + 1) / SCORECARD_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Text */}
            <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase mb-2 font-bold">
              Category: {SCORECARD_QUESTIONS[currentStep].category}
            </h3>
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-navy mb-8 leading-snug">
              {SCORECARD_QUESTIONS[currentStep].question}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-4">
              {SCORECARD_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  id={`audit-opt-${currentStep}-${idx}`}
                  onClick={() => handleAnswerSelect(SCORECARD_QUESTIONS[currentStep].id, idx)}
                  className="w-full text-left p-5 rounded-sm border border-gray-200 hover:border-brand-royal bg-gray-50 hover:bg-brand-royal/5 font-sans text-sm md:text-base text-gray-700 transition-all cursor-pointer shadow-sm relative group flex items-start gap-4 animate-none"
                >
                  <span className="w-6 h-6 rounded-sm border-2 border-gray-300 group-hover:border-brand-royal flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    {option.text}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results View */}
        {quizFinished && results && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-sm shadow-2xl p-6 md:p-10 text-left"
          >
            {/* Header Summary */}
            <div className="text-center pb-8 border-b border-gray-100 mb-8">
              <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block mb-2">Your Business Health Report</span>
              <h2 className="text-2xl md:text-3xl font-display font-black text-brand-navy uppercase">
                Diagnosis: <span className="text-brand-royal">{results.status}</span>
              </h2>
            </div>

            {/* Score Ring / Metric Visual */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              {/* Score ring */}
              <div className="md:col-span-4 flex flex-col items-center p-4 bg-brand-offwhite rounded-sm border border-gray-100">
                <div className="relative flex items-center justify-center">
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                    <circle cx="56" cy="56" r="48" stroke={results.score > 11 ? '#1F5F86' : results.score > 8 ? '#57B7E8' : '#F47A1F'} strokeWidth="8" fill="transparent" strokeDasharray={301.6} strokeDashoffset={301.6 - (301.6 * results.percentage) / 100} strokeLinecap="round" className="transition-all duration-1000" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-display font-bold text-brand-navy">{results.score}</span>
                    <span className="text-gray-400 text-xs block">out of 15</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs uppercase font-mono tracking-wider text-gray-500 block font-bold">Efficiency Rating</span>
                  <span className="text-lg font-display font-black text-brand-navy">{results.percentage}%</span>
                </div>
              </div>

              {/* Explainer / Recommendation */}
              <div className="md:col-span-8">
                <h4 className="text-xs uppercase font-mono tracking-wider text-brand-orange font-bold flex items-center gap-1 mb-2">
                  <Shield className="w-3.5 h-3.5 text-brand-orange" />
                  Strategic Guidance
                </h4>
                <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-4">
                  {results.recommendation}
                </p>
                <div className="text-xs text-gray-400 italic">
                  Results are analytical indicators of operational maturity. Real estate growth relies on ongoing daily activity and local conditions.
                </div>
              </div>
            </div>

            {/* Leaks Listing */}
            {results.leaks.length > 0 && (
              <div className="bg-orange-50 border border-brand-orange/20 rounded-sm p-5 mb-8">
                <h4 className="text-sm font-display font-black text-brand-orange flex items-center gap-2 mb-3 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-brand-orange" />
                  We Detected Structural Leaks in {results.leaks.length} Area{results.leaks.length > 1 ? 's' : ''}:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-sans text-brand-dark-text">
                  {results.leaks.map((leak, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      {leak} Opportunity Gaps
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-brand-orange/10 text-xs text-gray-500 font-sans">
                  Recommendation: Prioritize the <strong>{results.leaks[0]}</strong> audit modules in the first 30 days of the framework.
                </div>
              </div>
            )}

            {/* Specific Answer Audits */}
            <div className="mb-8">
              <h4 className="text-sm font-display font-black text-brand-navy uppercase tracking-wider mb-4">
                Detailed Diagnostic Breakdowns
              </h4>
              <div className="flex flex-col gap-3">
                {Object.entries(answers).map(([key, value]) => {
                  const typedValue = value as { score: number; text: string; feedback: string };
                  const q = SCORECARD_QUESTIONS.find(item => item.id === key);
                  return (
                    <div key={key} className="p-4 bg-gray-50 border border-gray-150 rounded-sm flex items-start gap-3 text-xs md:text-sm">
                      {typedValue.score === 3 ? (
                        <CheckCircle2 className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-display font-bold text-brand-navy block mb-0.5 uppercase">{q?.category}</span>
                        <p className="text-gray-500 mb-2 italic">"{typedValue.text}"</p>
                        <p className="text-gray-700 font-sans">{typedValue.feedback}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic Footer & Offer Hook */}
            <div className="bg-brand-navy text-white rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Background blueprint details */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)',
                  backgroundSize: '35px 35px'
                }}
              ></div>
              <div className="text-left relative z-10">
                <span className="text-brand-light font-mono text-xs uppercase tracking-widest block mb-1 font-bold">Your Prescribed Solution</span>
                <h4 className="text-lg md:text-xl font-display font-black uppercase">Repair Your Funnel in 100 Days</h4>
                <p className="text-xs text-gray-300 font-sans mt-1 max-w-md">
                  Stop operating from memory. Plug these specific structural gaps using our custom CRM workflows, objection talk-tracks, and weekly action sprints.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 relative z-10">
                <button
                  id="results-join-cta"
                  onClick={onJoinClick}
                  className="px-6 py-3 bg-brand-orange text-white text-xs font-bold uppercase font-mono tracking-wider rounded-sm border-b-2 border-black/20 hover:bg-[#e06910] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  Start Your 100 Days
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="results-reset-btn"
                  onClick={handleStart}
                  className="text-xs text-gray-300 hover:text-white font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer underline decoration-dotted"
                >
                  <RotateCcw className="w-3 h-3" /> Re-Take Diagnostic
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
