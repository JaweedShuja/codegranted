import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return(
           <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobile App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Web App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Desktop</a>
              </li>

            </ul>
          </nav> 
        );
    }
}