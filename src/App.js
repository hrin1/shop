import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './pages/productdata';

import About from './pages/About';
import Detail from './pages/Detail';

import { Routes, Route , Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {

  const Navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{Navigate('/')}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{Navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{Navigate('about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{Navigate('about/info')}}>Infomation</Nav.Link>
            <Nav.Link onClick={()=>{Navigate('about/loca')}}>location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route path='about' element={<About />}>
          <Route path='info' element={<div>Infomation</div>}/>
          <Route path='loca' element={<div>location</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
