import * as React from 'react'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'muted' | 'danger'
  ariaLabel?: string
  className?: string
  [key: string]: any
}

declare const Spinner: React.FC<SpinnerProps>
export default Spinner
