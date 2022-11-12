import Icon from '../../Assets/En-La-Pera-Icon-Provisorio.svg'
import Buttons from '../../componentes/atoms/Buttons';
import Title from '../../componentes/atoms/Title';

const GameMode = () => {
    return (
        
        <section>
            <Title type={'h1'} classTitle={'rojo'}>Vamos a jugar!</Title>
            <img src={Icon} alt="" />
            <Buttons text={'Jugar de una'}/>
            <Buttons text={'Crear sala'}/>
            <Buttons text={'Unirse a sala'}/>
            <Buttons text={'Cómo jugar'}/>
        </section>
        
    );
}
 
export default GameMode;