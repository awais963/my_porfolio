// Sample structure for your experience timeline data
// Replace with your actual experienceTimeline data
export interface ExperienceItem {
  id:string
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
    id:"1",
    year: "2024",
    type: "Current Position",
    title: "Software Engineer Mobile Application Developer",
    company: "Egora Pvt Ltd",
    description:
      "Developing Kotlin and Flutter-based applications for restaurant ordering and Bluetooth thermal printing.",
    achievements: [
      "Developed Kotlin-based Android app with Jetpack Compose for Bluetooth thermal printers",
      "Integrated Bluetooth printing with real-time print operations from web content",
      "Contributed to Egora App (Flutter) for dine-in, pickup, and table reservations",
      "Implemented cart logic and backend API integration for ordering",
      "Integrated XStax payment gateway for secure online payments",
      "Collaborated with cross-functional teams to maintain app performance and usability",
    ],
    technologies: ["Kotlin", "Flutter", "Jetpack Compose", "Bluetooth API", "Firebase", "XStax API", "REST APIs"]
  },
  {
     id:"2",
    year: "2022",
    type: "Career Growth",
    title: "Software Engineer Android Developer",
    company: "Healthwire",
    description:
      "Enhanced Android app performance, crash rates, and integrated secure payment gateways.",
    achievements: [
      "Improved performance by 75% and reduced APK size by 30%",
      "Achieved 9% reduction in crash rates",
      "Integrated Meezan and Foree payment gateways with 100% security",
      "Enhanced map features using Google Maps and Places API",
      "Conducted A/B testing and implemented event tracking",
      "Ensured 100% user satisfaction with continuous performance optimization"
    ],
    technologies: ["Kotlin", "Android SDK", "Retrofit", "Google Maps API", "Firebase", "Crashlytics", "Analytics"]
  },
  {
     id:"3",
    year: "2020",
    type: "Professional Growth",
    title: "Senior Android Developer",
    company: "DonGamers",
    description:
      "Led mobile development and improved app stability, performance, and monetization.",
    achievements: [
      "Achieved 90% crash-free rate through bug fixing",
      "Integrated Pusher for chat and Unity for in-app games",
      "Merged In-App Purchases and AdMob for monetization",
      "Boosted user engagement and sales by 10%"
    ],
    technologies: ["Kotlin", "MVVM", "Jetpack", "Pusher", "Unity", "Google AdMob", "In-App Purchases"]
  },
  {
     id:"4",
    year: "2020",
    type: "Career Start",
    title: "Android Developer",
    company: "DonGamers",
    description:
      "Built and maintained the DonGamers app with modern Android practices and API integrations.",
    achievements: [
      "Developed the app from scratch and scaled to a global audience",
      "Enhanced responsiveness and reliability by 95%",
      "Integrated external APIs with fast response times (up to 700ms)",
      "Used Jetpack, Kotlin Coroutines, and MVVM architecture for modern app design"
    ],
    technologies: ["Kotlin", "MVVM", "Coroutines", "Jetpack Libraries", "Retrofit"]
  },
  {
     id:"5",
    year: "2019",
    type: "Internship",
    title: "Android Developer Intern",
    company: "NetRoots Technologies LLC",
    description:
      "Worked on employee attendance, profile management, and leave systems with GPS features.",
    achievements: [
      "Built profile management and attendance features",
      "Integrated GPS and image capture for attendance accuracy",
      "Simplified leave management, reducing manual effort by 50%",
      "Delivered monthly attendance reports, improving efficiency by 40%",
      "Achieved 90% bug-free status through issue resolution"
    ],
    technologies: ["Java", "Android SDK", "GPS", "SQLite"]
  }
];
