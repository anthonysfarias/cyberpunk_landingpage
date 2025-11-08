'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaClock, FaBriefcase, FaEnvelope } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// SRP: Componente responsável apenas pelo menu mobile
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  
  // Previne scroll do body quando menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '#hero', icon: FaHome, label: 'HOME', color: 'from-purple-400 to-purple-600' },
    { href: '#about', icon: FaUser, label: 'ABOUT', color: 'from-blue-400 to-blue-600' },
    { href: '#stack', icon: FaCode, label: 'STACK', color: 'from-cyan-400 to-cyan-600' },
    { href: '#timeline', icon: FaClock, label: 'TIMELINE', color: 'from-pink-400 to-pink-600' },
    { href: '#portfolio', icon: FaBriefcase, label: 'PORTFOLIO', color: 'from-orange-400 to-orange-600' },
    { href: '#contact', icon: FaEnvelope, label: 'CONTACT', color: 'from-green-400 to-green-600' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay com blur */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Drawer Lateral */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 via-black to-gray-900 border-l-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu de navegação mobile"
      >
        {/* Header do Menu */}
        <div className="flex items-center justify-between p-6 border-b-2 border-purple-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg">&lt;/&gt;</span>
            </div>
            <div>
              <h2 className="text-white font-mono font-bold text-lg">MENU</h2>
              <p className="text-purple-400 text-xs font-mono">Navegação</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Fechar menu"
          >
            <FaTimes className="text-white text-xl group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4 gap-2 mt-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`group flex items-center gap-4 px-5 py-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 border-2 border-transparent hover:border-purple-500/50 transition-all duration-300 transform hover:translate-x-2 hover:scale-105`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-lg" />
                </div>
                
                <div className="flex-1">
                  <span className="text-white font-mono font-semibold text-sm tracking-wider">
                    {item.label}
                  </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </a>
            );
          })}
        </nav>

        {/* Footer do Menu */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t-2 border-purple-500/30">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-400 text-xs font-mono">Sistema Online</span>
          </div>
        </div>
      </div>
    </>
  );
};

// Botão de hambúrguer para abrir o menu
export const MobileMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group relative overflow-hidden"
      aria-label="Abrir menu"
    >
      <FaBars className="text-white text-xl relative z-10" />
      
      {/* Efeito de brilho */}
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>
  );
};
