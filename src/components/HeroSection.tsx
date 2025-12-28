import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fixed Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content - scrolls normally */}
      <div className="w-full max-w-7xl mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Headline */}
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 text-center">
            <span className="text-white block">REN0X</span>
            <span className="text-white block">World's Premier</span>
            <span className="text-purple-primary block">IT Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center">
            Get comprehensive technology solutions for your enterprise.
            We design, build, and optimize your digital infrastructure for sustainable growth.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <a href="#connect">
              <Button 
                size="lg"
                className="bg-purple-primary hover:bg-purple-primary/90 text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-medium"
              >
                Contact Us
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
