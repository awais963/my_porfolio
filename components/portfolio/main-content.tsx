
import { AboutSection } from "./section/about-section";
import { ContactSection } from "./section/contact-section";
import { FeatureProjectsSection } from "./section/projects-section";
import { HeroSection } from "./section/hero-section";
import { TestimonialSection } from "./section/testimonial-section";
import { ServicesSection } from './section/service-section';
import ParticleBackground from "../particle-background";
import CreativeCursor from "../creative-cursor";
import ScrollProgress from "../scroll-progress";

interface MainContentProps {
  scrollToSection: (id: string) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  scrollToSection,
}) => {

  return (

    <main className="relative z-10 ">
       {/* <ParticleBackground /> */}
      {/* <CreativeCursor /> */}
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection />
     
 <ServicesSection />
      {/* Enhanced Projects Carousel Section */}
      <FeatureProjectsSection />

      {/* Testimonials Carousel Section */}
      <TestimonialSection />

    
      {/* Contact Section */}
      <ContactSection  />
    </main>
  );
};
