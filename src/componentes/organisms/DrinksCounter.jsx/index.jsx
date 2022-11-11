import { useState } from "react";
import { useEffect } from "react";

const AddDrink = ({listado, id, nro}) => {

    // Se puede usar el useContext?
    const [list, setList] = useState(listado)

    const sumatoria = () => {
        console.log(list)
        console.log("Tragos que tiene: "+list[id].count);
        console.log("Toma: "+ nro +" tragos");

        // const num= ()=>{
        //     return list[id].count + nro;
        //     // list[]
        // }
        // num();
        // setList({...list, count: num})
        
        // console.log(list[0].count);
        // list.map(usuario => {
        //     (usuario.id===id) ? usuario.count + nro : console.log("No se pudo hacer la suma");
        // })
        list.map(usuario => {
            typeof list === 'object' ? usuario.count + nro : console.log("No se pudo hacer la suma");
        })
        // console.log(list[id].count+nro)
        setList({...list[id].count+nro, nro})
    }
    // 
    useEffect(() => {
      sumatoria();
      
    }, [])
    
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