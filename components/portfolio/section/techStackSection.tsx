
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaCode, FaDatabase, FaJava } from "react-icons/fa";
import { SiApple, SiDart, SiFirebase, SiFlutter, SiJetpackcompose, SiKotlin, SiMongodb, SiSqlite } from "react-icons/si";


import { GradientHeading } from "@/components/ui/gradient-heading";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface TechStackSectionProps {
    isDarkMode: boolean;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
    isDarkMode,
   

}) => {
      const [currentTechSlide, setCurrentTechSlide] = useState(0)

useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTechSlide((prev) => (prev + 1) % techStackCarousel.length)
    }, 5000)

   

    return () => {
      clearInterval(techInterval)
    }
  }, [])
  const techStackCarousel = [
    {
      category: "Mobile Stacks",
      technologies: [
        {
          name: "iOS",
          description: "Modern iOS UI toolkit using Swift UI",
          icon: <SiApple className="text-sky-500" />,
          color: "from-sky-400 to-cyan-400",
        }, {
          name: "Flutter",
          description: "Cross-platform UI framework by Google",
          icon: <SiFlutter className="text-sky-500" />,
          color: "from-sky-400 to-cyan-400",
        },
        {
          name: "Jetpack Compose",
          description: "Modern Android UI toolkit using Kotlin",
          icon: <SiJetpackcompose className="text-purple-500" />,
          color: "from-purple-500 to-indigo-500",
        },
        {
          name: "XML Layout",
          description: "Traditional Android UI layout files",
          icon: <FaCode className="text-orange-500" />,
          color: "from-orange-400 to-yellow-400",
        },
      ],
    },
    {
      category: "Programming Languages",
      technologies: [
        {
          name: "Kotlin",
          description: "Modern, concise language for Android",
          icon: <SiKotlin className="text-purple-600" />,
          color: "from-purple-600 to-pink-500",
        },
        {
          name: "Java",
          description: "Classic OOP language for Android and backend",
          icon: <FaJava className="text-red-500" />,
          color: "from-red-500 to-orange-500",
        },
        {
          name: "Dart",
          description: "Language used with Flutter",
          icon: <SiDart className="text-cyan-500" />,
          color: "from-cyan-500 to-blue-500",
        },
      ],
    },
    {
      category: "Databases & Cloud",
      technologies: [
        {
          name: "Firebase Realtime DB",
          description: "Cloud-hosted NoSQL database",
          icon: <SiFirebase className="text-yellow-500" />,
          color: "from-yellow-400 to-orange-400",
        },
        {
          name: "Firebase Firestore",
          description: "Scalable NoSQL cloud database",
          icon: <SiFirebase className="text-orange-500" />,
          color: "from-orange-400 to-red-400",
        },
        {
          name: "MongoDB",
          description: "Document database for flexible schemas",
          icon: <SiMongodb className="text-green-500" />,
          color: "from-green-400 to-lime-400",
        },
        {
          name: "SQLite",
          description: "Lightweight embedded SQL DB",
          icon: <SiSqlite className="text-blue-500" />,
          color: "from-blue-400 to-sky-400",
        },
        {
          name: "SQLDelight",
          description: "Typesafe SQL for Android with Kotlin",
          icon: <FaDatabase className="text-purple-500" />,
          color: "from-purple-500 to-violet-500",
        },
      ],
    },
  ];

    return (

    <section className="py-16 md:py-20 px-4">
        <div className="w-full max-w-[96%] 2xl:max-w-[96%] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <GradientHeading text="Technology Stack"  />
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Cutting-edge technologies I use to build exceptional mobile experiences
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTechSlide * 100}%)` }}
              >
                {techStackCarousel.map((category, categoryIndex) => (
                  <div key={category.category} className="w-full flex-shrink-0">
                    <div
                      className={`${isDarkMode ? "bg-white/5" : "bg-black/5"} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? "border-white/10" : "border-black/10"}`}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        {category.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {category.technologies.map((tech, techIndex) => (
                          <div
                            key={tech.name}
                            className={`group ${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border ${isDarkMode ? "border-white/20" : "border-black/20"} hover:border-blue-500/50`}
                          >
                            <div className="text-center">
                              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {tech.icon}
                              </div>
                              <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                {tech.description}
                              </p>
                              <div
                                className={`mt-4 h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentTechSlide((prev) => (prev - 1 + techStackCarousel.length) % techStackCarousel.length)
                }
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {techStackCarousel.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTechSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTechSlide
                        ? "bg-blue-500 scale-125"
                        : isDarkMode
                          ? "bg-gray-600"
                          : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTechSlide((prev) => (prev + 1) % techStackCarousel.length)}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
};
