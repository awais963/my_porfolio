
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/featuredProjects";

import Image from "next/image";

import { GradientHeading } from "@/components/ui/gradient-heading";


interface FeatureProjectsSectionProps {
  isDarkMode: boolean;
}


export const FeatureProjectsSection: React.FC<FeatureProjectsSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="projects" className="min-h-screen py-16 md:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <GradientHeading text="Featured Projects" fromColor="from-purple-600" toColor="to-pink-600" />
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Showcasing some of my latest mobile applications and development work
          </p>
                    <div className={`w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600`}></div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
          <a href={project.url} target="_blank">  <div 
              key={project.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
               {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge
                      className={`${
                        isDarkMode
                          ? "bg-gray-900/80 text-gray-300 border-gray-700"
                          : "bg-white/80 text-gray-700 border-gray-300"
                      } backdrop-blur-sm text-xs font-medium`}
                    >
                      {project.category}
                    </Badge>
                  </div>
              {/* Project Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay - appears on hover */}
                <div
className={`absolute inset-0 ${project.gradient} bg-gradient-to-t transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out`}
            />

                {/* App Name - always visible, moves up on hover */}
                <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-2 transition-transform duration-300 z-10">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                </div>

                {/* Hover Content - slides up from bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 pb-16 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-white space-y-4">
                    <p className="text-sm opacity-90 line-clamp-3">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-white/20 text-white border-white/30 text-xs hover:bg-white/30 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div></a>
          ))}
        </div>
      </div>
    </section>
  )
}