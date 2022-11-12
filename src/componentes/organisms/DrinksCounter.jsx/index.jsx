import { useState } from "react";
import { useEffect } from "react";

const AddDrink = ({listado, id, nro}) => {

    // Se puede usar el useContext?
    const [list, setList] = useState(listado)

    const sumatoria = () => {
        console.log(list)
        console.log("Tragos que tiene: "+list[id].count);
        console.log("Toma: "+ nro +" tragos");


        let num = list[id].count + nro;
        // console.log(num);
        setList(list[id].count=num);
        console.log(list);
    }
     
    useEffect(() => {
      sumatoria();
      console.log('hola Geroi');
      return (
        console.log('Return')
      )
    }, []);
    
    return (
        <div>
             <ul>
                {
                    listado.map((user, index)=> (<li key={index}>{user.name}: {user.count}</li>))
                }
             </ul>
            
        </div>
    );

    }
export default AddDrink;



// Componente que imprime
// const DrinksCounter = ({lista}) => 
    
    // const lista = [
    //     {name: 'Juana', count: 4},
    //     {name: 'Maria', count: 2},
    //     {name: 'Marcos', count: 1}
    // ]
    

    // {lista, nroTrago}
    // Recibe lista de nombres
    // Cantidad de tragos (json)
    
    

//     return (
//         
//     );
// }
 
// export default DrinksCounter;