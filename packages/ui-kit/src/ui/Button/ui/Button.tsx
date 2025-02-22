import { FC } from 'react'
import { cn } from '../../../lib'
import { IButton } from '../model/interfaces'

import styles from './Button.module.scss'
import { Loading } from '../../Loading'

export const Button: FC<IButton> = ({
  type = 'button',
  className = '',
  children,
  disable,
  loading,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        `${disable ? styles.disable : ''}`,
        `${loading ? styles.loading : ''}`,
        className,
      )}
      disabled={disable || loading}
      onClick={onClick}
    >
      {loading ? <Loading /> : children}
    </button>
  )
}
