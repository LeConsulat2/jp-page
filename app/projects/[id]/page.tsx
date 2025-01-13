'use client';

import { motion } from 'framer-motion';

export default function Projects({
  params: { id },
}: {
  params: { id: string };
}) {
  // Optional: Use id for debugging or future use
  console.log('Project ID:', id);

  const portfolioLinks = [
    {
      title: 'Excel Reports & Dashboards',
      url: 'https://onedrive.live.com/?id=D35BD98C5FB12BF6%21s7096425c5f544c9e812641df5d5e7df0&cid=D35BD98C5FB12BF6',
      icon: '📊',
    },
    {
      title: 'Ronacorona Dashboards',
      url: 'https://leconsulat2-ronacorona-dashboard-v2-main-bp7cp3.streamlit.app/',
      icon: '📈',
    },
    {
      title: 'Python-GPT',
      url: 'https://leconsulat2-fullstack-gpt-home-yuvpqy.streamlit.app/',
      icon: '🤖',
    },
    {
      title: 'HTML&CSS Students Canvas Clone',
      url: 'https://leconsulat2.github.io/canvas-clone/',
      icon: '🎨',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-sm bg-black/30 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏪</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              My Portfolios
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {portfolioLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                  hover:from-purple-500/20 hover:to-pink-500/20 backdrop-blur-sm transition-all"
              >
                <span className="mr-2">{link.icon}</span>
                {link.title}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Jonathan Park
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
          </div>

          <motion.div
            className="grid gap-6 mt-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              className="p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
            >
              👋 Hi, I&apos;m @LeConsulat2 -- Jonathan -- Welcome to my
              portfolio showcasing my journey in data analysis and web
              development!
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: 20 },
                show: { opacity: 1, x: 0 },
              }}
              className="p-6 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm"
            >
              👀 I&apos;ve grown within my roles to execute complex data
              analysis, gather business requirements, and develop innovative
              solutions using modern web technologies and data visualization
              tools.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              className="p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
            >
              🌱 I&apos;m currently expanding my expertise in data
              visualizations, modern web frameworks like Next.js, and AI
              integration while building practical applications that solve
              real-world problems.
            </motion.p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
