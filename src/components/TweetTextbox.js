import React,{Component} from 'react';


class TweetTextbox extends Component{

    addTweet=(e)=>{
        e.preventDefault();

        let post=e.target.elements.post.value;
        e.target.elements.post.value="";

        this.props.newTweet(post);
    }

    render(){
        return(

            <div className="row secondrow">
            <div className="col-md-2 col-sm-2 mt-3">
                <img className="profilefoto" alt="" src="https://placeimg.com/100/100/people"/> 
            </div>
            <div className="col-md-10 col-sm-10 mt-3">
                <form onSubmit={this.addTweet}>
                <textarea className="textarea" name="post" placeholder="Neler oluyor?"></textarea>
                <div className="row">
                    <div className="col-md-9 col-sm-9 iconmd mt-2">
                            <i className="far fa-image" style={{"fontSize":"20px"}}></i>
                            <i className="fas fa-gift ml-3" style={{"fontSize":"20px"}}></i>
                            <i className="far fa-chart-bar ml-3"  style={{"fontSize":"20px"}}></i>
                            <i className="far fa-smile ml-3"  style={{"fontSize":"20px"}}></i>
                            
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <button type="submit" className="tweetbutton">Tweetle</button>
                    </div>
                </div>
                </form>
            </div>
          
        </div>

        )
    }


}

export default TweetTextbox