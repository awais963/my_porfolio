
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sectionContent } from "@/constants/section-content";
import { testimonials } from "@/constants/testimonial";
import Image from "next/image";
import { useEffect, useState } from "react";

import { SectionWrapper } from "@/components/section-wrapper";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star
} from "lucide-react";
interface TestimonialSectionProps {
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({


}) => {
  const currentSection = sectionContent.testimonials
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)
  useEffect(() => {


    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => {
      clearInterval(testimonialInterval)
    }
  }, [])
  return (
     <SectionWrapper
              id={currentSection.id}
              title={currentSection.title}
                    subTitle={currentSection.subtitle}
              description={currentSection.description}
             
            >
      <div className="relative max-w-4xl mx-auto">

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="w-full flex-shrink-0">
                <Card
                  className={`bg-black/5 border-black/10 backdrop-blur-sm border mx-4`}
                >
                  <CardContent className="p-8 text-center">
                    <Quote className="w-12 h-12 mx-auto mb-6 text-blue-500 opacity-50" />
                    <p
                      className={`text-lg md:text-xl leading-relaxed mb-6 text-gray-700`}
                    >
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className={`text-sm text-gray-600`}>
                          {testimonial.role}
                        </p>
                        <p className={`text-sm text-gray-500`}>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTestimonialSlide
                  ? "bg-pink-500 scale-125"
                  :  "bg-gray-300"
                  }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length)}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
