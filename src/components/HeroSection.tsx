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
      <div className="w-full max-w-7xl mx-auto relative z-10 text-center px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Headline */}
          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 md:mb-8 text-center px-2">
            <span className="text-white block">REN0X</span>
            <span className="text-white block">World's Premier</span>
            <span className="text-purple-primary block">IT Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed text-center px-2">
            Get comprehensive technology solutions for your enterprise.
            We design, build, and optimize your digital infrastructure for sustainable growth.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md px-4 sm:px-0"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-4 sm:px-6 md:px-8 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] h-11 sm:h-12 text-sm sm:text-base"
            >
              Contact Us
            </Button>
            <Button 
              size="lg"
              className="bg-purple-primary hover:bg-purple-primary/90 text-white rounded-full px-4 sm:px-6 md:px-8 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] h-11 sm:h-12 text-sm sm:text-base group"
            >
              Get Started 
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
