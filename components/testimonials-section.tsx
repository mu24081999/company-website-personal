"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Building,
  Globe,
} from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO at TechFlow Solutions",
      company: "TechFlow Solutions",
      content:
        "Softin.tech transformed our business operations with their AI-powered automation platform. The team's expertise and dedication to our success exceeded all expectations. Our efficiency increased by 300% within the first quarter.",
      rating: 5,
      avatar: "/api/placeholder/100/100",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Robert Chen",
      role: "Founder & CEO at CloudScale",
      company: "CloudScale",
      content:
        "Working with Softin.tech was a game-changer for our startup. Their cloud integration expertise helped us scale from 0 to 100,000 users seamlessly. The team is incredibly responsive and truly understands business needs.",
      rating: 5,
      avatar: "/api/placeholder/100/100",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager at InnovateCorp",
      company: "InnovateCorp",
      content:
        "The mobile app developed by Softin.tech exceeded our expectations. Their attention to detail, user experience focus, and technical excellence resulted in a product our customers love. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/100/100",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director at DataFlow",
      company: "DataFlow",
      content:
        "Softin.tech's data solutions revolutionized our analytics capabilities. Their machine learning models provide insights we never had before, helping us make data-driven decisions that drive growth.",
      rating: 5,
      avatar: "/api/placeholder/100/100",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "500+", label: "Projects Completed", icon: Building },
    { number: "50+", label: "Global Clients", icon: Globe },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400/30 via-dark-300/20 to-transparent" />

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
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with Softin.tech.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
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
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Main Testimonial */}
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary-400/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full flex items-center justify-center text-white text-xl font-bold`}
                >
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary-400 text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center hover:bg-ghost-200/30 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full flex items-center justify-center hover:bg-ghost-200/30 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary-400 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <p className="text-white/70 mb-8">
              We've partnered with companies across various industries to
              deliver innovative solutions that drive growth and transformation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["TechFlow", "CloudScale", "InnovateCorp", "DataFlow"].map(
                (company, index) => (
                  <motion.div
                    key={company}
                    className="h-16 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  >
                    <span className="text-white/60 font-medium text-sm">
                      {company}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

