import { createBrowserRouter } from 'react-router-dom'
import authRoutes from 'mfe_auth/Router'

const routes = [...authRoutes]

export const router = createBrowserRouter(routes)
