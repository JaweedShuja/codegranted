import React, { Component} from 'react';
import facebook from '../facebook.png';
import youtube from '../youtube.png'

 
export default class FacebookPage extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <div className="col-sm-4 text-center" >
                <img src={facebook} style={{height:'50px', width:'50px'}}/>
                <p>Facebook</p>
            </div>
            <div className="col-sm-4 text-center">
                <img src={youtube} style={{height:'50px', width:'50px'}}/>
                <p>Youtube</p>
            </div>
          </div>
      </div>    
    );
  }
}