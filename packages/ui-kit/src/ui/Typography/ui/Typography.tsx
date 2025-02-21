import { FC, PropsWithChildren } from 'react'
import { cn } from '../../../lib'

import styles from './Typography.module.scss'

enum TitleTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  strong = 'strong',
  small = 'small',
  del = 'del',
}

interface ITypography extends PropsWithChildren {
  tag?: keyof typeof TitleTags
  className?: string
  //   maxLetters?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Typography: FC<ITypography> = ({
  tag = 'p',
  className = '',
  //   maxLetters,
  size = 'md',
  children,
}) => {
  const Tag = TitleTags[tag]
  return (
    <Tag className={cn(styles.typography, styles[size], className)}>
      {/* {maxLetters ? catLongText(children, maxLetters) : children} */}
      {children}
    </Tag>
  )
}
