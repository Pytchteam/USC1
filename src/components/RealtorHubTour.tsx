/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PIPELINE_CONTACTS } from '../data';
import { PipelineContact } from '../types';
import { Database, GitFork, MessageSquare, Cpu, Play, Check, Shield, Users, Mail, Phone, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RealtorHubTour() {
  const [activeTab, setActiveTab] = useState<'crm' | 'pipeline' | 'sms' | 'automation'>('crm');
  const [contacts, setContacts] = useState<PipelineContact[]>(PIPELINE_CONTACTS);
  const [selectedContact, setSelectedContact] = useState<PipelineContact>(PIPELINE_CONTACTS[0]);
  
  // SMS simulator state
  const [simulatedSmsMessages, setSimulatedSmsMessages] = useState<{ sender: 'agent' | 'lead'; message: string; time: string }[]>([
    { sender: 'agent', message: 'Hey Sarah! Thanks for requesting our Westside Townhouse report. Are you looking to buy in the next 100 days or just keeping an eye on the market?', time: '2:15 PM' },
    { sender: 'lead', message: 'Just window shopping really. Our lease in Denver ends in 6 months.', time: '2:18 PM' }
  ]);
  const [smsScenario, setSmsScenario] = useState<'nurture' | 'objection'>('nurture');
  const [smsStep, setSmsStep] = useState(0);

  // Automation flowchart animation state
  const [automationActiveStep, setAutomationActiveStep] = useState<number | null>(null);
  const [isAutomating, setIsAutomating] = useState(false);

  // Function to move contact stages (simulates CRM drag & drop)
  const moveContactStage = (id: string, currentStage: PipelineContact['stage']) => {
    const stages: PipelineContact['stage'][] = ['Lead', 'Active', 'Under Contract', 'Closed'];
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex < stages.length - 1) {
      const nextStage = stages[currentIndex + 1];
      
      // Update contact list
      const updated = contacts.map(c => {
        if (c.id === id) {
          const nowStr = new Date().toISOString().split('T')[0];
          return {
            ...c,
            stage: nextStage,
            lastAction: `Moved to ${nextStage}`,
            activityHistory: [
              { date: nowStr, type: 'note' as const, message: `System Automation: Contact stage updated from ${currentStage} to ${nextStage}.` },
              ...c.activityHistory
            ]
          };
        }
        return c;
      });

      setContacts(updated);
      const newSelected = updated.find(c => c.id === id);
      if (newSelected) setSelectedContact(newSelected);

      // Flash feedback
      alert(`CRM Automation: Swapped ${contacts.find(c => c.id === id)?.name} to "${nextStage}". Automation workflows updated.`);
    }
  };

  // Reset contacts
  const resetContacts = () => {
    setContacts(PIPELINE_CONTACTS);
    setSelectedContact(PIPELINE_CONTACTS[0]);
  };

  // Run SMS simulation
  const startSmsSimulation = (scenario: 'nurture' | 'objection') => {
    setSmsScenario(scenario);
    setSmsStep(1);

    if (scenario === 'nurture') {
      setSimulatedSmsMessages([
        { sender: 'agent', message: 'Hey Sarah! Thanks for requesting our Westside Townhouse report. Are you looking to buy in the next 100 days or just keeping an eye on the market?', time: '2:15 PM' },
        { sender: 'lead', message: 'Just window shopping really. Our lease in Denver ends in 6 months.', time: '2:18 PM' }
      ]);
    } else {
      setSimulatedSmsMessages([
        { sender: 'lead', message: 'Hi, is this Mark? We saw your Instagram reel about home values. Can you sell ours for a 2% commission? A local discount broker offered us that.', time: '4:01 PM' }
      ]);
    }
  };

  const advanceSmsSimulation = () => {
    if (smsScenario === 'nurture') {
      if (smsStep === 1) {
        setSimulatedSmsMessages(prev => [
          ...prev,
          { sender: 'agent', message: 'Got it! That is actually the ideal window. Finding a home, negotiating, and closing takes about 60-90 days. If you wait until your lease is up, you\'ll feel rushed. I can prepare a custom "Buy vs Rent" analysis for you in the meantime. Would that be helpful?', time: '2:19 PM' }
        ]);
        setSmsStep(2);
      } else if (smsStep === 2) {
        setSimulatedSmsMessages(prev => [
          ...prev,
          { sender: 'lead', message: 'That would actually be amazing. Yes, please send that over!', time: '2:22 PM' }
        ]);
        setSmsStep(3);
      } else if (smsStep === 3) {
        setSimulatedSmsMessages(prev => [
          ...prev,
          { sender: 'agent', message: 'Perfect! Outlining that for you now. Let\'s touch base tomorrow morning to review. Does 10:00 AM work, Sarah?', time: '2:23 PM' }
        ]);
        setSmsStep(4);
      }
    } else {
      if (smsStep === 1) {
        setSimulatedSmsMessages(prev => [
          ...prev,
          { sender: 'agent', message: 'Hi there! I completely understand looking for the lowest fee. If I believed that broker could net you the most money, I would tell you to sign immediately. But let me ask: if they discount their own fee in 5 minutes, how aggressively do you think they will defend your home\'s price against tough buyers?', time: '4:03 PM' }
        ]);
        setSmsStep(2);
      } else if (smsStep === 2) {
        setSimulatedSmsMessages(prev => [
          ...prev,
          { sender: 'lead', message: 'I never thought about it like that. So what do you do differently?', time: '4:06 PM' }
        ]);
        setSmsStep(3);
      } else if (smsStep === 3) {
        setSimulatedSmsMessages(prev => [
          ...prev,
          { sender: 'agent', message: 'We protect your value systematically. Let\'s hop on a brief 10-minute listing consult tomorrow. I will show you exactly how our Marketing Engine yields 4-6% higher list-prices. Would 2:00 PM work?', time: '4:07 PM' }
        ]);
        setSmsStep(4);
      }
    }
  };

  // Run flowchart automation simulation
  const runAutomationSimulation = async () => {
    if (isAutomating) return;
    setIsAutomating(true);

    const steps = [1, 2, 3, 4];
    for (const step of steps) {
      setAutomationActiveStep(step);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    setIsAutomating(false);
  };

  return (
    <section id="realtor-hub-bonus" className="py-20 bg-brand-navy text-white border-b border-white/10 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-royal/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase text-brand-light bg-brand-royal/30 border border-brand-light/20 px-3.5 py-1.5 rounded-full tracking-wider mb-4 inline-block">
            SOFTWARE SYSTEM BONUS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Your Real Estate Business <br />
            <span className="text-brand-orange">Finally Has A Home.</span>
          </h2>
          <p className="text-gray-300 font-sans text-lg">
            Course buyers get <strong>30 days of full access</strong> to the <strong className="text-white font-medium">Ultimate Success Realtor Hub CRM</strong>. The course gives you the plan. The Realtor Hub gives you a place to execute it.
          </p>
        </div>

        {/* Dynamic CRM Terminal Window */}
        <div className="bg-[#0b243b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px] mb-12">
          
          {/* Left Navigation Rail (Column) */}
          <div className="lg:col-span-3 bg-[#051625] border-r border-white/5 p-4 flex flex-col gap-2">
            <div className="pb-4 mb-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-royal flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <span className="font-display font-bold text-xs tracking-wider block">REALTOR HUB</span>
                <span className="text-[9px] font-mono text-gray-500 uppercase">System Active v2.1</span>
              </div>
            </div>

            <button
              id="crm-tab-btn"
              onClick={() => setActiveTab('crm')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs md:text-sm font-sans font-medium transition-colors cursor-pointer text-left ${activeTab === 'crm' ? 'bg-brand-royal text-white' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <Database className="w-4 h-4" />
              Lead CRM Database
            </button>

            <button
              id="pipeline-tab-btn"
              onClick={() => setActiveTab('pipeline')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs md:text-sm font-sans font-medium transition-colors cursor-pointer text-left ${activeTab === 'pipeline' ? 'bg-brand-royal text-white' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <GitFork className="w-4 h-4" />
              Visual Pipelines
            </button>

            <button
              id="sms-tab-btn"
              onClick={() => setActiveTab('sms')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs md:text-sm font-sans font-medium transition-colors cursor-pointer text-left ${activeTab === 'sms' ? 'bg-brand-royal text-white' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <MessageSquare className="w-4 h-4" />
              SMS Nurture & AI
            </button>

            <button
              id="automation-tab-btn"
              onClick={() => setActiveTab('automation')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs md:text-sm font-sans font-medium transition-colors cursor-pointer text-left ${activeTab === 'automation' ? 'bg-brand-royal text-white' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <Cpu className="w-4 h-4" />
              Lead Automations
            </button>

            {/* Micro details block */}
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1 text-[10px] text-gray-500 font-mono">
              <div className="flex justify-between">
                <span>DATABASE CAPACITY</span>
                <span className="text-brand-light">UNLIMITED</span>
              </div>
              <div className="flex justify-between">
                <span>API INTEGRATION</span>
                <span className="text-brand-orange">CONNECTED</span>
              </div>
              <button 
                id="reset-crm-mock-btn"
                onClick={resetContacts}
                className="mt-3 text-[10px] text-brand-light hover:underline text-left cursor-pointer"
              >
                Reset CRM Mockup State
              </button>
            </div>
          </div>

          {/* Right Workspace (Column) */}
          <div className="lg:col-span-9 p-6 bg-[#081e32]">
            
            {/* Tab Content 1: CRM Database */}
            {activeTab === 'crm' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
                {/* Contacts List */}
                <div className="md:col-span-6 flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Active Contact Records ({contacts.length})</span>
                  {contacts.map(c => (
                    <button
                      key={c.id}
                      id={`crm-contact-${c.id}`}
                      onClick={() => setSelectedContact(c)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${selectedContact.id === c.id ? 'bg-brand-royal/20 border-brand-royal shadow-lg' : 'bg-[#0b243b]/40 border-white/5 hover:border-white/10'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-brand-royal/40 border border-brand-light/30 flex items-center justify-center font-display font-bold text-xs text-brand-light">
                          {c.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-white">{c.name}</h4>
                          <span className="text-xs text-gray-400 font-sans">{c.source}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-brand-orange block font-semibold">${c.value.toLocaleString()}</span>
                        <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono uppercase bg-white/5 text-gray-300 rounded mt-1">{c.stage}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Contact Profile Detail */}
                <div className="md:col-span-6 bg-[#051625] rounded-xl border border-white/5 p-5 flex flex-col">
                  {selectedContact && (
                    <div className="flex flex-col h-full">
                      {/* Name Card */}
                      <div className="flex justify-between items-start pb-4 border-b border-white/5 mb-4">
                        <div>
                          <h3 className="font-display font-bold text-base text-white">{selectedContact.name}</h3>
                          <span className="text-xs font-mono text-brand-light">{selectedContact.source}</span>
                        </div>
                        <span className="text-xs font-mono bg-brand-orange/10 text-brand-orange px-2.5 py-1 rounded font-bold">
                          ${selectedContact.value.toLocaleString()}
                        </span>
                      </div>

                      {/* Phone/Email Details */}
                      <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Phone className="w-3.5 h-3.5 text-brand-royal shrink-0" />
                          <span>{selectedContact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 truncate">
                          <Mail className="w-3.5 h-3.5 text-brand-royal shrink-0" />
                          <span className="truncate">{selectedContact.email}</span>
                        </div>
                      </div>

                      {/* Communications Log Timeline */}
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">Communication Timeline logs</span>
                      <div className="flex flex-col gap-3 overflow-y-auto max-h-[200px] pr-1">
                        {selectedContact.activityHistory.map((act, i) => (
                          <div key={i} className="relative pl-5 border-l border-white/10 pb-2 text-xs">
                            <span className="absolute left-[-4.5px] top-1 w-2.5 h-2.5 rounded-full bg-brand-royal border border-brand-navy"></span>
                            <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-0.5">
                              <span>{act.date}</span>
                              <span className="uppercase text-brand-light">{act.type}</span>
                            </div>
                            <p className="text-gray-300 font-sans leading-relaxed">{act.message}</p>
                          </div>
                        ))}
                      </div>

                      {/* Pipeline Actions */}
                      <div className="mt-auto pt-4 border-t border-white/5 flex gap-2">
                        {selectedContact.stage !== 'Closed' ? (
                          <button
                            id="move-pipeline-stage-btn"
                            onClick={() => moveContactStage(selectedContact.id, selectedContact.stage)}
                            className="w-full bg-brand-royal hover:bg-brand-royal/80 text-white font-sans text-xs py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1.5 font-medium"
                          >
                            Advance Pipeline Stage
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <div className="w-full text-center text-xs text-brand-light font-mono bg-brand-light/10 py-2.5 rounded-lg border border-brand-light/20 flex items-center justify-center gap-1">
                            <Check className="w-4 h-4" /> Deal Closed successfully!
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab Content 2: Visual Pipelines */}
            {activeTab === 'pipeline' && (
              <div className="flex flex-col h-full justify-between">
                {/* 4 Pipeline Columns */}
                <div className="grid grid-cols-4 gap-3 overflow-x-auto">
                  {(['Lead', 'Active', 'Under Contract', 'Closed'] as PipelineContact['stage'][]).map(stage => {
                    const stageContacts = contacts.filter(c => c.stage === stage);
                    return (
                      <div key={stage} className="bg-[#051625]/60 rounded-xl border border-white/5 p-3 min-w-[150px] flex flex-col gap-3 min-h-[350px]">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-1">
                          <span className="font-display font-bold text-xs text-white uppercase tracking-wider">{stage}</span>
                          <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">
                            {stageContacts.length}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2.5">
                          {stageContacts.map(c => (
                            <div
                              key={c.id}
                              className="bg-[#0b243b] border border-white/10 rounded-lg p-3 hover:border-brand-royal transition-colors relative group"
                            >
                              <h5 className="font-display font-semibold text-xs text-white">{c.name}</h5>
                              <span className="text-[9px] font-mono text-gray-400 mt-0.5 block">{c.source}</span>
                              <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                                <span className="text-xs font-mono text-brand-orange font-semibold">${(c.value / 1000).toFixed(0)}k</span>
                                {stage !== 'Closed' && (
                                  <button
                                    id={`pip-move-${c.id}`}
                                    onClick={() => moveContactStage(c.id, c.stage)}
                                    className="text-[9px] font-mono text-brand-light hover:underline uppercase flex items-center gap-0.5 cursor-pointer"
                                  >
                                    Move →
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pipeline Bottom Analytics */}
                <div className="mt-4 p-4 bg-[#051625] rounded-xl border border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-4">
                    <span>TOTAL PIPELINE VALUE: <strong className="text-brand-orange font-bold text-sm">${contacts.reduce((acc, c) => acc + (c.stage !== 'Closed' ? c.value : 0), 0).toLocaleString()}</strong></span>
                    <span className="hidden sm:inline-block">|</span>
                    <span>TOTAL CLOSED: <strong className="text-brand-light font-bold text-sm">${contacts.reduce((acc, c) => acc + (c.stage === 'Closed' ? c.value : 0), 0).toLocaleString()}</strong></span>
                  </div>
                  <button 
                    id="pipeline-reset-btn"
                    onClick={resetContacts}
                    className="text-brand-light hover:underline cursor-pointer text-xs"
                  >
                    Reset Pipeline Visuals
                  </button>
                </div>
              </div>
            )}

            {/* Tab Content 3: SMS Follow-up & AI */}
            {activeTab === 'sms' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-stretch">
                {/* Simulator Settings */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Choose Simulator Scenario</span>
                  
                  <button
                    id="sms-nurture-scenario-btn"
                    onClick={() => startSmsSimulation('nurture')}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${smsScenario === 'nurture' && smsStep > 0 ? 'bg-brand-royal/20 border-brand-royal' : 'bg-[#0b243b]/40 border-white/5'}`}
                  >
                    <span className="font-display font-semibold text-xs text-white block">Value-First Nurture Playbook</span>
                    <p className="text-xs text-gray-400 mt-1">Simulate follow-up with a cold open house visitor looking 6 months out.</p>
                  </button>

                  <button
                    id="sms-objection-scenario-btn"
                    onClick={() => startSmsSimulation('objection')}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${smsScenario === 'objection' && smsStep > 0 ? 'bg-brand-royal/20 border-brand-royal' : 'bg-[#0b243b]/40 border-white/5'}`}
                  >
                    <span className="font-display font-semibold text-xs text-white block">Commission Defense Playbook</span>
                    <p className="text-xs text-gray-400 mt-1">Simulate handling a discount broker price objection via text conversation.</p>
                  </button>

                  {smsStep > 0 && smsStep < 4 ? (
                    <button
                      id="sms-advance-btn"
                      onClick={advanceSmsSimulation}
                      className="w-full bg-brand-orange hover:bg-brand-orange/80 text-white font-sans text-xs py-3 rounded-lg flex items-center justify-center gap-1.5 font-medium cursor-pointer shadow-lg animate-bounce"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Trigger Next Message Exchange
                    </button>
                  ) : smsStep === 4 ? (
                    <div className="p-3 rounded-lg bg-brand-light/10 border border-brand-light/20 text-xs text-brand-light font-mono text-center flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4 animate-pulse" />
                      Conversation Complete! Appointment Booked.
                    </div>
                  ) : (
                    <div className="p-3 text-xs text-gray-400 italic font-sans text-center">
                      Click a scenario above to start the live interactive text simulator.
                    </div>
                  )}
                </div>

                {/* iPhone Interface Simulator */}
                <div className="md:col-span-7 flex justify-center">
                  <div className="w-full max-w-[280px] bg-black rounded-[36px] border-[6px] border-gray-800 shadow-2xl p-3 flex flex-col justify-between aspect-[9/18]">
                    {/* iPhone Notch */}
                    <div className="w-24 h-4 bg-gray-800 rounded-b-xl mx-auto mb-2 relative flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black absolute right-6"></div>
                    </div>

                    {/* Chat Header */}
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 text-[10px]">
                      <div className="w-6 h-6 rounded-full bg-brand-royal flex items-center justify-center font-display font-bold text-[9px] text-brand-light">
                        {smsScenario === 'nurture' ? 'SJ' : 'MS'}
                      </div>
                      <div>
                        <span className="text-white font-semibold block">{smsScenario === 'nurture' ? 'Sarah Jenkins' : 'Mark (Prospect)'}</span>
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">iMessage • Active</span>
                      </div>
                    </div>

                    {/* Chat Body messages */}
                    <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 text-[10px]">
                      {simulatedSmsMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`max-w-[85%] rounded-2xl p-2.5 font-sans leading-relaxed ${msg.sender === 'agent' ? 'bg-brand-royal text-white rounded-br-none self-end text-right' : 'bg-white/10 text-gray-100 rounded-bl-none self-start text-left'}`}
                        >
                          <p>{msg.message}</p>
                          <span className="text-[7px] text-gray-500 font-mono block mt-1">{msg.time}</span>
                        </div>
                      ))}
                    </div>

                    {/* Message input */}
                    <div className="mt-2 border-t border-white/5 pt-2 flex items-center gap-1">
                      <div className="flex-1 bg-white/5 rounded-full px-3 py-1 text-[10px] text-gray-400 font-sans italic border border-white/5">
                        iMessage...
                      </div>
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center text-brand-navy">
                        ↑
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 4: Automation Flowcharts */}
            {activeTab === 'automation' && (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-4">Automation Blueprint: Missed Call Text-Back System</span>
                  
                  {/* Flow chart vertical layout */}
                  <div className="flex flex-col gap-3 relative max-w-lg mx-auto">
                    {/* Visual Connector Line */}
                    <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-orange via-brand-light to-brand-royal opacity-40"></div>

                    {/* Flow Step 1 */}
                    <div className={`p-4 rounded-xl border flex items-center gap-4 relative z-10 transition-all duration-300 ${automationActiveStep === 1 ? 'bg-brand-orange/20 border-brand-orange scale-102 shadow-lg shadow-brand-orange/10' : 'bg-[#051625]/60 border-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${automationActiveStep === 1 ? 'bg-brand-orange text-white' : 'bg-white/10 text-gray-300'}`}>
                        1
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-orange uppercase block tracking-wider font-bold">Trigger Event</span>
                        <h4 className="font-display font-bold text-xs text-white">Incoming Mobile Call is Unanswered</h4>
                        <p className="text-[10px] text-gray-400">Agent does not answer phone call within 15 seconds (likely in listing consult).</p>
                      </div>
                    </div>

                    {/* Flow Step 2 */}
                    <div className={`p-4 rounded-xl border flex items-center gap-4 relative z-10 transition-all duration-300 ${automationActiveStep === 2 ? 'bg-brand-light/20 border-brand-light scale-102 shadow-lg shadow-brand-light/10' : 'bg-[#051625]/60 border-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${automationActiveStep === 2 ? 'bg-brand-light text-brand-navy' : 'bg-white/10 text-gray-300'}`}>
                        2
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-light uppercase block tracking-wider font-bold">Delayed Guard</span>
                        <h4 className="font-display font-bold text-xs text-white">Wait exactly 45 seconds</h4>
                        <p className="text-[10px] text-gray-400">Creates a natural human delay so the text message doesn\'t look like an instant robot response.</p>
                      </div>
                    </div>

                    {/* Flow Step 3 */}
                    <div className={`p-4 rounded-xl border flex items-center gap-4 relative z-10 transition-all duration-300 ${automationActiveStep === 3 ? 'bg-brand-royal/20 border-brand-royal scale-102 shadow-lg shadow-brand-royal/10' : 'bg-[#051625]/60 border-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${automationActiveStep === 3 ? 'bg-brand-royal text-white' : 'bg-white/10 text-gray-300'}`}>
                        3
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-royal uppercase block tracking-wider font-bold">System Action</span>
                        <h4 className="font-display font-bold text-xs text-white">Send SMS Follow-Up</h4>
                        <p className="text-[10px] text-gray-400">"Hey there! Sorry I missed you, wrapping up with a client. Are you looking to buy, sell, or calling about an active listing?"</p>
                      </div>
                    </div>

                    {/* Flow Step 4 */}
                    <div className={`p-4 rounded-xl border flex items-center gap-4 relative z-10 transition-all duration-300 ${automationActiveStep === 4 ? 'bg-green-500/20 border-green-500 scale-102 shadow-lg shadow-green-500/10' : 'bg-[#051625]/60 border-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${automationActiveStep === 4 ? 'bg-green-500 text-white' : 'bg-white/10 text-gray-300'}`}>
                        4
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-green-400 uppercase block tracking-wider font-bold">Campaign Router</span>
                        <h4 className="font-display font-bold text-xs text-white">If prospect replies, tag as hot lead and flag CRM notify</h4>
                        <p className="text-[10px] text-gray-400">Alerts agent instantly via push notification to call back with scripts ready.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulator bottom trigger */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#051625] rounded-xl border border-white/5">
                  <span className="text-[11px] font-sans text-gray-400">Test this automation flow inside our mock sandboxed CRM:</span>
                  <button
                    id="run-automation-flow-btn"
                    onClick={runAutomationSimulation}
                    disabled={isAutomating}
                    className="bg-brand-orange hover:bg-brand-orange/80 disabled:bg-gray-700 text-white font-sans text-xs font-semibold px-5 py-2 rounded-lg cursor-pointer flex items-center gap-1.5 shadow-md"
                  >
                    {isAutomating ? 'Running Blueprint...' : 'Simulate Unanswered Call'}
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Feature Grid details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#0b243b]/40 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all">
            <span className="w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center text-xs font-mono font-bold mb-4">
              CRM
            </span>
            <h4 className="font-display font-bold text-base text-white mb-2">Lead CRM & Pipeline Management</h4>
            <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
              Track cold registrations to closed escrows. Monitor your pipeline valuation and see exactly who needs attention on your screen today.
            </p>
          </div>

          <div className="bg-[#0b243b]/40 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all">
            <span className="w-8 h-8 rounded-lg bg-brand-light/10 border border-brand-light/30 text-brand-light flex items-center justify-center text-xs font-mono font-bold mb-4">
              SMS
            </span>
            <h4 className="font-display font-bold text-base text-white mb-2">Preloaded Follow-Up Automations</h4>
            <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
              Activate templated, non-pushy text message and email campaigns that keep your name top of mind with local comparable sales lists.
            </p>
          </div>

          <div className="bg-[#0b243b]/40 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all">
            <span className="w-8 h-8 rounded-lg bg-brand-royal/10 border border-brand-royal/30 text-brand-royal flex items-center justify-center text-xs font-mono font-bold mb-4">
              AI
            </span>
            <h4 className="font-display font-bold text-base text-white mb-2">Missed Call Text-Back System</h4>
            <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
              Never lose another mobile lead. If you miss a call during a meeting, our platform instantly sends a value-first text to qualify them.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Microcopy */}
        <div className="text-center text-[10px] text-gray-500 mt-8 font-mono leading-relaxed">
          30 days included with course purchase. Continued access is available through a monthly subscription after the trial.
        </div>

      </div>
    </section>
  );
}
