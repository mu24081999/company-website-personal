"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      title: "The Future of AI in Software Development: 2024 Trends",
      excerpt:
        "Explore the latest advancements in artificial intelligence and machine learning that are revolutionizing how we build software applications.",
      category: "AI & Technology",
      readTime: "8 min read",
      publishDate: "March 15, 2024",
      image: "/api/placeholder/600/400",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      tags: ["AI", "Machine Learning", "Trends", "2024"],
    },
    {
      title: "Building Scalable Cloud-Native Applications: Best Practices",
      excerpt:
        "Learn the essential strategies and architectural patterns for creating applications that can scale seamlessly in cloud environments.",
      category: "Cloud & Architecture",
      readTime: "12 min read",
      publishDate: "March 10, 2024",
      image: "/api/placeholder/600/400",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      tags: ["Cloud", "Scalability", "Architecture", "Best Practices"],
    },
    {
      title: "The Rise of Low-Code Development: Empowering Citizen Developers",
      excerpt:
        "Discover how low-code platforms are democratizing software development and enabling non-technical users to create powerful applications.",
      category: "Development",
      readTime: "6 min read",
      publishDate: "March 5, 2024",
      image: "/api/placeholder/600/400",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      tags: ["Low-Code", "Citizen Developers", "Platforms", "Innovation"],
    },
  ];

  const categories = [
    { name: "AI & Machine Learning", count: 15, icon: Lightbulb },
    { name: "Cloud & DevOps", count: 12, icon: TrendingUp },
    { name: "Web Development", count: 18, icon: BookOpen },
    { name: "Mobile Development", count: 10, icon: BookOpen },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300/30 via-dark-200/20 to-transparent" />

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
            Latest <span className="gradient-text">Insights</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay ahead of the curve with our latest thoughts on technology
            trends, development best practices, and industry insights.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -15, rotateY: 5, rotateX: 5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              {/* Post Image Placeholder */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-dark-700 to-dark-600">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <post.icon className="w-16 h-16 text-white/60" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full text-xs text-white/80 font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-4">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-white/70 leading-relaxed">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-full text-xs text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* Categories Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Explore by <span className="gradient-text">Category</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="glass-card p-4 text-center group cursor-pointer hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {category.name}
                </h4>
                <p className="text-white/60 text-sm">
                  {category.count} articles
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <BookOpen className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full p-4 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Insights
            </h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter and get the latest technology
              insights, development tips, and industry trends delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-ghost-100/20 backdrop-blur-md border border-ghost-200/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200"
              />
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

