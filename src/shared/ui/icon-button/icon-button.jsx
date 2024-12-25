export function IconButton({ icon: Icon, className = '', ...props }) {
  return (
    <button
      className={`p-2 rounded-full 
        text-gray-600 hover:text-gray-900 hover:bg-gray-100
        dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200 ${className}`}
      {...props}
    >
      <Icon className='w-5 h-5' />
    </button>
  )
}
