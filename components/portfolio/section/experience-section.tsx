
import type React from "react"

import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { experienceTimeline } from "@/constants/my-experience"
import { useState } from "react"

// Import the new constants
import { experienceContent, experienceHelpers } from "@/constants/data/experience-data"
import { sectionContent } from "@/constants/section-content"

interface ExperienceSectionProps {
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ }) => {
  const [currentExperienceSlide, setCurrentExperienceSlide] = useState(0)

  const currentSection = sectionContent.experience
  const { sectionLabels, icons, animations, } = experienceContent

  const { calculateProgress, getNextSlide, getPrevSlide } = experienceHelpers

  // Icon components
  const BriefcaseIcon = icons.briefcase
  const AwardIcon = icons.award
  const CodeIcon = icons.code
  const ChevronLeftIcon = icons.chevronLeft
  const ChevronRightIcon = icons.chevronRight

  return (
    <SectionWrapper
      id={currentSection.id}
      title={currentSection.title}
      subTitle={currentSection.subtitle}
      description={currentSection.description}

    >
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className={`flex ${animations.slideTransition}`}
            style={{ transform: `translateX(-${currentExperienceSlide * 100}%)` }}
          >
            {experienceTimeline.map((experience, index) => (
              <div key={experience.id} className="w-full flex-shrink-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                  {/* Timeline Visual */}
                  <div className="relative">
                    <div className={`backdrop-blur-sm rounded-2xl p-8 border border-black/10 dark:border-white/10`}>
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 p-3 rounded-full mr-4`}>
                          <BriefcaseIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500`}>{experience.year}</div>
                          <div className={`text-sm text-gray-600 dark:text-gray-400`}>{experience.type}</div>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{experience.title}</h3>
                      <p className={`text-lg text-blue-500 mb-4`}>{experience.company}</p>
                      <p className={`text-gray-600 dark:text-gray-400 leading-relaxed`}>{experience.description}</p>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <AwardIcon className={`w-5 h-5 mr-2 text-yellow-500`} />
                        {sectionLabels.keyAchievements}
                      </h4>
                      <div className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <CodeIcon className={`w-5 h-5 mr-2 text-blue-500`} />
                        {sectionLabels.technologiesUsed}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className={`bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 border-0 ${animations.badgeHover}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentExperienceSlide(getPrevSlide(currentExperienceSlide, experienceTimeline.length))}
            className="rounded-full"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>

          <div className="flex space-x-2">
            {experienceTimeline.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExperienceSlide(index)}
                className={`transition-all duration-300 rounded-full w-4 h-4 ${index === currentExperienceSlide
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 scale-125'
                    : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentExperienceSlide(getNextSlide(currentExperienceSlide, experienceTimeline.length))}
            className="rounded-full"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}