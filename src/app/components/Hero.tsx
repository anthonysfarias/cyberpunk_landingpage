'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Codificando o futuro em neon';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glitch Effect Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyan-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
              ALEX
            </span>
            <span className="text-white ml-4">
              CYBER
            </span>
          </h1>

          {/* Title */}
          <div className="text-2xl md:text-4xl font-mono text-green-400 mb-6 tracking-wider">
            <span className="border-r-2 border-green-400 animate-pulse">
              FULLSTACK DEVELOPER / HACKER
            </span>
          </div>

          {/* Animated Tagline */}
          <div className="text-xl md:text-2xl text-gray-300 mb-12 h-8">
            <span className="font-mono">
              {text}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-mono font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">VER PROJETOS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-mono font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
              DOWNLOAD CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
