import { useState, useCallback } from 'react'
import { ThemeProvider } from './app/providers/theme-provider'
import { BottomBar } from './widgets/bottom-bar/bottom-bar'
import { PromptForm } from './widgets/prompt-form/prompt-form'
import { DownloadHistory } from './widgets/download-history/download-history'
import { Settings } from './widgets/settings/settings'
import './app/styles/index.css'

function App() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleToggleHistory = useCallback(() => {
    setIsHistoryOpen((prev) => !prev)
    setIsSettingsOpen(false)
  }, [])

  const handleToggleSettings = useCallback(() => {
    setIsSettingsOpen((prev) => !prev)
    setIsHistoryOpen(false)
  }, [])

  const handleCloseHistory = useCallback(() => {
    setIsHistoryOpen(false)
  }, [])

  const handleCloseSettings = useCallback(() => {
    setIsSettingsOpen(false)
  }, [])

  return (
    <ThemeProvider>
      <div className="w-[350px] h-[300px] flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="flex-1 relative overflow-hidden">
          {!isHistoryOpen && !isSettingsOpen && <PromptForm />}
          {isHistoryOpen && <DownloadHistory onClose={handleCloseHistory} />}
          {isSettingsOpen && <Settings onClose={handleCloseSettings} />}
        </div>
        <div className="flex-none">
          <BottomBar 
            onToggleHistory={handleToggleHistory}
            onToggleSettings={handleToggleSettings}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
