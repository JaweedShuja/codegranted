import React, { Component } from 'react'

export default class RecentBlogs extends Component {
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="..." className="rounded" style={{height:'100%', width:'100%'}}/>
                    </div>
                    <div className="col-sm-8">
                        <h4 className="container" style={{fontWeight:'bold', color:'#2c3e50', marginTop:10}}>How Hackers Accessed SWIFT to Steal $81 Million and Erase Evidence</h4>
                        <div className="container">
                        <p style={{color:'gray', fontSize:12}}>Written By: Javed 1 Year Ago</p>
                            <p style={{fontWeight:'bold', opacity:0.8}}>Today's Article is about C# libraries In which we are going to know...<a href="#" style={{textDecoration:'underline', color:'black',}} >Read More</a></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}