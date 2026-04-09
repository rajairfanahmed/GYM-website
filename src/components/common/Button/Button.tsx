import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps & 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    href?: never
    to?: never
  }

type ButtonAsLink = BaseProps & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
    href: string
    to?: never
  }

type ButtonAsRouterLink = BaseProps & {
  as: 'link'
  to: string
  href?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  as = 'button',
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </>
  )

  if (as === 'link' && 'to' in props) {
    return (
      <Link to={props.to as string} className={classes}>
        {content}
      </Link>
    )
  }

  if (as === 'a' && 'href' in props) {
    return (
      <a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {content}
      </a>
    )
  }


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onDrag, onDragStart, onDragEnd, ...safeProps } = props as ButtonHTMLAttributes<HTMLButtonElement> & Record<string, unknown>

  return (
    <motion.button 
      {...(safeProps as React.ComponentProps<typeof motion.button>)} 
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  )
}
