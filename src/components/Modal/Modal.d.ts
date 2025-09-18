import * as React from 'react'

export interface ModalProps {
  open: boolean
  onClose?: () => void
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  center?: boolean
  closeButton?: boolean
  className?: string
  [key: string]: any
}

declare const Modal: React.FC<ModalProps>
export default Modal
