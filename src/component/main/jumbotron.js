import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return(
            <div class="jumbotron text-center container p-3 border-left border-right" style={{marginBottom:0, paddingTop:-30, backgroundColor:'#ffffff'}}>
  <h1>My First Bootstrap 4 Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
        );
    }
}