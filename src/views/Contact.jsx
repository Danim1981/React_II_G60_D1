import { Form, Button, Container } from 'react-bootstrap'

function Contact () {
  const handleClick = () => {
    alert('!Gracias por Preferirnos, Contestaremos pronto¡')
  }
  return (
    <Container className='d-flex flex-column align-items-center text-center my-5'>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>

      <Form style={{ width: '80%' }}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Correo</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button variant='danger' onClick={handleClick}>Enviar</Button>
      </Form>
    </Container>
  )
}

export default Contact
