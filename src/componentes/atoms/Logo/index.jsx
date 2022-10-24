import { filterProps } from '@formatjs/intl'
import React from 'react'
import StyleLogo from './style.module.css'


const Logo = (props
) =>  {
    return(
    <>


        <img 
            className={StyleLogo[props.size]}
            src='src\componentes\atoms\Logo\Logo.png'
            alt={props.size}/>
        

    
    </>
    
    ) 
  }
  
  export default Logo