'use client';

import { BlurFade } from '@/ui/blur-fade';
import { Separator } from '@/ui/separator';
import { Card } from '@/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';
import { Particles } from '@/ui/particles';
import { ExternalLinkIcon } from 'lucide-react';
import InfiniteMenu from '@/components/InfiniteMenu';

const EXPERIENCE = [
  {
    role: 'Admissions Services Coordinator',
    org: 'University of Auckland',
    period: 'Jul 2025 – Present',
    current: true,
    bullets: [
      'Coordinate high-volume admissions workflows maintaining visibility over status, risk, and delivery priorities',
      'Design and maintain reporting dashboards converting queue activity into daily actions for team leads',
      'Translate complex policy, documentation, and eligibility requirements into clear operational guidance',
    ],
  },
  {
    role: 'Project Translator & Co-ordinator',
    org: 'Nomad Coders (Remote)',
    period: 'Oct 2024 – Jul 2025',
    current: false,
    bullets: [
      'Led end-to-end EN→KR translation of programming courses integrating human and AI-assisted workflows',
      'Coordinated international instructors and content teams to deliver projects on schedule',
    ],
  },
  {
    role: 'Student Advisor',
    org: 'Auckland University of Technology',
    period: 'Nov 2022 – Sep 2024',
    current: false,
    bullets: [
      'Provided frontline advising across admissions, enrolment, fees, StudyLink, visas, and pathway planning',
      'Acted as Arion system representative — converting staff feedback into structured requirements for system owners',
      'Financial hardship support: weekly delegation authority up to $2,000/week',
    ],
  },
  {
    role: 'Senior Programme Administrator',
    org: 'Auckland University of Technology',
    period: 'Jul 2018 – Aug 2022',
    current: false,
    bullets: [
      'Supervised 10 administrative staff across the Faculty of Health and Environmental Sciences',
      'Designed Excel & Teams dashboards for enrolment tracking — reduced processing time by 25%',
      'Coordinated postgraduate training pathways across ~15 DHBs (now Health NZ) nationwide',
    ],
  },
  {
    role: 'Sales & Service Consultant',
    org: 'AA Insurance',
    period: 'May 2017 – Jul 2018',
    current: false,
    bullets: [
      'Managed 500+ inbound calls monthly; awarded Consultant of the Month within first 6 months',
    ],
  },
];

const SKILLS = [
  { name: 'Dynamics 365', tip: 'CRM & student lifecycle management' },
  { name: 'Arion', tip: 'Student management system; acted as system rep at AUT' },
  { name: 'SharePoint', tip: 'Document management & team collaboration' },
  { name: 'Canvas', tip: 'LMS administration & course setup' },
  { name: 'CS9', tip: 'Student information system' },
  { name: 'Advanced Excel & VBA', tip: 'Dashboard design, automation, enrolment tracking' },
  { name: 'PowerPoint', tip: 'Presentations & stakeholder reporting' },
  { name: 'Microsoft 365 / Teams', tip: 'Cross-team coordination & communications' },
  { name: 'Policy & Compliance', tip: 'Admissions, fees, visa & enrolment policy' },
  { name: 'Student Lifecycle Management', tip: 'End-to-end student journey coordination' },
  { name: 'Stakeholder Engagement', tip: 'DHBs, faculties, government bodies' },
  { name: 'Cross-cultural Communication', tip: 'English/Korean bilingual, diverse populations' },
  { name: 'English (Fluent)', tip: 'Professional working proficiency' },
  { name: 'Korean (Native)', tip: '한국어 원어민' },
  { name: 'Te Reo Māori (Basic)', tip: 'Basic conversational level' },
];

const EDUCATION = [
  { degree: 'Graduate Diploma in Computer Science (in progress)', school: 'Auckland University of Technology', note: 'SQL/Database Systems completed' },
  { degree: 'Bachelor of Sport & Recreation', school: 'Auckland University of Technology', note: '2014' },
  { degree: 'Diploma of Sport & Recreation', school: 'Auckland University of Technology', note: '2010' },
];

const PORTFOLIO_ITEMS = [
  {
    image: '/images/finance.png',
    link: 'https://jp-page.vercel.app',
    title: 'Finance Dashboard',
    description: 'Financial reporting & data visualisation',
  },
  {
    image: '/images/global.png',
    link: 'https://jp-page.vercel.app',
    title: 'Global Operations',
    description: 'International coordination project',
  },
  {
    image: '/images/income-cal.png',
    link: 'https://jp-page.vercel.app',
    title: 'Income Calculator',
    description: 'Custom Excel-based planning tool',
  },
  {
    image: '/images/kakao.jpg',
    link: 'https://jp-page.vercel.app',
    title: 'Kakao Platform',
    description: 'EN→KR translation & coordination',
  },
  {
    image: '/images/optimizing-market.png',
    link: 'https://jp-page.vercel.app',
    title: 'Market Optimisation',
    description: 'Process improvement & analytics',
  },
  {
    image: '/images/M&A.png',
    link: 'https://jp-page.vercel.app',
    title: 'M&A Analysis',
    description: 'Strategic financial analysis tools',
  },
];

export default function V2() {
  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-neutral-950 text-white font-sans">

        {/* Particle background */}
        <Particles
          className="pointer-events-none fixed inset-0 z-0"
          quantity={60}
          color="#2dd4bf"
          staticity={50}
          ease={80}
        />

        {/* Header */}
        <BlurFade duration={0.4}>
          <header className="sticky top-0 z-10 border-b border-teal-500/10 bg-neutral-950/90 px-6 py-4 backdrop-blur-md">
            <div className="mx-auto flex max-w-4xl items-center justify-between">
              <span className="text-sm font-bold tracking-widest text-teal-400 uppercase">Jonathan Park</span>
              <div className="flex items-center gap-4">
                <span className="hidden sm:block text-xs text-neutral-500">Education & Operations</span>
                <a
                  href="https://jp-page.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-teal-400 transition-colors"
                >
                  Portfolio <ExternalLinkIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          </header>
        </BlurFade>

        {/* Hero */}
        <section className="relative z-[1] mx-auto max-w-4xl px-6 pt-20 pb-12">
          <BlurFade delay={0.1} duration={0.7} direction="up" offset={24}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Tertiary Education Professional
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl leading-none">
              Jonathan<br />
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Park
              </span>
            </h1>
            <p className="mt-4 text-base text-neutral-400 tracking-wide">
              Programme Administration · Student Services · Operational Coordination
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300">
              Tertiary education professional with <strong className="text-white">7+ years</strong> across
              New Zealand universities — specialising in admissions coordination, student advisory, and
              data-driven process improvement. Technically fluent across Dynamics 365, Arion, SharePoint,
              and advanced Excel. Bilingual in English and Korean.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Auckland, NZ', 'wooine2@gmail.com', 'English · Korean (Native)'].map((tag) => (
                <span key={tag} className="rounded-full border border-teal-500/25 bg-teal-500/8 px-3 py-1 text-xs text-teal-300">
                  {tag}
                </span>
              ))}
            </div>
          </BlurFade>
        </section>

        <Separator className="relative z-[1] mx-auto max-w-4xl opacity-10" />

        {/* Experience */}
        <section className="relative z-[1] mx-auto max-w-4xl px-6 py-12">
          <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Professional Experience
            </p>
          </BlurFade>

          <div className="flex flex-col gap-4">
            {EXPERIENCE.map((exp, i) => (
              <BlurFade key={i} inView delay={0.05 + i * 0.07} duration={0.6} direction="up" offset={16}>
                <Card className="border border-neutral-800 bg-neutral-900/60 px-5 py-4 rounded-xl backdrop-blur-sm hover:border-teal-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex items-start gap-3">
                      {exp.current && (
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                      )}
                      <div className={exp.current ? '' : 'pl-5'}>
                        <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                        <p className="text-xs text-teal-400/80 mt-0.5">{exp.org}</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${
                        exp.current
                          ? 'bg-teal-500/15 text-teal-300'
                          : 'text-neutral-500'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className={`space-y-1.5 ${exp.current ? 'pl-5' : 'pl-5'}`}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-xs text-neutral-400 pl-3 relative before:absolute before:left-0 before:text-teal-500 before:content-['–']">
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>

        <Separator className="relative z-[1] mx-auto max-w-4xl opacity-10" />

        {/* Skills with Tooltips */}
        <section className="relative z-[1] mx-auto max-w-4xl px-6 py-12">
          <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Technical & Professional Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <span className="cursor-default rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 hover:border-teal-500/40 hover:text-teal-300 transition-colors">
                      {skill.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    {skill.tip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </BlurFade>
        </section>

        <Separator className="relative z-[1] mx-auto max-w-4xl opacity-10" />

        {/* Portfolio Highlights — InfiniteMenu */}
        <section className="relative z-[1] mx-auto max-w-4xl px-6 py-12">
          <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Portfolio Highlights
            </p>
            <p className="mb-6 text-xs text-neutral-500">Drag to explore · click an item to visit</p>
          </BlurFade>
          <BlurFade inView delay={0.1} duration={0.7}>
            <div className="h-[480px] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
              <InfiniteMenu items={PORTFOLIO_ITEMS} scale={0.9} />
            </div>
          </BlurFade>
        </section>

        <Separator className="relative z-[1] mx-auto max-w-4xl opacity-10" />

        {/* Education */}
        <section className="relative z-[1] mx-auto max-w-4xl px-6 py-12">
          <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">Education</p>
            <div className="space-y-5">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <p className="text-sm font-medium text-white">{edu.degree}</p>
                    <p className="text-xs text-teal-400/65 mt-0.5">{edu.school}</p>
                  </div>
                  <span className="text-xs text-neutral-500 shrink-0">{edu.note}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </section>

        {/* Footer */}
        <footer className="relative z-[1] border-t border-neutral-800/60 py-8 text-center text-xs text-neutral-600">
          Jonathan Park · Auckland, New Zealand · References available upon request
        </footer>
      </div>
    </TooltipProvider>
  );
}
