import * as React from 'react'

export interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}

export interface RadioGroupProps {
  label?: string
  name: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  options?: RadioOption[]
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

declare const RadioGroup: React.FC<RadioGroupProps>
export default RadioGroup
