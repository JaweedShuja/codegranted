import React, {Component} from 'react'
import UpperNav from './upperNav'
import Jumbotron from './jumbotron'
import NavBar from './navBar'
import RecentBlogs from './recentBlogs'

export default class Main extends Component{
    render(){
        return(
            <div style={{backgroundColor:'#f8f9fa'}}>
                <UpperNav />
                <Jumbotron />
                <NavBar />
                <div className="container border-left border-right" style={{backgroundColor:'white'}}>
                    <div className="row">
                      <div className="col-sm-8">
                          <p style={{color:'gray', marginTop:20,}}>Recent Blogs</p>

                          <RecentBlogs />
                      </div>
                      <div className="col-sm-4" style={{backgroundColor:'green'}}>
                          <p>j</p>
                      </div>
                   </div>
                </div> 
            </div>
             
        );
    }
}