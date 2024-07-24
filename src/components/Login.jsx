import { useContext, useState } from "react";
import { Context } from "../context/Context";

export const Login = () => {

  // Extraemos user y setUser del contexto usando useContext
  const { user, setUser } = useContext(Context);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Método para validar el campo username: no admite espacios en blanco ni mayúsculas
  const handleUsernameV = e => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase();
    setUsername(value);
  };

  // Método para validar el nombre y cambiar la primera a mayúsculas
  const handleNameV = e => {
    const value = e.target.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setName(value);
  };

  // Método para validar que se escriban solo números en el campo teléfono
  const handlePhoneV = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhone(value);
  }

  // Método que se ejecuta al hacer clic en enviar en el formulario
  const saveData = e => {
    e.preventDefault();

    // Crear el objeto del usuario a partir de los datos del formulario
    let identified_user = {
      username: e.target.username.value,
      name: e.target.name.value,
      phone: e.target.phone.value
    }

    console.log(identified_user);

    // Actualizamos el estado del usuario
    setUser(identified_user);
  };


  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="login" onSubmit={saveData}>
        <input type="text" name="username" placeholder="username" value={username} onChange={handleUsernameV} required />
        <input type="text" name="name" placeholder="name" value={name} onChange={handleNameV} required />
        <input type="text" name="phone" placeholder="phone" value={phone} onChange={handlePhoneV} required />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}