'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PortfolioLink {
  title: string;
  url: string;
  icon: string;
}

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioLinks, setPortfolioLinks] = useState<PortfolioLink[]>([]);

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        setIsLoading(true);
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <motion.header className="w-full px-6 py-4 sticky top-0 bg-black/30 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold text-pink-400 flex items-center">
                <span role="img" aria-label="store" className="mr-2">
                  🏪
                </span>
                My Portfolios
              </h1>
            </div>
          </motion.header>

          <main className="w-full max-w-screen mx-auto px-8 py-12">
            <section className="text-center mb-8">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Jonathan Park
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: 'easeOut',
                  },
                }}
                className="mt-4 text-lg text-gray-300 p-6 rounded-lg 
                  bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                  backdrop-blur-sm
                  border border-purple-500/20
                  shadow-lg shadow-purple-500/10"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
                >
                  👋 Kia ora,
                </motion.span>{' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  Welcome again to my portfolios! Here, I showcase my data
                  analysis examples. I believe in maintaining accurate and
                  correct way of data to prepare insightful reports. Along with
                  this, I also like to stay creative and not lose the beauty to
                  my charts and reports. My goal is to create visuals that
                  capture the audience’s attention and help them fully
                  understand the story behind the data.
                </motion.span>
              </motion.p>
            </section>
            <motion.section
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {portfolioLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="w-full max-w-xs p-6 rounded-lg bg-gradient-to-r from-purple-700 to-pink-600 hover:scale-105 transition-transform shadow-md text-center"
                >
                  <div className="text-3xl mb-4">{link.icon}</div>
                  <div className="text-lg font-semibold">{link.title}</div>
                </motion.a>
              ))}
            </motion.section>
          </main>

          <footer className="w-full py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Jonathan Park. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}
