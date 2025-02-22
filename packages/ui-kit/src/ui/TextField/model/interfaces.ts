export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

export interface ITextField {
  className?: string
  value?: string
  placeholder?: string
  isTextArea?: boolean
  rows?: number
  onChange?: (e: ChangeEvent) => void
}
