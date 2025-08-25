"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@softin.tech", "support@softin.tech"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Innovation Drive", "Tech Valley, CA 94000"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (dummy functionality)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-200/30 via-dark-100/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to start your next project? Let's discuss how we can help
            bring your vision to life with innovative technology solutions.
          </motion.p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                {info.title}
              </h4>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-white/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Send us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/80 text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/80 text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Our Location
                </h4>
              </div>
              <div className="h-64 bg-gradient-to-br from-dark-700 to-dark-600 rounded-xl flex items-center justify-center">
                <div className="text-center text-white/60">
                  <Building className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs">
                    123 Innovation Drive, Tech Valley, CA 94000
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Quick Contact
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">hello@softin.tech</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Fast Response
                </h4>
                <p className="text-white/70 text-sm">
                  We typically respond to all inquiries within 24 hours during
                  business days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

