import { Button } from '../../shared/ui/button/button'
import { ClipLoader } from 'react-spinners'

export function PromptFormView({ prompt, isLoading, result, onPromptChange, onGenerate }) {
  return (
    <section className="h-full flex flex-col overflow-y-auto p-4">
      <div className="flex-none min-h-[100px] mb-2">
        <textarea
          value={prompt}
          onChange={onPromptChange}
          placeholder="Please explain the sound effects..."
          className="w-full h-full p-4 rounded-lg 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
            placeholder-gray-400 dark:placeholder-gray-500 resize-none
            border border-gray-200 dark:border-gray-800
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            transition-shadow duration-200"
          maxLength={50}
        />
      </div>
      <Button
        onClick={onGenerate}
        className="w-full py-3 text-lg font-medium flex-none"
        disabled={!prompt.trim() || isLoading}
      >
        <span className="flex items-center justify-center gap-2">
          Generate
          {isLoading && <ClipLoader size={20} color="currentColor" />}
        </span>
      </Button>
      {result && (
        <div className="flex-none h-[40px] mt-2 flex items-center justify-center text-gray-900 dark:text-gray-100">
          {result}
        </div>
      )}
    </section>
  )
}
