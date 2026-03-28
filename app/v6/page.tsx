'use client';

import { BlurFade } from '@/ui/blur-fade';
import { Separator } from '@/ui/separator';
import { Particles } from '@/ui/particles';
import { ExternalLinkIcon } from 'lucide-react';

const ACHIEVEMENTS = [
  { value: '10', unit: 'staff', label: 'Team supervised at AUT Faculty of Health', icon: '👥' },
  { value: '20+', unit: 'events', label: 'Tournaments coordinated annually at Terrace Downs', icon: '🏆' },
  { value: '140+', unit: 'people', label: 'Managed per corporate event', icon: '📋' },
  { value: '$20K', unit: 'revenue', label: 'Generated from off-peak seasonal promotions', icon: '📈' },
  { value: '15+', unit: 'partners', label: 'Wholesalers & sponsors engaged at Terrace Downs', icon: '🤝' },
  { value: '25%', unit: 'faster', label: 'Processing time reduction via Excel dashboards', icon: '⚡' },
];

const LEADERSHIP = [
  {
    role: 'Admissions Services Coordinator',
    org: 'University of Auckland',
    period: 'Jul 2025 – Present',
    scope: 'Cross-team coordination · High-volume workflow management · Management reporting',
    highlights: [
      'Lead operational coordination across admissions teams maintaining real-time visibility of status and risk',
      'Produce structured reporting and presentation-ready insights to inform senior management decisions',
      'Drive process improvement through clearer compliance templates and communication standards',
    ],
  },
  {
    role: 'Student Advisor',
    org: 'Auckland University of Technology',
    period: 'Nov 2022 – Sep 2024',
    scope: 'Service leadership · System ownership · Cross-team collaboration',
    highlights: [
      'Served as Arion SMS system representative — capturing issues and converting feedback into structured system requirements',
      'Led training sessions for new advisors on international admissions workflows and CRM systems',
      'Held weekly financial delegation authority (up to $2,000/week) for student hardship cases',
    ],
  },
  {
    role: 'Senior Programme Administrator',
    org: 'Auckland University of Technology',
    period: 'Jul 2018 – Aug 2022',
    scope: 'Team leadership · Operational design · Partner coordination',
    highlights: [
      'Supervised 10 administrative staff — resolved workflow bottlenecks and ensured compliance across peak periods',
      'Designed Excel & Teams dashboards reducing enrolment processing time by 25%',
      'Coordinated complex postgraduate pathways across ~15 DHBs (now Health NZ) nationwide',
      'Identified alternative academic pathways boosting student retention through staircase progression routes',
    ],
  },
  {
    role: 'Golf Operations Manager',
    org: 'Terrace Downs Resort',
    period: 'Jan 2015 – Jan 2017',
    scope: 'Full operations ownership · Event delivery · Vendor management',
    highlights: [
      'Ran end-to-end delivery of 20+ corporate and private events annually (140+ attendees)',
      'Built relationships with 15+ wholesalers and suppliers resulting in sponsorship support for tournaments',
      'Created seasonal promotions generating $20K+ revenue during off-peak winter periods',
      'Developed SOPs for staff induction, checklist systems, and quality service standards across teams',
    ],
  },
];

const STRENGTHS = [
  { label: 'Operational Execution', desc: 'Translates strategy into reliable, repeatable process' },
  { label: 'Team Supervision & Training', desc: 'Builds capability through structured onboarding and SOP design' },
  { label: 'Stakeholder Management', desc: 'Manages up, across, and externally with precision' },
  { label: 'Data-Driven Decision Making', desc: 'Dashboards, CRM reporting, and Excel-led insights' },
  { label: 'Compliance & Policy Oversight', desc: 'University regulations, immigration, financial compliance' },
  { label: 'Event & Project Delivery', desc: 'Complex, multi-stakeholder delivery in high-expectation environments' },
];

export default function V6() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white font-sans">
        <Particles
          className="pointer-events-none fixed inset-0 z-0"
          quantity={60}
          color="#eab308"
          staticity={50}
          ease={80}
        />

      {/* Subtle gold glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-[400px] w-[600px] rounded-full bg-yellow-600/4 blur-[100px]" />
      </div>

      {/* Header */}
      <BlurFade duration={0.4}>
        <header className="sticky top-0 z-10 border-b border-yellow-500/10 bg-gray-950/90 px-6 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="text-sm font-bold tracking-widest text-yellow-500 uppercase">Jonathan Park</span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs text-gray-500">Leadership & Management</span>
              <a
                href="https://jp-page.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Portfolio <ExternalLinkIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </header>
      </BlurFade>

      {/* Hero — Executive */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10">
        <BlurFade delay={0.1} duration={0.7} direction="up" offset={24}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Senior Leadership · Strategic Operations
          </p>
          <h1 className="text-5xl font-black tracking-tight leading-none md:text-7xl">
            <span className="text-white">Jonathan </span>
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Park
            </span>
          </h1>
          <p className="mt-4 text-base text-gray-400">
            Team Leadership · Operational Design · Stakeholder Partnerships
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300">
            Results-oriented leader with <strong className="text-white">7+ years</strong> of management and
            coordination experience across NZ tertiary institutions and service organisations. Proven track record
            of supervising teams, designing operational systems, managing complex multi-stakeholder projects,
            and delivering measurable performance improvements.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500">
            <span>Auckland, NZ</span>
            <span>wooine2@gmail.com</span>
            <span>English · Korean</span>
          </div>
        </BlurFade>
      </section>

      {/* Achievement Metrics */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">Key Achievements</p>
        </BlurFade>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <BlurFade key={i} inView delay={0.04 + i * 0.06} duration={0.55} direction="up" offset={14}>
              <div className="rounded-xl border border-yellow-500/12 bg-yellow-500/4 p-4 hover:border-yellow-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{a.icon}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-yellow-400">{a.value}</span>
                    <span className="text-xs text-yellow-600 font-medium">{a.unit}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{a.label}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Leadership Experience */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Leadership Experience
          </p>
        </BlurFade>
        <div className="space-y-5">
          {LEADERSHIP.map((role, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.07} duration={0.6} direction="up" offset={16}>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-yellow-500/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-base font-bold text-white">{role.role}</h3>
                    <p className="text-sm text-yellow-500/70">{role.org}</p>
                  </div>
                  <span className="text-xs text-gray-600 shrink-0 sm:text-right">{role.period}</span>
                </div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                  {role.scope}
                </p>
                <ul className="space-y-1.5">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-gray-400 pl-3 relative before:absolute before:left-0 before:text-yellow-600 before:content-['›']">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Core Strengths */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Leadership Strengths
          </p>
        </BlurFade>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {STRENGTHS.map((s, i) => (
            <BlurFade key={i} inView delay={0.04 + i * 0.05} duration={0.55} direction="up" offset={12}>
              <div className="rounded-lg border border-gray-800 bg-gray-900/40 px-4 py-3">
                <p className="text-xs font-semibold text-yellow-400/80 mb-1">{s.label}</p>
                <p className="text-[11px] text-gray-500">{s.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={16}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">Education</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-white font-medium">Graduate Diploma in Computer Science (in progress)</p>
              <p className="text-xs text-gray-600 mt-0.5">Auckland University of Technology · SQL/Database Systems completed</p>
            </div>
            <div>
              <p className="text-white font-medium">Bachelor of Sport & Recreation</p>
              <p className="text-xs text-gray-600 mt-0.5">Auckland University of Technology · 2014</p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 py-8 text-center text-xs text-gray-700">
        Jonathan Park · Auckland, New Zealand · References available upon request
      </footer>
    </div>
  );
}
