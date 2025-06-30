"use client"


import { useEffect, useState } from "react";

import { contactInfo } from "@/constants/contact";

import { BackgroundAnimation } from "@/components/portfolio/backgroundAnimation";
import { MainContent } from "@/components/portfolio/mainContent";
import { Footer } from "@/components/portfolio/portfolioFooter";
import { Header } from "@/components/portfolio/portfolioHeader";
import {
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Portfolio() {

  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const navItems = [
    { id: "home", label: "Home", color: "hover:text-blue-500" },
    { id: "about", label: "About", color: "hover:text-green-500" },
    { id: "projects", label: "Projects", color: "hover:text-purple-500" },
    { id: "contact", label: "Contact", color: "hover:text-orange-500" },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: Github, href: contactInfo.github, label: "GitHub", color: "#333" },
    { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn", color: "#0077B5" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
    setActiveSection(sectionId)
  }

  //Mouse tracking for interactive lines
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY })
  //   }

  //   window.addEventListener("mousemove", handleMouseMove)
  //   return () => window.removeEventListener("mousemove", handleMouseMove)
  // }, [])

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Scroll spy functionality
  useEffect(() => {
          console.log("handle effect")

    const handleScroll = () => {
      console.log("handle")
      
      const scrollPosition = window.scrollY + 100

      for (const section of navItems) {
             

        const element = document.getElementById(section.id)
         console.log(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * -0.5

      // Animate hero content on scroll
      const heroContent = document.querySelector(".hero-content") as HTMLElement
      const heroTiles = document.querySelector(".hero-tiles") as HTMLElement

      if (heroContent) {
        heroContent.style.transform = `translateY(${rate}px)`
        heroContent.style.opacity = `${Math.max(0, 1 - scrolled / 500)}`
      }

      if (heroTiles) {
        heroTiles.style.transform = `translateY(${rate * 0.3}px) scale(${Math.max(0.8, 1 - scrolled / 1000)})`
        heroTiles.style.opacity = `${Math.max(0, 1 - scrolled / 600)}`
      }

      // Animate sections coming into view
      const sections = document.querySelectorAll(".scroll-animate")
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          section.classList.add("animate-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  if (!isLoaded) {
    return (
      <div className={`fixed inset-0 ${isDarkMode ? "bg-black" : "bg-white"} flex items-center justify-center z-50`}>
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div
              className={`absolute inset-0 border-4 ${isDarkMode ? "border-white/20" : "border-black/20"} rounded-full animate-pulse`}
            ></div>
            <div
              className={`absolute inset-2 border-4 ${isDarkMode ? "border-white" : "border-black"} border-t-transparent rounded-full animate-spin`}
            ></div>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Loading Portfolio...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Animated Background */}
      <BackgroundAnimation isDarkMode={isDarkMode}/>

      {/* Header */}
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        socialLinks={socialLinks}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <MainContent isDarkMode={isDarkMode} scrollToSection={scrollToSection} />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

    </div>
  )
}
