import React, { Component } from 'react';
import LeftList from './LeftList';
import ProfileBody from './ProfileBody';
import Searchbar from './Searchbar';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import AdviceFollower from '../AdviceFollower';
 
export class Profile extends Component {
    state={
        tweets:[]
    }
    
    getAllTweet=()=>{
        const token=localStorage.getItem("token");
        const id=this.props.match.params.userId;
        const api='http://localhost:8080/tweet/tweets/'+id;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

        axios.get(api,{
            headers:headers
        }).then((response)=>{
            
        this.setState((prevState)=>{
            return {
                tweets:response.data.result,
                length:response.data.result.length
                
            }
        });

        }).catch((error)=>{
            
        });
    }


 addTweet=(post)=>{
        const token=localStorage.getItem("token");
        const id=localStorage.getItem("id");
        const api='http://localhost:8080/tweet/'+id;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

          axios.post(api,{description:post},{
            headers:headers
        }).then((response)=>{
            console.log(response.data)
            this.setState((prevState)=>{
                return {tweets:[response.data.result,...prevState.tweets]}
            })        

    }).catch((error)=>{

    })
         

    }

    newTweet=(e)=>{
        e.preventDefault();
        let post=e.target.elements.post.value;
        e.target.elements.post.value=""
       this.addTweet(post);
          
    }
    
    deleteTweet=(tweetId)=>{
        console.log("içerdeyim");
        console.log(tweetId);
        const token=localStorage.getItem("token");
        console.log(token);
        const api='http://localhost:8080/tweet/delete/'+tweetId;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

          axios.get(api,{
            headers:headers,
        }).then((response)=>{
            this.getAllTweet();
            
        }).catch((error)=>{

        })

    }

    Retweet=(tweetId)=>{
        console.log("girdim");
        const myId=localStorage.getItem("id");
        console.log("myid "+myId);
        const token=localStorage.getItem("token");
        const api='http://localhost:8080/user/retweet/'+myId+'/'+tweetId;
        console.log(api);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }
 
        axios.get(api,{
            headers:headers
        }).then((response)=>{
 
           this.getAllTweet();
 
        }).catch((error)=>{
            
        });
     }
   

    componentDidMount(){
        this.getAllTweet();
    }

    render() {
        const userId=this.props.match.params.userId;
        console.log(userId)
        
        if(localStorage.getItem("token")===null){
            return <Redirect to="/login"/>
        }

        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                    <LeftList/>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-7">
                                <ProfileBody userId={userId} count={this.state.length} deleteTweet={this.deleteTweet} tweets={this.state.tweets} Retweet={this.Retweet}/>
                                
                            </div>
                            <div className="col-md-3">
                                <Searchbar/>
                                <AdviceFollower/>
                            </div>

                            <form onSubmit={this.newTweet}>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel"> </h5>
                                    <button type="button twtbtn" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <img className="profilefoto" style={{"float":"left"}} alt="" src="https://placeimg.com/100/100/people"/> <br/>
                                <textarea name="post" style={{"marginLeft":"14px","marginTop":"-31px","border":"none","overflow":"auto"}} maxLength="240" cols="45" rows="10"></textarea>
            
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Tweetle</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                
           
        )
    }
}



export default Profile