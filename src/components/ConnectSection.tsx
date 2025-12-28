import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/renox",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverColor: "hover:from-purple-600 hover:to-pink-600"
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:hello@ren0x.com",
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin, 
    href: "https://linkedin.com/company/ren0x",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700"
  }
];

export const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="connect" ref={ref} className="bg-gray-50 py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Stay updated with the latest startup insights, tips, and resources
          </p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`
                  w-12 h-12 rounded-lg flex items-center justify-center text-white
                  transition-all duration-300 transform hover:scale-110 hover:shadow-lg
                  ${social.bgColor} ${social.hoverColor}
                `}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};