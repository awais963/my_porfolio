import { Award, Briefcase, Code2, ChevronLeft, ChevronRight } from "lucide-react"

export const experienceContent = {
  sectionLabels: {
    keyAchievements: "Key Achievements",
    technologiesUsed: "Technologies Used",
    careerProgress: "Career Progress",
  },

  icons: {
    briefcase: Briefcase,
    award: Award,
    code: Code2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
  },

  animations: {
    slideTransition: "transition-transform duration-500 ease-in-out",
    badgeHover: "hover:scale-105 transition-transform duration-200",
    dotTransition: "transition-all duration-200",
  },

}

export const experienceHelpers = {
  calculateProgress: (currentIndex: number, totalItems: number): number => {
    return Math.round(((currentIndex + 1) / totalItems) * 100)
  },

  getNextSlide: (currentSlide: number, totalSlides: number): number => {
    return (currentSlide + 1) % totalSlides
  },

  getPrevSlide: (currentSlide: number, totalSlides: number): number => {
    return (currentSlide - 1 + totalSlides) % totalSlides
  },
}
