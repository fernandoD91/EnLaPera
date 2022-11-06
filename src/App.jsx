import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import { ListUsers } from './componentes/organisms'
import { Home } from './Pages'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={"Error 404"} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

