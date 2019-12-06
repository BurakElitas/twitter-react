import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import Leftbox from './Leftbox';
import Middle from './Middle';
import '../css/anasayfa.css';
import axios from 'axios';
import Searchbar from '../components/profilecomponents/Searchbar';
import AdviceFollower from '../components/AdviceFollower';

//import LeftList from '../components/profilecomponents/LeftList';



class Anasayfa extends Component {

    constructor(){

        super();
        this.state={
            Tweets:[]
        }
    }

    getAllFollowsTweet=()=>{
        const token=localStorage.getItem("token");
        const id=localStorage.getItem("id");
        const api='http://localhost:8080/user/myFollowsTweets/'+id;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

        axios.get(api,{
            headers:headers
        }).then((response)=>{
        this.setState((prevState)=>{
            return {
                Tweets:response.data.result
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
                return {Tweets:[response.data.result,...prevState.Tweets]}
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
            this.getAllFollowsTweet();
            
        }).catch((error)=>{

        })

    }



    componentDidMount(){
        this.getAllFollowsTweet();
    }

    Retweet=(tweetId,keyId)=>{
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
 
            this.getAllFollowsTweet();
 
        }).catch((error)=>{
            
        });
     }
   


    render() {
        const token=localStorage.getItem("token");
        if(token==null){
            return <Redirect to="/login"/>

        }

        return (
            <div className="container-fluid contf">
                <div className="row">
                    <Leftbox/>
                    <Middle Tweets={this.state.Tweets} newTweet={this.addTweet} deleteTweet={this.deleteTweet} Retweet={this.Retweet}/>
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
        )
    }

   
}
export default Anasayfa


