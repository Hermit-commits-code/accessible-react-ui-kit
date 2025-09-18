import * as React from 'react'

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'danger'
  title?: React.ReactNode
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
  onClose?: () => void
  dismissible?: boolean
  help?: string
  [key: string]: any
}

declare const Alert: React.FC<AlertProps>
export default Alert
