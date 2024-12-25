import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { IconButton } from '../../shared/ui/icon-button/icon-button'

export function SettingsView({ isClosing, onClose, handleClose }) {
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isClosing, onClose])

  return (
    <section
      className={`h-full flex flex-col bg-white dark:bg-gray-900 p-4 ${
        isClosing ? 'animate-slide-down' : 'animate-slide-up'
      }`}
    >
      <div className="flex justify-between items-center border-b dark:border-gray-800 pb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">설정</h2>
        <IconButton
          icon={FiX}
          aria-label="닫기"
          className="hover:text-primary-500 dark:hover:text-primary-400"
          onClick={handleClose}
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">아직 설정 기능이 없습니다.</p>
      </div>
    </section>
  )
}
