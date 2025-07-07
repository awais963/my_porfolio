
import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { aboutContent, sectionContent } from "@/constants/section-content"
import { Code, Smartphone } from "lucide-react"
import Image from "next/image"
import type React from "react"

import { achievementBadges, profileImageData, statsData } from "@/constants/data/about-data"
import { ExperienceSection } from "./experience-section"

interface AboutSectionProps {
}

export const AboutSection: React.FC<AboutSectionProps> = ({ }) => {

  const currentSection = sectionContent.about

  return (
    <SectionWrapper
      id={currentSection.id}
      title={currentSection.title}
      subTitle={currentSection.subtitle}
      description={currentSection.description}

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
              className={`absolute inset-4  "bg-white"
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
          <Card
            className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl dark:shadow-blue-900/20 dark:hover:shadow-purple-800/40 transition-all duration-500 hover:-translate-y-1 group">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {aboutContent.journeyTitle}
            </h3>

            <div className="space-y-4">
              {aboutContent.journeyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-galaxy-500 dark:text-gray-300 leading-relaxed text-lg"
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
          </Card>


          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {statsData.map((stat, index) => (
              <Card
                key={stat.label}
                className="bg-gradient-to-br from-blue-100 to-purple-100 
  dark:from-blue-900/30 dark:to-purple-900/30 
  backdrop-blur-xl 
  rounded-3xl 
  border-0 
  shadow-xl hover:shadow-2xl 
  dark:shadow-blue-900/20 dark:hover:shadow-purple-800/40 
  transition-all duration-500 
  hover:-translate-y-1 
  group"                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon
                    className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className={"text-gray-600"}>{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Content Area with Smooth Transitions */}
      <div
        className={`transition-all duration-300 "opacity-100 scale-100"}`}
      >
        <ExperienceSection />
      </div>

    </SectionWrapper>
  )
}
