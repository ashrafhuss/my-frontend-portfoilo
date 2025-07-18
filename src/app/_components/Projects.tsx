"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Play, Code, Smartphone, Globe, Database, Zap, Star, Eye, GitBranch } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    category: "fullstack",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "https://github.com",
    live: "https://demo.com",
    stats: { stars: 124, forks: 45, views: "2.3k" },
    featured: true,
    status: "completed",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI integration, voice messages, and smart reply suggestions.",
    image: "/placeholder.svg?height=300&width=500",
    category: "ai",
    tech: ["Next.js", "OpenAI", "Socket.io", "MongoDB", "Tailwind"],
    github: "https://github.com",
    live: "https://demo.com",
    stats: { stars: 89, forks: 23, views: "1.8k" },
    featured: true,
    status: "completed",
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with social features and workout plans.",
    image: "/placeholder.svg?height=300&width=500",
    category: "mobile",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com",
    live: "https://demo.com",
    stats: { stars: 67, forks: 18, views: "1.2k" },
    featured: false,
    status: "completed",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for complex data analysis with real-time charts and reporting.",
    image: "/placeholder.svg?height=300&width=500",
    category: "data",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI", "Docker"],
    github: "https://github.com",
    live: "https://demo.com",
    stats: { stars: 156, forks: 34, views: "3.1k" },
    featured: true,
    status: "completed",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain technology for transparency and immutability.",
    image: "/placeholder.svg?height=300&width=500",
    category: "blockchain",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    github: "https://github.com",
    live: "https://demo.com",
    stats: { stars: 203, forks: 67, views: "4.5k" },
    featured: false,
    status: "in-progress",
  },
  {
    id: 6,
    title: "SaaS Analytics Tool",
    description: "Comprehensive analytics platform for SaaS businesses with subscription management.",
    image: "/placeholder.svg?height=300&width=500",
    category: "saas",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    github: "https://github.com",
    live: "https://demo.com",
    stats: { stars: 91, forks: 28, views: "2.7k" },
    featured: false,
    status: "completed",
  },
]

const categories = [
  { id: "all", name: "All Projects", icon: Globe, count: projects.length },
  { id: "fullstack", name: "Full Stack", icon: Code, count: projects.filter((p) => p.category === "fullstack").length },
  { id: "ai", name: "AI/ML", icon: Zap, count: projects.filter((p) => p.category === "ai").length },
  { id: "mobile", name: "Mobile", icon: Smartphone, count: projects.filter((p) => p.category === "mobile").length },
  { id: "data", name: "Data Viz", icon: Database, count: projects.filter((p) => p.category === "data").length },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: GitBranch,
    count: projects.filter((p) => p.category === "blockchain").length,
  },
  { id: "saas", name: "SaaS", icon: Star, count: projects.filter((p) => p.category === "saas").length },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("all")
  const [hoveredProject, setHoveredProject] = React.useState<number | null>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  const handleMouseMove = (e: React.MouseEvent, projectId: number) => {
    if (hoveredProject === projectId) {
      const rect = e.currentTarget.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-mono mb-6">
            <Code className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
            <span className="text-white font-mono">{"/>"}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, AI integration, and modern web
            technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`group relative overflow-hidden ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                    : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </Button>
            )
          })}
        </div>

        {/* Featured Projects Showcase */}
        {activeCategory === "all" && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">⭐ Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <Card
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          }`}
                        >
                          {project.status === "completed" ? "✓ Completed" : "🚧 In Progress"}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            <Play className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.stats.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch className="w-4 h-4" />
                            {project.stats.forks}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {project.stats.views}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Mouse Follow Effect */}
                  {hoveredProject === project.id && (
                    <div
                      className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl pointer-events-none transition-all duration-300"
                      style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                      }}
                    />
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-0 w-8 h-8 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-0 w-8 h-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.stats.views}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded ${
                        project.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status === "completed" ? "Live" : "WIP"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full"
          >
            <Github className="w-5 h-5 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
