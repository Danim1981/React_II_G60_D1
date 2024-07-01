import { Container } from 'react-bootstrap'
import pastel from '../assets/img/birthday-cake-6157.png'

const Home = () => {
  return (
    <Container className='d-flex flex-column align-items-center text-center my-5'>
      <h1 className='my-3'>Bienvenido a <strong>Happy Cake</strong></h1>
      <p>El Lugar de los pasteles Felices</p>
      <div>
        <img src={pastel} alt='pastel' />
      </div>
    </Container>
  )
}

export default Home
