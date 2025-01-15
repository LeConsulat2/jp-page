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
        const response = await fetch('/api'); // API 호출
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioLinks(data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        setIsLoading(false); // 로딩 완료
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
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      ) : (
        <>
          {/* Header Section */}
          <motion.header
            className="w-full px-6 py-4 sticky top-0 bg-black/30 backdrop-blur-md shadow-md flex justify-between items-center" ///// 헤더 레이아웃 수정
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left: Jonathan Park */}
            <h1 className="text-2xl md:text-4xl font-bold text-pink-400">
              Jonathan Park
            </h1>
            {/* Jonathan Park 왼쪽 정렬*/}

            {/* Right: Introduction */}
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl text-right">
              Kia ora, Welcome again to my portfolios! Here, I showcase my data
              analysis examples. I believe in maintaining accuracy and
              creativity in my reports to ensure insightful results.
            </p>
            {/* 소개 문구 오른쪽 정렬 및 같은 줄 배치 */}
          </motion.header>

          {/* Portfolio Section */}
          <main className="w-full max-w-7xl mx-auto px-8 py-12">
            <motion.section
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center overflow-y-scroll h-[60vh]" ///// 포트폴리오 섹션 스크롤 가능하게 수정
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

          {/* Footer */}
          <footer className="w-full py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Jonathan Park. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}
