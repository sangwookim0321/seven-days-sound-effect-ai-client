export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md 
        bg-primary-600 text-white hover:bg-primary-700 
        dark:bg-primary-500 dark:hover:bg-primary-600
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
