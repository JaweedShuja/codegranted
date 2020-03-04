import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return(
            <div class="jumbotron text-center container p-3 border-left border-right" style={{marginBottom:0, paddingTop:-30, backgroundColor:'#ffffff'}}>
                <h1>{`<Code Granted/>`}</h1>
                <p>Online Educational Solutions</p> 
            </div>
        );
    }
}