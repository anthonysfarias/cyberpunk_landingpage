'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { MobileMenu, MobileMenuButton } from '@/components/ui/MobileMenu';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl border-b-2 border-purple-500/30 shadow-2xl shadow-purple-500/10">
        {/* Top cyberpunk line */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/80 to-transparent animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 relative">
            {/* Logo with animation */}
            <div className="group relative animate-fade-in-left">
              <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:scale-110 transition-all duration-500 cursor-pointer">
                &lt;DEV/&gt;
              </div>
              {/* Logo glow */}
              <div className="absolute inset-0 text-2xl font-mono font-bold text-purple-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm">
                &lt;DEV/&gt;
              </div>
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-purple-400/0 group-hover:border-purple-400/80 transition-all duration-300"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-pink-400/0 group-hover:border-pink-400/80 transition-all duration-300"></div>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex space-x-6 animate-fade-in-right">
              <a href="#hero" className="nav-item group relative px-3 py-2 font-mono font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden" style={{animationDelay: '0.1s'}}>
                <span className="relative z-10 tracking-wider">HOME</span>
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
                {/* Underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                {/* Side glows */}
                <div className="absolute -left-1 top-1/2 w-1 h-4 bg-purple-400/0 group-hover:bg-purple-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
                <div className="absolute -right-1 top-1/2 w-1 h-4 bg-pink-400/0 group-hover:bg-pink-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
              </a>

              <a href="#about" className="nav-item group relative px-3 py-2 font-mono font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden" style={{animationDelay: '0.2s'}}>
                <span className="relative z-10 tracking-wider">ABOUT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -left-1 top-1/2 w-1 h-4 bg-purple-400/0 group-hover:bg-purple-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
                <div className="absolute -right-1 top-1/2 w-1 h-4 bg-pink-400/0 group-hover:bg-pink-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
              </a>

              <a href="#stack" className="nav-item group relative px-3 py-2 font-mono font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden" style={{animationDelay: '0.3s'}}>
                <span className="relative z-10 tracking-wider">STACK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -left-1 top-1/2 w-1 h-4 bg-purple-400/0 group-hover:bg-purple-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
                <div className="absolute -right-1 top-1/2 w-1 h-4 bg-pink-400/0 group-hover:bg-pink-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
              </a>

              <a href="#timeline" className="nav-item group relative px-3 py-2 font-mono font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden" style={{animationDelay: '0.4s'}}>
                <span className="relative z-10 tracking-wider">TIMELINE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -left-1 top-1/2 w-1 h-4 bg-purple-400/0 group-hover:bg-purple-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
                <div className="absolute -right-1 top-1/2 w-1 h-4 bg-pink-400/0 group-hover:bg-pink-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
              </a>

              <a href="#portfolio" className="nav-item group relative px-3 py-2 font-mono font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden" style={{animationDelay: '0.5s'}}>
                <span className="relative z-10 tracking-wider">PORTFOLIO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -left-1 top-1/2 w-1 h-4 bg-purple-400/0 group-hover:bg-purple-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
                <div className="absolute -right-1 top-1/2 w-1 h-4 bg-pink-400/0 group-hover:bg-pink-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
              </a>

              <a href="#contact" className="nav-item group relative px-3 py-2 font-mono font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden" style={{animationDelay: '0.6s'}}>
                <span className="relative z-10 tracking-wider">CONTACT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -left-1 top-1/2 w-1 h-4 bg-purple-400/0 group-hover:bg-purple-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
                <div className="absolute -right-1 top-1/2 w-1 h-4 bg-pink-400/0 group-hover:bg-pink-400/60 transition-all duration-300 transform -translate-y-1/2 blur-sm"></div>
              </a>
            </div>

            {/* Cyberpunk grid pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom cyberpunk line */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Stack />
        <Timeline />
        <Portfolio />
        <Contact />
      </main>

      {/* Mobile Menu Drawer */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
