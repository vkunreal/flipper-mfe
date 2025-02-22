import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField, Typography, Wrapper } from '@packages/ui-kit/'

import styles from './AuthPage.module.scss'

export const AuthPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Wrapper className={styles.wrapper} small>
      <Typography tag="h1" size="xl" className={styles.title}>
        <Link to="/">{'<-'}</Link> Страница авторизации
      </Typography>

      <div className={styles.inputBlock}>
        <TextField
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button>Click</Button>
      </div>
    </Wrapper>
  )
}
