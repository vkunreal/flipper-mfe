import { FC } from 'react'
import { cn } from '../../../lib'
import { ITextField } from '../model/interfaces'
import styles from './TextField.module.scss'

export const TextField: FC<ITextField> = ({
  value,
  placeholder,
  isTextArea,
  className = '',
  rows = 5,
  onChange,
}) => {
  const Tag = isTextArea ? 'textarea' : 'input'
  return (
    <Tag
      type="text"
      className={cn(styles.textField, className)}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...(isTextArea && {
        rows,
      })}
    />
  )
}
