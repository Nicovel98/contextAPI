import { useState } from 'react'
import './App.css'
import { Context } from './context/Context'
import { AppRouter } from './routing/AppRouter'

function App() {

  /*  const client = {
     id: 1, // ID of the client
     first_name: 'John', // Nombre del usuario
     last_name: 'Doe', // Apellido del usuario
     email: 'john.doe@example.com', // Correo electrónico del usuario
     phone: '123-456-555', // Telefono del usuario
     city: 'San Francisco', //Ciudad del usuario
   } */

  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
  )
}

export default App