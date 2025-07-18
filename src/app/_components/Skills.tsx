"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Cloud, Zap, Globe, Settings, Brain, Rocket, Star } from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, experience: "3+ years", code: "const App = () => <div>Hello World</div>" },
      { name: "Next.js", level: 90, experience: "2+ years", code: "export default function Page() {}" },
      { name: "TypeScript", level: 88, experience: "2+ years", code: "interface User { name: string }" },
      { name: "Tailwind CSS", level: 92, experience: "2+ years", code: "className='bg-blue-500 text-white'" },
      { name: "Vue.js", level: 75, experience: "1+ year", code: "<template><div>{{ message }}</div></template>" },
      { name: "SASS/SCSS", level: 85, experience: "2+ years", code: "$primary-color: #3498db;" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90, experience: "3+ years", code: "const express = require('express')" },
      { name: "Python", level: 85, experience: "2+ years", code: "def hello_world(): return 'Hello!'" },
      { name: "PostgreSQL", level: 82, experience: "2+ years", code: "SELECT * FROM users WHERE active = true" },
      { name: "MongoDB", level: 80, experience: "2+ years", code: "db.users.find({ status: 'active' })" },
      { name: "GraphQL", level: 78, experience: "1+ year", code: "type User { id: ID! name: String! }" },
      { name: "Redis", level: 75, experience: "1+ year", code: "redis.set('key', 'value', 'EX', 3600)" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "AWS", level: 85, experience: "2+ years", code: "aws s3 cp file.txt s3://bucket/" },
      { name: "Docker", level: 88, experience: "2+ years", code: "FROM node:18-alpine" },
      { name: "Kubernetes", level: 70, experience: "1+ year", code: "apiVersion: apps/v1" },
      { name: "Vercel", level: 92, experience: "2+ years", code: "vercel --prod" },
      { name: "GitHub Actions", level: 80, experience: "1+ year", code: "on: [push, pull_request]" },
      { name: "Terraform", level: 65, experience: "6+ months", code: "resource 'aws_instance' 'web'" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Design",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Figma", level: 85, experience: "2+ years", code: "// Design to code workflow" },
      { name: "Git", level: 95, experience: "3+ years", code: "git commit -m 'feat: new feature'" },
      { name: "VS Code", level: 98, experience: "3+ years", code: "// Extensions: Prettier, ESLint" },
      { name: "Photoshop", level: 75, experience: "2+ years", code: "// Layer effects and filters" },
      { name: "Postman", level: 90, experience: "2+ years", code: "GET /api/users HTTP/1.1" },
      { name: "Notion", level: 88, experience: "2+ years", code: "// Project management" },
    ],
  },
  {
    id: "ai",
    name: "AI & Emerging",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "OpenAI API", level: 80, experience: "1+ year", code: "openai.chat.completions.create()" },
      { name: "LangChain", level: 75, experience: "6+ months", code: "from langchain import LLMChain" },
      { name: "TensorFlow", level: 65, experience: "6+ months", code: "import tensorflow as tf" },
      { name: "Blockchain", level: 70, experience: "1+ year", code: "pragma solidity ^0.8.0;" },
      { name: "Web3.js", level: 68, experience: "6+ months", code: "const web3 = new Web3()" },
      { name: "Three.js", level: 72, experience: "1+ year", code: "const scene = new THREE.Scene()" },
    ],
  },
]

const overallStats = [
  { label: "Languages", value: "12+", icon: Code2 },
  { label: "Frameworks", value: "15+", icon: Rocket },
  { label: "Years Coding", value: "3+", icon: Star },
  { label: "Projects Built", value: "50+", icon: Zap },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState("frontend")
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null)
  const [showCode, setShowCode] = React.useState<string | null>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-mono mb-6">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Skills
            </span>
            <span className="text-white font-mono">{"/>"}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I use to build exceptional digital
            experiences.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
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
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activeSkills.map((skill, index) => (
            <Card
              key={skill.name}
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
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-white">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Code Preview */}
                <div className="bg-black/30 rounded-lg p-3 font-mono text-xs">
                  <div className="text-gray-500 mb-1">// Example usage</div>
                  <div className="text-green-400">{skill.code}</div>
                </div>

                {/* Skill Level Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`} />
                </div>

                {/* Hover Effect */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

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
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
