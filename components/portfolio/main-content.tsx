
import { AboutSection } from "./section/about-section";
import { ContactSection } from "./section/contact-section";
import { FeatureProjectsSection } from "./section/projects-section";
import { HeroSection } from "./section/hero-section";
import { TestimonialSection } from "./section/testimonial";
import { ServicesSection } from './section/service-section';
import ParticleBackground from "../particle-background";
import CreativeCursor from "../creative-cursor";
import ScrollProgress from "../scroll-progress";

interface MainContentProps {
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  isDarkMode,
  scrollToSection,
}) => {

  return (

    <main className="relative z-10 ">
       {/* <ParticleBackground /> */}
      <CreativeCursor />
      {/* Hero Section */}
      <HeroSection isDarkMode={isDarkMode} scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection isDarkMode={isDarkMode} />
     
 <ServicesSection isDarkMode={isDarkMode}/>
      {/* Enhanced Projects Carousel Section */}
      <FeatureProjectsSection isDarkMode={isDarkMode} />

      {/* Testimonials Carousel Section */}
      <TestimonialSection isDarkMode={isDarkMode} />

    
      {/* Contact Section */}
      <ContactSection isDarkMode={isDarkMode} />
    </main>
  );
};
