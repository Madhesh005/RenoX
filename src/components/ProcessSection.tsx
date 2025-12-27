import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Understanding requirements, goals, and technical feasibility.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description: "Creating architecture blueprints and UI/UX prototypes.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Agile coding sprints with regular quality assurance.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment",
    description: "Secure launch, monitoring, and ongoing support.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="relative overflow-hidden section-padding bg-gradient-to-b from-teal-primary to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How We Work
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Number */}
              <div className="font-display text-5xl font-bold text-foreground/20 mb-4">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full border border-foreground/30 flex items-center justify-center mx-auto mb-5 bg-background/10 backdrop-blur-sm">
                <step.icon className="w-6 h-6 text-foreground/70" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
