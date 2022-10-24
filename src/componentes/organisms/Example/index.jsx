const Example = ({type}) => {

  switch (type){
    case '1':{
      return(
        <>
          <h1>Soy 1</h1>
          <p>lore10</p>
          <button>1</button>
        </>
      )
    }
    case '2':{
      return(
        <>
          <h2>Soy 2</h2>
          <input type="text" />
        </>
      )
    }

  }
}

export default Example