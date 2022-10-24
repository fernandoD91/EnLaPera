import { filterProps } from '@formatjs/intl'
import React from 'react'
import StyleLogo from './style.module.css'
import Logo1 from '/Assets/Logo.svg'



const Logo = (props
) =>  {
    return(
    <>


        <img 
            className={StyleLogo[props.size]}
            src= {Logo1}
            alt={props.size}/>
        

    
    </>
    
    ) 
  }
  
  export default Logo