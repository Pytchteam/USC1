/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SCRIPT_CATEGORIES } from '../data';
import { BookOpen, Copy, Check, MessageSquare, PhoneCall, Zap, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScriptVault() {
  const [activeCategory, setActiveCategory] = useState<string>('buyer');
  const [selectedScriptIndex, setSelectedScriptIndex] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const category = SCRIPT_CATEGORIES.find(c => c.id === activeCategory) || SCRIPT_CATEGORIES[0];
  const script = category.scripts[selectedScriptIndex] || category.scripts[0];

  const handleCopyScriptText = (index: number, fullText: string) => {
    navigator.clipboard.writeText(fullText);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const getFullScriptString = () => {
    return `Scenario: ${script.scenario}\n\n` + 
      script.dialogue.map(d => `${d.speaker}: ${d.text}`).join('\n') + 
      `\n\nConversion Tip: ${script.conversionTip}`;
  };

  return (
    <section id="script-vault-section" className="py-20 bg-brand-offwhite text-brand-dark-text border-b border-gray-200 relative overflow-hidden">
      {/* Background geometrical elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 border-l border-y border-brand-royal/5 pointer-events-none rounded-r-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase text-brand-royal bg-brand-royal/10 px-3 py-1 rounded-full font-medium tracking-widest mb-4 inline-block">
            REALTOR TALK-TRACKS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-navy mb-4">
            Realtor Script Vault
          </h2>
          <p className="text-gray-600 font-sans text-base">
            Stop guessing what to say. Access custom scripts crafted to navigate buyers, listing consultations, price negotiations, FSBOs, expireds, and cold nurturing without friction.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SCRIPT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              id={`vault-cat-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedScriptIndex(0);
              }}
              className={`px-5 py-3 rounded-lg font-sans font-medium text-xs md:text-sm border transition-all cursor-pointer flex items-center gap-2 ${activeCategory === cat.id ? 'bg-brand-navy text-white border-brand-navy shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Core Vault Component Grid */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
          
          {/* Left Script Select Sidebar (Column) */}
          <div className="md:col-span-4 bg-gray-50 border-r border-gray-200 p-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold block mb-1">Select Script Playbook</span>
            {category.scripts.map((sc, idx) => (
              <button
                key={idx}
                id={`vault-script-${idx}`}
                onClick={() => setSelectedScriptIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border text-xs md:text-sm font-sans font-medium transition-all cursor-pointer flex flex-col gap-1.5 ${selectedScriptIndex === idx ? 'bg-white border-brand-royal text-brand-navy shadow-md' : 'border-transparent text-gray-500 hover:bg-gray-100/60'}`}
              >
                <div className="flex items-center gap-2">
                  <PhoneCall className={`w-3.5 h-3.5 ${selectedScriptIndex === idx ? 'text-brand-royal' : 'text-gray-400'}`} />
                  <span className="font-display font-semibold truncate text-brand-navy">{sc.name}</span>
                </div>
                <span className="text-xs text-gray-400 truncate font-normal leading-snug">{sc.scenario}</span>
              </button>
            ))}

            {/* Custom Interactive Sandbox prompt preview info card */}
            <div className="mt-auto bg-brand-navy text-white rounded-xl p-4 border border-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-display font-bold text-brand-light">
                <Zap className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                Advanced AI Vault Bonus
              </div>
              <p className="text-[10px] text-gray-300 font-sans leading-relaxed">
                Unlock <strong>35 advanced realtor prompts</strong> to run interactive voice and text roleplay scenarios with AI regarding commission objections!
              </p>
            </div>
          </div>

          {/* Right Script Dialogue Display (Column) */}
          <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between bg-white relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${selectedScriptIndex}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full"
              >
                {/* Meta details */}
                <div className="flex justify-between items-start pb-4 border-b border-gray-100 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-brand-royal uppercase tracking-widest block font-bold">ACTIVE PLAYBOOK SCENARIO</span>
                    <h3 className="text-lg font-display font-bold text-brand-navy mt-1">{script.name}</h3>
                    <p className="text-xs text-gray-500 font-sans mt-1"><strong>Scenario Context:</strong> {script.scenario}</p>
                  </div>
                  <button
                    id="copy-script-vault-btn"
                    onClick={() => handleCopyScriptText(selectedScriptIndex, getFullScriptString())}
                    className="p-2.5 rounded-lg border border-gray-200 hover:border-brand-royal text-gray-500 hover:text-brand-royal hover:bg-brand-royal/5 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium shrink-0"
                  >
                    {copiedIndex === selectedScriptIndex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Full Playbook
                      </>
                    )}
                  </button>
                </div>

                {/* Subheading Opening strategy */}
                <div className="flex items-start gap-2.5 bg-brand-offwhite rounded-xl p-4 border border-gray-200 mb-6 text-xs md:text-sm">
                  <AlertCircle className="w-5 h-5 text-brand-royal shrink-0" />
                  <div>
                    <strong className="text-brand-navy block font-display">Opening Strategy Rule:</strong>
                    <p className="text-gray-600 mt-0.5">{script.opening}</p>
                  </div>
                </div>

                {/* Conversational dialogue bubbles */}
                <div className="flex flex-col gap-4 mb-6">
                  {script.dialogue.map((dial, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col max-w-[85%] ${dial.speaker === 'You' ? 'self-end items-end' : 'self-start items-start'}`}
                    >
                      <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1">{dial.speaker}</span>
                      <div className={`p-4 rounded-xl text-xs md:text-sm font-sans leading-relaxed ${dial.speaker === 'You' ? 'bg-brand-royal text-white rounded-br-none text-right' : 'bg-gray-100 text-gray-700 rounded-bl-none text-left border border-gray-200'}`}>
                        {dial.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coach Tip Callout */}
                <div className="mt-auto border-t border-gray-100 pt-6">
                  <div className="bg-orange-50 border border-brand-orange/20 rounded-xl p-4 flex gap-3 text-xs md:text-sm">
                    <Zap className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-orange block font-display">Mark Peebles Conversion Tip:</strong>
                      <p className="text-gray-700 mt-0.5 leading-relaxed font-sans">{script.conversionTip}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Informational Warning / Compliance Disclaimer */}
        <div className="text-center text-[11px] text-gray-500 font-mono mt-8 leading-relaxed max-w-2xl mx-auto">
          These scripts are strategic outlines and reference models. Individual conversations should be custom-tailored to local regulations, client requirements, and specific market situations.
        </div>

      </div>
    </section>
  );
}
