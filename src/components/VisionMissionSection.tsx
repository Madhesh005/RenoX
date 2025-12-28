import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Fixed Background - Same as Hero */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/30 transition-all duration-300"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              Vision
            </h3>
            <div className="space-y-4">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                To redefine how growing businesses succeed through accessible, high-quality digital innovation. We aim to build a future where technology becomes a powerful enabler of confidence, scale, and lasting impact.
              </p>
            </div>
          </motion.div>

          {/* Mission - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/30 transition-all duration-300"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              Mission
            </h3>
            <div className="space-y-4">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                To create reliable and affordable web and mobile solutions that transform business potential into digital strength. We exist to partner with ambition, delivering technology that empowers brands and drives meaningful progress.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};