import { FC } from 'react'
import { cn } from '../../../lib'
import { IButton } from '../model/interfaces'

import styles from './Button.module.scss'

export const Button: FC<IButton> = ({
  type = 'button',
  className = '',
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(styles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
