import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Layout, MessageSquare, ShoppingCart, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom, scalable, and enterprise-ready web applications built with modern frameworks like React and Vue.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android that deliver seamless user experiences.",
  },
  {
    icon: Layout,
    title: "CMS Solutions",
    description: "Robust WordPress and custom CMS implementations allowing easy content management for your team.",
  },
  {
    icon: MessageSquare,
    title: "AI Solutions",
    description: "Intelligent conversational agents to automate support and enhance customer engagement 24/7.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Secure, high-conversion online stores with integrated payment gateways and inventory management.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Strategic SEO solutions designed to improve search visibility, drive high-intent traffic, and deliver sustainable organic growth through data-driven optimization.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="services" ref={ref} className="relative section-padding overflow-hidden">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            End-to-end development services tailored for scalability, performance, and long-term success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="group card-premium p-6 hover:border-teal-light/30 transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-light/20 border border-teal-light/30 flex items-center justify-center mb-5 group-hover:bg-teal-light/30 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-teal-light" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
