import './App.css'
import { Home } from './Pages'
import Cards from './componentes/organisms/Cards'
import Logo from './componentes/atoms/Logo'

function App() {

  return (
    <div className="App">
      <Home/>
      <Cards/>
      <Logo
      size="home"
      />
     </div>
  )
}

export default App
