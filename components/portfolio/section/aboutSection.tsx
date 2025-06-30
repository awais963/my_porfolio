"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillsData, topSkills  } from "@/constants/mySkills"
import Image from "next/image"
import { GradientHeading } from "@/components/ui/gradient-heading"
import {
  Star,
  Code,
  Smartphone,
  ChevronRight,
  Award,
  Target,
  TrendingUp,
  Calendar,
  Coffee,
  Lightbulb,
} from "lucide-react"

interface AboutSectionProps {
  isDarkMode: boolean
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<string>("programming")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const activeCategory = skillsData.find((cat) => cat.id === activeTab)
  const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)
  const avgProficiency = Math.round(
    skillsData.reduce((acc, cat) => acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0) / totalSkills,
  )

  const stats = [
    {
      icon: Target,
      value: "50+",
      label: "Projects Completed",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Calendar,
      value: "5+",
      label: "Years Experience",
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Coffee,
      value: "1000+",
      label: "Cups of Coffee",
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-900/20",
    },
    {
      icon: Lightbulb,
      value: "∞",
      label: "Ideas Generated",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <GradientHeading text="About Me" fromColor="from-blue-600" toColor="to-purple-600" />
          <p
            className={`text-xl max-w-3xl mx-auto mt-6 leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate mobile developer crafting exceptional digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
        src="/images/developer.png?height=300&width=300"
        alt="Developer Profile"
        width={300}
        height={300}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
      />
    </div>

    {/* Floating Elements */}
    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl animate-bounce">
      <Code className="w-8 h-8 text-white" />
    </div>
    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-xl animate-bounce delay-500">
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
                My Journey
              </h3>
              <div className="space-y-4">
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-lg`}>
                  Started my journey in mobile development 5 years ago, and I've been passionate about creating
                  innovative mobile solutions ever since. I specialize in cross-platform development with Flutter and
                  React Native, as well as native iOS and Android development.
                </p>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-lg`}>
                  I believe in writing clean, maintainable code and creating user experiences that delight and engage
                  users. Every project is an opportunity to push boundaries and deliver excellence.
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 mr-2" />
                  Certified Developer
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Top Performer
                </Badge>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
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

        {/* Skills Section */}
        <div className="space-y-12">
          {/* Skills Header */}
          <div className="text-center">
            <GradientHeading
              text="Technical Expertise"
              textSize="text-4xl"
              fromColor="from-blue-500"
              toColor="to-purple-500"
            />
            <p className={`text-xl mt-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Mastering the art of mobile development with cutting-edge technologies
            </p>

            {/* Top Skills Showcase */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
                                {topSkills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:scale-105 transition-transform"
                                    >
                                        <Star className="w-4 h-4 mr-2 fill-current" />
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
           
          </div>

          {/* Skills Content */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Tabs */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-3">
                {skillsData.map((category, index) => {
                  const Icon = category.icon
                  const isActive = activeTab === category.id

                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl scale-105"
                          : `${isDarkMode ? "bg-white/5 hover:bg-white/10" : "bg-white hover:bg-gray-50"} text-gray-700 dark:text-gray-300 hover:shadow-lg hover:scale-102 shadow-md`
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInLeft 0.6s ease-out forwards",
                      }}
                    >
                      {/* Background Gradient Overlay */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:to-purple-600/5 transition-all duration-300" />
                      )}

                      <div className="relative flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : `${category.color} text-white group-hover:scale-110 shadow-lg`
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{category.title}</h3>
                          <p className={`text-sm ${isActive ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>
                            {category.skills.length} skills
                          </p>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isActive ? "rotate-90 text-white" : "text-gray-400 group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-3">
              {activeCategory && (
                <Card
                  className={`${
                    isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
                  } backdrop-blur-xl shadow-2xl border-0 overflow-hidden`}
                >
                  <CardHeader className="pb-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                    <CardTitle className="flex items-center gap-6 text-2xl">
                      <div className={`p-4 rounded-2xl ${activeCategory.color} text-white shadow-xl`}>
                        <activeCategory.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className={`font-bold text-2xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          {activeCategory.title}
                        </h2>
                        <p className={`text-base font-normal mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {activeCategory.skills.length} specialized skills
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeCategory.skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border group cursor-pointer ${
                            isDarkMode
                              ? "bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-gray-600 hover:border-blue-400/50"
                              : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-blue-400/50"
                          }`}
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animation: "fadeInUp 0.6s ease-out forwards",
                          }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h4 className={`font-bold text-lg mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                {skill.name}
                              </h4>
                              <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                {skill.description}
                              </p>
                              <Badge
                                variant="secondary"
                                className="text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300"
                              >
                                {skill.category}
                              </Badge>
                            </div>
                            <div className="text-right ml-4">
                              <div
                                className={`text-3xl font-bold transition-all duration-300 ${
                                  hoveredSkill === skill.name ? "scale-110" : ""
                                } bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                              >
                                {skill.level}%
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="relative">
                              <div
                                className={`h-3 w-full rounded-full overflow-hidden ${
                                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                                }`}
                              >
                                <div
                                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                                  style={{
                                    width: `${skill.level}%`,
                                    animationDelay: `${index * 200}ms`,
                                  }}
                                >
                                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between items-center text-sm">
                              <span className={`font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                Proficiency Level
                              </span>
                              <span
                                className={`font-semibold px-3 py-1 rounded-full text-xs ${
                                  skill.level >= 90
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                                    : skill.level >= 80
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                                      : skill.level >= 70
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300"
                                }`}
                              >
                                {skill.level >= 90
                                  ? "Expert"
                                  : skill.level >= 80
                                    ? "Advanced"
                                    : skill.level >= 70
                                      ? "Intermediate"
                                      : "Beginner"}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              {
                label: "Total Skills",
                value: totalSkills,
                color: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-50 dark:bg-blue-900/20",
              },
              {
                label: "Categories",
                value: skillsData.length,
                color: "text-green-600 dark:text-green-400",
                bg: "bg-green-50 dark:bg-green-900/20",
              },
              {
                label: "Avg Proficiency",
                value: `${avgProficiency}%`,
                color: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-50 dark:bg-purple-900/20",
              },
              {
                label: "Top Skills",
                value: topSkills.length,
                color: "text-orange-600 dark:text-orange-400",
                bg: "bg-orange-50 dark:bg-orange-900/20",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-8 ${stat.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-700 group cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
