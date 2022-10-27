

const DrinksCounter = ({lista}) => {
    
    // const lista = [
    //     {name: 'Juana', count: 4},
    //     {name: 'Maria', count: 2},
    //     {name: 'Marcos', count: 1}
    // ]
    
    const addDrinks = () => {
        
    }

    return (
        <div>
            <ul>
                {
                    lista.map((user, index)=> <li key={index}>{user.name}: {user.count}</li>)
                }
            </ul>
            
        </div>
    );
}
 
export default DrinksCounter;