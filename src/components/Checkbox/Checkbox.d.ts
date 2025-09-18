import * as React from 'react'

export interface CheckboxProps {
  label?: string
  id?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  size?: 'sm' | 'md' | 'lg'
  error?: string
  success?: string
  help?: string
  className?: string
  [key: string]: any
}

declare const Checkbox: React.FC<CheckboxProps>
export default Checkbox
