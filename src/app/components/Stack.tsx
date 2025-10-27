'use client';

import { useState } from 'react';
import { getTechnologies } from '@/data/technologies';
import { TechCard } from '@/components/ui/TechCard';
import { FaPalette, FaBolt, FaCloud } from 'react-icons/fa';

// SRP: Stack component only handles stack section display
// DIP: Depends on abstractions (data services, components) not concretions
export default function Stack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const technologies = getTechnologies();

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

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
              isHovered={hoveredTech === tech.name}
              onHover={setHoveredTech}
            />
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30">
            <div className="text-3xl mb-4 flex justify-center">
              <FaPalette className="text-purple-400" />
            </div>
            <h3 className="text-xl font-mono font-bold text-purple-400 mb-2">FRONTEND</h3>
            <p className="text-gray-300 text-sm">
              React, Next.js, TypeScript, Tailwind CSS, Responsive Design
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-lg border border-cyan-500/30">
            <div className="text-3xl mb-4 flex justify-center">
              <FaBolt className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-mono font-bold text-cyan-400 mb-2">BACKEND</h3>
            <p className="text-gray-300 text-sm">
              Node.js, Express, GraphQL, REST APIs, Microservices
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg border border-orange-500/30">
            <div className="text-3xl mb-4 flex justify-center">
              <FaCloud className="text-orange-400" />
            </div>
            <h3 className="text-xl font-mono font-bold text-orange-400 mb-2">DEVOPS</h3>
            <p className="text-gray-300 text-sm">
              Docker, Kubernetes, AWS, CI/CD, Monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
