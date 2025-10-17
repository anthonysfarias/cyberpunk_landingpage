import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function Home() {
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
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              &lt;DEV/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono">Home</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono">About</a>
              <a href="#stack" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono">Stack</a>
              <a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Stack />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
