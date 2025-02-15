import { lazy, Suspense } from 'react'

const AuthMFE = lazy(() => import('mfe_auth/App'))

const App = () => {
  return (
    <div>
      <h2>Bootstrap 12121</h2>

      {/* <Suspense fallback={<div>Загрузка...</div>}>
        <AuthMFE />
      </Suspense> */}

      <AuthMFE />
    </div>
  )
}

export default App
