import { FC } from 'react'
import { cn } from '../../../lib'
import { ITypography, TitleTags } from '../model/interfaces'

import styles from './Typography.module.scss'

export const Typography: FC<ITypography> = ({
  tag = 'p',
  className = '',
  size = 'md',
  children,
}) => {
  const Tag = TitleTags[tag]
  return (
    <Tag className={cn(styles.typography, styles[size], className)}>
      {children}
    </Tag>
  )
}
