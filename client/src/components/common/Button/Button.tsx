import React from 'react'
import { ButtonProps } from '@/types/common.types'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'lg',
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'bg-blue-500',
          border: 'border-blue-700',
          hover: 'hover:bg-blue-400',
          active: 'active:bg-blue-600',
          text: 'text-white'
        }
      case 'secondary':
        return {
          bg: 'bg-pink-500',
          border: 'border-pink-400',
          hover: 'hover:bg-pink-300',
          active: 'active:bg-pink-300',
          text: 'text-white'
        }
      case 'outline':
        return {
          bg: 'bg-blue-500',
          border: 'border-blue-700',
          hover: 'hover:bg-blue-400',
          active: 'active:bg-blue-100',
          text: 'text-white'
        }
      case 'success':
        return {
          bg: 'bg-green-500',
          border: 'border-green-700',
          hover: 'hover:bg-green-400', 
          active: 'active:bg-green-600',
          text: 'text-white'
        }
      case 'danger':
        return {
          bg: 'bg-red-500',
          border: 'border-red-700',
          hover: 'hover:bg-red-400',
          active: 'active:bg-red-600',
          text: 'text-white'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-400',
          border: 'border-yellow-600',
          hover: 'hover:bg-yellow-300',
          active: 'active:bg-yellow-500',
          text: 'text-gray-900'
          
        }
        case 'cta':
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          hover: 'hover:bg-gray-100',
          active: 'active:bg-gray-100',
          text: 'text-gray-950'
        }
      default:
        return {
          bg: 'bg-blue-500',
          border: 'border-blue-700', 
          hover: 'hover:bg-blue-400',
          active: 'active:bg-blue-600',
          text: 'text-white'
        }
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg font-semibold'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  const styles = getVariantClasses()
  const sizeStyles = getSizeClasses()

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles.bg}
        ${styles.hover}
        ${styles.active}
        ${sizeStyles}
        ${styles.text}
        rounded-xl
        border-b-4 ${styles.border}
        transition-all duration-75
        active:border-b-2 active:translate-y-[2px]
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:active:translate-y-0 disabled:active:border-b-4
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button
