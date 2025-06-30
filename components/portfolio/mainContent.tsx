import '/styles/animation.css';

import { AboutSection } from "./section/aboutSection";
import { ContactSection } from "./section/contactSection";
import { FeatureProjectsSection } from "./section/featureProjectsSection";
import { HeroSection } from "./section/heroSection";
import { ExperienceSection } from "./section/journeySection";
import { TechStackSection } from "./section/techStackSection";
import { TestimonialSection } from "./section/testimonial";

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
      {/* Hero Section */}
      <HeroSection isDarkMode={isDarkMode} scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection isDarkMode={isDarkMode} />

      {/* Tech Stack Carousel Section */}
      <TechStackSection isDarkMode={isDarkMode} />

      {/* Enhanced Projects Carousel Section */}
      <FeatureProjectsSection isDarkMode={isDarkMode} />

      {/* Testimonials Carousel Section */}
      <TestimonialSection isDarkMode={isDarkMode} />

      {/* Experience Timeline Carousel */}
      <ExperienceSection isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <ContactSection isDarkMode={isDarkMode} />
    </main>
  );
};
