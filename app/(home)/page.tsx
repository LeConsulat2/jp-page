'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [text, setText] = useState('');

  const fullText = `
    Welcome to Jonathan Park's Portfolio Page! 
    Explore my Excel Reports, Dashboards, and learn more about me. 
    If you like my projects, feel free to reach out or click "View All Projects" to see more. 
    I’d love to hear from you! Click "Start" to begin the tour.
  `;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 35); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="my-3 flex flex-col items-center gap-4">
        <span className="text-5xl md:text-9xl hover:animate-pulse transition-colors">
          🏪
        </span>
        <h1 className="text-2xl inline-block justify-center md:text-4xl font-semibold hover:animate-pulse">
          Welcome!
        </h1>
        <h2 className="text-lg text-gray-500 text-center max-w-md">{text}</h2>
      </div>
      <div className="flex flex-col items-center gap-6 w-full">
        <Link
          href="/projects/1"
          className="primary-btn max-w-md w-full flex justify-center py-3 px-6"
        >
          Start
        </Link>
        <div className="text-center text-sm text-gray-400">
          <span className="block">
            Click <strong>Start</strong> to begin the tour of my home page!
          </span>
        </div>
      </div>
    </div>
  );
}
