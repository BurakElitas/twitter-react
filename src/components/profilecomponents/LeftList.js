import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../../css/profile/LeftList.css";

export default class LeftList extends Component {
   


    render() {
        const id=localStorage.getItem("id");
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <ul className="leftUl">
                                <Link to="/anasayfa"> <li className="leftList" id="leftMainpage"><i style={{fontSize : "30px"}} className="fab fa-twitter"></i></li></Link>
                                <li className="leftList" id="leftMainpage"><i className="fas fa-home"></i><Link to="/anasayfa" className="profile">Anasayfa</Link></li>
                                <li className="leftList"><i className="fab fa-slack-hash"></i> Keşfet</li>
                                <li className="leftList"><i className="far fa-bell"></i> Bildirimler</li>
                                <li className="leftList"><i className="far fa-envelope"></i> Mesajlar</li>
                                <li className="leftList"><i className="far fa-bookmark"></i> Yer İşaretleri</li>
                                <li className="leftList"><i className="far fa-list-alt"></i> Listeler</li>
                                <li className="leftList"><i className="far fa-user"></i><Link to={`/profile/${id}`} className="profile">Profil</Link></li>
                                
                                

                                <li className="leftList"><i className="far fa-caret-square-down"></i> Daha Fazla</li>
                                
                                <button type="button" className="twtbtn" data-toggle="modal" data-target="#exampleModal">
                                <li className="leftList" id="tweetLeftButton">Tweetle</li>
                             </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
