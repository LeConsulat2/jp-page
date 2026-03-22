'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PortfolioLink {
  title: string;
  url: string;
  icon: string;
  image: string | null;
  description: string;
}

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioLinks, setPortfolioLinks] = useState<PortfolioLink[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<PortfolioLink | null>(null);

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const response = await fetch('/api');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setPortfolioLinks(data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPortfolios();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const prev = () => setActiveIndex((a) => Math.max(0, a - 1));
  const next = () => setActiveIndex((a) => Math.min(portfolioLinks.length - 1, a + 1));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">🏪</div>
          <p className="text-gray-400 animate-pulse">Loading portfolios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-6 py-4 sticky top-0 bg-black/30 backdrop-blur-md shadow-md z-10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-400 flex items-center">
            <span className="mr-2">🏪</span>
            My Portfolios
          </h1>
          <span className="text-sm text-gray-500">
            {activeIndex + 1} / {portfolioLinks.length}
          </span>
        </div>
      </motion.header>

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 pt-10 pb-4"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Jonathan Park
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed">
          👋 Kia ora — welcome to my portfolios. Swipe or use the arrows to browse, then click
          the active card to preview.
        </p>
      </motion.section>

      {/* 3D Carousel */}
      <div className="flex-1 flex flex-col items-center justify-center pb-10">
        {/* Stage */}
        <div
          className="relative w-full flex items-center justify-center"
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
                  opacity: abs === 0 ? 1 : abs === 1 ? 0.58 : 0.22,
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
                <div
                  className={`w-[220px] rounded-2xl overflow-hidden shadow-2xl transition-shadow
                    ${isActive
                      ? 'ring-2 ring-pink-500/60 shadow-pink-500/20 cursor-pointer'
                      : 'cursor-pointer'
                    }
                    bg-gradient-to-br from-purple-800/80 to-pink-700/80 backdrop-blur-sm`}
                >
                  {/* Card image or placeholder */}
                  <div className="relative w-full h-[140px] bg-black/30">
                    {link.image ? (
                      <Image
                        src={link.image}
                        alt={link.title}
                        fill
                        className="object-cover opacity-80"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl">
                        {link.icon}
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-4">
                    <div className="text-2xl mb-2">{link.icon}</div>
                    <p className="text-sm font-semibold leading-snug line-clamp-3">
                      {link.title}
                    </p>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-xs text-pink-300"
                      >
                        Click to preview →
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30
                       flex items-center justify-center transition-colors text-white"
          >
            ←
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {portfolioLinks.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2 bg-pink-500'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={activeIndex === portfolioLinks.length - 1}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30
                       flex items-center justify-center transition-colors text-white"
          >
            →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jonathan Park. All rights reserved.
      </footer>

      {/* Intercept Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setSelected(null)}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="w-full max-w-2xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl
                           border border-white/10 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Screenshot */}
                <div className="relative w-full aspect-video bg-black">
                  {selected.image ? (
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl bg-gradient-to-br from-purple-800 to-pink-700">
                      {selected.icon}
                    </div>
                  )}

                  {/* Close button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60
                               hover:bg-black/80 flex items-center justify-center text-white
                               transition-colors text-sm"
                  >
                    ✕
                  </button>

                  {/* Gradient overlay at the bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>

                {/* Details */}
                <div className="px-6 pb-6 pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{selected.icon}</span>
                    <h2 className="text-lg font-bold leading-snug text-white">
                      {selected.title}
                    </h2>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {selected.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600
                                 text-white font-semibold text-center text-sm hover:opacity-90 transition-opacity"
                    >
                      View Project →
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20
                                 text-white text-sm font-semibold transition-colors"
                    >
                      Close
                    </button>
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
