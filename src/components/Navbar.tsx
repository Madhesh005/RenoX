import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Clients", href: "#clients" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-2 sm:top-4 left-2 right-2 sm:left-4 sm:right-4 md:left-8 md:right-8 z-50"
    >
      <div className={`max-w-5xl mx-auto rounded-xl shadow-lg border px-3 sm:px-4 md:px-6 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-gray-100/50' 
          : 'border-gray-200'
      }`}
      style={{
        backgroundColor: isScrolled ? undefined : '#cdcdcf'
      }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-purple-primary flex items-center justify-center">
              <span className="font-display font-bold text-white text-sm">R</span>
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-gray-900">REN0X</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('#connect')}
              className="bg-purple-primary hover:bg-purple-primary/90 text-white rounded-full px-4 lg:px-5 py-2 text-sm font-medium transition-all duration-300"
            >
              Connect with us →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, backgroundColor: 'transparent' }}
              animate={{ opacity: 1, height: "auto", backgroundColor: '#cdcdcf' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-3 rounded-lg overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 mx-1">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-sm font-medium py-3 px-3 rounded-lg"
                    >
                      {link.name}
                    </button>
                  ))}
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <button
                      onClick={() => handleNavClick('#connect')}
                      className="w-full bg-purple-primary hover:bg-purple-primary/90 text-white rounded-lg py-3 px-4 text-sm font-medium transition-all duration-300"
                    >
                      Connect with us →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
