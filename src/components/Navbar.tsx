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
      // Make navbar transparent when scrolled past 100px
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8"
    >
      <div className={`max-w-5xl mx-auto rounded-xl shadow-lg border px-2 md:px-6 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-gray-100/50' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-gray-900">RenoX</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
 
            <a href="#connect">
              <Button 
                size="sm" 
                className="bg-purple-primary hover:bg-purple-primary/90 text-white rounded-full px-5"
              >
                Connect with us →
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium py-2 px-2"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                  <a href="#connect" onClick={() => setIsOpen(false)}>
                    <Button 
                      size="sm" 
                      className="bg-purple-primary hover:bg-purple-primary/90 text-white rounded-full w-full"
                    >
                      Connect with us →
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
