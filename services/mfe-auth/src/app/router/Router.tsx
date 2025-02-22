import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MFESuspense } from '@packages/ui-kit/src'

const AuthPage = lazy(() => import('../ui/AuthPage/'))

const routes = [
  {
    path: '/auth',
    element: (
      <MFESuspense>
        <AuthPage />
      </MFESuspense>
    ),
  },
]

export const router = createBrowserRouter(routes)

export default routes
