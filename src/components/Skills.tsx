import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="bg-mist-100/60 dark:bg-navy-900/40 py-24 transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">02 // Skills</p>
          <h2 className="section-heading mb-12 max-w-xl">
            Tools and technologies I build with.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface p-6"
            >
              <h3 className="font-display text-base font-semibold text-navy-900 dark:text-mist-50 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sky-500/25 bg-sky-500/5 px-3 py-1
                      font-mono text-xs text-navy-700 dark:text-sky-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
