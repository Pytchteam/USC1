/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ScorecardQuestion {
  id: string;
  category: string;
  question: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

export interface ScorecardResult {
  score: number;
  maxScore: number;
  percentage: number;
  grade: string;
  status: string;
  leaks: string[];
  recommendation: string;
}

export interface PipelineContact {
  id: string;
  name: string;
  source: string;
  value: number;
  stage: 'Lead' | 'Active' | 'Under Contract' | 'Closed';
  lastAction: string;
  daysActive: number;
  phone: string;
  email: string;
  activityHistory: {
    date: string;
    type: 'sms' | 'email' | 'call' | 'note';
    message: string;
  }[];
}

export interface ScriptCategory {
  id: string;
  title: string;
  description: string;
  scripts: {
    name: string;
    scenario: string;
    opening: string;
    dialogue: { speaker: string; text: string }[];
    conversionTip: string;
  }[];
}

export interface TimelinePhase {
  phase: number;
  name: string;
  duration: string;
  description: string;
  deliverables: string[];
  focus: string;
}

export interface ValueStackItem {
  id: string;
  title: string;
  description: string;
  value: string;
  category: 'Course' | 'Tools' | 'Templates' | 'Access';
}

export interface FAQItem {
  question: string;
  answer: string;
}
