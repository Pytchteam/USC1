/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ScorecardQuestion, ScriptCategory, TimelinePhase, ValueStackItem, FAQItem, PipelineContact } from './types';

export const SCORECARD_QUESTIONS: ScorecardQuestion[] = [
  {
    id: 'lead-flow',
    category: 'Lead Flow & Marketing',
    question: 'How do you generate new leads or identify potential buyers and sellers?',
    options: [
      {
        text: 'Waiting for friends/family to reach out, or relying purely on passive referrals.',
        score: 1,
        feedback: 'You have a passive system. If your personal network isn\'t actively buying or selling, your business pauses. You need a proactive lead generation engine.'
      },
      {
        text: 'Posting occasionally on social media and attending networking events, but without a set formula.',
        score: 2,
        feedback: 'You have activity, but not consistency. You are relying on hope-marketing rather than a predictable channel.'
      },
      {
        text: 'Running a structured marketing engine (e.g., local content, targeted outreach, open houses) with a trackable weekly lead goal.',
        score: 3,
        feedback: 'Excellent! You have a repeatable process that feeds your pipeline systematically.'
      }
    ]
  },
  {
    id: 'follow-up',
    category: 'Follow-Up System',
    question: 'What is your current cadence for following up with leads who aren\'t ready to buy or sell immediately?',
    options: [
      {
        text: 'I follow up when I remember or when they pop into my head. Many cold leads drift away.',
        score: 1,
        feedback: 'You are operating from memory. Up to 80% of sales require 5-12 follow-up contacts, meaning you are leaking major commission opportunities.'
      },
      {
        text: 'I follow up once or twice, but stop because I don\'t want to sound pushy, or I don\'t know what to say.',
        score: 2,
        feedback: 'You suffer from conversational friction. With the right nurturing scripts and templates, follow-up feels like expert guidance rather than selling.'
      },
      {
        text: 'I have automated, personalized nurture sequences in my CRM combined with structured monthly/quarterly outreach.',
        score: 3,
        feedback: 'Phenomenal. Your database is a compounding asset because you keep your name top of mind with value.'
      }
    ]
  },
  {
    id: 'database-health',
    category: 'Database Organization',
    question: 'How organized is your client database (CRM)?',
    options: [
      {
        text: 'I don\'t have a CRM. My leads are scattered across sticky notes, notebook pages, and my phone contacts.',
        score: 1,
        feedback: 'Your database is in "chaos" mode. Without a central command, you have no visibility into who is in your funnel.'
      },
      {
        text: 'I have a CRM, but I barely use it, or it\'s just a digital address book with no pipelines or automated tasks.',
        score: 2,
        feedback: 'You have a repository, not a system. Your CRM should actively guide your daily activities and track pipeline values.'
      },
      {
        text: 'My CRM is highly structured with clear stages (Lead, Active, Under Contract, Closed) and automated tasks.',
        score: 3,
        feedback: 'Great! You treat your database like an enterprise asset. You can calculate your business value in seconds.'
      }
    ]
  },
  {
    id: 'weekly-schedule',
    category: 'Daily Rhythm & Structure',
    question: 'How structured is your typical business day as a realtor?',
    options: [
      {
        text: 'I wake up, check emails, and react to whatever fires occur. I don\'t have a dedicated block for lead generation.',
        score: 1,
        feedback: 'You are reactive, not proactive. When you react to the day, you let other people\'s agendas dictate your income.'
      },
      {
        text: 'I plan to do outreach, but administrative tasks, endless research, or "preparing to prepare" take over my day.',
        score: 2,
        feedback: 'You are substituting busywork for productive activity. You need a tight weekly sprint checklist focused on high-yield tasks.'
      },
      {
        text: 'I have fixed blocks for lead generation, follow-up, client nurturing, and content creation every single week.',
        score: 3,
        feedback: 'Perfect! You operate like an executive. Your consistency will always beat sporadic bursts of genius.'
      }
    ]
  },
  {
    id: 'scripts',
    category: 'Scripts & Conversations',
    question: 'How confident do you feel during consultations, pricing conversations, or objection-handling?',
    options: [
      {
        text: 'I wing it. I get nervous when they raise objections about commission, pricing, or "waiting for the market."',
        score: 1,
        feedback: 'Winging it leads to missed listings. Objections are just questions in disguise, and they deserve precise, confident frameworks.'
      },
      {
        text: 'I know some basic talk-tracks, but I struggle to transition from friendly banter into booking a firm appointment.',
        score: 2,
        feedback: 'You lack conversion milestones. A good script guides the prospect naturally to the logical next step without pressure.'
      },
      {
        text: 'I have a rehearsed script vault for every scenario, enabling me to handle objections with calm authority.',
        score: 3,
        feedback: 'Outstanding. You sound like a trusted advisor, which instantly justifies your professional fees.'
      }
    ]
  }
];

export const PIPELINE_CONTACTS: PipelineContact[] = [
  {
    id: 'c1',
    name: 'Sarah Jenkins',
    source: 'Local Facebook Ad',
    value: 450000,
    stage: 'Lead',
    lastAction: 'SMS Sent',
    daysActive: 4,
    phone: '(555) 342-8921',
    email: 'sarah.j@example.com',
    activityHistory: [
      { date: '2026-06-20', type: 'sms', message: 'Hi Sarah! Thanks for requesting our local market report. Are you looking to buy within the next 3-6 months, or just keeping an eye on the market?' },
      { date: '2026-06-20', type: 'note', message: 'Lead captured via Westside Townhomes Lead Form.' }
    ]
  },
  {
    id: 'c2',
    name: 'David & Emily Miller',
    source: 'Sunday Open House',
    value: 580000,
    stage: 'Active',
    lastAction: 'Appointment Scheduled',
    daysActive: 12,
    phone: '(555) 981-4402',
    email: 'emily.miller@example.com',
    activityHistory: [
      { date: '2026-06-22', type: 'call', message: 'Called David. Scheduled buyer consultation for Wednesday evening at 6:00 PM.' },
      { date: '2026-06-18', type: 'sms', message: 'Hey Emily, great meeting you both at 142 Pine Street! Here is the list of similar 3-bed properties currently active in that school district.' },
      { date: '2026-06-15', type: 'note', message: 'Met at Open House. Highly interested in finding a place before the school semester starts.' }
    ]
  },
  {
    id: 'c3',
    name: 'Marcus Vance',
    source: 'Past Client Referral',
    value: 620000,
    stage: 'Under Contract',
    lastAction: 'Contracts Executed',
    daysActive: 45,
    phone: '(555) 233-0192',
    email: 'marcus.vance@example.com',
    activityHistory: [
      { date: '2026-06-21', type: 'email', message: 'Contracts sent to escrow. Inspection contingencies cleared successfully!' },
      { date: '2026-06-15', type: 'note', message: 'Listing went under contract at $620k (99.5% of list price).' },
      { date: '2026-05-10', type: 'call', message: 'Listing consultation and staging assessment completed.' }
    ]
  },
  {
    id: 'c4',
    name: 'Elena Rostova',
    source: 'Instagram DM',
    value: 510000,
    stage: 'Closed',
    lastAction: 'Review Requested',
    daysActive: 90,
    phone: '(555) 762-3901',
    email: 'elena.rostova@example.com',
    activityHistory: [
      { date: '2026-06-15', type: 'sms', message: 'Hey Elena! Congratulations on closing yesterday! It was an absolute honor helping you transition. Sending over a small review link when you have a moment!' },
      { date: '2026-06-14', type: 'note', message: 'Closing successfully recorded. Commission disbursed.' },
      { date: '2026-05-02', type: 'email', message: 'Final walk-through scheduled and verified.' }
    ]
  }
];

export const SCRIPT_CATEGORIES: ScriptCategory[] = [
  {
    id: 'buyer',
    title: 'Buyer Conversations',
    description: 'Establish absolute professional authority during your very first conversation.',
    scripts: [
      {
        name: 'The First Buyer Call',
        scenario: 'When a new buyer lead registers on your website or social media ad.',
        opening: 'Identify their timeline immediately without sounding interrogative.',
        dialogue: [
          { speaker: 'You', text: 'Hi Sarah, this is Mark with Peebles Real Estate. I saw you were looking at townhouses on Westside. Are you looking to move in the next 100 days, or are you just window shopping for the future?' },
          { speaker: 'Prospect', text: 'Well, we\'re just looking really. We have a lease that ends in 6 months.' },
          { speaker: 'You', text: 'That is actually the perfect timeline. Most buyers don\'t realize it takes about 60 to 90 days to identify, negotiate, and close on a home. If you wait until your lease ends, you\'ll feel incredibly rushed. Let\'s do this: I\'ll send you a custom Rent vs. Buy analysis for your target zip code. Would that be helpful?' }
        ],
        conversionTip: 'Never ask "Are you pre-approved?" on the first call. Build value first by analyzing their timeline and offering custom, un-googleable data.'
      }
    ]
  },
  {
    id: 'seller',
    title: 'Seller Objections',
    description: 'Defend your commission and price listings correctly with absolute confidence.',
    scripts: [
      {
        name: 'The Pricing Objection ("We want to list $30k higher")',
        scenario: 'When a seller wants to overprice their home, ignoring local comparable sales.',
        opening: 'Agree with their motivation, but reframe the market dynamics.',
        dialogue: [
          { speaker: 'You', text: 'I completely understand wanting to get every single dollar out of your home. If I believed the market would pay that, I would list it there in a heartbeat. But let me ask you: if a buyer looks at your home listed at $650k, and compares it to your neighbor\'s identical home listed at $620k, which one do you think they will write an offer on first?' },
          { speaker: 'Seller', text: 'Well, ours has updated kitchen counters.' },
          { speaker: 'You', text: 'They are beautiful! But a buyer looks at list price as a starting point. If we overprice, we help sell your neighbor\'s home. If we list at $620k, we create a competitive environment. Which strategy is more likely to drive multiple offers?' }
        ],
        conversionTip: 'Align with the seller\'s goal (making money) while demonstrating that overpricing actually works against that goal by helping adjacent inventory.'
      }
    ]
  },
  {
    id: 'followup',
    title: 'Non-Pushy Nurturing',
    description: 'Keep your database active without sounding like a desperate salesperson.',
    scripts: [
      {
        name: 'The "Checking In" Alternative',
        scenario: 'For contacting a cold lead who went silent 3 weeks ago.',
        opening: 'Never say "just checking in." Always lead with a hyper-specific local update.',
        dialogue: [
          { speaker: 'You', text: 'Hey Marcus, I saw a property just hit the market around the corner from where we looked last month. It has that oversized garage you wanted, and it\'s listed $15k below the neighborhood average. Do you want me to grab a quick walk-through video for you this afternoon?' },
          { speaker: 'Prospect', text: 'Oh wow, yes please! We actually paused our search but that sounds interesting.' }
        ],
        conversionTip: 'Always anchor your follow-up in "Value-In-Hand." If you don\'t have a property to show, share a localized market micro-change.'
      }
    ]
  }
];

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: 1,
    name: 'Foundation',
    duration: 'Days 1-25',
    description: 'Shift from a passive agent to an organized business owner. Create your operational command center.',
    deliverables: [
      'Establish your CRM layout and pipeline tracking',
      'Diagnose gaps using the Agent Business Scorecard',
      'Build your primary sphere list (100 core contacts)',
      'Determine your Weekly Execution Rhythm and lead targets'
    ],
    focus: 'Organization & Routine'
  },
  {
    phase: 2,
    name: 'Conversations',
    duration: 'Days 26-50',
    description: 'Learn exactly what to say, what to text, and how to follow up with buyers and sellers systematically.',
    deliverables: [
      'Master the Realtor Script Vault sequences',
      'Deploy the Buyer/Seller Conversation Builder worksheets',
      'Implement the 35 Advanced AI Prompts for instant objection roleplay',
      'Launch personalized Realtor Email Nurture templates'
    ],
    focus: 'Skill Development & Scripting'
  },
  {
    phase: 3,
    name: 'Marketing Engine',
    duration: 'Days 51-75',
    description: 'Build your local realtor brand, generate organic and paid leads, and build an audience.',
    deliverables: [
      'Activate your Realtor Marketing Engine social system',
      'Build a local hyper-targeted lead magnet (e.g., zip code report)',
      'Construct your Realtor Power Network of local vendors',
      'Execute your first value-first Open House promotion framework'
    ],
    focus: 'Lead Generation & Brand Authority'
  },
  {
    phase: 4,
    name: 'Execution & Scale',
    duration: 'Days 76-100',
    description: 'Connect your course learnings with the Realtor Hub automation to run a predictable enterprise.',
    deliverables: [
      'Automate your follow-up schedules using the CRM workflows',
      'Utilize Missed Call Text-Back to capture lost mobile leads',
      'Prepare for execution with "Your First Transaction" playbook',
      'Analyze business scorecards to optimize next quarters growth'
    ],
    focus: 'Systems, Automation & Repeatable Pipelines'
  }
];

export const VALUE_STACK_ITEMS: ValueStackItem[] = [
  {
    id: 'v1',
    title: 'Full 100 Days to $100K Course',
    description: 'Step-by-step business structure, daily sprints, and executive coaching modules from Mark Peebles.',
    value: '$1,997',
    category: 'Course'
  },
  {
    id: 'v2',
    title: 'Realtor Script Vault',
    description: 'Word-for-word templates for buyers, listings, expireds, cold nurtures, and commission objections.',
    value: '$497',
    category: 'Templates'
  },
  {
    id: 'v3',
    title: '35 Advanced AI Prompts For Realtors',
    description: 'Plug-and-play prompts for roleplaying objections, drafting emails, and local market analysis.',
    value: '$297',
    category: 'Tools'
  },
  {
    id: 'v4',
    title: 'Buyer/Seller Conversation Builder',
    description: 'Worksheets to prepare consultations, handle tough objections, and secure firm client commitment.',
    value: '$197',
    category: 'Templates'
  },
  {
    id: 'v5',
    title: 'Agent Business Scorecard Tool',
    description: 'Comprehensive business health audit to identify where your real estate business is leaking deals.',
    value: '$297',
    category: 'Tools'
  },
  {
    id: 'v6',
    title: 'Realtor Email Template Vault',
    description: 'Ready-to-personalize email campaigns for buyers, listings, past-client nurturing, and referrals.',
    value: '$397',
    category: 'Templates'
  },
  {
    id: 'v7',
    title: 'Realtor Marketing Engine Training',
    description: 'Proven blueprint for Instagram reels, local Facebook group domination, and high-ROI local ads.',
    value: '$597',
    category: 'Course'
  },
  {
    id: 'v8',
    title: 'Realtor Power Network Builder Playbook',
    description: 'Step-by-step strategy to recruit local lenders, inspectors, and stagers into a mutual referral circle.',
    value: '$297',
    category: 'Course'
  },
  {
    id: 'v9',
    title: 'Your First Transaction Module',
    description: 'The end-to-end breakdown of what to do from initial offer prep to escrows, showings, and closings.',
    value: '$497',
    category: 'Course'
  },
  {
    id: 'v10',
    title: '30-Day Access to Ultimate Success Realtor Hub',
    description: 'Custom, fully-preloaded CRM with buyer/seller pipelines, follow-up automations, and appointment books.',
    value: '$297',
    category: 'Access'
  },
  {
    id: 'v11',
    title: 'Ultimate Success Circle Community Access',
    description: '30 days of direct access to live implementation walkthroughs, script roleplays, and coaching sessions.',
    value: '$197',
    category: 'Access'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is income guaranteed?',
    answer: 'Absolutely not. The 100 Days to $100K Framework provides the exact structure, scripts, tools, and training used by top-producing agents, but income is a direct result of your personal work ethic, local market conditions, skill development, consistency, and daily implementation. We do not support or sell "get-rich-quick" schemes.'
  },
  {
    question: 'Is this only for new realtors?',
    answer: 'While it is an incredible launchpad for newly licensed real estate agents, it is equally powerful for experienced agents who find themselves on a financial roller coaster—making sales one month and starting back at zero the next. If your daily schedule feels chaotic and unstructured, this framework is built for you.'
  },
  {
    question: 'What is the Realtor Hub?',
    answer: 'The Realtor Hub is a preloaded, all-in-one CRM and customer relationship software built specifically for our agents. It holds your buyer/seller pipelines, follow-up reminders, custom SMS/Email templates, calendar appointment sheets, and AI-assisted messaging scripts, meaning you have a single home for your database.'
  },
  {
    question: 'How long do I get access to the Realtor Hub and community?',
    answer: 'Your enrollment includes a full 30 days of active access to both the Realtor Hub CRM platform and our private Ultimate Success Community. After your first 30 days, you can choose to continue your CRM access and community membership via a flexible monthly subscription, or export your contacts. There are no locking contracts.'
  },
  {
    question: 'Do I need advanced tech experience?',
    answer: 'No. The CRM comes fully templated and pre-built for you. We provide step-by-step, bite-sized tutorials on how to upload your contacts, send emails, and customize your templates. If you can use a smartphone, you can easily operate the Realtor Hub.'
  },
  {
    question: 'Is this just another video course?',
    answer: 'No. Traditional courses give you information but leave you stranded on implementation. We provide a complete business-building suite: the physical worksheets, CRM templates, pre-written script archives, copywriting templates, hyper-specific AI prompt vaults, and a live community to help you actively execute the material.'
  },
  {
    question: 'Will this help me with my social media marketing?',
    answer: 'Yes! The Realtor Marketing Engine is a dedicated module focused on organic local positioning. It shows you how to structure Instagram Reels, set up highly active local Facebook Groups, write high-conversion copy, and execute targeted Meta local campaigns without spending thousands of dollars on agency retainers.'
  },
  {
    question: 'What happens immediately after I sign up?',
    answer: 'You will receive an instant email invitation to set up your account. From there, you get immediate access to the 100-Day Course, printable resources, and our step-by-step activation sequence for your 30-day trial of the Realtor Hub CRM and the private Ultimate Success Community.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Jessica Vance',
    role: 'Licensed 4 months, Denver CO',
    quote: 'Before this framework, I was staring at my computer screen every morning wondering what to do. Within 3 weeks of setting up the CRM and practicing the scripts, I booked 3 listing appointments and put my first client under contract.',
    avatar: 'JV',
    achievement: '1st Under Contract in 21 days'
  },
  {
    name: 'David Thorne',
    role: 'Realtor of 2 years, Atlanta GA',
    quote: 'I had my license but I did not have a business. I was treating real estate like a job where I waited for clients. The 100 Days Framework shifted my entire mindset to that of an entrepreneur. My daily rhythm is now non-negotiable.',
    avatar: 'DT',
    achievement: 'Structured CRM & Consistent Pipeline'
  },
  {
    name: 'Elena Rostova',
    role: 'New Agent, Miami FL',
    quote: 'The AI prompts alone are worth triple the enrollment fee. I was able to roleplay listing objections with ChatGPT using Mark\'s prompts, which gave me the confidence to walk into my first FSBO meeting and walk out with a signed agreement.',
    avatar: 'ER',
    achievement: 'Closed first relocation deal'
  }
];

export const AI_PROMPT_PREVIEWS = [
  {
    title: 'objection-roleplay',
    name: 'Objection Roleplayer Prompts',
    description: 'Train your response to tough commission cuts and listing delay talk-tracks.',
    code: `Act as a skeptical home seller who wants to list their home $30,000 above the market comparable sales. I am your listing agent. Raise the objection "We want to list higher because of our updated kitchen and we are not in a rush." Let's roleplay. Wait for my response, then reply as the seller in character. Grade my response out of 10 and suggest a conversational correction.`
  },
  {
    title: 'nurture-email',
    name: 'Un-Googleable Local Nurture Builder',
    description: 'Instantly generate high-value, highly localized email scripts that position you as an expert.',
    code: `Write a short 3-paragraph email to cold buyer prospects who visited an open house 2 weeks ago. Highlight a recent shift in our local zip code (e.g., inventory rising, minor interest rate adjustment). The tone must be informative, objective, and analytical (like a premium real estate guide, not a salesperson). End with a subtle, value-first call to action regarding custom home evaluations.`
  }
];
