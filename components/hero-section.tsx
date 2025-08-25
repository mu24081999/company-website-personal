"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <div className="floating-orb bg-primary-400/30 top-20 left-20 animate-float" />
      <div className="floating-orb bg-secondary-500/30 top-40 right-32 animate-float-slow" />
      <div className="floating-orb bg-primary-500/20 bottom-32 left-32 animate-float" />
      <div className="floating-orb bg-secondary-400/30 bottom-20 right-20 animate-float-slow" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 via-dark-800/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-white/80">Innovating the Future</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text">Softin.tech</span>
            <br />
            <span className="text-white/90">Innovating the Future of</span>
            <br />
            <span className="gradient-text">Software Development</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We specialize in cutting-edge AI solutions, automation, cloud
            integration, and full-stack development that transforms businesses
            and drives innovation.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button variant="gradient" size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>

          <Button variant="ghost" size="lg" className="group">
            <Play className="mr-2 w-5 h-5" />
            Our Services
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

