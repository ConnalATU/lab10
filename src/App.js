
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //import boostrap 

import { Content } from './components/content'; //importing content component
import { Header } from './components/header'; //importing header component
import { Footer } from './components/footer'; //importing  footer component
import Container from 'react-bootstrap/Container'; //import bootstrap container
import Nav from 'react-bootstrap/Nav'; //import bootstrap nav
import Navbar from 'react-bootstrap/Navbar'; //import bootstrap Navbar
import {Read} from './components/read';
import {Create} from './components/create';
import { Edit } from './components/edit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Search from './components/search';
{/*import Routing to change component*/ }



//creating class that uses React component that will enable us to use JSX
class App extends React.Component {
  //render method 
  render() {
    //returns content component 
    return (
      <Router>{/*start router*/}
        <div className="App">
          {/*Bootstrap Nav Bar*/}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/*Adding Navbar links*/}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>{/*Adding Router Paths*/}
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Read></Read>} exact></Route>
            <Route path='/create' element={<Create></Create>} exact></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>



          </Routes>
          {/*<Header></Header>
       <Content></Content>
      <Footer></Footer> */}
        </div>
      </Router>
    );//end return
  }//end render method 
}//end class

export default App;

