"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee, MapPin, Phone } from "lucide-react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full-stack developer passionate about creating exceptional digital experiences with modern technologies.
                Let's build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>alex@developer.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <div className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3">
              {["Web Development", "Mobile Apps", "UI/UX Design", "API Development", "Consulting"].map((service) => (
                <div key={service} className="text-gray-400">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", color: "hover:bg-gray-600" },
                  { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                  { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
                  { icon: Mail, label: "Email", color: "hover:bg-red-500" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className={`bg-white/5 border-white/20 text-white transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Status */}
            <div className="text-center md:text-right">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">Available for hire</span>
              </div>
              <div className="text-gray-400 text-sm">Response time: {"< 24 hours"}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Portfolio.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>lots of coffee</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Code className="w-4 h-4" />
              <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </footer>
  )
}
