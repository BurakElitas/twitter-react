import React, { Component } from 'react'
import TweetTextbox from './TweetTextbox';
import Tweet from './Tweet';


export class Middle extends Component {

    constructor(props){
        super();
    }
   

    render() {
        return (
            <div className="col-md-6 col-sm-6 middlebox">
            <div className="row">
                    <div className="col-md-12 col-sm-12 mt-3 anasayfa">
                            <h5>Anasayfa</h5>
                    </div>
            </div>
            <TweetTextbox newTweet={this.props.newTweet}/>
            <div className="row ara">
            </div>
            <Tweet Tweets={this.props.Tweets} deleteTweet={this.props.deleteTweet} Retweet={this.props.Retweet} />
          
        </div>
        )
    }
}



export default Middle
