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
                <Item name={shoe.name} price={shoe.price} id={shoe.id}></Item>
              )
            })
          }
          {/* <div className="col-md-4">
            <img src={ process.env.PUBLIC_URL + '/img/picture1.jpeg' } width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={ process.env.PUBLIC_URL + '/img/picture2.jpeg' } width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={ process.env.PUBLIC_URL + '/img/picture3.jpeg' } width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Item(props){
  return (
    <div className="col-md-4">
      <img src={ process.env.PUBLIC_URL + '/img/picture' + (props.id + 1) + '.jpeg' } width="80%"/>
      <h4>{props.name}</h4>
      <p>{props.price}</p>
    </div>
  )
}

export default App;
