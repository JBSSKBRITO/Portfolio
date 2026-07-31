import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="bg-mist-100/60 dark:bg-navy-900/40 py-24 transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">04 // Education</p>
          <h2 className="section-heading mb-12 max-w-xl">Academic background.</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-mist-50">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-sky-500">{edu.period}</span>
                </div>
                <p className="mb-2 text-sm font-medium text-navy-700 dark:text-mist-200">
                  {edu.institution}
                </p>
                <p className="text-sm text-navy-600 dark:text-mist-200/70">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
