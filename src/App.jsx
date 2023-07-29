import { BrowserRouter } from 'react-router-dom' 
import router from './router/router'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {router}
    </BrowserRouter>
  )
}

export default App
