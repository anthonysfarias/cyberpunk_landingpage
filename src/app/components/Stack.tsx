'use client';

import { TechTabs } from '@/components/ui/TechTabs';
import { FaPalette, FaBolt, FaCloud } from 'react-icons/fa';

// SRP: Componente Stack apenas gerencia exibição da seção stack
// DIP: Depende de abstrações (componente TechTabs) não de concretizações
export default function Stack() {

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            &lt;STACK/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            Tecnologias que domino para criar soluções completas
          </p>
        </div>

        {/* Abas de Tecnologia com Carrossel */}
        <TechTabs />
      </div>
    </section>
  );
}
