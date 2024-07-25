import { useEffect, useState } from 'react'
import './styles/App.css'
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

  // Inicializa el estado con el valor del localStorage si existe
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {}; // Sí encuentra un usuario en el localstorage lo trae en formato JSON
  });

  // Inicializar el estado del modo oscuro con el valor que tenga en el localstorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    return storedDarkMode || 'false'; // || false Sí encuentra el estado del darkMode en el localstorage lo trae en formato booleano
  });

  // Este useEffect se ejecuta cada vez que cambia el estado `user` y guarda el estado `user` actualizado en localStorage
  useEffect(() => {
    // Convierte el estado user a una cadena JSON y lo almacena en el localstorage
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]); // El efecto se ejecuta cada vez que el estado user cambia

  // useEffect que se ejecuta cuando cambia el estado del modo oscuro isDarkMode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  //Metodo para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  // Retornar el componente principal con el contexto
  return (
    <Context.Provider value={{ user, setUser, isDarkMode, toggleDarkMode }}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
  )

}

export default App