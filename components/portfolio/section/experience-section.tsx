
import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { experienceTimeline } from "@/constants/my-experience"
import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"

// Import the new constants
import { experienceContent,experienceHelpers } from "@/constants/data/experience-data" 
import { sectionContent } from "@/constants/section-content"

interface ExperienceSectionProps {
  isDarkMode: boolean
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  const [currentExperienceSlide, setCurrentExperienceSlide] = useState(0)

  const currentSection = sectionContent.experience
  const { sectionLabels, icons,  animations,  } = experienceContent

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
      description={currentSection.description}
      fromColor={currentSection.gradientFrom}
      toColor={currentSection.gradientTo}
      isDarkMode={isDarkMode}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className={`flex ${animations.slideTransition}`}
            style={{ transform: `translateX(-${currentExperienceSlide * 100}%)` }}
          >
            {experienceTimeline.map((experience, index) => (
              <div key={experience.year} className="w-full flex-shrink-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                  {/* Timeline Visual */}
                  <div className="relative">
                    <div className={`${isDarkMode ? "bg-white/5" : "bg-black/5"} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? "border-white/10" : "border-black/10"}`}>
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full mr-4`}>
                          <BriefcaseIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold text-emerald-500`}>{experience.year}</div>
                          <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{experience.type}</div>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{experience.title}</h3>
                      <p className={`text-lg text-blue-500 mb-4`}>{experience.company}</p>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>{experience.description}</p>
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
                            <div className={`w-2 h-2 text-emerald-500 rounded-full mt-2 flex-shrink-0`}></div>
                            <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{achievement}</span>
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
                            className={`bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 ${animations.badgeHover}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{sectionLabels.careerProgress}</span>
                        <span className={`text-sm text-emerald-500`}>
                          {calculateProgress(index, experienceTimeline.length)}%
                        </span>
                      </div>
                      <Progress value={calculateProgress(index, experienceTimeline.length)} className="h-2" />
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
                className={`w-3 h-3 rounded-full ${animations.dotTransition} ${
                  index === currentExperienceSlide ? `bg-emerald-500 scale-125` : isDarkMode ? "bg-gray-600" : "bg-gray-300"
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