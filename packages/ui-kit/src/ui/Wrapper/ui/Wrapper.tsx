import { FC } from 'react'
import { cn } from '../../../lib'
import { IWrapper } from '../model/interfaces'

import styles from './Wrapper.module.scss'

export const Wrapper: FC<IWrapper> = ({
  children,
  className = '',
  large = false,
  small = false,
  width,
}) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        large ? styles.large : '',
        small ? styles.small : '',
        className,
      )}
      {...(width && {
        style: { maxWidth: `${width}px` },
      })}
    >
      {children}
    </div>
  )
}
