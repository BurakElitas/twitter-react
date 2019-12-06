import React, { Component } from 'react'
import Leftbox from '../components/Leftbox'
import Searchbar from '../components/profilecomponents/Searchbar'
import Middle from '../components/Middle'
import AdviceFollower from '../components/AdviceFollower'
import axios from 'axios';

export class Comment extends Component {

    getTweetAndComments(tweetId){
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
 
    componentDidMount(){
        const tweetId=this.props.match.params.tweetId;

        this.getTweetAndComments(tweetId);

    }


    render() {
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


export default Comment
