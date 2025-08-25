"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Zap, Users } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize software development through innovative AI solutions and cutting-edge technology, empowering businesses to achieve digital transformation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading force in software innovation, creating intelligent solutions that shape the future of technology and business.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, constantly exploring emerging technologies and methodologies to deliver exceptional results.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build long-term partnerships based on trust, transparency, and exceptional results.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800/30 via-dark-700/20 to-transparent" />

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
            About <span className="gradient-text">Softin.tech</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded with a vision to transform the software development
            landscape, Softin.tech combines cutting-edge technology with
            creative problem-solving to deliver solutions that drive business
            growth and innovation.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              We're Building the <span className="gradient-text">Future</span>
            </h3>

            <div className="space-y-6 text-white/80">
              <p className="leading-relaxed">
                At Softin.tech, we believe that technology should be an enabler,
                not a barrier. Our team of passionate developers, designers, and
                innovators work together to create software solutions that are
                not only powerful but also intuitive and user-friendly.
              </p>

              <p className="leading-relaxed">
                From AI-powered automation to scalable cloud solutions, we
                leverage the latest technologies to help businesses streamline
                operations, enhance productivity, and achieve their digital
                transformation goals.
              </p>

              <p className="leading-relaxed">
                Our commitment to excellence, attention to detail, and
                customer-centric approach has made us a trusted partner for
                companies looking to innovate and grow in the digital age.
              </p>
            </div>
          </motion.div>

          {/* Right 3D Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-full h-96">
              {/* 3D Ghost Card */}
              <div className="absolute inset-0 glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mb-6 animate-glow">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Innovation Hub
                  </h4>
                  <p className="text-white/70">
                    Where ideas become reality through cutting-edge technology
                    and creative solutions.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-400/30 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400/30 rounded-full animate-float-slow" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

