import './App.css'
import { Home } from './Pages'
import Cards from './componentes/organisms/Cards'
import Input from './componentes/atoms/Inputs'

function App() {

  return (
    <div className="App">
      <Home/>
      <Cards/>
      <label htmlFor="name">Ingrese nombres: </label>
      <Input mode={'pass'} impChange={(e)=> console.log(e.target.value)}/>
      
    </div>
  )
}

export default App
