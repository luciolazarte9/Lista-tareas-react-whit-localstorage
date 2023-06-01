import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';


function App() {
  

  return (
    <>
    <Container className='my-5 main'>
      <section className='text-light'>
      <h1 className='text-center display-4'>Lista de tareas</h1>
      <hr />
      </section>
      <FormularioTarea></FormularioTarea>
    </Container>
    <footer className='bg-dark text-light py-4 text-center'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
