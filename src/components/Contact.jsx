import { useContext } from "react"
import { Context } from "../context/Context"

export const Contact = () => {

  const nameContact = useContext(Context);

  return (
    <div>
      <h1>Contact</h1>
      <p>Esta es la página de Contacto</p>
      <p>Estos son los datos de contacto de: <b>{nameContact}</b></p>
    </div>
  )
}