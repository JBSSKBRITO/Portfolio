import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-3">01 // About</p>
        <h2 className="section-heading mb-8 max-w-xl">
          A little about who's behind the code.
        </h2>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <p className="whitespace-pre-line text-lg leading-relaxed text-navy-700 dark:text-mist-200/85">
            {profile.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-surface md:col-span-2 p-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-sky-500 mb-4">
            Focus areas
          </p>
          <ul className="space-y-3">
            {[
              'Health Information Systems',
              'Networking & Infrastructure',
              'Full-stack Web Development',
              'Databases & Data Design',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-navy-700 dark:text-mist-100">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
