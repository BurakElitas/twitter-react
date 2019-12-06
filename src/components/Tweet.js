import React, { Component } from 'react'
import TweetItem from './TweetItem';
import "../css/profile/TweetItem.css";

export class Tweet extends Component {
   

    constructor(props) {
        super();
      
       
    }
    
    
    render() {
       

        return (
            
            <React.Fragment>
            {
                this.props.Tweets.map(item=>{
                return(
                    <TweetItem Retweet={this.props.Retweet}  item={item} key={item.id*Math.floor(Math.random() * 100000)} index={Math.floor(Math.random() * 10000000000)} deleteTweet={this.props.deleteTweet} />
                )
                
            })
            }
            </React.Fragment>
        )
    }
}




export default Tweet
