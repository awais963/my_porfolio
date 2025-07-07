
import { projects } from "@/constants/featuredProjects";
import { useState } from "react";

import Image from "next/image";

import { SectionWrapper } from "@/components/section-wrapper";
import { sectionContent } from "@/constants/section-content";

interface FeatureProjectsSectionProps {
}


export const FeatureProjectsSection: React.FC<FeatureProjectsSectionProps> = ({  }) => {
  const [activeTab, setActiveTab] = useState("All")
  const currentSection = sectionContent.projects
  const tabs = ["All", "Mobile", "Flutter", "iOS",]
  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)
  return (
    <SectionWrapper
              id={currentSection.id}
              title={currentSection.title}
                    subTitle={currentSection.subtitle}
              description={currentSection.description}
             
            >
       {/* Tabs */}
        {/* <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 inline-flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out ${activeTab === tab
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg shadow-gray-200 dark:shadow-gray-900/50 transform translate-y-[-2px]"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div> */}
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-gray-900/10 dark:shadow-white/10 hover:shadow-xl hover:shadow-gray-900/20 dark:hover:shadow-white/20 transition-all duration-700 ease-in-out transform hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-115">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.technology}
                  </span>
                  <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Gradient Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-25 transition-all duration-700`}
                  style={{ pointerEvents: "none" }}
                />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                  <div className="relative px-4 pt-3 pb-4 ">
                    <div
                      className="absolute inset-0 z-[-1] pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at bottom, rgba(0,0,0,0.5), transparent)',
                        filter: 'blur(12px)',
                      }}
                    />
                    {/* App Name - always visible */}
                    <h3 className="text-white text-center font-semibold text-lg drop-shadow-lg">
                      {project.title}
                    </h3>

                    {/* Description & Features - reveal on hover */}
                    <div className="mt-3 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                      <p className="text-gray-200 text-sm text-center mb-3 leading-snug">{project.description}</p>

                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tech.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          ))}
        </div>
    </SectionWrapper>
  )
}