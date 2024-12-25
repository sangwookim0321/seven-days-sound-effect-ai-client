import { IconButton } from '../../shared/ui/icon-button/icon-button'
import { FiSettings, FiSun, FiMoon, FiDownload } from 'react-icons/fi'

export function BottomBarView({ onToggleTheme, theme, onToggleHistory, onToggleSettings }) {
  return (
    <div className="border-t dark:border-gray-800 bg-white dark:bg-gray-900 p-2">
      <div className="mx-auto flex justify-between items-center">
        <IconButton
          icon={FiSettings}
          aria-label="설정"
          className="hover:text-primary-500 dark:hover:text-primary-400"
          onClick={onToggleSettings}
        />
        <IconButton
          icon={FiDownload}
          aria-label="다운로드 기록"
          className="hover:text-primary-500 dark:hover:text-primary-400"
          onClick={onToggleHistory}
        />
        <IconButton
          icon={theme === 'dark' ? FiSun : FiMoon}
          aria-label={theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경'}
          className="hover:text-primary-500 dark:hover:text-primary-400"
          onClick={onToggleTheme}
        />
      </div>
    </div>
  )
}
