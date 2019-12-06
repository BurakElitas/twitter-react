import React, { Component } from 'react'
import '../../css/profile/ProfileBody.css'
//import PP from '../../images/burak.jpeg';
//import BackImage from '../../images/camlica-4.jpg'
import axios from 'axios';
import ProfileTop from './ProfileTop'
import {Link} from 'react-router-dom'

export default class FollowBody extends Component {
    
    state={

    };

    getUser(){
        const urlId=this.props.userId;
        const token=localStorage.getItem("token");
        const myId=localStorage.getItem("id");
        //const id=localStorage.getItem("id");
        const api='http://localhost:8080/user/detail/'+urlId;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

        axios.get(api,{
            headers:headers
        }).then((response)=>{
          this.setState(()=>{
              return {
                  user:response.data
              }
          })
        }).catch((error)=>{
            
        });

        if(parseInt(urlId)!==parseInt(myId)){
            axios.get('http://localhost:8080/user/follow/'+myId+"/"+urlId,{
                headers:headers
            }).then((response)=>{
              this.setState(()=>{
                  return {
                      bool:response.data
                  }
              })
            }).catch((error)=>{
                
            });

        }


    }


    componentDidMount(){

        this.getUser();
    }

    Follow=()=>{
        console.log("girdim");
        const token=localStorage.getItem("token");
        console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
        }
        
        const urlId=this.props.userId;
        const id=localStorage.getItem("id");
       
       const api= `http://localhost:8080/user/${id}/${urlId}`;
        console.log(api);
        console.log(id);
        console.log(urlId);
        axios.get(api,{
            headers:headers
        }).then((response)=> {
            console.log(response.data.state)
            this.getUser();
            
           this.setState(()=>{
               return {
                  bool:response.data.state==='added'?true:false
               }
           })
        }).catch((error)=>{

        })

       

    }


    render() {
        
        return (
            <React.Fragment>
            {
                this.state.user!==undefined ? <ProfileTop count={this.props.count} user={this.state.user} /> : null 
            }
            
            <div className="kapsayici">
                <div>
                    <img className="profileBackgroundPhoto" alt="" src="https://www.fillmurray.com/640/360"></img>
                </div>
                {/*<div className="profilePhoto"><img style={{width: "150px", height: "150px", borderRadius: "50%", border: "solid 5px white"}} src={CatImage}></img></div>*/}
                <div><img className="profilePhoto" alt="" src="https://placekitten.com/640/360"></img></div>

                {
                    this.state.user !==undefined && this.state.user.id===localStorage.getItem("id") ? <div><button className="editButton">Profili Düzenle</button></div> :
                
                this.state.user !==undefined && this.state.bool===true && this.state.user.id!==localStorage.getItem("id") ?
                <div><button onClick={this.Follow} className="editButton">Takibi Bırak</button></div>:
                this.state.user!==undefined && this.state.bool===false ?
                <div><button onClick={this.Follow} className="editButton">Takip Et</button></div>:
                <Link to="/edit"><div><button className="editButton">Profili Düzenle</button></div></Link>
                
                
                
                }
                
                <div><span className="profileName">{this.state.user !==undefined ? this.state.user.name +" "+this.state.user.surname :null}<i className="fas fa-lock"></i></span></div>
                <div><span className="userName">@{this.state.user !==undefined ? this.state.user.username:null} </span></div>
                <div></div><br/>
               <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="userProfileInfo col-md-3"><i className="userProfileInfo fas fa-map-marker-alt"></i>Konum</div>
                        <div className="userProfileInfo col-md-4"><i className="userProfileInfo fas fa-birthday-cake"></i>Doğum : Bilinmiyor</div>
                        <div className="userProfileInfo col-md-5"><i className="userProfileInfo fas fa-calendar-alt"></i>{this.state.user !==undefined ? this.state.user.createdOn.substring(0,11):null} tarihinde katıldı.</div>
                    </div>
                </div>

                <div className="followDiv container-fluid">
                    <div className="row">
                        <div className="followNumber col-md-3">{this.state.user !==undefined ? this.state.user.followerCount:null} <span className="followText">Takipçi</span></div>
                        <div className="followNumber col-md-4">{this.state.user !==undefined ? this.state.user.followCount:null} <span className="followText">Takip Edilen</span></div>
                        <div className="col-md-5"></div>
                    </div>
                </div>

                <div className="mediaDivTop container-fluid">
                    <div className="row">
                        <div className="mediaDiv col-md-3"><p>Tweetler            </p>  </div>
                        <div className="mediaDiv col-md-5"><p>Tweetler ve Yanıtlar</p></div>
                        <div className="mediaDiv col-md-2"><p>Medya               </p>  </div>
                        <div className="mediaDiv col-md-2"><p>Beğeni              </p>  </div>
                    </div>
                </div>
                <div className="container-fluid">
               
                </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
