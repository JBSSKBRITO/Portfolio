// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio content.
//  Everything on the site is driven from here — no need to
//  touch the component files just to change text.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'J.B.S.Supun Kavindya',
  shortName: 'Supun Kavindya',
  title: 'Health Information & Communication Technology Undergraduate',
  tagline: 'Building efficient, user-focused technology at the intersection of health and IT.',
  bio: `I am a Health Information and Communication Technology undergraduate passionate about
  programming, web development, networking, databases, and digital healthcare solutions. I enjoy
  learning new technologies, solving real-world problems, and building efficient, user-focused
  applications. My goal is to continuously grow as a technology professional while contributing
  to innovative and meaningful digital projects.`,
  email: import.meta.env.VITE_EMAIL || 'sangeethsupun2020@gmail.com',
  location: 'Sri Lanka',
  avatar: '/Sangeeth2.jpeg',
  image: '/Sangeeth2.jpeg',
  socials: {
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/JBSSKBRITO',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/sangeeth-supun-98911b340?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/share/17r8nTqrey/',
  },
  resumeUrl: '', // e.g. '/Supun_Kavindya_Resume.pdf' — add file to /public and link it here
}

export const education = [
  {
    degree: 'BSc. (Hons) in Health Information & Communication Technology',
    institution: 'GWUIM - Gampaha Wickramarachchi University of Indigenous Medicine',
    period: '2022 — 2026',
    description:
      'Coursework spanning health informatics, networking, database systems, and software development.',
  },
]

export const skillGroups = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Web Development',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Database Design', 'SQL'],
  },
  {
    category: 'Networking',
    skills: ['Cisco Packet Tracer', 'VLAN Configuration', 'Routing', 'IPv4', 'Network Design'],
  },
  {
    category: 'Health IT',
    skills: ['Health Information Systems', 'Digital Health Workflows', 'Patient Data Management'],
  },
]

export type Project = {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  status: 'Completed' | 'In Development' | 'Academic Project' | 'Learning Project'
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: 'enterprise-network-simulation',
    title: 'Enterprise Network Simulation',
    category: 'Networking',
    description:
      'Designed and simulated an enterprise network using Cisco Packet Tracer. The project focuses on VLAN configuration, IP addressing, routing, and network connectivity to demonstrate core networking concepts and secure communication between departments.',
    technologies: ['Cisco Packet Tracer', 'VLAN', 'Routing', 'IPv4', 'Network Design'],
    status: 'Academic Project',
  },
  {
    id: 'health-information-system',
    title: 'Health Information System',
    category: 'Health IT',
    description:
      'A conceptual health information management system developed to explore digital healthcare workflows. The project demonstrates patient data organization, database integration, and a user-friendly interface for managing healthcare information.',
    technologies: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    status: 'In Development',
  },
  {
    id: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description:
      'A responsive personal portfolio website designed to showcase my education, technical skills, projects, and career goals. Built with modern web technologies and optimized for performance, accessibility, and user experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Completed',
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'Database',
    description:
      'A database-driven application developed to manage student records efficiently. The system includes features for storing, updating, searching, and organizing academic information using relational database concepts.',
    technologies: ['MySQL', 'SQL', 'Database Design'],
    status: 'Academic Project',
  },
  {
    id: 'python-utility-applications',
    title: 'Python Utility Applications',
    category: 'Programming',
    description:
      'A collection of small Python applications created to strengthen programming fundamentals, including file handling, conditional logic, loops, functions, and basic data processing.',
    technologies: ['Python'],
    status: 'Learning Project',
  },
  {
    id: 'java-console-application',
    title: 'Java Console Application',
    category: 'Programming',
    description:
      'A console-based Java application developed to practice object-oriented programming concepts such as classes, inheritance, encapsulation, and exception handling through practical exercises.',
    technologies: ['Java'],
    status: 'Learning Project',
  },
]
