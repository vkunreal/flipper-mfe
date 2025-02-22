import { PropsWithChildren } from 'react'

export interface IWrapper extends PropsWithChildren {
  className?: string
  large?: boolean
  small?: boolean
  width?: number
}
