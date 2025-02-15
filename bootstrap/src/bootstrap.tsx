import { createRoot } from 'react-dom/client'
import App from './App'

function bootstrap() {
  createRoot(document.getElementById('root') as HTMLElement).render(<App />)
}

bootstrap()
