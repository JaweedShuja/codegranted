import React, { Component } from 'react'
import {Navbar, Form, Nav, FormControl, Button} from 'react-bootstrap'

export default class NavBarComponent extends Component {
    render() {
        return(
          //  <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
          
          //   <ul className="navbar-nav">
          //     <li className="nav-item">
          //       <a className="nav-link" href="#">Home</a>
          //     </li>
          //     <li className="nav-item">
          //       <a className="nav-link" href="#">Mobile App</a>
          //     </li>
          //     <li className="nav-item">
          //       <a className="nav-link" href="#">Web App</a>
          //     </li>
          //     <li className="nav-item">
          //       <a className="nav-link" href="#">Desktop</a>
          //     </li>

          //   </ul>
          // </nav> 

//           <nav className="navbar navbar-expand-md bg-dark navbar-dark container">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="collapsibleNavbar">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>    
//     </ul>
//   </div>  
// </nav>
          
    <Navbar bg="dark" variant="dark" className="container p-1" style={{backgrountColor:'#2c3e50'}}>
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link style={{color:'white', fontWeight:'bold', backgroundColor:"#27ae60"}} href="#home">Home</Nav.Link>
      <Nav.Link style={{color:'white', fontWeight:'bold'}} href="#features">Technology</Nav.Link>
      <Nav.Link style={{color:'white', fontWeight:'bold'}} href="#pricing">Learning</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
    </Navbar>
    
        );
    }
}