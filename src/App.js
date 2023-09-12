import { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import Cart from './routes/Cart.js';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  let obj = {name : 'kim'};
  let jsonObj = JSON.stringify(obj);
  localStorage.setItem('data', jsonObj);

  let [shoes] = useState(data);
  let navigate = useNavigate();

  let result = useQuery('getName', () =>
    axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    }),
    { staleTime : 2000 }
  );
  
  useEffect(() => { 
    localStorage.removeItem('watched');
    localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" variant='light'>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate(-1);
            }}>Home</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/cart');
            }}>Cart</Nav.Link>
          </Nav>
          <Nav className="ms-auto">{ result.isLoading ? '로딩중' : result.data.name }</Nav>
        </Container>
      </Navbar>
      <div className="main-bg">
        <img src={ process.env.PUBLIC_URL + '/img/images.jpeg'}></img>
      </div>

      <Routes>
        <Route path="/" element={
          <div className="container">
            <div className="row">
            {
              shoes.map((shoe, i) => {
                return (
                  <Card shoe={shoe} key={i}></Card>
                )
              })
            }
            </div>
         </div>
        }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>로케이션임</div>}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path="*" element={<div>없는 페이지에요</div>}></Route>
        <Route></Route>
      </Routes>
      
    </div>
  );
}

function Event() {
  return (
    <>
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    </>
  )
}

function About() {
  return (
    <>
      <div>회사정보임</div>
      <Outlet></Outlet>
    </>
  )
}

function Card(props){
  return (
    <div key={props.key} className="col-md-4">
      <a href={ 'detail/' + props.shoe.id }>
        <img src={ props.shoe.img } width="80%"/>
      </a>
      <h4>{props.shoe.name}</h4>
      <p>{props.shoe.price}</p>

    </div>
  )
}

export default App;
