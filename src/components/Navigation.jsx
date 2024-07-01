import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import homeimage from '../assets/img/homeimg.png'
import contactimg from '../assets/img/contactimg.png'
import cakeimg from '../assets/img/cake.png'

function Navigation () {
  return (
    <Navbar expand='lg' className='bg-danger'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link className='nav-link text-white' as={Link} to='/'>
              <img src={homeimage} style={{ width: '16px', marginRight: '8px' }} alt='home' />
              Home
            </Link>
            <Link className='nav-link text-white' as={Link} to='/contacto'>
              <img src={contactimg} style={{ width: '16px', marginRight: '8px' }} alt='contactos' />
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link className='navbar-brand text-white' as={Link} to='/'>
          Happy Cake
          <img src={cakeimg} style={{ width: '16px', marginLeft: '8px' }} alt='cake' />
        </Link>
      </Container>
    </Navbar>
  )
}

export default Navigation
