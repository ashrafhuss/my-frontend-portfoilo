"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion";

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
    <motion.footer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      className="relative py-16 px-4 border-t border-white/10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
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
            <motion.div className="space-y-3" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <Link href={"mailto:sherazarifofficial@gmail.,com"} className="hover:underline focus:underline outline-none">sherazarifofficial@gmail.com</Link>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+923095533003</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Lahore, Pkistan</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <motion.div className="space-y-3" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
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
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <motion.div className="space-y-3" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
              {["Web Development", "Mobile Apps", "UI/UX Design", "API Development", "Consulting"].map((service) => (
                <div key={service} className="text-gray-400">
                  {service}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div className="border-t border-white/10 pt-8 mb-8" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
          <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10, delayChildren: 0.2 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <motion.div className="flex gap-4" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
                {[
                  { icon: Github, href:"https://github.com/SherazArif172/", label: "GitHub", color: "hover:bg-gray-600" },
                  { icon: Linkedin, href:"https://www.linkedin.com/in/sherazarifofficial/", label: "LinkedIn", color: "hover:bg-blue-600" },
                  { icon: Mail, href:"mailto:sherazarifofficial@gmail.com", label: "Email", color: "hover:bg-red-500" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <Link  key={social.label} href={social.href}>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`bg-white/5 border-white/20 text-white transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                    </Link>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Status */}
            <motion.div className="text-center md:text-right" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">Available for hire</span>
              </div>
              <div className="text-gray-400 text-sm">Response time: {"< 24 hours"}</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="border-t border-white/10 pt-8" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
          <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
            {/* Copyright */}
            <motion.div className="flex items-center gap-2 text-gray-400 text-sm" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
              <span>© {currentYear} Portfolio.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>lots of coffee</span>
            </motion.div>

            {/* Tech Stack */}
            <motion.div className="flex items-center gap-2 text-gray-500 text-xs" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ type: "spring", stiffness: 100, damping: 18 }}>
              <Code className="w-4 h-4" />
              <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            <Button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.footer>
  )
}
