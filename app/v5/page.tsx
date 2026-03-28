'use client';

import { BlurFade } from '@/ui/blur-fade';
import { Separator } from '@/ui/separator';
import { Particles } from '@/ui/particles';
import { ExternalLinkIcon } from 'lucide-react';

const CREATIVE_TOOLS = [
  { name: 'Adobe Photoshop', icon: '🎨', category: 'Design' },
  { name: 'Adobe Premiere Pro', icon: '🎬', category: 'Video' },
  { name: 'Illustrator', icon: '✏️', category: 'Design' },
  { name: 'Canva', icon: '🖼️', category: 'Design' },
  { name: 'WordPress', icon: '🌐', category: 'Web' },
  { name: 'PowerPoint', icon: '📊', category: 'Presentation' },
  { name: 'Microsoft Excel', icon: '📈', category: 'Data' },
  { name: 'Video Editing', icon: '🎞️', category: 'Video' },
];

const CONTENT_WORK = [
  {
    title: 'Multilingual Content Production',
    tags: ['Korean', 'English', 'Localization'],
    desc: 'Led full end-to-end EN→KR translation of technical programming courses for Nomad Coders. Integrated AI-assisted workflows with human QA to maintain quality at scale.',
  },
  {
    title: 'Resort Branding & Digital Marketing',
    tags: ['WordPress', 'Brochure Design', 'Promotions'],
    desc: 'Maintained the Terrace Downs website via WordPress. Produced multilingual resort brochures and created seasonal promotions that generated $20K+ revenue in off-peak periods.',
  },
  {
    title: 'Data Dashboards & Visual Reporting',
    tags: ['Excel', 'PowerPoint', 'Briefings'],
    desc: 'Designed visually clear reporting dashboards and PowerPoint briefings for university leadership at AUT and University of Auckland, translating operational data into strategic insights.',
  },
  {
    title: 'AUT Sport Design Work',
    tags: ['Photoshop', 'Brand', 'Social'],
    desc: 'Personal design projects spanning sports photography compositing, motivational campaign graphics, and promotional visual content — combining storytelling with bold visual design.',
  },
];

const EXPERIENCE = [
  {
    role: 'Project Translator & Co-ordinator',
    org: 'Nomad Coders (Remote)',
    period: '2024 – 2025',
    creative: 'Localisation, AI workflow design, content QA',
  },
  {
    role: 'Admissions Services Coordinator',
    org: 'University of Auckland',
    period: '2025 – Present',
    creative: 'Reporting design, communication templates, visual briefings',
  },
  {
    role: 'Student Advisor / Senior Programme Admin',
    org: 'Auckland University of Technology',
    period: '2018 – 2024',
    creative: 'Dashboard design, training materials, stakeholder presentations',
  },
  {
    role: 'Golf Operations Manager',
    org: 'Terrace Downs Resort',
    period: '2015 – 2017',
    creative: 'Website management, multilingual brochures, event promotion',
  },
];

export default function V5() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-sans">
        <Particles
          className="pointer-events-none fixed inset-0 z-0"
          quantity={60}
          color="#a78bfa"
          staticity={50}
          ease={80}
        />

      {/* Gradient glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-pink-700/6 blur-[100px]" />
      </div>

      {/* Header */}
      <BlurFade duration={0.4}>
        <header className="sticky top-0 z-10 border-b border-violet-500/10 bg-slate-950/85 px-6 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-sm font-black tracking-widest text-transparent uppercase">
              JP
            </span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs text-slate-500">Creative & Digital</span>
              <a
                href="https://jp-page.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-400 transition-colors"
              >
                Portfolio <ExternalLinkIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </header>
      </BlurFade>

      {/* Hero — Bold */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <BlurFade delay={0.1} duration={0.7} direction="up" offset={28}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Design · Content · Digital Communications
          </p>
          <h1 className="text-6xl font-black leading-none tracking-tighter md:text-8xl">
            <span className="bg-gradient-to-br from-violet-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jonathan
            </span>
            <br />
            <span className="text-white">Park</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
            Creative and communications professional who brings together visual design, digital storytelling,
            and multilingual content production. From Adobe Photoshop to data dashboards — I make complex
            information land clearly and compellingly.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Auckland, NZ', 'wooine2@gmail.com'].map((tag) => (
              <span key={tag} className="rounded-full border border-violet-500/20 bg-violet-500/8 px-3 py-1 text-xs text-violet-300/80">
                {tag}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Creative Tools */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Creative Toolkit</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CREATIVE_TOOLS.map((tool, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all"
              >
                <span className="text-xl">{tool.icon}</span>
                <div>
                  <p className="text-xs font-medium text-white group-hover:text-violet-300 transition-colors">{tool.name}</p>
                  <p className="text-[10px] text-slate-600">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Content Work */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Creative & Communications Work
          </p>
        </BlurFade>
        <div className="grid gap-4 md:grid-cols-2">
          {CONTENT_WORK.map((work, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.07} duration={0.6} direction="up" offset={16}>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-violet-500/25 transition-colors">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-500/12 border border-violet-500/20 px-2 py-0.5 text-[10px] text-violet-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{work.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{work.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl opacity-10" />

      {/* Experience with creative angle */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={20}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Experience</p>
        </BlurFade>
        <div className="space-y-3">
          {EXPERIENCE.map((exp, i) => (
            <BlurFade key={i} inView delay={0.05 + i * 0.06} duration={0.6} direction="up" offset={12}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4 hover:border-violet-500/20 transition-colors">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{exp.role}</p>
                  <p className="text-xs text-violet-400/65 mt-0.5">{exp.org}</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-[10px] text-slate-600 mb-1">{exp.period}</p>
                  <p className="text-[10px] text-slate-500 italic">{exp.creative}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Personal interests */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <BlurFade inView delay={0.05} duration={0.6} direction="up" offset={16}>
          <div className="rounded-xl border border-violet-500/10 bg-gradient-to-br from-violet-500/5 to-pink-500/5 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3">Beyond the Brief</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>🎬 Video editing (Adobe Premiere Pro)</span>
              <span>🏊 Swimming — former Korean regional representative</span>
              <span>⛳ Golf — 2014 NZ Tour Professional</span>
              <span>🎹 Piano & Guitar</span>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8 text-center text-xs text-slate-600">
        Jonathan Park · Auckland, New Zealand · References available upon request
      </footer>
    </div>
  );
}
