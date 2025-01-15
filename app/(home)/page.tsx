'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [text, setText] = useState('');

  const fullText = `
    Welcome to Jonathan Park's Portfolio!
    Dive into my work, featuring dynamic Excel reports, web development projects (HTML, CSS & JS), and my insights and thought processes curated in Notion.
    Explore, connect, and discover more of my projects.
    I’d love to hear from you—feel free to reach out anytime!
    Click "Start" to begin your journey.

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
      <div className="flex flex-col items-center gap-6 w-full max-w-80">
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
