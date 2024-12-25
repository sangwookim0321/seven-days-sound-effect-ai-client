import { useState } from 'react'
import { SettingsView } from './settings-view'

export function Settings({ onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
  }

  const props = {
    isClosing,
    onClose,
    handleClose
  }

  return <SettingsView {...props} />
}
