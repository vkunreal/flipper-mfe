import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField, Typography, Wrapper } from '@packages/ui-kit/'

import styles from './AuthPage.module.scss'

export const AuthPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const buttonClick = () => {
    console.log('click')
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const isButtonDisabled = () => !email.trim().length || !password.trim().length

  return (
    <Wrapper className={styles.wrapper} width={400}>
      <Typography tag="h1" size="xl" className={styles.title}>
        <Link to="/">{'<-'}</Link> Страница авторизации
      </Typography>

      <div className={styles.inputBlock}>
        <TextField
          placeholder="Эл. почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={buttonClick}
          loading={isLoading}
          disable={isButtonDisabled()}
        >
          Отправить
        </Button>
      </div>
    </Wrapper>
  )
}
