'use client';

import { useState } from 'react';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Mensagem enviada com sucesso!');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 opacity-0 animate-fade-in-down">
            &lt;CONTATO/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono opacity-0 animate-fade-in-up animate-delay-200">
            Vamos construir algo incrível juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="space-y-6 opacity-0 animate-slide-in-left animate-delay-400">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-purple-400 mb-2">
                  NOME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white font-mono focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 opacity-50 cursor-not-allowed"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-purple-400 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white font-mono focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 opacity-50 cursor-not-allowed"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-purple-400 mb-2">
                  MENSAGEM
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white font-mono focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none opacity-50 cursor-not-allowed"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled
                className="group relative w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transform overflow-hidden"
                style={{ cursor: 'not-allowed' }}
              >
                {/* Efeito Shimmer */}
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
                
                {/* Anel Pulsante */}
                {!isSubmitting && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 blur-sm"></div>
                )}
                
                {/* Anel de Carregamento */}
                {isSubmitting && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                )}
                
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      ENVIANDO...
                    </span>
                  ) : (
                    'ENVIAR MENSAGEM'
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Informações de Contato e Links Sociais */}
          <div className="space-y-8 opacity-0 animate-slide-in-right animate-delay-600">
            {/* Métodos de Contato */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/30 flex items-center justify-center">
                    <FaEnvelope className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-purple-400">EMAIL</h3>
                    <p className="text-gray-300 font-mono">anthony.farias10@outlook.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600/30 flex items-center justify-center">
                    <FaWhatsapp className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-green-400">WHATSAPP</h3>
                    <p className="text-gray-300 font-mono">+55 (11) 95468-4812</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg border border-cyan-500/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-600/30 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-cyan-400">LOCALIZAÇÃO</h3>
                    <p className="text-gray-300 font-mono">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sociais */}
            <div>
              <h3 className="text-xl font-mono font-bold text-white mb-6">REDES SOCIAIS</h3>
              <SocialLinks layout="grid" showDescription={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="mt-20 pt-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm">
              © 2025 Anthony S Farias. Desenvolvido com 💜 e muito ☕
            </p>
            <p className="text-gray-500 font-mono text-xs mt-2">
              &lt;/html&gt; - Fim da transmissão
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
