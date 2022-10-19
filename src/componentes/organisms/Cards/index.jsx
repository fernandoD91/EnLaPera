import { useEffect, useState } from "react";


const Cards = () => {
  const [cards, setCards] = useState([])


  function CardsData () {
    fetch("data/cards.json")
      .then(response => response.json())
      .then(datos => {
        console.log(datos);
        setCards(datos)
      })

  }
console.log(cards);

  useEffect(() => {
    CardsData()
  },[])
    return(
      <div>
        {cards.map((data) => (
          <div key={data.id}>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    )
  }
export default Cards