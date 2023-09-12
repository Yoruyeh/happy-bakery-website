import { BrowserRouter, RouterProvider } from 'react-router-dom' 
import router from './router/router'
import { AdminProvider } from './context/AdminContext'

function App() {
  return (
    <AdminProvider>
      <RouterProvider router={router}>
        <BrowserRouter basename={process.env.PUBLIC_URL} />
      </RouterProvider>
    </AdminProvider>
  )
}


export default App
