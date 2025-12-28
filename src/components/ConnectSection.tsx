import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverColor: "hover:from-purple-600 hover:to-pink-600"
  },
  {
    name: "Facebook", 
    icon: Facebook,
    href: "#",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700"
  },
  {
    name: "LinkedIn",
    icon: Linkedin, 
    href: "#",
    bgColor: "bg-blue-700",
    hoverColor: "hover:bg-blue-800"
  },
  {
    name: "X (Twitter)",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: "#",
    bgColor: "bg-black",
    hoverColor: "hover:bg-gray-800"
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#", 
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700"
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
            className="flex justify-center items-center gap-4"
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