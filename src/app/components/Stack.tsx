'use client';

import { TechTabs } from '@/components/ui/TechTabs';
import { FaPalette, FaBolt, FaCloud } from 'react-icons/fa';

// SRP: Stack component only handles stack section display
// DIP: Depends on abstractions (TechTabs component) not concretions
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

        {/* Tech Tabs with Carousel */}
        <TechTabs />
      </div>
    </section>
  );
}
