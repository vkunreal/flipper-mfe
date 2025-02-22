import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MFESuspense } from '@packages/ui-kit/src'

const TodolistPage = lazy(() => import('../ui/TodolistPage'))

const routes = [
  {
    path: '/todolist',
    element: (
      <MFESuspense>
        <TodolistPage />
      </MFESuspense>
    ),
  },
]

export const router = createBrowserRouter(routes)

export default routes
