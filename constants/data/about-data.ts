import { Target, Calendar, Coffee, Lightbulb, Award, TrendingUp } from "lucide-react"
import { Star, Code, Users, } from "lucide-react"

export const statsData = [
  {
    label: "Projects Completed",
    value: "50+",
    icon: Code,
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
  },
  {
    label: "Happy Clients",
    value: "30+",
    icon: Users,
    color: "text-green-500",
    bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
  },
  {
    label: "Years Experience",
    value: "5+",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20",
  },
  {
    label: "Awards Won",
    value: "10+",
    icon: Award,
    color: "text-purple-500",
    bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
  },
]

export const achievementBadges = [
  {
    icon: Award,
    label: "Certified Developer",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
    href: "https://www.hackerrank.com/certificates/794ccb84d359",
    external: true,
  },
  {
    icon: TrendingUp,
    label: "Top Performer",
    gradient: "bg-gradient-to-r from-green-500 to-teal-600",
    href: null,
    external: false,
  },
]

export const profileImageData = {
  src: "/images/developer.png?height=300&width=300",
  alt: "Developer Profile",
  width: 300,
  height: 300,
}

export const skillsSummaryLabels = [
  {
    key: "totalSkills",
    label: "Total Skills",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    key: "categories",
    label: "Categories",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    key: "avgProficiency",
    label: "Avg Proficiency",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    key: "topSkills",
    label: "Top Skills",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
]

export const proficiencyLevels = {
  expert: {
    threshold: 90,
    label: "Expert",
    className: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  },
  advanced: {
    threshold: 80,
    label: "Advanced",
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  },
  intermediate: {
    threshold: 70,
    label: "Intermediate",
    className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  },
  beginner: {
    threshold: 0,
    label: "Beginner",
    className: "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300",
  },
}
