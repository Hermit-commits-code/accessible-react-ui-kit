import * as React from 'react'

export interface TextareaProps {
  label?: string
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  error?: string
  success?: string
  help?: string
  maxLength?: number
  showCount?: boolean
  className?: string
  [key: string]: any
}

declare const Textarea: React.FC<TextareaProps>
export default Textarea
