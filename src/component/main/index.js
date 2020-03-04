import React, {Component} from 'react'
import UpperNav from './upperNav'
import Jumbotron from './jumbotron'
import NavBar from './navBar'
import RecentBlogs from './recentBlogs'
import PopularBlogs from './popularBlogs'
import Page from './facebookPage'
import Footer from './footer'

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
                            <hr/>
                            <RecentBlogs />
                            <hr/>
                            <RecentBlogs />
                            <hr/>
                            <RecentBlogs />
                            <hr/>
                            <RecentBlogs />
                            <hr/>
                            <RecentBlogs />
                            <hr/>
                        </div>
                        <div className="col-sm-4" style={{backgroundColor:'white'}}>
                        <p style={{color:'black', marginTop:20, opacity:0.8}}>Social Widget</p>
                        <hr/>
                        <Page />
                        <p style={{color:'black', marginTop:20, opacity:0.8}}>Popular Blogs</p>
                        <hr/>
                            <PopularBlogs />
                            <PopularBlogs />
                            <PopularBlogs />
                            <PopularBlogs />
                            <PopularBlogs />
                            <PopularBlogs />
                        
                        
                        </div>
                    </div>
                    
                    </div>
                    <Footer /> 
                </div>
             
        );
    }
}