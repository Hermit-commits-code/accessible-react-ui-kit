import * as React from 'react'

export interface InputProps {
  label?: string
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  error?: string
  success?: string
  help?: string
  className?: string
  [key: string]: any
}

declare const Input: React.FC<InputProps>
export default Input
