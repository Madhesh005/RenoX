import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  { id: "startups", name: "STARTUPS" },
  { id: "enterprise", name: "ENTERPRISE" },
  { id: "sme", name: "SME" },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="clients" ref={ref} className="bg-background py-6 sm:py-8 md:py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Client Segments
          </h2>
        </motion.div>

        {/* Client Segments */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center items-center overflow-x-auto"
        >
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 min-w-max px-4">
            {industries.map((industry, index) => (
              <div key={industry.id} className="flex items-center">
                <div className="relative group cursor-pointer">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider text-foreground transition-colors duration-300 whitespace-nowrap">
                    {industry.name}
                  </span>
                  {/* Underline animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-light transition-all duration-300 ease-out group-hover:w-full"></div>
                </div>
                {index < industries.length - 1 && (
                  <div className="ml-4 sm:ml-6 md:ml-8 lg:ml-12 w-px h-6 sm:h-8 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
