"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Users,
  Award,
  Zap,
  Target,
} from "lucide-react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      description:
        "Leading our technical vision with 15+ years of experience in AI, cloud architecture, and enterprise software development.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "sarah@softin.tech",
      },
      expertise: ["AI/ML", "Cloud Architecture", "Enterprise Solutions"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      description:
        "Expert in full-stack development and DevOps, ensuring our solutions are scalable, secure, and maintainable.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "marcus@softin.tech",
      },
      expertise: ["Full-Stack", "DevOps", "Security"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Priya Patel",
      role: "Lead AI Engineer",
      description:
        "Specializing in machine learning algorithms and automation solutions that drive business transformation.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "priya@softin.tech",
      },
      expertise: ["Machine Learning", "Automation", "Data Science"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "David Kim",
      role: "Mobile Development Lead",
      description:
        "Creating exceptional mobile experiences with expertise in React Native, iOS, and Android development.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "david@softin.tech",
      },
      expertise: ["React Native", "iOS", "Android"],
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Elena Vasquez",
      role: "UX/UI Design Lead",
      description:
        "Crafting intuitive and beautiful user experiences that bridge the gap between technology and human needs.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "elena@softin.tech",
      },
      expertise: ["User Experience", "Interface Design", "Prototyping"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      description:
        "Building robust infrastructure and deployment pipelines that ensure our applications run smoothly at scale.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "alex@softin.tech",
      },
      expertise: ["Infrastructure", "CI/CD", "Monitoring"],
      color: "from-teal-500 to-green-500",
    },
  ];

  const stats = [
    { number: "25+", label: "Team Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Projects Delivered", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Target },
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-500/30 via-dark-400/20 to-transparent" />

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
            Meet Our <span className="gradient-text">Team</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our diverse team of experts brings together years of experience in
            software development, AI, cloud solutions, and user experience
            design.
          </motion.p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              {/* Profile Image Placeholder */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div
                  className={`w-full h-full bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text transition-all duration-300">
                  {member.name}
                </h3>

                <p className="text-primary-400 font-medium">{member.role}</p>

                <p className="text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full text-xs text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  <motion.a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-4 h-4 text-white/70 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    className="w-8 h-8 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4 text-white/70 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-4 h-4 text-white/70 hover:text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Users className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full p-4 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-white/70 mb-6">
              We're always looking for talented individuals who are passionate
              about technology and innovation. Explore opportunities to grow
              with us.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

