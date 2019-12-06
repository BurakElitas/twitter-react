import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export class Leftbox extends Component {

    constructor(){
        super();
        this.state={
            id:localStorage.getItem("id")
        }
    }
 
    cikis=()=>{
        localStorage.clear();
        return <Redirect to="/login"/>
    }

    render() {
        return (
            <div className="col-md-3 col-sm-3 leftbox">
            <ul className="list-group lgroup">
                    <Link to="/anasayfa"><li className="list-group-item lgroupitem first"><i className="fab twitter fa-twitter fa-2x"></i></li></Link>
                    <Link to="#" className="homelink"><li className="list-group-item lgroupitem "><i className="fas home fa-home fa-1x"></i> Anasayfa</li></Link>
                    <Link to="#" className="link"><li className="list-group-item lgroupitem"><i className="fas fa-percentage"></i> Keşfet</li></Link>
                    <Link to="#" className="link"><li className="list-group-item lgroupitem"><i className="far fa-bell"></i> Bildirimler</li></Link>
                    <Link to="#" className="link"><li className="list-group-item lgroupitem"><i className="far fa-envelope"></i> Mesajlar</li></Link>
                    <Link to="#" className="link"><li className="list-group-item lgroupitem"><i className="far fa-bookmark"></i> Yer İşaretleri</li></Link>
                    <Link to="#" className="link"><li className="list-group-item lgroupitem"><i className="far fa-list-alt"></i> Listeler</li></Link>
                    <Link to={`/profile/${this.state.id}`} className="link"><li className="list-group-item lgroupitem"><i className="far fa-user-circle"></i> Profil</li></Link>
                    <Link to="#" onClick={this.cikis} className="link"><li className="list-group-item lgroupitem">Çıkış Yap</li></Link>
                    <button type="button" className="twtbtn" data-toggle="modal" data-target="#exampleModal">
                    <li className="list-group-item lgroupitem leftList" id="tweetLeftButton">Tweetle</li>
                    </button>
                    
                    
                    
                  </ul>
        </div>
        )
    }
}


export default Leftbox
