// Sample structure for your experience timeline data
// Replace with your actual experienceTimeline data

export interface ExperienceItem {
  year: string
  type: string
  title: string
  company: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experienceTimeline: ExperienceItem[] = [
  {
    year: "2024",
    type: "Current Position",
    title: "Senior Mobile Developer",
    company: "Tech Innovation Corp",
    description:
      "Leading mobile development initiatives and mentoring junior developers while architecting scalable mobile solutions.",
    achievements: [
      "Led development of 3 major mobile applications with 100K+ downloads",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 5 junior developers and established coding standards",
      "Achieved 99.9% app crash-free rate across all platforms",
    ],
    technologies: ["Flutter", "React Native", "Firebase", "AWS", "TypeScript", "GraphQL"],
  },
  {
    year: "2022",
    type: "Career Growth",
    title: "Mobile Developer",
    company: "Digital Solutions Ltd",
    description:
      "Developed cross-platform mobile applications and collaborated with design teams to create exceptional user experiences.",
    achievements: [
      "Built 5 successful mobile apps from concept to deployment",
      "Reduced app loading time by 40% through optimization",
      "Integrated complex APIs and third-party services",
      "Maintained 4.8+ star rating across app stores",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite", "Git"],
  },
  {
    year: "2020",
    type: "Career Start",
    title: "Junior Mobile Developer",
    company: "StartUp Ventures",
    description:
      "Started my professional journey in mobile development, learning industry best practices and contributing to innovative projects.",
    achievements: [
      "Successfully completed 10+ mobile app features",
      "Learned and implemented modern development practices",
      "Collaborated effectively with cross-functional teams",
      "Contributed to open-source mobile development projects",
    ],
    technologies: ["React Native", "JavaScript", "Node.js", "MongoDB", "Redux"],
  },
]
