import * as React from 'react'

export interface CardProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  shadow?: boolean
  borderless?: boolean
  size?: 'sm' | 'md' | 'lg'
  center?: boolean
  as?: string
  className?: string
  [key: string]: any
}

declare const Card: React.FC<CardProps>
export default Card
