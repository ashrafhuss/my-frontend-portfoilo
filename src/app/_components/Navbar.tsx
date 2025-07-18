"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SherazArif172/", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sherazarifofficial/", icon: Linkedin },
  { name: "Email", href: "mailto:sherazarifofficial@gmail.com", icon: Mail },
]

export function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="text-white font-bold text-2xl tracking-tight hover:text-gray-300 transition-colors duration-200"
          >
            SHERAZ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white/80 hover:text-white transition-all duration-200 relative group ${
                  activeSection === item.name.toLowerCase() ? "text-white" : ""
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              )
            })}
            {/* <Button
              variant="outline"
              className="ml-4 bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Hire Me
            </Button> */}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/10 text-white w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors duration-200 py-2 border-b border-white/10 hover:border-white/30"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-6">
                  <div className="flex space-x-4 mb-6">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          className="text-white/60 hover:text-white transition-colors duration-200 p-3 hover:bg-white/10 rounded-full"
                        >
                          <Icon className="w-5 h-5" />
                        </Link>
                      )
                    })}
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                    Hire Me
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
