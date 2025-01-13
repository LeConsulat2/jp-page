'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [text, setText] = useState('');

  const fullText = `
  Welcome to Jonathan Park's Introductory Page! Here you can take a quick tour of my personal projects and a little bit more about me.
  Please click Start to begin the tour of my personal projects!
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
    }, 40); // Adjust speed here (lower = faster)

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
        <h2 className="text-lg text-gray-500">{text}</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        {/* 수정: /create-account 대신 /projects 경로로 이동 */}
        <Link
          href="/projects/1"
          className="bg-blue-500 text-white w-full flex justify-center py-2 px-4 rounded hover:bg-blue-700 transition-all"
        >
          Start
        </Link>
        <div className="flex gap-2 text-sm text-gray-500">
          <span>Click Start to begin the tour of my home page!</span>
        </div>
      </div>
    </div>
  );
}
