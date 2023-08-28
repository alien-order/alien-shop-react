import './App.css';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import bg from './img/images.jpeg'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant='light'>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')'}}>

      </div>
    </div>
  );
}

export default App;
