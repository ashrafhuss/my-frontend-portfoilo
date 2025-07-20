"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Cloud, Zap, Globe, Settings, Brain, Rocket, Star } from "lucide-react"
import CountUp from "./CountUp";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", experience: "2+ years", code: "const App = () => <div>Hello World</div>" },
      { name: "Next.js", experience: "2+ years", code: "export default function Page() {}" },
      { name: "TypeScript", experience: "1+ years", code: "interface User { name: string }" },
      { name: "Tailwind CSS", experience: "2+ years", code: "className='bg-blue-500 text-white'" },
      { name: "SASS/SCSS", experience: "2+ years", code: "$primary-color: #3498db;" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", experience: "1+ years", code: "const express = require('express')" },
      { name: "express.js", experience: "1+ years", code: "const express = require('express')" },
      { name: "MongoDB", experience: "1+ years", code: "db.users.find({ status: 'active' })" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "AWS", experience: "2+ years", code: "aws s3 cp file.txt s3://bucket/" },
      { name: "Vercel", experience: "2+ years", code: "vercel --prod" },
      { name: "GitHub Actions", experience: "1+ year", code: "on: [push, pull_request]" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Design",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Figma", experience: "2+ years", code: "// Design to code workflow" },
      { name: "Git", experience: "3+ years", code: "git commit -m 'feat: new feature'" },
      { name: "VS Code", experience: "3+ years", code: "// Extensions: Prettier, ESLint" },
      { name: "Postman", experience: "2+ years", code: "GET /api/users HTTP/1.1" },
      { name: "Notion", experience: "2+ years", code: "// Project management" },
    ],
  },
]

const overallStats = [
  { label: "Languages", value: "3+", icon: Code2 },
  { label: "Frameworks", value: "4+", icon: Rocket },
  { label: "Years Coding", value: "3+", icon: Star },
  { label: "Projects Built", value: "6+", icon: Zap },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState("frontend")
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null)
  const [showCode, setShowCode] = React.useState<string | null>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const [statsVisible, setStatsVisible] = useState(false);

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || []

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-emerald-400"
    if (level >= 80) return "from-blue-400 to-cyan-400"
    if (level >= 70) return "from-yellow-400 to-orange-400"
    return "from-gray-400 to-gray-500"
  }

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Code Snippets */}
        <div className="absolute top-20 left-10 opacity-20 font-mono text-xs text-green-400 animate-float">
          {"const skills = ['React', 'Node.js'];"}
        </div>
        <div className="absolute top-40 right-20 opacity-20 font-mono text-xs text-blue-400 animate-float delay-1000">
          {"function buildAmazingThings() {}"}
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 font-mono text-xs text-purple-400 animate-float delay-2000">
          {"SELECT * FROM experience;"}
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-mono mb-6">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Skills
            </span>
            <span className="text-white font-mono">{" />"}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I use to build exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.3,
              },
            },
          }}
          onAnimationComplete={() => setStatsVisible(true)}
        >
          {overallStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="w-full"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-1 flex items-center justify-center">
                      <CountUp to={parseInt(stat.value)} duration={1.2} startWhen={statsVisible} />
                      {stat.value.match(/\+|%/) && <span className="ml-1">{stat.value.replace(/\d+/g, "")}</span>}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`group relative overflow-hidden transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg`
                      : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {skillCategories.find((cat) => cat.id === category.id)?.skills.length}
                  </span>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.10,
                delayChildren: 0.7,
              },
            },
          }}
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="w-full"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <Card
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => {
                  setHoveredSkill(skill.name)
                  setShowCode(skill.code)
                }}
                onMouseLeave={() => {
                  setHoveredSkill(null)
                  setShowCode(null)
                }}
              >
                <CardContent className="p-6">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">{skill.experience}</span>
                  </div>

                  {/* Skill Level */}

                  {/* Code Preview */}
                  <div className="bg-black/30 rounded-lg p-3 font-mono text-xs">
                    <div className="text-gray-500 mb-1">// Example usage</div>
                    <div className="text-green-400">{skill.code}</div>
                  </div>

                  {/* Skill Level Badge */}

                  {/* Hover Effect */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Code Tooltip */}
        {showCode && (
          <div
            className="fixed z-50 bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm text-green-400 pointer-events-none transition-all duration-200"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 50,
              transform: "translate(0, -50%)",
            }}
          >
            <div className="text-gray-500 text-xs mb-1">// Live code example</div>
            {showCode}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to work with these technologies?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full group"
          >
            <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Let's Build Something Amazing
          </Button>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  )
}
