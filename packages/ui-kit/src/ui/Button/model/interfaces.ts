export interface IButton {
  className?: string
  type?: 'button' | 'submit'
  disable?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}
