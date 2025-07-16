import './App.css'

//outlet com header e footer

import { Outlet } from 'react-router-dom'
import Borda from './componentes/Borda'

function App() {

  return (
    <>
      <Borda />
      <Outlet />
    </>
  )
}

export default App
