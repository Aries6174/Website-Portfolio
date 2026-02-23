'use client';

import { FaClock, FaClipboardList, FaShieldAlt } from 'react-icons/fa';

const handleEmailCopy = async () => {
  try {
    await navigator.clipboard.writeText('Joel.Adrian6174@gmail.com');
    alert('The email has been copied to the clipboard');
  } catch (err) {
    alert('Failed to copy email');
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50">
      <main className="mx-auto max-w-5xl px-6 py-16 relative z-20">
        {/* Header */}
        <header className="mb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  AJ
                </div>
                <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent leading-tight">
                Adrian Joel Jaspa
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-sm font-semibold text-blue-700 dark:text-blue-300">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                  Full-Stack Developer
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  BS Computer Science • Iloilo, Philippines
                </span>
              </div>
            </div>
            <nav className="flex flex-wrap md:flex-col gap-3">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-blue-300 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all hover:gap-3">
                <span>Projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <span>Get in Touch</span>
              </a>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/95 to-blue-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-start justify-center">
                <div className="relative mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-500/30 dark:to-cyan-500/30 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">📊</div>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-300 dark:to-cyan-300 bg-clip-text text-transparent leading-tight">2+</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-3">Projects Completed</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Real-world applications</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-50/95 to-purple-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-start justify-center">
                <div className="relative mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">⚙️</div>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300 leading-tight">JavaScript</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-3">Primary Stack</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Frontend & Backend</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50/95 to-emerald-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-start justify-center">
                <div className="relative mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-500/30 dark:to-green-500/30 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🎯</div>
                <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 leading-tight">Full-Stack</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-3">Core Expertise</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">End-to-end solutions</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="mb-32 py-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 backdrop-blur-sm animate-bounce" style={{animationDelay: '0s'}}>
                  <span className="text-2xl animate-spin" style={{animationDuration: '3s'}}>✨</span>
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Ready to collaborate</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                    Crafting Digital
                  </span>
                  <span className="block mt-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 dark:from-cyan-300 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light">
                  Full-stack developer creating beautiful, performant, and accessible web applications. 
                  <span className="font-semibold text-slate-900 dark:text-slate-100"> I turn ideas into intuitive digital solutions.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200">
                  <span>Let's Connect</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-300 dark:border-cyan-500 px-8 py-4 text-lg font-semibold text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all hover:border-blue-400 dark:hover:border-cyan-400">
                  Explore My Work
                </a>
              </div>
            </div>

            {/* Right Side - Animated Visual */}
            <div className="hidden lg:flex items-center justify-center relative h-96 overflow-hidden">
              {/* Animated code window mockup */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Floating cards */}
                <div className="absolute animate-float z-40" style={{top: '20px', right: '40px'}}>
                  <div className="w-40 h-32 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl flex items-center justify-center text-5xl transform hover:scale-110 transition-transform">
                    💻
                  </div>
                </div>
                <div className="absolute animate-float z-50" style={{top: '220px', left: '30px', animationDelay: '1s'}}>
                  <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center text-4xl transform hover:scale-110 transition-transform">
                    ⚡
                  </div>
                </div>
                <div className="absolute animate-float z-30" style={{bottom: '60px', right: '60px', animationDelay: '2s'}}>
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl flex items-center justify-center text-4xl transform hover:scale-110 transition-transform">
                    🎯
                  </div>
                </div>
                <div className="absolute animate-float z-20" style={{top: '80px', left: '50px', animationDelay: '1.5s'}}>
                  <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl flex items-center justify-center text-3xl transform hover:scale-110 transition-transform">
                    🚀
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid Below */}
          <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200/50 dark:border-slate-800/50 relative z-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">💻</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Full-Stack</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Frontend & Backend</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">⚡</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Performance</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Optimized Speed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🎯</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Accessible</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Inclusive Design</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🚀</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Modern Stack</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Latest Tech</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">Selected Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">Showcase of my recent work and expertise</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <a href="/projects" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/95 to-blue-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col">
                <div className="absolute top-6 right-6 mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-500/30 dark:to-cyan-500/30 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🏢</div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Case Study 01</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Balay-Balayan</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Dormitory Management • 2023 - 2024</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-6">
                  Dormitory Management System designed to streamline resident management, room assignments, and facility maintenance with an intuitive interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    JavaScript
                  </span>
                  <span className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                    Database
                  </span>
                  <span className="inline-block rounded-full bg-purple-100 dark:bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
                    Full-Stack
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:gap-3 transition-all">
                  View Details <span className="text-lg">→</span>
                </span>
              </div>
            </a>

            <a href="/projects" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-50/95 to-purple-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col">
                <div className="absolute top-6 right-6 mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">📚</div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Case Study 02</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">LibraRead</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Library Database Management</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-6">
                  Library Database Management System for efficient book catalog organization, member management, and circulation tracking with user-friendly interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    Backend
                  </span>
                  <span className="inline-block rounded-full bg-purple-100 dark:bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
                    Database Design
                  </span>
                  <span className="inline-block rounded-full bg-green-100 dark:bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-300">
                    JavaScript
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:gap-3 transition-all">
                  View Details <span className="text-lg">→</span>
                </span>
              </div>
            </a>

            <a href="/projects" className="group block sm:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50/95 to-emerald-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-12 flex items-center justify-center h-full">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-500/30 dark:to-teal-500/30 text-5xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mx-auto mb-4">✨</div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent mb-2">Explore All Projects</h3>
                  <p className="text-slate-600 dark:text-slate-400">See more of my work and case studies</p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-purple-700 to-pink-600 dark:from-slate-100 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400">Get to know more about my journey and values</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-purple-50/95 to-purple-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-12 h-full">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center text-6xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">👨‍💻</div>
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Who I Am</span>
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  I'm a 22-year-old Computer Science student from the University of the Philippines Visayas, based in Iloilo, Philippines. 
                  I'm passionate about building full-stack web applications with clean, efficient code.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
                  <div className="group/trait relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-800 p-1 shadow-md hover:shadow-lg transition-all w-full max-w-xs">
                    <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/95 to-blue-100/95 dark:from-slate-700/95 dark:to-slate-800/95 backdrop-blur-md p-6 text-center h-full">
                      <div className="text-5xl mb-3 group-hover/trait:scale-110 transition-transform inline-block text-blue-600 dark:text-blue-400">
                        <FaClock />
                      </div>
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Patient</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Detail-oriented approach</p>
                    </div>
                  </div>
                  <div className="group/trait relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-700 dark:to-slate-800 p-1 shadow-md hover:shadow-lg transition-all w-full max-w-xs">
                    <div className="relative rounded-2xl bg-gradient-to-br from-orange-50/95 to-orange-100/95 dark:from-slate-700/95 dark:to-slate-800/95 backdrop-blur-md p-6 text-center h-full">
                      <div className="text-5xl mb-3 group-hover/trait:scale-110 transition-transform inline-block text-orange-600 dark:text-orange-400">
                        <FaClipboardList />
                      </div>
                      <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">Organized</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Structured methodology</p>
                    </div>
                  </div>
                  <div className="group/trait relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-700 dark:to-slate-800 p-1 shadow-md hover:shadow-lg transition-all w-full max-w-xs">
                    <div className="relative rounded-2xl bg-gradient-to-br from-green-50/95 to-green-100/95 dark:from-slate-700/95 dark:to-slate-800/95 backdrop-blur-md p-6 text-center h-full">
                      <div className="text-5xl mb-3 group-hover/trait:scale-110 transition-transform inline-block text-green-600 dark:text-green-400">
                        <FaShieldAlt />
                      </div>
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300">Dependable</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Reliable delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-blue-700 to-emerald-600 dark:from-slate-100 dark:via-blue-300 dark:to-emerald-300 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-slate-600 dark:text-slate-400">Find me on these platforms. I'm always happy to connect!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Email Card */}
            <button onClick={handleEmailCopy} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/95 to-blue-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/5 group-hover:to-cyan-400/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-500/30 dark:to-cyan-500/30 flex items-center justify-center text-5xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">✉️</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Email</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 break-all font-medium">Joel.Adrian6174@gmail.com</p>
              </div>
            </button>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/adrian-joel-jaspa-416a711b6/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/95 to-blue-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:to-blue-400/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 dark:from-blue-600/30 dark:to-blue-700/30 flex items-center justify-center text-5xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">💼</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">LinkedIn</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Connect with me</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/Aries6174" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-500 to-slate-700 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-50/95 to-slate-100/95 dark:from-slate-700/95 dark:to-slate-800/95 backdrop-blur-md p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/0 to-slate-400/0 group-hover:from-slate-400/5 group-hover:to-slate-400/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600/30 dark:to-slate-700/30 flex items-center justify-center text-5xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🐙</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">GitHub</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">View my projects</p>
              </div>
            </a>

            {/* LeetCode Card */}
            <a href="https://leetcode.com/u/Aries6174/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-amber-50/95 to-yellow-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-yellow-400/0 group-hover:from-amber-400/5 group-hover:to-yellow-400/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 dark:from-amber-600/30 dark:to-yellow-600/30 flex items-center justify-center text-5xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">💻</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">LeetCode</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Coding problems</p>
              </div>
            </a>

            {/* Facebook Card */}
            <a href="https://www.facebook.com/adrianjoel.jaspa/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50/95 to-purple-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-purple-400/0 group-hover:from-indigo-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200 to-purple-300 dark:from-indigo-600/30 dark:to-purple-600/30 flex items-center justify-center text-5xl shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">👥</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Facebook</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Follow me</p>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Adrian's Portfolio — Crafted with React, Bun, Next.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}
