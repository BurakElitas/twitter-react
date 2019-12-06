import React, { Component } from 'react'
import '../../css/profile/ProfileTop.css';
import {Link} from 'react-router-dom';

export default class ProfileTop extends Component {
  
    render() {
        const {user}=this.props;
      
        return (
            
            <div>
                <div className="headerDiv container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="row">
                                <div className="headerIconDiv col-md-1">
                                   <Link to="/anasayfa"><i className="profileTopArrow fas fa-arrow-left"></i></Link> 
                                </div>
                                <div className="col-md-11">
                                    <ul  className="headerTextUl">
                                        <li className="headerText">{user!==undefined ? user.username :null} </li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
