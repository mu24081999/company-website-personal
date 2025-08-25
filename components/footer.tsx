"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "AI & Automation", href: "#services" },
      { name: "Cloud Integration", href: "#services" },
      { name: "Full-Stack Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    { name: "GitHub", href: "#", icon: Github, color: "hover:text-gray-400" },
    { name: "Twitter", href: "#", icon: Twitter, color: "hover:text-blue-400" },
    {
      name: "Email",
      href: "mailto:hello@softin.tech",
      icon: Mail,
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 border-t border-ghost-200/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800/50 via-dark-700/30 to-dark-800/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Softin.tech
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Innovating the future of software development with
                  cutting-edge AI solutions, cloud integration, and full-stack
                  development services that transform businesses.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center text-white/60 transition-all duration-200 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <motion.h4
                  className="text-white font-semibold mb-4 capitalize"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-ghost-200/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              Stay Updated with Our Newsletter
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200 text-sm"
              />
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-ghost-200/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-white/60 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                © {currentYear} Softin.tech. All rights reserved. Made with{" "}
                <Heart className="inline w-4 h-4 text-red-400 mx-1" />
                for innovation.
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl animate-float-slow" />
    </footer>
  );
}

