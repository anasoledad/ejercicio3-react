import './App.css'
import Mensaje from './components/Mensaje'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <section>
        <Mensaje nuevoMensaje = 'my friend'></Mensaje>
      </section>
    </>
  )
}

export default App