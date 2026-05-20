'use client'

import { useTheme, ThemeType } from '../lib/theme'
import { Sun, Moon, Grid } from 'lucide-react'

type ThemeSelectorProps = {
  theme?: ThemeType
  setTheme?: (theme: ThemeType) => void
  compact?: boolean
}

export default function ThemeSelector({ theme: propTheme, setTheme: propSetTheme, compact = false }: ThemeSelectorProps) {
  const themeContext = useTheme()
  const theme = propTheme || themeContext.theme
  const setTheme = propSetTheme || themeContext.setTheme
  return (
    <div className={`inline-flex items-center gap-1 p-1 rounded-xl transition-all duration-300 ${
      theme === 'black' 
        ? 'bg-[#161b22] border border-[#30363d] text-slate-400' 
        : 'bg-slate-100 border border-slate-200 text-slate-600'
    }`}>
      {/* White Theme Option */}
      <button
        onClick={() => setTheme('white')}
        type="button"
        title="Switch to beautiful white theme"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${
          theme === 'white'
            ? 'bg-white text-slate-900 shadow-md shadow-slate-200Scale'
            : 'hover:text-slate-900 opacity-80 hover:opacity-100'
        }`}
      >
        <Sun className={`w-3.5 h-3.5 ${theme === 'white' ? 'text-orange-500 fill-orange-500' : ''}`} />
        {!compact && <span>White Theme</span>}
      </button>

      {/* Black Theme Option (With very small gridlines) */}
      <button
        onClick={() => setTheme('black')}
        type="button"
        title="Switch to precision black theme"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${
          theme === 'black'
            ? 'bg-slate-900 text-[#f59e0b] border border-orange-500/20 shadow-lg shadow-orange-500/10'
            : 'hover:text-slate-900 opacity-80 hover:opacity-100'
        }`}
      >
        <Moon className={`w-3.5 h-3.5 ${theme === 'black' ? 'text-orange-500 fill-orange-500' : ''}`} />
        {!compact && <span className="flex items-center gap-1">Black Grid</span>}
      </button>
    </div>
  )
}
