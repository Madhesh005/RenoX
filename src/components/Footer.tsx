import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "AI Solutions", href: "#services" },
    { name: "Enterprise IT", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Vision & Mission", href: "#about" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#connect" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-12">
          {/* Brand - Full width on mobile, spans 2 columns on sm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center">
                <span className="font-display font-bold text-background text-sm">R</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">RenoXentia</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A professional, scalable, and future-ready IT solutions startup focused on digital transformation.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-teal-light" />
                hello@renoxentia.com
              </li>

              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Linkedin className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                RenoXentia
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 RenoXentia IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:hello@renoxentia.com" 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-light/10 hover:bg-teal-light/10 transition-all duration-300 group"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-teal-light transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com/company/renoxentia" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-400/10 hover:bg-blue-600/10 transition-all duration-300 group"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
