'use client'

import { useState, useEffect } from 'react'

export type ThemeType = 'white' | 'black'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>('black') // Default is black as requested by user

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cpos-theme') as ThemeType
      if (saved === 'white' || saved === 'black') {
        setTheme(saved)
      } else {
        // Fallback to media query or default
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
        if (prefersLight) {
          setTheme('white')
        }
      }
    }
  }, [])

  const changeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cpos-theme', newTheme)
    }
  }

  return {
    theme,
    isDark: theme === 'black',
    isLight: theme === 'white',
    setTheme: changeTheme,
    toggleTheme: () => changeTheme(theme === 'black' ? 'white' : 'black')
  }
}
