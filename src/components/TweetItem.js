import React from 'react'
import {Link} from 'react-router-dom';



export default function TweetItem(props) {
    const {item,deleteTweet,Retweet}=props

    return (
        <div className={`row tweet`} data-id={item.id}>
        <div className="col-md-2 col-sm-2 mt-3">
                <img className="profilefoto" alt="" src="https://placeimg.com/100/100/people"/> 
        </div>
          
        <Link to={`/comment/${item.id}`} className="commentlink" >
        <div className="col-md-10 col-sm-10 mt-2 tweeticerik">
            <Link to={`/profile/${item.userDto.id}`}>{item.userDto.name +" "+item.userDto.surname}</Link> <span>@{item.userDto.username} {item.rtUsername!==null ? <Link to={`/profile/${item.rtUserId}`}> <i className="fas fa-retweet retweet rtozel">  @{item.rtUsername} {item.rtUsername===localStorage.getItem("username")? "Rtledin" : "Rtledi"}</i></Link> :null}  . {item.createdOn.substring(0,10)}</span> 
           {item.userDto.username === localStorage.getItem("username") ? <button className="deletebutton" onClick={()=>{deleteTweet(item.id)}} type="button"><i className="fa fa-trash-alt"></i></button>  :null }
                
           <p> {item.description}</p>
            
        </div>
        </Link>
        <div className="col-md-10 offset-md-1  col-sm-10">
           <div className="row icons">
               <div className="col-md-4"><button><i className={`far fa-comment `}> {item.commentCount}</i></button></div>
               <div className="col-md-4"><button onClick={()=>{Retweet(item.id)}} ><i className={`fas fa-retweet ${item.retweet===true ? "retweet" :null} `}> {item.reetweetCount}</i></button></div>
               <div className="col-md-4"><button><i className="far fa-heart"> {item.favCount}</i></button></div>
               
           </div>
        </div>
</div>
    )
}

