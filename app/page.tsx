import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import TeamSection from "@/components/team-section";
import TestimonialsSection from "@/components/testimonials-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

