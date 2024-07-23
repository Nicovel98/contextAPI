export const Login = () => {

  const saveData = e => {
    e.preventDefault();
    alert(e.target.username.value);

  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="login" onSubmit={saveData}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="phone" placeholder="phone" />
        <input type="submit" value="Enviar" />
      </form>
      <p>Esta es la página de login</p>
    </div>
  )
}