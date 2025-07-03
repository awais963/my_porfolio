
import type React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillsData, topSkills } from "@/constants/mySkills"
import Image from "next/image"
import { GradientHeading } from "@/components/ui/gradient-heading"
import { Star, Code, Smartphone, ChevronRight,User, Zap, Briefcase, Layers, Sparkles } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { sectionContent ,aboutContent} from "@/constants/section-content"
import { Button } from "@/components/ui/button"

// Import the new constants
import { statsData, achievementBadges, profileImageData, proficiencyLevels } from "@/constants/data/about-data"
import { CreativeSkillsSection } from "./sub-section/skills-section"
import { ExperienceSection } from "./experience-section"
import { TechStackSection } from "./tech-stack-section"
// Import the new constants


interface AboutSectionProps {
  isDarkMode: boolean
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  type TabType = "about" | "skills" | "experience" | "techstack"
const tabs = [
  { id: "skills" as TabType, label: "Skills", icon: Zap, color: "from-green-500 to-teal-600" },
  { id: "experience" as TabType, label: "Experience", icon: Briefcase, color: "from-orange-500 to-red-600" },
  { id: "techstack" as TabType, label: "Tech Stack", icon: Layers, color: "from-purple-500 to-pink-600" },
]
  const [activeTab, setActiveTab] = useState<TabType>("skills")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)
  const avgProficiency = Math.round(
    skillsData.reduce((acc, cat) => acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0) / totalSkills,
  )

  const handleTabChange = (tabId: TabType) => {
    if (tabId === activeTab) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTab(tabId)
      setIsTransitioning(false)
    }, 150)
  }

  const getProficiencyLevel = (level: number) => {
    if (level >= proficiencyLevels.expert.threshold) return proficiencyLevels.expert
    if (level >= proficiencyLevels.advanced.threshold) return proficiencyLevels.advanced
    if (level >= proficiencyLevels.intermediate.threshold) return proficiencyLevels.intermediate
    return proficiencyLevels.beginner
  }

  const skillsSummaryValues = {
    totalSkills,
    categories: skillsData.length,
    avgProficiency: `${avgProficiency}%`,
    topSkills: topSkills.length,
  }


  const currentSection = sectionContent.about

  return (
    <SectionWrapper
      id={currentSection.id}
      title={currentSection.title}
      description={currentSection.description}
      fromColor={currentSection.gradientFrom}
      toColor={currentSection.gradientTo}
      isDarkMode={isDarkMode}
    >
           
      {/* Main Content Grid */}
       <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in">
              {/* Profile Section */}
              <div className="relative animate-fade-in-left">
                <div className="relative w-80 h-80 mx-auto lg:mx-0">
                  {/* Animated Background Rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl animate-spin-slow opacity-75" />
                  <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl animate-spin-reverse opacity-50" />

                  {/* Profile Image Container */}
                  <div
                    className={`absolute inset-4 ${
                      isDarkMode ? "bg-gray-900" : "bg-white"
                    } rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20`}
                  >
                    <Image
                      src={profileImageData.src || "/placeholder.svg?height=300&width=300"}
                      alt={profileImageData.alt}
                      width={profileImageData.width}
                      height={profileImageData.height}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-12 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl animate-bounce">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-16 -left-12 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-xl animate-bounce delay-500">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="space-y-8 animate-fade-in-right">
                <div
                  className={`${
                    isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                  } backdrop-blur-xl rounded-3xl p-8 border shadow-2xl hover:shadow-3xl transition-all duration-500`}
                >
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {aboutContent.journeyTitle}
                  </h3>
                  <div className="space-y-4">
                    {aboutContent.journeyParagraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-lg`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Achievement Badges */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {achievementBadges.map((badge, index) => {
                      const BadgeContent = (
                        <Badge
                          key={index}
                          className={`${badge.gradient} text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform`}
                        >
                          <badge.icon className="w-4 h-4 mr-2" />
                          {badge.label}
                        </Badge>
                      )
                      return badge.external && badge.href ? (
                        <a key={index} href={badge.href} target="_blank" rel="noopener noreferrer">
                          {BadgeContent}
                        </a>
                      ) : (
                        <div key={index}>{BadgeContent}</div>
                      )
                    })}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {statsData.map((stat, index) => (
                    <Card
                      key={stat.label}
                      className={`${stat.bg} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6 text-center">
                        <stat.icon
                          className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                        />
                        <p className="text-3xl font-bold mb-1">{stat.value}</p>
                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
  {/* Tabbed Sections Below About */}
      <div className="relative">
        {/* Creative Tab Navigation */}
        <div className="relative mb-8 lg:mb-12 pt-12">
  <div
    className={`${
      isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
    } backdrop-blur-xl rounded-xl lg:rounded-2xl p-1.5 lg:p-2 border shadow-2xl`}
  >
    {/* Tabs with wrapping instead of scroll */}
    <div className="flex flex-wrap gap-1.5 lg:gap-2 justify-center">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <Button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`
              relative flex-shrink-0 min-w-[100px] sm:min-w-[120px] lg:flex-1 lg:min-w-[140px] h-12 lg:h-14 rounded-lg lg:rounded-xl transition-all duration-500 group overflow-hidden
              ${
                isActive
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105 z-10`
                  : `${isDarkMode ? "bg-transparent hover:bg-white/10" : "bg-transparent hover:bg-black/10"} ${isDarkMode ? "text-gray-300" : "text-gray-600"} hover:scale-102`
              }
            `}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated background for active tab */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
            )}

            {/* Tab content */}
            <div className="relative flex items-center gap-1.5 lg:gap-2 z-10">
              <Icon
                className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
              />
              <span className="font-medium text-xs sm:text-sm">{tab.label}</span>
              {isActive && <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 animate-spin hidden sm:block" />}
            </div>

            {/* Hover effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />
          </Button>
        );
      })}
    </div>
  </div>
</div>


        {/* Content Area with Smooth Transitions */}
        <div className="relative min-h-[600px]">
          <div
            className={`transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            {/* Skills Tab Content */}
            {activeTab === "skills" && (
              <div className="animate-fade-in">
                  <CreativeSkillsSection isDarkMode={isDarkMode} />
              </div>
            )}

            {/* Experience Tab Content */}
            {activeTab === "experience" && (
              <div className="animate-fade-in">
                <ExperienceSection isDarkMode={isDarkMode} />
              </div>
            )}

            {/* Tech Stack Tab Content */}
            {activeTab === "techstack" && (
              <div className="animate-fade-in">
                <TechStackSection isDarkMode={isDarkMode} />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <div className="flex justify-between items-center mt-12">
          <Button
            onClick={() => {
              const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
              handleTabChange(tabs[prevIndex].id)
            }}
            variant="outline"
            className={`${isDarkMode ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/10"} backdrop-blur-sm`}
          >
            <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 w-8"
                    : isDarkMode
                      ? "bg-white/30"
                      : "bg-black/30"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={() => {
              const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
              const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
              handleTabChange(tabs[nextIndex].id)
            }}
            variant="outline"
            className={`${isDarkMode ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/10"} backdrop-blur-sm`}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div> */}
      </div>
     
    </SectionWrapper>
  )
}
