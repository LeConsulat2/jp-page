'use client';

import { BlurFade } from '@/ui/blur-fade';
import { Separator } from '@/ui/separator';
import { Particles } from '@/ui/particles';
import { ExternalLinkIcon } from 'lucide-react';

const STATS = [
  { value: '7+', label: 'Years in NZ Tertiary', sublabel: 'AUT & University of Auckland' },
  { value: '25%', label: 'Processing Time Cut', sublabel: 'Excel & Teams dashboards' },
  { value: '500+', label: 'Cases / Month', sublabel: 'High-volume service environments' },
  { value: '15+', label: 'Partner Orgs', sublabel: 'DHBs & external stakeholders' },
];

const TOOLS = [
  { category: 'CRM & Systems', items: ['Dynamics 365', 'Arion (SMS)', 'SharePoint', 'Canvas', 'CS9'] },
  { category: 'Data & Reporting', items: ['Advanced Excel', 'VBA Macros', 'PowerPoint Briefings', 'Dashboard Design', 'Workflow Tracking'] },
  { category: 'Process & Compliance', items: ['Policy Interpretation', 'Document Verification', 'Identity Compliance', 'Quality Assurance'] },
  { category: 'Communication', items: ['Stakeholder Briefings', 'Technical Documentation', 'English (Fluent)', 'Korean (Native)'] },
];

const HIGHLIGHTS = [
  {
    title: 'Admissions Dashboard Design',
    org: 'University of Auckland',
    period: 'Jul 2025 – Present',
    desc: 'Designed and maintained reporting outputs converting daily queue volumes, turnaround times, and backlog risk signals into actionable plans for team leads and management.',
  },
  {
    title: 'Enrolment Workflow Optimisation',
    org: 'Auckland University of Technology',
    period: '2018 – 2022',
    desc: 'Built Excel and Teams-based tracking dashboards that reduced enrolment processing time by 25%. Coordinated compliance-sensitive records across 15 District Health Boards nationwide.',
  },
  {
    title: 'CRM Data Analysis & Reporting',
    org: 'Auckland University of Technology',
    period: '2022 – 2024',
    desc: 'Analysed CRM and service data to surface recurring enrolment issues. Authored structured reports providing actionable insights for leadership; served as Arion SMS system representative.',
  },
  {
    title: 'AI-Assisted Localisation Pipeline',
    org: 'Nomad Coders (Remote)',
    period: '2024 – 2025',
    desc: 'Built and iteratively refined AI-assisted translation workflows (EN→KR) for programming courses. Developed QA processes to enhance output consistency and reduce rework at scale.',
  },
];

export default function V3() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans">
        <Particles
          className="pointer-events-none fixed inset-0 z-0"
          quantity={60}
          color="#34d399"
          staticity={50}
          ease={80}
        />

      {/* Header */}
      <BlurFade duration={0.4}>
        <header className="sticky top-0 z-10 border-b border-emerald-500/10 bg-zinc-950/90 px-6 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">Jonathan Park</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs text-zinc-500">Data & Analytics</span>
              <a
                href="https://jp-page.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Portfolio <ExternalLinkIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </header>
      </BlurFade>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10">
        <BlurFade delay={0.1} duration={0.7} direction="up" offset={24}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Data · Operations · Process Improvement
          </p>
          <h1 className="text-5xl font-black tracking-tight leading-none md:text-7xl">
            Jonathan{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
              Park
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">
            Operations and data specialist with <strong className="text-white">7+ years</strong> driving
            measurable improvements in tertiary education settings. Expert in CRM reporting, dashboard design,
            workflow analysis, and converting complex service data into decisions that stick. Technically proficient
            in Dynamics 365, Arion, advanced Excel (VBA), and PowerPoint briefing structures.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
            <span>Auckland, NZ</span>
            <span className="text-zinc-700">·</span>
            <span>wooine2@gmail.com</span>
          </div>
        </BlurFade>
      </section>

      {/* Stats Grid */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.08} duration={0.55} direction="up" offset={16}>
              <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-5">
                <p className="text-3xl font-black text-emerald-400">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-white">{stat.label}</p>
                <p className="mt-0.5 text-[10px] text-zinc-500">{stat.sublabel}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Project Highlights */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Key Projects & Contributions
          </p>
        </BlurFade>
        <div className="grid gap-4 md:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.07} duration={0.6} direction="up" offset={16}>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-emerald-500/30 transition-colors">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{h.title}</h3>
                    <p className="text-xs text-emerald-400/70 mt-0.5">{h.org}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-zinc-600 mt-0.5">{h.period}</span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">{h.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Tools Grid */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tools & Competencies
          </p>
        </BlurFade>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {TOOLS.map((group, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.06} duration={0.6} direction="up" offset={14}>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-emerald-500/70">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="h-1 w-1 rounded-full bg-emerald-500/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Education</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <p className="text-white font-medium">Graduate Diploma in Computer Science</p>
              <p className="text-xs text-zinc-500 mt-0.5">AUT · In progress (SQL/Database Systems completed)</p>
            </div>
            <div>
              <p className="text-white font-medium">Bachelor of Sport & Recreation</p>
              <p className="text-xs text-zinc-500 mt-0.5">AUT · 2014</p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-600">
        Jonathan Park · Auckland, New Zealand · References available upon request
      </footer>
    </div>
  );
}
