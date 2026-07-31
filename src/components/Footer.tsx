import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-navy-900/5 dark:border-mist-50/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center font-mono text-xs text-navy-500 dark:text-mist-300/60">
        <p>© {year} {profile.shortName}. All rights reserved.</p>
      </div>
    </footer>
  )
}
