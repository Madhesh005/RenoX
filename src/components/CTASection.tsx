import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-primary via-secondary to-teal-primary/80 p-12 md:p-16 lg:p-20 text-center border border-teal-light/20"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-light/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Let's Build Your Digital Solution
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
            >
              Ready to transform your business with intelligent technology? Schedule a consultation with our experts today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="gold" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline-light" size="lg">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
