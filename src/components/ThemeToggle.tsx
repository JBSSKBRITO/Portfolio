import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border border-sky-500/30
        bg-navy-800/10 dark:bg-navy-800 px-1 transition-colors duration-300
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400
        focus-visible:outline-offset-2"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br
          from-sky-400 to-sky-600 text-white shadow-md transition-transform duration-300 ease-out
          ${isDark ? 'translate-x-7' : 'translate-x-0'}`}
      >
        {isDark ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}
      </span>
    </button>
  )
}
