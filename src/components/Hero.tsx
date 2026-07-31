import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background grid + node network signature */}
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:40px_40px]" />
      <NetworkSignature />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between w-full">
        
        {/* Text Content */}
        <div className="flex max-w-2xl flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Portfolio // {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] text-navy-900 dark:text-mist-50
              sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg text-navy-700 dark:text-sky-300 sm:text-xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-base text-navy-600 dark:text-mist-200/70"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-3 font-mono
                text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition-transform
                hover:scale-[1.03] hover:shadow-sky-500/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-navy-900/15
                dark:border-mist-100/20 px-6 py-3 font-mono text-sm text-navy-800 dark:text-mist-100
                transition-colors hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
            >
              <Mail size={16} /> Get in touch
            </a>
          </motion.div>
        </div>

        {/* Square & Larger Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="relative">
            {/* Subtle Circular Glow Effect */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 opacity-15 blur-lg dark:opacity-20" />
            
            <img
              src={profile.avatar || profile.image || '/profile.jpg'}
              alt={profile.name || 'Profile Picture'}
              className="relative h-80 w-80 rounded-full object-cover ring-2 ring-sky-500/30 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </motion.div>

      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-500/70 animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}

// NetworkSignature Component
function NetworkSignature() {
  const nodes = [
    { x: 760, y: 120 },
    { x: 900, y: 240 },
    { x: 820, y: 400 },
    { x: 980, y: 460 },
    { x: 880, y: 580 },
    { x: 1040, y: 140 },
  ]
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [1, 5],
  ]

  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-70 lg:block"
      viewBox="0 0 1100 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => {
        const n1 = nodes[a]
        const n2 = nodes[b]
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeDashoffset="600"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        )
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="5" fill="#38BDF8" />
          <circle
            cx={n.x}
            cy={n.y}
            r="10"
            fill="none"
            stroke="#7DD3FC"
            strokeWidth="1"
            className="animate-pulseNode"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}