"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Cloud, Zap, Globe, Settings, Brain, Rocket, Star } from "lucide-react"
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiVercel, SiNetlify, SiShadcnui } from "react-icons/si";
import { motion } from "framer-motion";

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

const skills = [
  { name: "React.js", icon: FaReact, color: "text-cyan-400", code: "import React from 'react';" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", code: "import { NextPage } from 'next';" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", code: "type User = { name: string }" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300", code: "className=\"bg-cyan-500 text-white\"" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "text-emerald-400", code: "import { Button } from '@/components/ui/button'" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400", code: "const express = require('express')" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-200", code: "app.get('/', (req, res) => res.send('Hello'))" },
  { name: "GitHub", icon: FaGithub, color: "text-white", code: "git push origin main" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-400", code: "git commit -m 'feat: new feature'" },
  { name: "Vercel", icon: SiVercel, color: "text-white", code: "vercel --prod" },
  { name: "Netlify", icon: SiNetlify, color: "text-green-300", code: "netlify deploy --prod" },
  { name: "AWS", icon: FaAws, color: "text-yellow-400", code: "aws s3 cp file.txt s3://bucket/" },
];

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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient delay-300">
              Skills
            </span>
            <span className="text-white font-mono">{"/>"}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My core technologies and tools for building modern, scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4, type: "spring" }}
                className="relative flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-300 group"
                onMouseEnter={() => setShowCode(skill.code)}
                onMouseLeave={() => setShowCode(null)}
              >
                <Icon className={`w-10 h-10 mb-3 ${skill.color} drop-shadow-lg group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-white text-base font-semibold tracking-wide text-center group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.name}
                </span>
                {/* Floating Code Tooltip */}
                {showCode === skill.code && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -16 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-black/90 border border-emerald-500/30 rounded-lg px-4 py-2 font-mono text-xs text-emerald-200 shadow-lg pointer-events-none whitespace-nowrap"
                  >
                    {skill.code}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
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
