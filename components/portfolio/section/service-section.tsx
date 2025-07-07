
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/constants/my-services"
import { sectionContent } from "@/constants/section-content"
import { useState } from "react"


interface ServiceSectionProps {
}

export  const  ServicesSection: React.FC<ServiceSectionProps> = ({  }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
const currentSection = sectionContent.services
  return (
 <SectionWrapper
              id={currentSection.id}
              title={currentSection.title}
                    subTitle={currentSection.subtitle}
              description={currentSection.description}
             
            >       {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-2 right-2 w-16 h-16 opacity-5 dark:opacity-5">
                  <service.icon className="w-full h-full text-gray-400" />
                </div>
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-lg" />
                </div>

                <CardContent className="relative p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14`}
                    >
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features - Show on Hover */}
                  <div
                    className={`space-y-2 mb-6 transition-all duration-500 ${hoveredService === service.id ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
                  >

                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button
            <Button
              variant="ghost"
              className="group/btn w-full justify-between p-0 h-auto text-left hover:bg-transparent"
            >
              <span className="text-gray-700 dark:text-gray-300 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors duration-300">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 group-hover/btn:translate-x-1 transition-all duration-300" />
            </Button> */}
                </CardContent>
              </Card>
            )
          })}
        </div>
     </SectionWrapper>
  )
}
