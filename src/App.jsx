import { RouterProvider, BrowserRouter } from 'react-router-dom' 
import router from './router/router'

function App() {
  return (
    <RouterProvider router={router}>
      <BrowserRouter basename={process.env.PUBLIC_URL} />
    </RouterProvider>
  )
}

export default App
