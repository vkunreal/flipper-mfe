import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const AuthPage = lazy(() => import('../pages/Page'))

const routes = [
  {
    path: '/auth',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthPage />
      </Suspense>
    ),
  },
]

export const router = createBrowserRouter(routes)

export default routes
