import { Link } from 'react-router-dom'
import { Typography, Wrapper } from '@packages/ui-kit/'

import styles from './AuthPage.module.scss'

const AuthPage = () => {
  return (
    <Wrapper small>
      <Typography tag="h1" size="xl" className={styles.auth}>
        Auth <Link to="/">Home</Link>
      </Typography>
    </Wrapper>
  )
}

export default AuthPage
