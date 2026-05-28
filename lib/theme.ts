'use client'

import { useState, useEffect } from 'react'

export type ThemeType = 'white' | 'black'

// Memory cache to sync state across different mounted hooks without context boilerplate
let globalTheme: ThemeType = 'black'
const listeners = new Set<(theme: ThemeType) => void>()

// Load initial theme on client startup as soon as modules resolve
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('cpos-theme') as ThemeType
    if (saved === 'white' || saved === 'black') {
      globalTheme = saved
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
      globalTheme = prefersLight ? 'white' : 'black'
    }
    // Set class lists instantly
    if (globalTheme === 'white') {
      document.documentElement.classList.add('white-theme-loaded')
    } else {
      document.documentElement.classList.remove('white-theme-loaded')
    }
  } catch (e) {}
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeType>(globalTheme)

  useEffect(() => {
    // Synchronize to memory state
    setThemeState(globalTheme)

    const handleChange = (newTheme: ThemeType) => {
      setThemeState(newTheme)
    }

    listeners.add(handleChange)
    return () => {
      listeners.delete(handleChange)
    }
  }, [])

  const changeTheme = (newTheme: ThemeType) => {
    globalTheme = newTheme
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('cpos-theme', newTheme)
        
        // Dynamically add visual classes to html DOM
        if (newTheme === 'white') {
          document.documentElement.classList.add('white-theme-loaded')
        } else {
          document.documentElement.classList.remove('white-theme-loaded')
        }
      } catch (err) {}
    }
    
    // Alert other mounted component hooks using useTheme to sync state instantly
    listeners.forEach((listener) => {
      try {
        listener(newTheme)
      } catch (e) {}
    })
  }

  return {
    theme,
    isDark: theme === 'black',
    isLight: theme === 'white',
    setTheme: changeTheme,
    toggleTheme: () => changeTheme(theme === 'black' ? 'white' : 'black')
  }
}

