import React, { Component } from 'react'

import UpperNav from '../main/upperNav'
import Jumbotron from '../main/jumbotron'
import NavBar from '../main/navBar'
import RecentBlogs from '../main/recentBlogs'
import PopularBlogs from '../main/popularBlogs'
import Page from '../main/facebookPage'
import Footer from '../main/footer'

export default class Post extends Component {
    render() {
        return(
            <div style={{backgroundColor:'#f8f9fa'}}>
            <UpperNav />
            <Jumbotron />
            <NavBar />
            <div className="container border-left border-right" style={{backgroundColor:'white'}}>
                <div className="row">
                <div className="col-sm-8">
                   <h4 className="container" style={{fontWeight:'bold', color:'#343a40', marginTop:20,}}>How Hackers Accessed SWIFT to Steal $81 Million and Erase Evidence</h4>
                    <div className="container" style={{backgroundColor:'black', height:2}}>

                    </div>
                    <p style={{color:'gray', fontSize:12, marginTop:10}}>Written By: Javed 1 Year Ago</p>
                    <div className="container text-center">
                        <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="..." className="rounded" style={{height:'50%', width:'50%'}}/>
                    </div>
                        {/*  */}
                        <div className="container">
                        <p style={{marginTop:15}}>
                            Today's article is about hacking, In which i will tell how hackers accessed SWIFT to steal $81 million and erase evidence. Here is some points in which you will clearly understand how this type of hacking begins.
                            </p>
                            <ul>
                                <li>
                                <h4>SWIFT Alliance Software service</h4>
                                </li>
                                <p>Attackers gain access by some unknown source and install malware. Malware is some type file that contains some viruses that can delete any file from your computer, this type of file is install to harm someone's system.</p>
                                <li>
                                <h4>CONFIG FILE gpca.dat</h4>
                                <p>  Malware that were installed decrypts config file that contains important search terms to scan within SWIFT messages.</p>
                                </li>
                                <li>
                                <h4>Exploitation</h4>
                                <p>  Malware identifies and exploits host's SWIFT application to bypass validity check within Oracle DLL.</p>
                                </li>
                                <li>
                                <h4>Conformation Message</h4>
                                <p>Conformation message from SWIFT network are now monitored by the malware. Functionality continues in loop until 06:00 6th Fab 2016.</p>
                                </li>
                                <li>
                                <h4>Tampered</h4>
                                <p> SWIFT messages sent to printer are tampered with in real time.</p>
                                </li>
                                <li>
                                <h4>PRC and FAL</h4>      
                                <p>PRC and FAL files are scanned for attacker defined terms. On match will extract transfer reference and sender address to from a SQL DELETE statement to delete a transaction.</p> 
                                </li>
                                <li>
                                <h4>Statement</h4>
                                <p>Messages that contain attacker defined terms will be used to form SQL statement to query Convertible Currency available and then update transfer amounts.</p>       
                                </li>
                                <li>
                                <h4>Logout</h4>
                                <p>Checks the "Login/Logout" status of the journal table every hour and sends result to attacker domain over HTTP.</p>
                                </li>

                            </ul>
                        </div>
                           <div className="container">
                               <div className="row">
                                    <div className="col-sm-8">
                                        <p style={{fontWeight:'bold'}}>Share This:</p>
                                        <button className="btn btn-primary">Facebook</button>

                                        <hr/>
                                    </div>
                                
                               </div>
                               <div className="row">
                                    <div className="col-sm-8">
                                        <p style={{fontWeight:'bold'}}>Previous</p>
                                        <p>
                                            this is previous blog
                                        </p>

                                        <hr/>
                                    </div>
                                    <div className="col-sm-4">
                                        <p style={{fontWeight:'bold'}}>Next:</p>
                                        <p>
                                            this is previous blog
                                        </p>
                                        <hr/>
                                    </div>
                                    
                                
                               </div>
                           </div>
                        {/*  */}
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