import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built with the highest security protocols to protect sensitive data.",
  },
  {
    icon: Zap,
    title: "Performance & Scalability",
    description: "Architectures designed to handle millions of requests without latency.",
  },
  {
    icon: Users,
    title: "Dedicated Support Teams",
    description: "We don't just ship and leave. We provide ongoing maintenance and upgrades.",
  },
];

const rightChecklist = [
  "Clean, maintainable code architecture",
  "Adherence to global security standards",
  "Agile methodology with transparent reporting",
  "Post-deployment support and training",
];

const scaleFeatures = [
  "End-to-end Project Management",
  "Agile Development Methodology",
  "Cross-Platform Compatibility",
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-foreground section-padding">
      <div className="container-custom">
        {/* Top Section - Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose REN0X
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            We don't just build software; we build assets. Our commitment to clean code, future-proof technologies, and rigorous testing ensures your investment yields long-term value.
          </p>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-20"
        >
          {rightChecklist.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-light/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-teal-light" />
              </div>
              <span className="text-background/80 text-sm">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section - Why Leaders Trust */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Trust Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-background mb-4">
              Why Leaders Trust REN0X
            </h3>
            <p className="text-background/70 mb-8">
              In a crowded digital landscape, we distinguish ourselves through unwavering commitment to quality and security.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-light/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-teal-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">{feature.title}</h4>
                    <p className="text-background/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Ready to Scale Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-premium p-8"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to Scale?
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you are a government agency looking for digital transformation or a startup building the next unicorn, REN0X is your technical partner.
            </p>

            <div className="space-y-4">
              {scaleFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 bg-teal-primary/30 rounded-lg px-4 py-3 border border-teal-light/20"
                >
                  <div className="w-5 h-5 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-background" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
