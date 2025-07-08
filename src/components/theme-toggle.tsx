'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button 
        className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800" 
        aria-label="Toggle theme"
      />
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        // Sun icon for dark mode
        <SunIcon className="h-5 w-5 text-yellow-500" />
      ) : (
        // Moon icon for light mode
        <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}
