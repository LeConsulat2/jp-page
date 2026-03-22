'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';

import { BlurFade } from '@/ui/blur-fade';
import { Card, CardHeader, CardTitle, CardDescription } from '@/ui/card';
import { Button } from '@/ui/button';
import { Separator } from '@/ui/separator';
import { Skeleton } from '@/ui/skeleton';
import { AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface PortfolioLink {
  title: string;
  url: string;
  icon: string;
  image: string | null;
  description: string;
}

const SKILLS = ['Product', 'Operations', 'Excel', 'Python', 'TypeScript', 'SQL', 'Premiere Pro', 'Illustrator'] as const;

export default function Home() {
  const [portfolioLinks, setPortfolioLinks] = useState<PortfolioLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<PortfolioLink | null>(null);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((data) => { setPortfolioLinks(data); setIsLoading(false); })
      .catch(() => setIsLoading(false));
  }, []);

  const prev = () => setActiveIndex((a) => Math.max(0, a - 1));
  const next = () => setActiveIndex((a) => Math.min(portfolioLinks.length - 1, a + 1));

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Ambient glow — purely decorative */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[500px] rounded-full bg-indigo-700/5 blur-[120px]" />
      </div>

      {/* ── Header ── */}
      <BlurFade duration={0.4} className="sticky top-0 z-10">
        <header className="border-b border-border bg-background/80 px-6 py-4 backdrop-blur-lg">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">JP</span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>Data</span>
              <Separator orientation="vertical" className="h-3" />
              <span>Dev</span>
              <Separator orientation="vertical" className="h-3" />
              <span>Design</span>
            </div>
          </div>
        </header>
      </BlurFade>

      {/* ── Hero ── */}
      <section className="flex flex-col items-center px-6 pt-28 pb-8 text-center">
        <BlurFade delay={0.1} duration={0.7} direction="up" offset={24} className="flex flex-col items-center gap-5">
          <span className="select-none text-5xl">👋</span>

          <h1 className="bg-gradient-to-br from-blue-300 via-indigo-400 to-blue-500 bg-clip-text pb-2 text-6xl font-black tracking-tight text-transparent md:text-8xl leading-none">
            Jonathan Park
          </h1>

          <p className="text-lg font-light tracking-widest text-muted-foreground md:text-xl">
            Product · Operations · Build · Design
          </p>

          <div className="mt-1 flex flex-wrap justify-center gap-2">
            {SKILLS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      <Separator className="mx-auto max-w-2xl opacity-20" />

      {/* ── About ── */}
      <section className="mx-auto max-w-2xl px-6 py-8">
        <BlurFade inView delay={0.05} duration={0.65} direction="up" offset={20} className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
            About
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            I&apos;m a{' '}
            <span className="text-blue-300">product-minded generalist</span> who operates across
            the full stack of a business — from{' '}
            <span className="text-indigo-300">operations and service design</span> to{' '}
            <span className="text-blue-300">data, automation, and front-end build</span>. I see
            systems quickly, find the friction, and fix both the process and the presentation.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Advanced Excel and Python for analysis and automation. TypeScript and SQL for
            building and querying. Premiere Pro, Photoshop, and Illustrator for when the work
            needs to look as good as it functions. Based in New Zealand — scroll through the
            work below and click any card to preview.
          </p>
        </BlurFade>
      </section>

      <Separator className="mx-auto max-w-2xl opacity-20" />

      {/* ── Portfolio Carousel ── */}
      <section className="pb-16 pt-8">

        {/* Label only wrapped in BlurFade — not the 3D stage */}
        <BlurFade inView delay={0.05} duration={0.65} direction="up" offset={20}>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
            Portfolio · {isLoading ? '…' : `${portfolioLinks.length} projects`}
          </p>
        </BlurFade>

        {isLoading ? (
          <div className="flex justify-center gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-[240px] w-[220px] rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            {/* 3D stage — no BlurFade wrapper so absolute cards aren't offset */}
            <div
              className="relative flex w-full items-center justify-center"
              style={{ perspective: 1200, minHeight: '60vh' }}
            >
              {portfolioLinks.map((link, index) => {
                const offset = index - activeIndex;
                const abs = Math.abs(offset);
                if (abs > 2) return null;
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-0"
                    animate={{
                      x: offset * 260,
                      rotateY: offset * -36,
                      scale: 1 - abs * 0.13,
                      opacity: abs === 0 ? 1 : abs === 1 ? 0.55 : 0.2,
                      zIndex: 10 - abs,
                    }}
                    transition={{ type: 'spring', stiffness: 290, damping: 30 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) next();
                      if (info.offset.x > 80) prev();
                    }}
                    onClick={() => {
                      if (offset === 1) { next(); return; }
                      if (offset === -1) { prev(); return; }
                      if (isActive) setSelected(link);
                    }}
                  >
                    <Card
                      className={cn(
                        'w-[220px] cursor-pointer overflow-hidden border-border/40 bg-card/80 backdrop-blur-sm transition-shadow',
                        isActive && 'shadow-xl shadow-blue-500/10 ring-1 ring-blue-400/40'
                      )}
                    >
                      <div className="relative h-[140px] w-full bg-muted">
                        {link.image ? (
                          <Image
                            src={link.image}
                            alt={link.title}
                            fill
                            className="object-cover opacity-75"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-5xl">
                            {link.icon}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                      </div>

                      <CardHeader className="pt-3">
                        <div className="text-xl">{link.icon}</div>
                        <CardTitle className="line-clamp-3 text-xs leading-snug">
                          {link.title}
                        </CardTitle>
                        {isActive && (
                          <CardDescription className="text-[10px] text-blue-400">
                            Click to preview →
                          </CardDescription>
                        )}
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="-mt-[120px] flex items-center justify-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                disabled={activeIndex === 0}
                className="rounded-full"
              >
                <ChevronLeftIcon />
              </Button>

              <div className="flex items-center gap-1.5">
                {portfolioLinks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      'rounded-full transition-all duration-300',
                      i === activeIndex
                        ? 'h-2 w-6 bg-blue-400'
                        : 'h-2 w-2 bg-muted hover:bg-muted-foreground'
                    )}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                disabled={activeIndex === portfolioLinks.length - 1}
                className="rounded-full"
              >
                <ChevronRightIcon />
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground/40">
              {activeIndex + 1} of {portfolioLinks.length} — drag or use arrows
            </p>
          </>
        )}
      </section>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jonathan Park · New Zealand
      </footer>

      {/* ── Intercept Modal ── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 32 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ pointerEvents: 'none' }}
            >
              <div
                className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
                style={{ pointerEvents: 'auto' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Screenshot */}
                <div className="relative aspect-video w-full bg-muted">
                  {selected.image ? (
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-950 to-indigo-900 text-7xl">
                      {selected.icon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setSelected(null)}
                    className="absolute right-3 top-3 rounded-full bg-black/50 text-white hover:bg-black/80"
                  >
                    ✕
                  </Button>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 pt-4">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="text-2xl">{selected.icon}</span>
                    <p className="text-base font-semibold leading-snug text-foreground">
                      {selected.title}
                    </p>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {selected.description}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
                    >
                      <a href={selected.url} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLinkIcon className="ml-1.5 size-3.5" />
                      </a>
                    </Button>
                    <Button variant="outline" onClick={() => setSelected(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
