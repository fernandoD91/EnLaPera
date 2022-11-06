import { useEffect, useState } from "react";
import { SocketIo } from "..";
import { Buttons, List, Title } from "../../atoms";

const ListUsers = ({}) => {
  const [users, setUsers] = useState("")
  let name = "Nombre"

  useEffect(() => {
    SocketIo.on("newUser", (userData) => {
      setUsers(userData)
      console.log(users);
    })
    return() => {SocketIo.off}
  }, [users])
  
  // console.log(users);

  const test = () => {
    SocketIo.emit("nuevo usuario", name)
  }


  const testConnect = () => {SocketIo.emit('conneted', name)}


  return users === "" ? ( 
    <>
      <Buttons text={"conectar servidor"} btnAction={() => testConnect()}/>
      <Title type={"h1"} text={"esperando Jugadores"}/>
    </>
  ) : (
    <>
      <Buttons text={"agregar participante"} btnAction={() => test()}/>
      {users?.map((user) => (
        <>
          <List key={user.userId} text={user.userName}/>
        </>
      ))}
    </>
  )
}


export default ListUsers;