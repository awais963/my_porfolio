"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Code2, Database, Globe, Layers, Package, TestTube, Wrench, Star,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Smartphone,
  Palette,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Menu,
  X,
  MessageCircle, Clock, Copy, Check
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const githubUrl = "https://github.com/awais963"
  const linkedinUrl = "https://linkedin.com/in/awais963"
  const userEmail = "mughal963@gmail.com"
  const social_Links = [
    {
      name: "GitHub",
      url: githubUrl,
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: linkedinUrl,
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923014267966",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/username",
      icon: <ExternalLink className="w-5 h-5" />,
    },
  ]

  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState<string | null>(null);
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000); // Reset after 2s
    });
  };
  // Mouse tracking for interactive lines
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
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
      const heroContent = document.querySelector(".hero-content") as HTMLElement;
      const heroTiles = document.querySelector(".hero-tiles") as HTMLElement;

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home", color: "hover:text-blue-500" },
    { id: "about", label: "About", color: "hover:text-green-500" },
    { id: "projects", label: "Projects", color: "hover:text-purple-500" },
    { id: "contact", label: "Contact", color: "hover:text-orange-500" },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: Github, href: githubUrl, label: "GitHub", color: "#333" },
    { icon: Linkedin, href: linkedinUrl, label: "LinkedIn", color: "#0077B5" },
  ]

  interface Skill {
    name: string
    level: number
    category: string
  }

  interface SkillCategory {
    title: string
    icon: React.ReactNode
    color: string
    skills: Skill[]
  }
  const contactInfo = {
    email: userEmail,
    phone: "+92 301 4267966",
    location: "Pakistan, Lahore Punjab",
  }

  const skillsData: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "Kotlin", level: 95, category: "primary" },
        { name: "Java", level: 90, category: "primary" },
        { name: "Flutter/Dart", level: 85, category: "primary" },
      ],
    },
    {
      title: "Android Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        { name: "Android SDK", level: 95, category: "core" },
        { name: "Android Studio", level: 90, category: "core" },
        { name: "Jetpack Compose", level: 88, category: "modern" },
        { name: "Android Jetpack", level: 92, category: "core" },
        { name: "Material Design", level: 85, category: "design" },
        { name: "Android NDK", level: 75, category: "advanced" },
      ],
    },
    {
      title: "Architecture & Patterns",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "MVVM", level: 95, category: "primary" },
        { name: "MVP", level: 88, category: "secondary" },
        { name: "MVC", level: 85, category: "secondary" },
        { name: "Clean Architecture", level: 90, category: "advanced" },
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "Room Persistence", level: 92, category: "primary" },
        { name: "SQLite", level: 88, category: "core" },
        { name: "Firebase Database", level: 85, category: "cloud" },
      ],
    },
    {
      title: "Networking & APIs",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-cyan-500",
      skills: [
        { name: "Retrofit", level: 95, category: "primary" },
        { name: "Volley", level: 80, category: "secondary" },
        { name: "REST APIs", level: 92, category: "core" },
        { name: "SOAP", level: 75, category: "legacy" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: <Package className="w-6 h-6" />,
      color: "bg-pink-500",
      skills: [
        { name: "Dagger/Hilt", level: 90, category: "di" },
        { name: "Kotlin Coroutines", level: 95, category: "async" },
        { name: "LiveData & ViewModel", level: 92, category: "arch" },
        { name: "RxJava/Flows", level: 88, category: "reactive" },
        { name: "Twilio SDK", level: 80, category: "integration" },
        { name: "Payment Gateways", level: 85, category: "integration" },
        { name: "Google Maps/Places", level: 88, category: "location" },
      ],
    },
    {
      title: "Testing & Quality",
      icon: <TestTube className="w-6 h-6" />,
      color: "bg-red-500",
      skills: [
        { name: "JUnit", level: 85, category: "unit" },
        { name: "Mockito", level: 82, category: "mocking" },
        { name: "Espresso", level: 78, category: "ui" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-gray-600",
      skills: [
        { name: "Git/GitHub", level: 90, category: "vcs" },
        { name: "Bitbucket", level: 85, category: "vcs" },
        { name: "Gradle", level: 88, category: "build" },
        { name: "Kotlin DSL", level: 85, category: "build" },
        { name: "Firebase Crashlytics", level: 90, category: "monitoring" },
        { name: "Google Analytics", level: 85, category: "analytics" },
      ],
    },
  ]

  const topSkills = ["Android MVVM", "Android Jetpack", "Kotlin", "Android NDK", "Team Leadership"]


  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A full-stack mobile e-commerce solution built with Flutter, featuring real-time inventory management and secure payment processing.",
      tech: ["Flutter", "Dart", "Firebase", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management mobile app with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Android", "Kotlin", "Room", "Retrofit"],
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Fitness Tracking App",
      description:
        "A comprehensive fitness tracking application with workout plans, progress tracking, and social features for motivation.",
      tech: ["Flutter", "Firebase", "Google Fit", "Charts"],
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Interactive Lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute opacity-20 dark:opacity-30 transition-all duration-1000"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 75}px`,
              height: "1px",
              background: isDarkMode
                ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)"
                : "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)",
              transform: `rotate(${Math.random() * 360}deg) translateX(${(mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.01}px) translateY(${(mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * 0.01}px)`,
              animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full opacity-40 dark:opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isDarkMode ? "white" : "black",
              animation: `particle-float ${Math.random() * 12 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? "white" : "black"} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent backdrop-blur-md border-b ${isDarkMode ? "border-white/5" : "border-black/5"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 md:px-4 rounded-full transition-all duration-300 font-medium transform hover:scale-105 text-sm md:text-base ${activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : `${isDarkMode ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"} hover:bg-gray-100 dark:hover:bg-gray-800`
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Icons & Theme Toggle */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden sm:flex space-x-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="hover:scale-110 transition-transform duration-200 w-8 h-8 md:w-10 md:h-10"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  </Button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover:scale-110 transition-transform duration-200 w-8 h-8 md:w-10 md:h-10"
              >
                {isDarkMode ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:scale-110 transition-transform duration-200 w-8 h-8"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} animate-slide-down`}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 mb-2 ${activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : `${isDarkMode ? "text-white hover:bg-gray-800" : "text-black hover:bg-gray-200"}`
                    }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
        >
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 lg:space-y-8 hero-content order-2 lg:order-1">
                <div className="space-y-4">

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient-x leading-tight">
                    Turning Vision Into Reality With Code And Design.
                  </h1>
                  <p
                    className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"} animate-fade-in-up animation-delay-400`}
                  >
                    Crafting beautiful, performant mobile experiences across iOS, Android, and cross-platform solutions.
                    Specializing in Flutter, React Native, and native development.
                  </p>
                </div>

                {/* Action Buttons Layout */}
                               <div className="flex items-center space-x-8">
                                 <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                                   <div
                                     className={`w-20 h-20 lg:w-24 lg:h-24 absolute top-6 left-6 lg:top-8 lg:left-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-10 ${
                                       isDarkMode ? "bg-white text-black" : "bg-black text-white"
                                     } hover:scale-105 shadow-lg`}
                                     onClick={() => scrollToSection("contact")}
                                   >
                                     <motion.span
                                       className="text-sm lg:text-lg font-bold"
                                       animate={{ scale: [1, 1.1, 1] }}
                                       transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                     >
                                       Hire Me
                                     </motion.span>
                                   </div>
                                   <div className="absolute inset-0 w-full h-full animate-spin-slow">
                                     <svg className="w-full h-full" viewBox="0 0 200 200">
                                       <defs>
                                         <path id="circle-path" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                                       </defs>
                                       <text
                                         className={`text-[16px] lg:text-[18px] font-medium ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}
                                       >
                                         <textPath href="#circle-path" startOffset="50%" textAnchor="middle">
                                           Senior Mobile Developer • Flutter • iOS • Android •
                                         </textPath>
                                       </text>
                                     </svg>
                                   </div>
                                 </div>
               
                                 <div className="flex flex-col sm:flex-row gap-4">
                                   <Button
                                     size="lg"
                                     className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                                     onClick={() => scrollToSection("contact")}
                                   >
                                     Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                                   </Button>
               
                                   <Button
                                     variant="outline"
                                     size="lg"
                                     className={`px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border-2 ${
                                       isDarkMode ? "border-white/20 hover:border-white/40" : "border-black/20 hover:border-black/40"
                                     }`}
                                   >
                                     <Download className="mr-2 h-4 w-4" />
                                     Resume
                                   </Button>
                                 </div>
                               </div>

              </div>

              {/* Creative Tech Showcase */}

              <div className="relative hero-tiles order-1 lg:order-2">
                <div
                  className={`relative w-full h-100 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"} p-6 md:p-8 border ${isDarkMode ? "border-white/10" : "border-black/10"}`}
                >
                  <div className="mb-2">
                    <h3 className={`text-lg md:text-xl font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"} animate-fade-in-up`}>
                      Hello, I'm
                    </h3>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                      Muhammad Awais
                    </h2>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
                      Senior Mobile Application Developer
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="relative z-10 flex items-center justify-center pt-4 md:pt-8">
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-xs md:max-w-sm">
                      <div className="space-y-3 md:space-y-4">
                        <div
                          className={`${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-2xl p-3 md:p-4 shadow-lg animate-float hover:scale-105 transition-transform duration-300`}
                        >
                          <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mb-2" />
                          <p className="text-xs md:text-sm font-medium">iOS Apps</p>
                        </div>
                        <div
                          className={`${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-2xl p-3 md:p-4 shadow-lg animate-float-delay-1 hover:scale-105 transition-transform duration-300`}
                        >
                          <Code className="h-6 w-6 md:h-8 md:w-8 text-green-500 mb-2" />
                          <p className="text-xs md:text-sm font-medium">Flutter</p>
                        </div>
                      </div>
                      <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                        <div
                          className={`${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-2xl p-3 md:p-4 shadow-lg animate-float-delay-2 hover:scale-105 transition-transform duration-300`}
                        >
                          <Palette className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
                          <p className="text-xs md:text-sm font-medium">UI/UX</p>
                        </div>
                        <div
                          className={`${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-2xl p-3 md:p-4 shadow-lg animate-float-delay-3 hover:scale-105 transition-transform duration-300`}
                        >
                          <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-orange-500 mb-2" />
                          <p className="text-xs md:text-sm font-medium">Android</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16 md:py-20 px-4 scroll-animate">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Passionate mobile developer with expertise in creating exceptional user experiences
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center text-center lg:text-left">
              {/* Profile Image */}
              <div className="relative animate-fade-in-left mx-auto">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse-slow"></div>
                  <div
                    className={`absolute inset-2 ${isDarkMode ? "bg-black" : "bg-white"} rounded-full overflow-hidden`}
                  >
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Developer Profile"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="space-y-6 animate-fade-in-right">
                <div
                  className={`${isDarkMode ? "bg-white/5" : "bg-black/5"} backdrop-blur-sm rounded-2xl p-6 border ${isDarkMode ? "border-white/10" : "border-black/10"}`}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4">My Journey</h3>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed mb-4`}>
                    Started my journey in mobile development 5 years ago, and I've been passionate about creating
                    innovative mobile solutions ever since. I specialize in cross-platform development with Flutter and
                    React Native, as well as native iOS and Android development.
                  </p>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                    I believe in writing clean, maintainable code and creating user experiences that delight and engage
                    users.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card
                    className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                  >
                    <CardContent className="p-4 text-center">
                      <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-xl md:text-2xl font-bold">50+</p>
                      <p className={`text-xs md:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Projects Completed
                      </p>
                    </CardContent>
                  </Card>
                  <Card
                    className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                  >
                    <CardContent className="p-4 text-center">
                      <Award className="h-6 w-6 md:h-8 md:w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-xl md:text-2xl font-bold">5+</p>
                      <p className={`text-xs md:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Years Experience
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <section className="py-20 px-4 ">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Expertise in mobile app development with modern technologies
                  </p>

                  {/* Top Skills Badges */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {topSkills.map((skill, index) => (
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

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skillsData.map((category, categoryIndex) => (
                    <Card
                      key={category.title}
                      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${selectedCategory === category.title ? "ring-2 ring-blue-500 shadow-xl" : ""
                        }`}
                      onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div
                            className={`p-2 rounded-lg ${category.color} text-white group-hover:scale-110 transition-transform`}
                          >
                            {category.icon}
                          </div>
                          <span className="text-gray-900 dark:text-white">{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="space-y-2"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex justify-between items-center">
                              <span
                                className={`text-sm font-medium transition-colors ${hoveredSkill === skill.name
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-gray-700 dark:text-gray-300"
                                  }`}
                              >
                                {skill.name}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Expanded Category View */}
                {selectedCategory && (
                  <div className="mt-12 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCategory} - Detailed Breakdown
                      </h3>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {skillsData
                        .find((cat) => cat.title === selectedCategory)
                        ?.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {skill.category}
                              </Badge>
                            </div>
                            <Progress value={skill.level} className="h-3" />
                            <div className="text-right mt-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}% Proficiency</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Stats Summary */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Total Skills</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{skillsData.length}</div>
                    <div className="text-gray-600 dark:text-gray-400">Categories</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {Math.round(
                        skillsData.reduce((acc, cat) => acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0) /
                        skillsData.reduce((acc, cat) => acc + cat.skills.length, 0),
                      )}
                      %
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Avg Proficiency</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{topSkills.length}</div>
                    <div className="text-gray-600 dark:text-gray-400">Top Skills</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Showcasing some of my latest mobile applications and development work
              </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className={`group ${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Button
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110 w-8 h-8 md:w-10 md:h-10"
                    >
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </Button>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4 text-sm md:text-base`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${isDarkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"} hover:scale-105 transition-transform duration-200 text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {projects.map((project, index) => (
                  <Card
                    key={project.title}
                    className={`group ${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm border overflow-hidden flex-shrink-0 w-80 snap-start`}
                  >
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        size="icon"
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 w-10 h-10"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`${isDarkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"} text-xs`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 md:py-20 px-4 scroll-animate">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Ready to bring your mobile app idea to life? Let's discuss your project!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-6 md:space-y-8 animate-fade-in-left">
                <div
                  className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm rounded-2xl p-6 md:p-8 border`}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between hover:scale-105 transition-transform duration-200">
                      {/* Left: Icon and Email Text */}
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500/20 p-3 rounded-full">
                          <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
                            {contactInfo.email}
                          </p>
                        </div>
                      </div>

                      {/* Right: Copy Icon */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(contactInfo.email, "email")}
                        className="ml-2"
                      >
                        {copied === "email" ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-500" />
                        )}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between space-x-4  hover:scale-105 transition-transform duration-200">
                      {/* Left: Icon and Phone Text */}
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-500/20 p-3 rounded-full">
                          <Phone className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
                            {contactInfo.phone}
                          </p>
                        </div>
                      </div>

                      {/* Right: Copy Icon */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                        className="ml-2"
                      >
                        {copied === "phone" ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-500" />
                        )}
                      </Button>
                    </div>

                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
                          Pakistan, Lahore Punjab
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div
                  className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm rounded-2xl p-6 md:p-8 border`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <Calendar className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-green-500 font-medium">Available for new projects</p>

                    </div>

                  </div>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Response time: Within 24 hours</span>
                    </div>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                    <p>Weekend consultations available</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-right">
                <Card
                  className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm border`}
                >
                  <CardContent className="p-6 md:p-8">
                    {/* Social Links & CTA */}
                    <div className="space-y-8">
                      {/* Social Links */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Find Me Online</h3>

                        <div className="flex flex-wrap gap-3">
                          {social_Links.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                              title={link.name}
                            >
                              {link.icon}
                              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                {link.name}
                              </span>
                            </a>
                          ))}
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                          Connect with me on these platforms to see my work and experience.
                        </p>
                      </div>

                      {/* Quick Actions */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get Started</h3>

                        <div className="space-y-4">
                          <Button
                            className="w-full"
                            size="lg"
                            onClick={() => (window.location.href = `mailto:${contactInfo.email}`)}
                          >
                            <Mail className="w-5 h-5 mr-2" />
                            Send Email
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full"
                            size="lg"
                            onClick={() => window.open(`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`, "_blank")}
                          >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            WhatsApp Chat
                          </Button>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-300">
                            <strong>Quick Response:</strong> I typically respond to inquiries within 24 hours. For urgent
                            projects, WhatsApp is the fastest way to reach me.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-6 md:py-8 px-6 border-t ${isDarkMode ? "border-white/10" : "border-black/10"}`}>
        <div className="container mx-auto text-center">
          <p className={`text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2024 Muhammad Awais. Built with Next.js and modern web technologies.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(147, 51, 234, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(147, 51, 234, 0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-delay-3 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-skill-bar {
          animation: skillBar 1.5s ease-out forwards;
          width: 0 !important;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        @keyframes skillBar {
          to {
            width: var(--skill-width) !important;
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate:nth-child(even).animate-in {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .scroll-animate:nth-child(odd).animate-in {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
