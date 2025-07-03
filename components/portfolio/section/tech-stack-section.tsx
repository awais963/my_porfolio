
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { SectionWrapper } from "@/components/section-wrapper";
import { techStackCarousel } from "@/constants/tech-stack";
import { sectionContent } from "@/constants/section-content";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface TechStackSectionProps {
  isDarkMode: boolean;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  isDarkMode,


}) => {
  const [currentTechSlide, setCurrentTechSlide] = useState(0)
const groupedSlides = []
for (let i = 0; i < techStackCarousel.length; i += 2) {
  groupedSlides.push(techStackCarousel.slice(i, i + 2))
}
  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTechSlide((prev) => (prev + 1) % groupedSlides.length)
    }, 5000)



    return () => {
      clearInterval(techInterval)
    }
  }, [])
const currentSection = sectionContent.techStack


  return (
     <SectionWrapper
          id={currentSection.id}
          title={currentSection.title}
          description={currentSection.description}
          fromColor={currentSection.gradientFrom}
          toColor={currentSection.gradientTo}
          isDarkMode={isDarkMode}
    >
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
        <div
  className="flex transition-transform duration-700 ease-in-out"
  style={{ transform: `translateX(-${currentTechSlide * 100}%)` }}
>
  {groupedSlides.map((group, slideIndex) => (
    <div key={slideIndex} className="w-full flex-shrink-0">
      <div className="flex flex-col gap-6">
        {group.map((category, categoryIndex) => (
          <div
            key={category.category}
            className={`${isDarkMode ? "bg-white/5" : "bg-black/5"} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? "border-white/10" : "border-black/10"}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {category.category}
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center content-center">
              {category.technologies.map((tech) => {
                const Icon = tech.icon
                return (
                  <div
                    key={tech.name}
                    className={`group ${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border ${isDarkMode ? "border-white/20" : "border-black/20"} hover:border-blue-500/50`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={tech.iconColor} />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {tech.description}
                      </p>
                      <div
                        className={`mt-4 h-1 bg-gradient-to-r ${tech.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Tech Stack Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentTechSlide((prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length)
            }
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex space-x-2">
            {groupedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTechSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTechSlide
                  ? "bg-blue-500 scale-125"
                  : isDarkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentTechSlide((prev) => (prev + 1) % groupedSlides.length)}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div></SectionWrapper>

  );
};
