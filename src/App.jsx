import './App.css'
import { GameMode, Home } from './Pages'
import Cards from './componentes/organisms/Cards'
import Input from './componentes/atoms/Inputs'
import AddDrink from './componentes/organisms/DrinksCounter.jsx'
// import DrinksCounter from './componentes/organisms/DrinksCounter.jsx'

function App() {

  const lista = [
    {name: 'Juana', count: 4},
    {name: 'Maria', count: 2},
    {name: 'Marcos', count: 1}
  ]

  // const lista = [
  //   {name: 'Juana'},
  //   {name: 'Maria'},
  //   {name: 'Marcos'}
  // ]


  return (
    <div className="App">
      {/* <DrinksCounter lista={lista}/> */}
      
      {/* <Home/> */}
      <GameMode />


      {/* <AddDrink listado={lista} /> */}

      <AddDrink listado={lista} id={1} nro={10}/>
      {/* <AddDrink listado={lista} id={0} nro={5}/> */}

      {/* <Cards/>
      <label htmlFor="name">Ingrese nombres: </label>
      <Input mode={'pass'} impChange={(e)=> console.log(e.target.value)}/> */}
      
    </div>
  )
}

export default App
