"use client"

import { CardHeader, CardTitle } from "@/components/ui/card"
import {  topSkills } from "@/constants/mySkills"
import Image from "next/image"
import { GradientHeading } from "@/components/ui/gradient-heading"
import {  ChevronRight } from "lucide-react"
import { aboutContent} from "@/constants/section-content"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sectionContent ,} from "@/constants/section-content"
import { proficiencyLevels,skillsSummaryLabels, } from "@/constants/data/about-data"

import {
  Star,
  Zap,
  Code,
  Palette,
  Database,
  Smartphone,
  Rocket,
  Trophy,
  Target,
  Sparkles,
  Flame,
  Crown,
  Diamond,
  Hexagon,
} from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { skillsData } from "@/constants/mySkills"
// Enhanced skill data with more creative properties


const rarityConfig = {
  legendary: {
    color: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-500/50",
    icon: Crown,
    border: "border-yellow-400/50",
  },
  epic: {
    color: "from-purple-400 to-pink-500",
    glow: "shadow-purple-500/50",
    icon: Diamond,
    border: "border-purple-400/50",
  },
  rare: {
    color: "from-blue-400 to-cyan-500",
    glow: "shadow-blue-500/50",
    icon: Hexagon,
    border: "border-blue-400/50",
  },
  common: {
    color: "from-gray-400 to-gray-500",
    glow: "shadow-gray-500/50",
    icon: Star,
    border: "border-gray-400/50",
  },
}

interface CreativeSkillsSectionProps {
  isDarkMode: boolean
}
 

export const CreativeSkillsSection: React.FC<CreativeSkillsSectionProps> = ({ isDarkMode }) => {
  const [floatingElements, setFloatingElements] = useState<Array<{ id: string; x: number; y: number; delay: number }>>(
    [],
  )
  const [activeCategory, setActiveCategory] = useState("programming")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  // Calculate skills summary values

  const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)
  const avgProficiency = Math.round(
    skillsData.reduce((acc, cat) => acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0) / totalSkills,
  )

  const activeSkills = skillsData.find((cat) => cat.id === activeCategory)?.skills || []

  const skillsSummaryValues = {
    totalSkills,
    categories: skillsData.length,
    avgProficiency: `${avgProficiency}%`,
    topSkills: topSkills.length,
  }

  const SkillCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {activeSkills.map((skill, index) => {
        const rarity = rarityConfig[skill.rarity as keyof typeof rarityConfig]
        const RarityIcon = rarity.icon
 // Calculate skills summary values
  
        return (
          <Card
            key={skill.name}
            className={`relative overflow-hidden bg-gradient-to-br ${isDarkMode ? "from-gray-900 to-gray-800" : "from-white to-gray-50"} border-2 ${rarity.border} hover:scale-105 transition-all duration-500 group cursor-pointer`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
     
          >
            {/* Animated background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${rarity.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
            />

          
            <CardContent className="p-6 relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${rarity.color} shadow-lg`}>
                    <RarityIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{skill.name}</h3>
                    <Badge className={`text-xs bg-gradient-to-r ${rarity.color} text-white border-0`}>
                      {skill.rarity?.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${rarity.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{skill.description}</p>

              {/* XP Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Experience Points</span>
                  <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                    {skill.xp} / {skill.maxXp} XP
                  </span>
                </div>
                <div className={`h-3 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div
                    className={`h-full bg-gradient-to-r ${rarity.color} transition-all duration-1000 relative overflow-hidden`}
                    style={{ width: `${(skill.xp / skill.maxXp) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>

            
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
const currentSection = sectionContent.skills
  return (
    <SectionWrapper
          id={currentSection.id}
          title={currentSection.title}
          description={currentSection.description}
          fromColor={currentSection.gradientFrom}
          toColor={currentSection.gradientTo}
          isDarkMode={isDarkMode}
        >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Achievement Showcase */}
        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
           Top Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 pb-12">
            {topSkills.map(
              (achievement, index) => (
                 <div key={achievement} className="mt-8 inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
            <Zap className="w-5 h-5 text-yellow-500" />
            {achievement}
            <Rocket className="w-5 h-5 text-blue-500" />
          </div>
                
              ),
            )}
          </div>
        </div>
         
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id

            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-110`
                    : `${isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-white hover:bg-gray-50 text-gray-700"} border border-gray-200 dark:border-gray-700 hover:scale-105`
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{category.title}</span>
                </div>
                {!isActive && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                )}
              </Button>
            )
          })}
        </div>

       
 
        {/* Skills Display */}
        <div className="mb-16">
         <SkillCards />
        </div>

       
      </div>
        {/* Skills Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {skillsSummaryLabels.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center p-8 ${stat.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-700 group cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {skillsSummaryValues[stat.key as keyof typeof skillsSummaryValues]}
              </div>
              <div className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
    </SectionWrapper>
  )
}

export default CreativeSkillsSection
