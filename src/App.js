import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './component/main'
import Post from './component/post'
import AddBlog from './component/addblog'

export default class App extends Component{
  render(){
    return(
      <div>
          {/* <Main /> */}
          {/* <Post /> */}
          <AddBlog />
      </div>  
    );
  }
}