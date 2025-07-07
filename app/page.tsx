"use client"

import { useEffect, useState } from "react";


import { BackgroundAnimation } from "@/components/portfolio/backgroundAnimation";
import { Header } from "@/components/portfolio/header-section";
import { MainContent } from "@/components/portfolio/main-content";
import { Footer } from "@/components/portfolio/portfolioFooter";
import ScrollProgress from "@/components/scroll-progress";


export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored) return stored === "dark"
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  })
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const [isLoaded, setIsLoaded] = useState(false)
  const navItems = [
    { id: "home", label: "Home", color: "hover:text-blue-500 dark:hover:text-blue-400" },
    { id: "about", label: "About", color: "hover:text-red-500 dark:hover:text-red-400" },
    { id: "services", label: "Service", color: "hover:text-green-500 dark:hover:text-green-400" },
    { id: "projects", label: "Projects", color: "hover:text-purple-500 dark:hover:text-purple-400" },
    { id: "contact", label: "Contact", color: "hover:text-orange-500 dark:hover:text-orange-400" },

  ]


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
    // setActiveSection(sectionId)
  }

  // // Loading animation
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoaded(true), 1500)
  //   return () => clearTimeout(timer)
  // }, [])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
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
  // if (!isLoaded) {
  //   return (

  //     <div className={`min-h-screen bg-gradient-to-tr from-pink-50 to-orange-50  dark:from-slate-900 dark:to-purple-900/50 flex items-center justify-center z-50`}>

  //       <div className="text-center">
  //         {/* Main Loader Container */}
  //         <div className="relative w-32 h-32 mx-auto mb-12">
  //           {/* Outer Glow Ring */}
  //           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 animate-pulse blur-sm" />

  //           {/* Outer Pulsing Ring */}
  //           <div className="absolute inset-2 rounded-full border-2 border-slate-200/60 dark:border-slate-700/60 animate-pulse" />

  //           {/* Progress Ring */}
  //           <div className="absolute inset-3 rounded-full">
  //             <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
  //               <circle
  //                 cx="50"
  //                 cy="50"
  //                 r="45"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 strokeWidth="2"
  //                 className="text-slate-200 dark:text-slate-700"
  //               />

  //               <defs>
  //                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //                   <stop offset="0%" stopColor="#3b82f6" />
  //                   <stop offset="100%" stopColor="#8b5cf6" />
  //                 </linearGradient>
  //               </defs>
  //             </svg>
  //           </div>

  //           {/* Inner Spinning Ring */}
  //           <div className="absolute inset-6 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin" />

  //           {/* Center Glowing Orb */}
  //           <div className="absolute inset-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl animate-ping opacity-75" />
  //           <div className="absolute inset-11 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-xl" />

  //           {/* Floating Particles */}
  //           <div className="absolute inset-0">
  //             {[...Array(6)].map((_, i) => (
  //               <div
  //                 key={i}
  //                 className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
  //                 style={{
  //                   top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 40}%`,
  //                   left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 40}%`,
  //                   animationDelay: `${i * 0.2}s`,
  //                   animationDuration: "2s",
  //                 }}
  //               />
  //             ))}
  //           </div>
  //         </div>

  //         {/* Progress Text */}
  //         <div className="mb-6">
  //           <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse bg-size-200 animate-gradient">
  //             Loading Portfolio
  //           </div>
  //         </div>


  //       </div>

  //     </div>
  //   )
  // }

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-pink-50 to-orange-50  dark:from-slate-900 dark:to-purple-900/50`}
    >
      <ScrollProgress />

      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Header */}
      <Header
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}

        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <MainContent scrollToSection={scrollToSection} />

      {/* Footer */}
      <Footer />

    </div>
  )
}
