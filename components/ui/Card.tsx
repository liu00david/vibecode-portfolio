import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const baseClasses = 'bg-white dark:bg-secondary-800 rounded-xl shadow-lg border border-secondary-200 dark:border-secondary-700'
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer' : ''
  const classes = `${baseClasses} ${hoverClasses} ${className}`

  if (onClick) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={hover ? { y: -5 } : {}}
        whileTap={hover ? { scale: 0.98 } : {}}
        className={classes}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
