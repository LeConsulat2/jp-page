'use client';

import { BlurFade } from '@/ui/blur-fade';
import { Separator } from '@/ui/separator';
import { Particles } from '@/ui/particles';
import { ExternalLinkIcon } from 'lucide-react';

const COMPETENCIES = [
  { title: 'Stakeholder & Partner Engagement', desc: 'Built and maintained relationships with agents, sponsors, faculty leaders, DHBs, and external partners across NZ and internationally.' },
  { title: 'International Student Support', desc: 'Guided international students through admissions, visa-related matters, eligibility, and pathway planning across AUT and University of Auckland.' },
  { title: 'Cross-Cultural Communication', desc: 'Bilingual in English and Korean; experienced supporting diverse international student cohorts with culturally inclusive, mana-enhancing service.' },
  { title: 'Recruitment & Engagement Events', desc: 'Supported open days, orientation, agent visits, international recruitment activities, and re-enrolment drives across both NZ universities.' },
  { title: 'B2B & Partnership Coordination', desc: 'Coordinated supplier and partner relationships at Terrace Downs (15+ wholesalers), and agency engagement conversations at AUT.' },
  { title: 'Bilingual Content Production', desc: 'Produced multilingual resort brochures, EN→KR course translations, and Korean-language communication materials for international audiences.' },
];

const EXPERIENCE = [
  {
    role: 'Admissions Services Coordinator',
    org: 'University of Auckland',
    period: 'Jul 2025 – Present',
    tag: 'Current',
    desc: 'Coordinate admissions workflows and translate complex documentation, eligibility, and compliance requirements into clear guidance for international applicants and staff.',
  },
  {
    role: 'Project Translator & Co-ordinator',
    org: 'Nomad Coders (Remote)',
    period: 'Oct 2024 – Jul 2025',
    tag: null,
    desc: 'Managed end-to-end EN→KR localisation of programming courses, coordinating with international instructors and content teams across time zones.',
  },
  {
    role: 'Student Advisor',
    org: 'Auckland University of Technology',
    period: 'Nov 2022 – Sep 2024',
    tag: null,
    desc: 'Primary contact for international applicants across admissions, IELTS requirements, visa compliance, and pathway planning. Partnered with Immigration NZ and sponsors.',
  },
  {
    role: 'Senior Programme Administrator',
    org: 'Auckland University of Technology',
    period: 'Jul 2018 – Aug 2022',
    tag: null,
    desc: 'Supported external partner visits, scholarship coordination, and international programme administration. Coordinated postgraduate training for students across 15 DHBs nationwide.',
  },
  {
    role: 'Golf Operations Manager',
    org: 'Terrace Downs Resort',
    period: 'Jan 2015 – Jan 2017',
    tag: null,
    desc: 'Built relationships with 15+ wholesalers and sponsors. Produced multilingual resort brochures and coordinated corporate client engagement for 20+ events annually.',
  },
];

const LANGUAGES = [
  { lang: 'English', flag: '🇬🇧', level: 'Fluent', bar: 100 },
  { lang: 'Korean', flag: '🇰🇷', level: 'Native', bar: 100 },
  { lang: 'Te Reo Māori', flag: '🇳🇿', level: 'Basic', bar: 20 },
];

export default function V4() {
  return (
    <div className="relative min-h-screen bg-stone-950 text-white font-sans">
        <Particles
          className="pointer-events-none fixed inset-0 z-0"
          quantity={60}
          color="#fbbf24"
          staticity={50}
          ease={80}
        />

      {/* Header */}
      <BlurFade duration={0.4}>
        <header className="sticky top-0 z-10 border-b border-amber-500/10 bg-stone-950/90 px-6 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">Jonathan Park</span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs text-stone-500">International & Relationships</span>
              <a
                href="https://jp-page.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-400 transition-colors"
              >
                Portfolio <ExternalLinkIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </header>
      </BlurFade>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <BlurFade delay={0.1} duration={0.7} direction="up" offset={24}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            International Engagement · Relationship Management
          </p>
          <h1 className="text-5xl font-black tracking-tight leading-none md:text-7xl">
            Jonathan{' '}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Park
            </span>
          </h1>
          <p className="mt-4 text-base text-stone-400 tracking-wide">
            Stakeholder Liaison · Cross-Cultural Communication · B2B Partnerships
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300">
            Relationship-driven professional with <strong className="text-white">7+ years</strong> in NZ tertiary
            education, combining stakeholder engagement, international student support, and cross-cultural
            expertise. Native Korean speaker with a track record of building trust across diverse institutions,
            agents, sponsors, and international partners.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Auckland, NZ', 'wooine2@gmail.com'].map((tag) => (
              <span key={tag} className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1 text-xs text-amber-300/80">
                {tag}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Language Bar */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={18}>
          <div className="rounded-xl border border-amber-500/15 bg-amber-500/5 p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Languages</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {LANGUAGES.map((l) => (
                <div key={l.lang} className="flex items-center gap-3">
                  <span className="text-2xl">{l.flag}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs font-medium text-white">{l.lang}</span>
                      <span className="text-xs text-stone-500">{l.level}</span>
                    </div>
                    <div className="h-1 rounded-full bg-stone-800">
                      <div
                        className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                        style={{ width: `${l.bar}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Core Competencies */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Core Competencies
          </p>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {COMPETENCIES.map((c, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.06} duration={0.6} direction="up" offset={14}>
              <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-5 hover:border-amber-500/25 transition-colors">
                <h3 className="text-sm font-semibold text-amber-300 mb-2">{c.title}</h3>
                <p className="text-xs leading-relaxed text-stone-400">{c.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Experience</p>
        </BlurFade>
        <div className="space-y-5">
          {EXPERIENCE.map((exp, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.07} duration={0.6} direction="up" offset={14}>
              <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-stone-800 bg-stone-900/40 p-5 hover:border-amber-500/20 transition-colors">
                <div className="shrink-0 text-right sm:text-left sm:w-32">
                  <span className="text-[10px] text-stone-500">{exp.period}</span>
                  {exp.tag && (
                    <span className="ml-2 sm:ml-0 sm:block rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-300">
                      {exp.tag}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                  <p className="text-xs text-amber-400/65 mt-0.5 mb-2">{exp.org}</p>
                  <p className="text-xs leading-relaxed text-stone-400">{exp.desc}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 py-8 pb-16">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={16}>
          <div className="rounded-xl border border-amber-500/10 bg-amber-500/4 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">Values & Cultural Practice</p>
            <p className="text-sm leading-relaxed text-stone-300">
              I work with cultural humility and strong respect for tangata whenua and culturally diverse communities.
              In student-facing and partner-facing settings, I focus on clear communications,
              mana-enhancing service, and practical support that improves equitable outcomes.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800/60 py-8 text-center text-xs text-stone-600">
        Jonathan Park · Auckland, New Zealand · English & Korean · References available upon request
      </footer>
    </div>
  );
}
