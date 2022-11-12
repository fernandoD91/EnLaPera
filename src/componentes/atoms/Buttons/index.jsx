import styles from './styles.module.css'

const Buttons = ({btnAction, text, btnStyle, btnSize}) => {
  return(
    <>
      <button onClick={btnAction} className={[styles[btnStyle],styles[btnSize]].join(" ")}>{text}</button>
    </>
  )
}

export default Buttons