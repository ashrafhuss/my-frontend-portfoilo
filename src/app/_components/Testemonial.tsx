"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding. Our sales increased by 150% within the first month!",
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Working with Alex was a game-changer for our startup. The mobile app he built is not only beautiful but incredibly functional. His communication throughout the project was perfect.",
    project: "Mobile App Development",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The dashboard Alex created transformed how we analyze our data. Complex analytics made simple and beautiful. I highly recommend him for any data visualization project.",
    project: "Analytics Dashboard",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Alex took our rough idea and turned it into a polished, professional web application. His technical skills combined with great design sense make him invaluable.",
    project: "Web Application",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "FutureTech",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Exceptional work on our AI integration project. Alex understood complex requirements and delivered a solution that works flawlessly. Definitely working with him again!",
    project: "AI Integration",
  },
]

const companies = [
  { name: "TechStart", logo: "/placeholder.svg?height=40&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=40&width=120" },
  { name: "GrowthCo", logo: "/placeholder.svg?height=40&width=120" },
  { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=120" },
  { name: "FutureTech", logo: "/placeholder.svg?height=40&width=120" },
  { name: "DevCorp", logo: "/placeholder.svg?height=40&width=120" },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  // Auto-play testimonials
  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Testimonials
            </span>
            <span className="text-white font-mono">{" />"}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-white/20"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div>
                    <div className="text-white font-semibold text-lg">{currentTestimonial.name}</div>
                    <div className="text-gray-400">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                    <div className="text-sm text-blue-400 mt-1">Project: {currentTestimonial.project}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="bg-white/5 border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index)
                        setIsAutoPlaying(false)
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-yellow-400 w-8" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="bg-white/5 border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "25+", label: "Happy Clients" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Companies Worked With */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Amazing Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
