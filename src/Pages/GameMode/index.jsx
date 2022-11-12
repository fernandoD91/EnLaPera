import Icon from '../../Assets/En-La-Pera-Icon-Provisorio.svg'
import Title from '../../componentes/atoms/Title';

const GameMode = () => {
    return (
        
        <section>
            <Title type={'h1'} classTitle={'rojo'}>Vamos a jugar!</Title>
            <img src={Icon} alt="" />
            <button>Jugar de una</button>
            <button>Crear sala</button>
            <button>Unirse a sala</button>
            <button>Cómo jugar</button>
        </section>
        
    );
}
 
export default GameMode;