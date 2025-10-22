import React from 'react'

interface TypographyProps {
  variant: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'button'
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children, 
  className = '', 
  as 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'display':
        return 'text-5xl md:text-6xl font-display text-gray-900'
      case 'h1':
        return 'text-4xl md:text-5xl font-heading text-gray-900'
      case 'h2':
        return 'text-3xl md:text-4xl font-heading text-gray-900'
      case 'h3':
        return 'text-2xl md:text-3xl font-heading text-gray-900'
      case 'h4':
        return 'text-xl md:text-2xl font-heading text-gray-900'
      case 'body':
        return 'text-base font-body text-gray-700'
      case 'caption':
        return 'text-sm font-body text-gray-600'
      case 'button':
        return 'text-base font-ui'
      default:
        return 'text-base font-body text-gray-700'
    }
  }

  const Component = as || 'p'

  return (
    <Component className={`${getVariantClasses()} ${className}`}>
      {children}
    </Component>
  )
}   

export default Typography
