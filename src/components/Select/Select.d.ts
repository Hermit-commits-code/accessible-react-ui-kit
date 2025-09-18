import * as React from 'react'

export interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectProps {
  label?: string
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options?: SelectOption[]
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

declare const Select: React.FC<SelectProps>
export default Select
