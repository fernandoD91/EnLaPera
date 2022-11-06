import Style from './style.module.css'

const Title = ({type, classTitle, text}) =>  {
  return(
    <>
      {type === "h1" && <h1 className={Style[classTitle]}>{text}</h1>}
      {type === "h2" && <h2 className={Style[classTitle]}>{text}</h2>}
      {type === "h3" && <h3 className={Style[classTitle]}>{text}</h3>}
    </>
  )
}

export default Title