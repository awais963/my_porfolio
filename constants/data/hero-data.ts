import { ArrowRight, Code, Download, Palette, Smartphone, Mail, FileText } from "lucide-react"

export const heroContent = {
  personal: {
    name: "Muhammad Awais",
    title: "Senior Mobile Application Developer",
    welcomeText: "WELCOME TO MY WORLD",
    tagline: "Turning Vision Into Reality With Code And Design.",
    description:
      "Crafting beautiful, performant mobile experiences across iOS, Android, and cross-platform solutions. Specializing in Flutter, React Native, and native development.",
    hireMeText: "Hire Me",
    circularText: "Senior Mobile Developer • Flutter • iOS • Android •",
  },

  buttons: {
    primary: {
      text: "Contact Me",
      icon: ArrowRight,
      action: "contact",
    },
    secondary: {
      text: "Resume",
      icon: Download,
      href: "/Muhammad Awais CV.pdf",
      download: true,
    },
    additional: [
      {
        text: "View Projects",
        icon: FileText,
        action: "projects",
        variant: "ghost" as const,
      },
      {
        text: "Get In Touch",
        icon: Mail,
        action: "contact",
        variant: "outline" as const,
      },
    ],
  },

  techStack: [
    {
      icon: Smartphone,
      label: "iOS Apps",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-600/20",
      delay: "animate-float-delay-3",
          column: "left",

    },
    {
      icon: Code,
      label: "Flutter",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-green-600/20",
      delay: "animate-float-delay-1",
          column: "left",

    },
    {
      icon: Palette,
      label: "UI/UX",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-purple-600/20",
      delay: "animate-float-delay-1",
          column: "right",

    },
    {
      icon: Smartphone,
      label: "Android",
      color: "text-orange-500",
      bgColor: "from-orange-500/20 to-orange-600/20",
      delay: "animate-float-delay-3",
          column: "right",

    },
  ],

  animations: {
    mainTitle: "animate-gradient-x",
    description: "animate-fade-in-up animation-delay-400",
    welcomeText: "animate-fade-in-up",
    name: "animate-fade-in-up animation-delay-200",
    title: "animate-fade-in-up animation-delay-300",
    hireMeButton: "animate-pulse-ring",
    circularText: "animate-spin-slow",
    techCards: "hover:scale-105 transition-transform duration-300",
  },

  gradients: {
    mainTitle: "bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600",
    name: "bg-gradient-to-r from-blue-500 to-purple-500",
    title: "bg-gradient-to-r from-blue-500 to-purple-500",
    primaryButton: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
    showcase: (isDarkMode: boolean) =>
      isDarkMode ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white",
    overlay: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
  },


}
