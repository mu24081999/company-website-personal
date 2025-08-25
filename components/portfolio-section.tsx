"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Smartphone,
  Brain,
} from "lucide-react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "A comprehensive business intelligence platform that leverages machine learning to provide predictive analytics and actionable insights for enterprise clients.",
      image: "/api/placeholder/600/400",
      category: "AI & Analytics",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      link: "#",
      github: "#",
    },
    {
      title: "Cloud-Native E-commerce Solution",
      description:
        "Scalable e-commerce platform built with microservices architecture, featuring real-time inventory management and AI-powered recommendations.",
      image: "/api/placeholder/600/400",
      category: "Cloud & Web",
      technologies: ["React", "Node.js", "Docker", "Kubernetes", "MongoDB"],
      icon: Code,
      color: "from-purple-500 to-pink-500",
      link: "#",
      github: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication, real-time notifications, and advanced security features.",
      image: "/api/placeholder/600/400",
      category: "Mobile Development",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Jest"],
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      link: "#",
      github: "#",
    },
    {
      title: "Process Automation Suite",
      description:
        "Enterprise workflow automation platform that streamlines business processes using RPA and intelligent document processing.",
      image: "/api/placeholder/600/400",
      category: "Automation",
      technologies: ["Python", "UiPath", "FastAPI", "Redis", "Elasticsearch"],
      icon: Brain,
      color: "from-orange-500 to-red-500",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-600/30 via-dark-500/20 to-transparent" />

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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how we've helped businesses transform their digital
            presence with innovative software solutions and cutting-edge
            technology.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-dark-700 to-dark-600">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/60" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.link}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-400 font-medium">
                    {project.category}
                  </span>
                  <motion.a
                    href={project.link}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full text-xs text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Code className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full p-4 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-white/70 mb-6">
              Let's discuss how we can bring your vision to life with our
              expertise in software development and innovative technology
              solutions.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

