export interface IButton {
  className?: string
  type?: 'button' | 'submit'
  children: React.ReactNode
  onClick?: () => void
}
