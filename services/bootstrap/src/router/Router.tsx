import { createBrowserRouter } from 'react-router-dom'
import authRoutes from 'mfe_auth/Router'
import todolistRoutes from 'mfe_todolist/Router'

const routes = [...authRoutes, ...todolistRoutes]

export const router = createBrowserRouter(routes)
