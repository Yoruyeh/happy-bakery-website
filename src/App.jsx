import { RouterProvider } from 'react-router-dom'
import router from './router/router'

const basename = process.env.PUBLIC_URL

function App() {
  return <RouterProvider basename={basename} router={router} />
}

export default App
