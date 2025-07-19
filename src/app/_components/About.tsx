"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Code,
  Coffee,
  Zap,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";

const codeLines = [
  "const developer = {",
  "  name: 'Sheraz Arif',",
  "  location: 'Lahore',",
  "  experience: '2+ years',",
  "  passion: 'Creating amazing experiences',",
  "  skills: [",
  "    'React', 'Next.js', 'TypeScript',",
  "    'Node.js', 'git', 'mongodb'",
  "  ],",
  "  currentStatus: 'Available for hire',",
  "  coffee: '☕'.repeat(Math.floor(Math.random() * 5) + 1)",
  "};",
];

const terminalCommands = [
  { command: "whoami", output: "Full Stack Developer & Problem Solver" },
  {
    command: "ls skills/",
    output: "react/ nextjs/ typescript/ nodejs/ git/ mongodb/",
  },
  {
    command: "cat experience.txt",
    output: "2+ years building scalable web applications",
  },
  {
    command: "grep -r 'passion' .",
    output: "./life: Creating digital experiences that matter",
  },
];

export function AboutSection() {
  const [typedCode, setTypedCode] = React.useState("");
  const [currentLine, setCurrentLine] = React.useState(0);
  const [currentChar, setCurrentChar] = React.useState(0);
  const [showCursor, setShowCursor] = React.useState(true);
  const [terminalStep, setTerminalStep] = React.useState(0);
  const [showTerminal, setShowTerminal] = React.useState(false);

  // Typing animation for code
  React.useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setTypedCode((prev) => prev + line[currentChar]);
          setCurrentChar((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setTypedCode((prev) => prev + "\n");
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        }, 200);
        return () => clearTimeout(timer);
      }
    } else {
      setTimeout(() => setShowTerminal(true), 1000);
    }
  }, [currentLine, currentChar]);

  // Cursor blinking
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Terminal animation
  React.useEffect(() => {
    if (showTerminal && terminalStep < terminalCommands.length) {
      const timer = setTimeout(() => {
        setTerminalStep((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showTerminal, terminalStep]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient delay-300">
              About
            </span>
            <span className="text-white font-mono">{"/>"}</span>
          </h2>
        </div>

        {/* Two-column layout for code editor and terminal */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Code Editor */}
          <div className="relative w-full lg:w-1/2 flex flex-col transition-all duration-500 overflow-hidden">
            <div className="flex-1 w-full bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl min-h-[340px] transition-all duration-500">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">
                    about-me.js
                  </span>
                </div>
                <Code className="w-5 h-5 text-gray-400" />
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px] w-full overflow-x-auto">
                <div className="flex">
                  <div className="text-gray-500 select-none mr-4 text-right">
                    {Array.from(
                      {
                        length: Math.max(
                          codeLines.length,
                          typedCode.split("\n").length
                        ),
                      },
                      (_, i) => (
                        <div key={i} className="leading-relaxed">
                          {i + 1}
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex-1">
                    <pre className="text-gray-300 whitespace-pre-wrap">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: typedCode
                            .replace(
                              /const|let|var/g,
                              '<span class="text-purple-400">$&</span>'
                            )
                            .replace(
                              /'/g,
                              '<span class="text-green-400">\'</span>'
                            )
                            .replace(
                              /:/g,
                              '<span class="text-blue-400">:</span>'
                            )
                            .replace(
                              /\[|\]/g,
                              '<span class="text-yellow-400">$&</span>'
                            )
                            .replace(
                              /{|}/g,
                              '<span class="text-red-400">$&</span>'
                            ),
                        }}
                      />
                      {showCursor && (
                        <span className="bg-white text-black">|</span>
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="relative w-full lg:w-1/2 flex flex-col transition-all duration-500 overflow-hidden">
            <div className="flex-1 w-full bg-black/90 backdrop-blur-xl rounded-2xl border border-green-500/30 overflow-hidden shadow-2xl min-h-[340px] transition-all duration-500">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-green-500/10 border-b border-green-500/30">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 text-sm font-mono">
                    sheraz@portfolio:~$
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[300px] w-full overflow-x-auto space-y-4">
                {showTerminal &&
                  terminalCommands.slice(0, terminalStep).map((cmd, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">$</span>
                        <span className="text-white">{cmd.command}</span>
                        <span className="text-green-400 animate-pulse">|</span>
                      </div>
                      <div className="text-gray-300 ml-4">{cmd.output}</div>
                    </div>
                  ))}

                {showTerminal && terminalStep >= terminalCommands.length && (
                  <div className="mt-8 space-y-4">
                    <div className="text-green-400">
                      // Ready to collaborate? Let's connect!
                    </div>
                    <div className="flex gap-4">
                      <Link 
                        className="cursor-pointer"
                        href={"https://github.com/SherazArif172"}
                      >
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-black font-mono"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </Link>
                      <Link
                        className="cursor-pointer"
                        href={"https://www.linkedin.com/in/sherazarifofficial/"}
                      >
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </Link>
                      <Link
                        href={"mailto:sherazarifofficial@gmail.com"}
                        className="cursor-pointer"
                      >
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white font-mono"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            {
              icon: Coffee,
              value: "1000+",
              label: "Cups of Coffee",
              color: "text-amber-400",
            },
            {
              icon: Code,
              value: "4+",
              label: "Projects Built",
              color: "text-blue-400",
            },
            {
              icon: Zap,
              value: "99%",
              label: "Client Satisfaction",
              color: "text-green-400",
            },
            {
              icon: Github,
              value: "500+",
              label: "Commits This Year",
              color: "text-purple-400",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer w-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105 w-full">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
