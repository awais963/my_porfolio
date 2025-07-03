
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/data/hero-data";

import { motion } from "framer-motion";
import {
  ArrowRight, Download
} from "lucide-react";
interface HeroSectionProps {
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;

}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkMode,
  scrollToSection,

}) => {
  const bgColors = [{

    bgColor: "from-blue-500/20 to-blue-600/20",
  },
  {

    bgColor: "from-green-500/20 to-green-600/20",


  },
  {

    bgColor: "from-purple-500/20 to-purple-600/20",


  },
  {
    bgColor: "from-orange-500/20 to-orange-600/20",


  }];
  return (

    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="w-full max-w-[96%] 2xl:max-w-[96%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 hero-content order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-2 font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient-x leading-tight">
                Turning Vision Into Reality With Code And Design.
              </h1>
              <p
                className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"} animate-fade-in-up animation-delay-400`}
              >
                Crafting beautiful, performant mobile experiences across iOS, Android, and cross-platform solutions.
                Specializing in Flutter, and native development.
              </p>
            </div>

            {/* Action Buttons Layout */}

            <div className="flex items-center justify-center xl:justify-start gap-4 relative flex-wrap ">
              {/* Hire Me Circle - Desktop only */}
              <div className="hidden xl:flex items-center pl-4">
                <div className="relative w-36 h-36">
                  {/* Pulsing Circle Background */}
                  <div
                    className={`w-24 h-24 absolute top-6 left-6 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 ${isDarkMode ? "bg-white text-black" : "bg-black text-white"
                      } animate-pulse-ring hover:scale-105 transition-transform duration-300`}
                    onClick={() => scrollToSection("contact")}
                  >
                    {/* Bouncing Text */}
                    <motion.span
                      className="text-lg font-bold"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      Hire Me
                    </motion.span>
                  </div>

                  {/* Rotating Outer Text */}
                  <div className="absolute inset-0 w-full h-full overflow-visible animate-spin-slow">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <path id="circle-path" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                      </defs>
                      <text className={`text-[20px] font-medium ${isDarkMode ? "fill-gray-400" : "fill-gray-600"}`}>
                        <textPath href="#circle-path" startOffset="50%" textAnchor="middle">
                          Senior Mobile Developer • Flutter • iOS • Android •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-row gap-4 flex-wrap">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <a href="/Muhammad Awais CV.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border-2 ${isDarkMode ? "border-white/20 hover:border-white/40" : "border-black/20 hover:border-black/40"
                      }`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Creative Tech Showcase */}

          <div className="relative hero-tiles order-1 lg:order-2">
            <div
              className={`relative w-full h-100 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"} p-6 md:p-8 border ${isDarkMode ? "border-white/10" : "border-black/10"}`}
            >
              <div className="mb-2">
                <h3
                  className={`text-lg md:text-xl font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"} animate-fade-in-up`}
                >
                  WELCOME TO MY WORLD
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
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-xs md:max-w-sm">
                  {heroContent.techStack.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.label}
                        className={`bg-gradient-to-br ${bgColors[index].bgColor} rounded-2xl p-3 md:p-4 shadow-lg ${skill.delay} hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className={`h-6 w-6 md:h-8 md:w-8 mb-2 ${skill.color}`} />
                        <p className="text-xs md:text-sm font-medium">{skill.label}</p>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 right-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-60" />
              <div className="absolute bottom-20 left-8 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-1000 opacity-60" />
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
