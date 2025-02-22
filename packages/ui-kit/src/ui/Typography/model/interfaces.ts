import { PropsWithChildren } from 'react'

export enum TitleTags {
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

type TypographySize = 'sm' | 'md' | 'lg' | 'xl'

export interface ITypography extends PropsWithChildren {
  className?: string
  tag?: keyof typeof TitleTags
  size?: TypographySize
}
