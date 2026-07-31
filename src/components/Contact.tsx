import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="eyebrow mb-4"
      >
        05 // Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="section-heading mx-auto mb-6 max-w-2xl"
      >
        Have a project in mind, or just want to connect?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mb-10 max-w-lg text-navy-600 dark:text-mist-200/75"
      >
        I'm always open to discussing new opportunities, collaborations, or a good conversation
        about health tech and networking.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600
            px-6 py-3 font-mono text-sm font-medium text-white shadow-lg shadow-sky-500/20
            transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} /> {profile.email}
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15
            dark:border-mist-100/20 text-navy-800 dark:text-mist-100 transition-colors hover:border-sky-500 hover:text-sky-500"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15
            dark:border-mist-100/20 text-navy-800 dark:text-mist-100 transition-colors hover:border-sky-500 hover:text-sky-500"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={profile.socials.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15
            dark:border-mist-100/20 text-navy-800 dark:text-mist-100 transition-colors hover:border-sky-500 hover:text-sky-500"
        >
          <Facebook size={18} />
        </a>
      </motion.div>
    </section>
  )
}
