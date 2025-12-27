import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const industries = [
  { id: "startups", name: "STARTUPS" },
  { id: "enterprise", name: "ENTERPRISE" },
  { id: "government", name: "GOVERNMENT" },
  { id: "sme", name: "SME" },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndustry, setActiveIndustry] = useState("startups");

  return (
    <section ref={ref} className="bg-background py-12 border-b border-border/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`text-sm font-semibold tracking-wider transition-all duration-300 pb-2 border-b-2 ${
                activeIndustry === industry.id
                  ? "text-foreground border-teal-light"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground/50"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
