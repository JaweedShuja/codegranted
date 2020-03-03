import React, { Component } from 'react'
 
class UpperNav extends Component {
   render() {
       return (
           <div>
               <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-0">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" style={{color:'white'}} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color:'white'}} href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color:'white'}} href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
           </div>
        )
    }
}

export default UpperNav