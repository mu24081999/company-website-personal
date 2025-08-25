"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Cloud,
  Code,
  Smartphone,
  Server,
  Database,
  Shield,
  Zap,
} from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Brain,
      title: "AI & Automation",
      description:
        "Intelligent automation solutions powered by machine learning and AI algorithms to streamline business processes and increase efficiency.",
      features: [
        "Machine Learning Models",
        "Process Automation",
        "Predictive Analytics",
        "Natural Language Processing",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamless cloud migration and integration services to help businesses scale efficiently and reduce infrastructure costs.",
      features: [
        "AWS/Azure/GCP",
        "Cloud Migration",
        "Microservices",
        "Serverless Architecture",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern technologies and best practices for optimal performance and user experience.",
      features: [
        "React/Next.js",
        "Node.js/Python",
        "Database Design",
        "API Development",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.",
      features: [
        "iOS/Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Server,
      title: "DevOps & Scalability",
      description:
        "Infrastructure automation and deployment pipelines that ensure reliable, scalable, and maintainable software systems.",
      features: [
        "CI/CD Pipelines",
        "Docker/Kubernetes",
        "Monitoring",
        "Performance Optimization",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description:
        "Comprehensive data management, analytics, and business intelligence solutions to drive informed decision-making.",
      features: [
        "Data Warehousing",
        "Business Intelligence",
        "Real-time Analytics",
        "Data Security",
      ],
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-700/40 via-dark-600/20 to-transparent" />

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
            Our <span className="gradient-text">Services</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer comprehensive software development services that empower
            businesses to innovate, scale, and succeed in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-6 group hover:scale-105 transition-all duration-500 cursor-pointer"
              whileHover={{ y: -10, rotateY: 5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-2 text-sm text-white/60"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.1 + featureIndex * 0.05,
                    }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Zap className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full p-4 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6">
              Let's discuss how our services can help you achieve your digital
              transformation goals.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

