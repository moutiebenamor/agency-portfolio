import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

type Page = 'home' | 'services' | 'portfolio' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                NexaFlow
              </span>
            </div>
            <p className="text-white/60">
              Crafting innovative digital solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'services', 'portfolio', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavigate(page as Page)}
                    className="text-white/60 hover:text-cyan-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/60">
              <li>Mobile Development</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>AI Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; 2025 NexaFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
