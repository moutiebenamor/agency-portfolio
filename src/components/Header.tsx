import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'portfolio' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0a0a0f]/80 border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                NexaFlow
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`relative px-4 py-2 transition-colors ${
                  currentPage === item.page ? 'text-cyan-400' : 'text-white/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate('contact')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-white/10 text-cyan-400'
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
