'use client';

import { useState } from 'react';

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
    
    // Simulate form submission
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
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            &lt;CONTATO/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            Vamos construir algo incrível juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white font-mono focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white font-mono focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
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
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white font-mono focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    ENVIANDO...
                  </span>
                ) : (
                  'ENVIAR MENSAGEM'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-mono font-bold text-purple-400">EMAIL</h3>
                    <p className="text-gray-300 font-mono">alex.cyber@dev.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/30">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-mono font-bold text-cyan-400">TELEFONE</h3>
                    <p className="text-gray-300 font-mono">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-mono font-bold text-green-400">LOCALIZAÇÃO</h3>
                    <p className="text-gray-300 font-mono">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-mono font-bold text-white mb-6">REDES SOCIAIS</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-900/50 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🐙</div>
                  <div className="font-mono text-sm text-gray-300 group-hover:text-purple-400">GitHub</div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💼</div>
                  <div className="font-mono text-sm text-gray-300 group-hover:text-cyan-400">LinkedIn</div>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-900/50 border border-pink-500/30 rounded-lg hover:border-pink-500/60 transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🐦</div>
                  <div className="font-mono text-sm text-gray-300 group-hover:text-pink-400">Twitter</div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-900/50 border border-orange-500/30 rounded-lg hover:border-orange-500/60 transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📷</div>
                  <div className="font-mono text-sm text-gray-300 group-hover:text-orange-400">Instagram</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm">
              © 2024 Alex Cyber. Desenvolvido com 💜 e muito ☕
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
