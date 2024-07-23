import './App.css'
import { Context } from './context/Context'
import { AppRouter } from './routing/AppRouter'

function App() {

  const name = 'John Doe' // Nombre del usuario

  return (
    <Context.Provider value={name}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
  )
}

export default App