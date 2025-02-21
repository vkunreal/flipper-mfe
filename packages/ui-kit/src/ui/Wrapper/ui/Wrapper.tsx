import { FC, PropsWithChildren } from 'react'
import { cn } from '../../../lib'

import styles from './Wrapper.module.scss'

interface IWrapper extends PropsWithChildren {
  large?: boolean
  small?: boolean
}

export const Wrapper: FC<IWrapper> = ({
  children,
  large = false,
  small = false,
}) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        large ? styles.large : '',
        small ? styles.small : '',
      )}
    >
      {children}
    </div>
  )
}
