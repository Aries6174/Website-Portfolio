import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Balay-Balayan",
      year: "2023 - 2024",
      description:
        "Dormitory Management System designed to streamline resident management, room assignments, and facility maintenance with an intuitive interface.",
      details:
        "A comprehensive solution for dormitory administrators to manage residents, track room occupancy, handle maintenance requests, and generate reports efficiently.",
      technologies: ["JavaScript", "Database", "Full-Stack"],
      link: "#",
    },
    {
      id: 2,
      title: "LibraRead",
      year: "Library Database Management",
      description:
        "Library Database Management System for efficient book catalog organization, member management, and circulation tracking with user-friendly interface.",
      details:
        "Streamlined library operations with features for book cataloging, member registration, borrowing/returning books, and generating circulation reports.",
      technologies: ["Backend", "Database Design", "JavaScript"],
      link: "#",
    },
    {
      id: 3,
      title: "Calculator",
      year: "Basic Calculator Website",
      description:
        "A simple calculator web application built with modern JavaScript and responsive design principles.",
      details:
        "Designed with a clean UI and intuitive functionality, this calculator supports basic arithmetic operations and is fully responsive across devices.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://aries6174.github.io/Calculator-Project/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50">
      <main className="mx-auto max-w-5xl px-6 py-16 relative z-20">
        {/* Header with Back Link */}
        <header className="mb-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all"
          >
            <span>←</span> Back to portfolio
          </Link>
          <h1 className="mt-6 text-5xl font-bold">All Projects</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            A comprehensive look at the projects I've built and contributed to.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 mb-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4 h-2 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 mb-4">
                  {project.year}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <p className="text-base text-slate-700 dark:text-slate-200 mb-6 leading-relaxed flex-1">
                  {project.details}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full bg-blue-100 dark:bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Adrian Joel Jaspa — Full-Stack Developer</p>
        </footer>
      </main>
    </div>
  );
}
