import { useState } from 'react'
import { PromptFormView } from './prompt-form-view'

export function PromptForm() {
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')

  const handlePromptChange = (e) => {
    setPrompt(e.target.value)
  }

  const handleGenerate = async () => {
    setIsLoading(true)
    setResult('')
    
    // 임시 목업: 2초 후에 결과 표시
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult('결과 입니다.')
    setIsLoading(false)
  }

  const props = {
    prompt,
    isLoading,
    result,
    onPromptChange: handlePromptChange,
    onGenerate: handleGenerate
  }

  return <PromptFormView {...props} />
}
