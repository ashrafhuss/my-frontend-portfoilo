"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  Star,
  Eye,
  GitBranch,
} from "lucide-react";
import pack from "../../../public/images/img1.png";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Noshly",
    description:
      "Chef-focused web app where culinary events are created, managed, and booked.",
    details:
      "Noshly is a chef-centric platform designed for creating and managing culinary events. Chefs can host cooking classes, tasting sessions, and pop-up dinners, while users can browse and book events in real time. The platform includes secure payment integration, event management tools, and an admin dashboard for monitoring activities. Built with React, Node.js, and AWS for performance and scalability.",
    image: "/images/img3.png",
    category: "fullstack",
    tech: ["Next.js", "Node.js", "Mongodb", "Stripe", "AWS"],
    live: "https://noshly.io/",
    featured: true,
    status: "completed",
  },

  {
    id: 2,
    title: "Pack & Track Courier Portal",
    description:
      "A full-featured courier and logistics management system that enables users to book shipments, track deliveries in real-time, and manage orders efficiently.",
    details:
      "Pack & Track is a logistics management system with real-time shipment tracking, user-friendly booking, and efficient order management. Built using Next.js, MongoDB, and JWT Auth for secure and scalable operations.",
    image: "/images/img1.png",
    category: "logistics",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT Auth",
    ],
    live: "https://portal.packandtrackds.com/",
    featured: true,
    status: "complete",
  },
  {
    id: 3,
    title: "Car Rental",
    description:
      "A modern car rental platform that allows users to browse, book, and manage rental vehicles seamlessly in real-time.",
    details:
      "Car Rental is a modern platform for browsing, booking, and managing rental vehicles. Features real-time availability, secure payments, and a user-friendly dashboard. Built with Next.js, MongoDB, and Stripe integration.",
    image: "/images/img2.png",
    category: "saas",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Stripe"],
    live: "https://rentalx-frontend.vercel.app/",
    featured: true,
    status: "in-progress",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Globe, count: projects.length },
  {
    id: "fullstack",
    name: "Full Stack",
    icon: Code,
    count: projects.filter((p) => p.category === "fullstack").length,
  },
  {
    id: "saas",
    name: "SaaS",
    icon: Star,
    count: projects.filter((p) => p.category === "saas").length,
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [hoveredProject, setHoveredProject] = React.useState<number | null>(
    null
  );
  const [mousePosition, setMousePosition] = React.useState<{
    [key: number]: { x: number; y: number };
  }>({});
  const [selectedProject, setSelectedProject] = React.useState<
    (typeof projects)[0] | null
  >(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent, projectId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition((prev) => ({
      ...prev,
      [projectId]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleCardClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      {/* Modal Background Blur */}
      {dialogOpen && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Main blur */}
          <div className="absolute inset-0 backdrop-blur-[8px] bg-black/40 transition-all duration-300" />
          {/* Animated gradient orbs */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/20 via-pink-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
      )}
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-mono mb-6">
            <Code className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
            <span className="text-white font-mono">{"/>"}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack
            development, AI integration, and modern web technologies.
          </p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
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
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                <Button
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Only show the small cards grid for all projects */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full"
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <Card
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:border-emerald-400 hover:shadow-[0_0_16px_2px_rgba(16,185,129,0.4)] cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onClick={() => handleCardClick(project)}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Status Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Glowing Beam Effect */}
                    {hoveredProject === project.id &&
                      mousePosition[project.id] && (
                        <div
                          className="pointer-events-none absolute z-20"
                          style={{
                            left: mousePosition[project.id].x - 40,
                            top: mousePosition[project.id].y - 4,
                            width: 80,
                            height: 8,
                            borderRadius: 8,
                            background:
                              "linear-gradient(90deg,rgba(16,185,129,0) 0%,rgba(16,185,129,0.7) 50%,rgba(16,185,129,0) 100%)",
                            boxShadow: "0 0 16px 4px rgba(16,185,129,0.5)",
                            transition: "left 0.1s linear, top 0.1s linear",
                          }}
                        />
                      )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-white border-0 w-8 h-8 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.live, "_blank");
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Status Badge (moved under tech stack) */}
                    <div className="mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${project.status === "completed" || project.status === "complete"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"}
                      `}
                      >
                        {project.status === "completed" || project.status === "complete" ? "✓ Completed" : "🚧 In Progress"}
                      </span>
                    </div>

                    {/* Stats */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-md w-full bg-[#101a14]/95 border border-emerald-900/60 shadow-lg shadow-emerald-900/30 p-0 md:px-2 md:py-4 backdrop-blur-md">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl md:text-2xl text-white mb-1 font-extrabold leading-tight">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm md:text-base text-gray-300 mb-3">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  className="w-full object-contain rounded-lg mb-3 shadow-lg bg-black"
                />
                <div className="mb-3 text-gray-200 whitespace-pre-line text-sm md:text-base leading-relaxed">
                  {selectedProject.details}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-white text-sm block mb-2">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {selectedProject.tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: idx * 0.07, duration: 0.3 }}
                          className="px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-200 text-xs font-semibold shadow shadow-emerald-900/20 border border-emerald-700/40 backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="flex gap-4 mb-2">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <Link
            href={"http://github.com/sherazArif172/"}
            className="cursor-pointer"
          >
            <Button
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
