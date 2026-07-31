import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, Project } from '../data/profile'

const statusStyle: Record<Project['status'], string> = {
  Completed: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/5',
  'In Development': 'text-amber-500 border-amber-500/30 bg-amber-500/5',
  'Academic Project': 'text-sky-500 border-sky-500/30 bg-sky-500/5',
  'Learning Project': 'text-navy-500 dark:text-mist-300 border-navy-500/20 bg-navy-500/5',
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-3">03 // Projects</p>
        <h2 className="section-heading mb-12 max-w-xl">
          A log of what I've built and what's running.
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="card-surface group flex flex-col p-6 hover:border-sky-500/30 hover:-translate-y-1
              transition-all duration-300"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-500">
                {project.category}
              </span>
              <span
                className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${statusStyle[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-mist-50 mb-2">
              {project.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-navy-600 dark:text-mist-200/75">
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-navy-900/5 dark:bg-mist-50/5 px-2 py-1 font-mono text-[11px] text-navy-700 dark:text-mist-200/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.link || project.repo) && (
              <div className="flex gap-4 border-t border-navy-900/5 dark:border-mist-50/10 pt-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-navy-700 dark:text-mist-200 hover:text-sky-500"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-navy-700 dark:text-mist-200 hover:text-sky-500"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
