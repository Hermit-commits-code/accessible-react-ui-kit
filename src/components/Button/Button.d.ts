import type { ReactNode, FC } from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  full?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  [key: string]: any
}

declare const Button: FC<ButtonProps>
export default Button
