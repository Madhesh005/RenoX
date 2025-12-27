import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";
import teamWorkingImage from "@/assets/team-working.jpg";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Enterprise Projects" },
  ];

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
              Engineering reliability for the digital age
            </h2>
            <p className="text-background/70 text-lg mb-6 leading-relaxed">
              REN0X is an IT-based solutions startup delivering end-to-end digital infrastructure. We focus on clean architecture, performance, and enterprise-grade security to ensure your technology scales with your ambition.
            </p>
            <p className="text-background/70 text-lg mb-10 leading-relaxed">
              Whether you are a government entity requiring strict compliance or a startup needing rapid deployment, our team bridges the gap between innovation and stability.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-4xl font-display font-bold text-background mb-1">
                    {stat.value}
                  </div>
                  <div className="text-background/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
              <div className="w-10 h-10 rounded-full bg-teal-light/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-teal-light" />
              </div>
              <div>
                <div className="text-sm font-semibold text-background">Enterprise Grade</div>
                <div className="text-xs text-background/60">Security Certified</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
