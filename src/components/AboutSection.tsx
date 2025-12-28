import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";
import teamWorkingImage from "@/assets/aboutimage.jpeg";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });



  return (
    <section id="about" ref={ref} className="bg-foreground section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-4 block">
              About REN0X
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background leading-tight mb-6">
              Designing Systems Built to Last            </h2>
            <p className="text-background/70 text-lg mb-6 leading-relaxed">
              REN0X delivers end-to-end digital solutions designed to support modern businesses at every stage of growth. Our expertise spans web and mobile development, automation systems, enterprise applications, and intelligent digital platforms.            </p>
            <p className="text-background/70 text-lg mb-10 leading-relaxed">
              We prioritize structured engineering, performance-driven development, and long-term maintainability, ensuring every solution we build is reliable, scalable, and future-ready. By combining technical excellence with a strategic mindset, we help organizations turn complex requirements into dependable digital systems.            </p>

          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={teamWorkingImage}
                alt="REN0X team working on enterprise software development"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 left-6 bg-foreground rounded-full px-5 py-3 flex items-center gap-3 shadow-xl"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
