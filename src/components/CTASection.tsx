import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="contact" ref={ref} className="section-padding bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-12 border border-white/10"
          style={{
            background: 'linear-gradient(90deg,rgba(81, 33, 131, 1) 0%, rgba(49, 47, 125, 1) 50%, rgba(75, 34, 128, 1) 100%)'
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            {/* Left Content */}
            <div className="flex-1 text-left">
              {/* Small Label */}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4 block"
              >
                FOR BUSINESS
              </motion.span>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Let’s Build Scalable Digital Solutions
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl leading-relaxed"
              >
                Partner with RenoXentia to design, develop, and deploy high-performance digital systems tailored to your business needs. From custom applications to intelligent automation, we help you turn ideas into reliable technology.              </motion.p>

              {/* Pricing Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-2"
              >

              </motion.div>
            </div>

            {/* Right Button */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="lg:flex-shrink-0 w-full lg:w-auto"
            >
              <a href="#connect" className="block w-full lg:w-auto">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-xl px-6 sm:px-8 py-3 font-medium transition-all duration-300 backdrop-blur-sm w-full lg:w-auto"
                >
                  Connect With Us →
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
