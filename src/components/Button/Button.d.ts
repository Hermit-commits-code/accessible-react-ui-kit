import * as React from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  full?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  [key: string]: any
}

declare const Button: React.FC<ButtonProps>
export default Button
