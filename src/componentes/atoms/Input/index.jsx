import moduleStyle from './style.module.css';

const Input = ({impChange, name, mode}) => {

    return (  
        <>
            {/* <label htmlFor="name">Nombre: </label> */}

            <input 
                className={moduleStyle[mode]}
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={impChange}
            />
        </>
    );
}
 
export default Input;