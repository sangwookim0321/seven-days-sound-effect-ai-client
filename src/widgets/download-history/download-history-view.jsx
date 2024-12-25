import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { IconButton } from '../../shared/ui/icon-button/icon-button'

export function DownloadHistoryView({ onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose()
      }, 300) // 애니메이션 지속 시간과 동일하게 설정
      return () => clearTimeout(timer)
    }
  }, [isClosing, onClose])

  const handleClose = () => {
    setIsClosing(true)
  }

  return (
    <section
      className={`absolute inset-0 flex flex-col bg-white dark:bg-gray-900 ${
        isClosing ? 'animate-slide-down' : 'animate-slide-up'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">다운로드 기록</h2>
        <IconButton
          icon={FiX}
          aria-label="닫기"
          className="hover:text-primary-500 dark:hover:text-primary-400"
          onClick={handleClose}
        />
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {/* TODO: 다운로드 기록 목록 구현 */}
        <p className="text-gray-500 dark:text-gray-400">아직 다운로드 기록이 없습니다.</p>
      </div>
    </section>
  )
}
