import { useCallback } from 'react'
import { useTheme } from '../../app/providers/theme-provider'
import { BottomBarView } from './bottom-bar-view'

export function BottomBar({ onToggleHistory, onToggleSettings }) {
  const { theme, toggleTheme } = useTheme()

  const props = {
    theme,
    onToggleTheme: toggleTheme,
    onToggleHistory,
    onToggleSettings
  }

  return <BottomBarView {...props} />
}
