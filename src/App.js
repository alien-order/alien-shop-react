import { useState } from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';

function App() {
  let [shoes] = useState(data);
  
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
      <div className="main-bg">
        <img src={ process.env.PUBLIC_URL + '/img/images.jpeg'}></img>
      </div>

      <div className="container">
        <div className="row">
          {
            shoes.map((shoe, i) => {
              return (
                <Card shoe={shoe}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={ process.env.PUBLIC_URL + '/img/' + props.shoe.img } width="80%"/>
      <h4>{props.shoe.name}</h4>
      <p>{props.shoe.price}</p>
    </div>
  )
}

export default App;
