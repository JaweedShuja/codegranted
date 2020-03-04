import React, { Component } from 'react'

export default class PopularBlogs extends Component {
    render() {
        return(
            <div>
            <div className="row">
                <div className="col-sm-4">
                        <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="..." className="rounded" style={{height:'80%', width:'100%'}}/>
                    </div>
                    <div className="col-sm-8">
                        <p style={{ color:'#2c3e50', fontSize:14, fontWeight:'bold'}}>How Hackers Accessed SWIFT to Steal $81 Million and Erase Evidence</p>
                        
                    </div>
            </div>
            <hr/>
            </div>
        );
    }
}