import { Code, Smartphone, Database, Layers } from "lucide-react"

export const topSkills = ["React Native", "Flutter", "TypeScript", "Node.js", "Firebase", "UI/UX Design"]

export const skillsData = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    skills: [
      {
        name: "TypeScript",
        level: 95,
        category: "Frontend",
        description: "Advanced type-safe JavaScript development",
      },
      {
        name: "JavaScript",
        level: 98,
        category: "Frontend",
        description: "Modern ES6+ JavaScript programming",
      },
      {
        name: "Dart",
        level: 90,
        category: "Mobile",
        description: "Flutter mobile app development",
      },
      {
        name: "Swift",
        level: 85,
        category: "iOS",
        description: "Native iOS application development",
      },
      {
        name: "Kotlin",
        level: 82,
        category: "Android",
        description: "Modern Android development",
      },
      {
        name: "Python",
        level: 78,
        category: "Backend",
        description: "Backend services and automation",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    skills: [
      {
        name: "React Native",
        level: 95,
        category: "Cross-platform",
        description: "Cross-platform mobile app development",
      },
      {
        name: "Flutter",
        level: 92,
        category: "Cross-platform",
        description: "Google's UI toolkit for mobile apps",
      },
      {
        name: "iOS Development",
        level: 88,
        category: "Native",
        description: "Native iOS app development with Swift",
      },
      {
        name: "Android Development",
        level: 85,
        category: "Native",
        description: "Native Android app development",
      },
      {
        name: "Expo",
        level: 90,
        category: "Framework",
        description: "React Native development platform",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: Database,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    skills: [
      {
        name: "Node.js",
        level: 92,
        category: "Runtime",
        description: "Server-side JavaScript development",
      },
      {
        name: "Firebase",
        level: 95,
        category: "BaaS",
        description: "Google's mobile and web development platform",
      },
      {
        name: "MongoDB",
        level: 85,
        category: "NoSQL",
        description: "Document-based database management",
      },
      {
        name: "PostgreSQL",
        level: 80,
        category: "SQL",
        description: "Relational database management",
      },
      {
        name: "GraphQL",
        level: 78,
        category: "API",
        description: "Query language for APIs",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Frameworks",
    icon: Layers,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    skills: [
      {
        name: "Git",
        level: 95,
        category: "Version Control",
        description: "Distributed version control system",
      },
      {
        name: "Docker",
        level: 82,
        category: "DevOps",
        description: "Containerization platform",
      },
      {
        name: "AWS",
        level: 78,
        category: "Cloud",
        description: "Amazon Web Services cloud platform",
      },
      {
        name: "Jest",
        level: 88,
        category: "Testing",
        description: "JavaScript testing framework",
      },
      {
        name: "Webpack",
        level: 85,
        category: "Build Tool",
        description: "Module bundler for JavaScript",
      },
    ],
  },
]
