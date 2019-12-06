import React, { Component } from 'react'
import '../../css/profile/Tweet.css'

class Tweet extends Component {
    render() {
        return (
            <div className="tweetFrame" style={{ width : "100%" }}>

                <div className="tweetBox">

                    <div className="tweetBody">
                        <div className="row">
                            <div className="col-md-2 photoBox">

                                <a>
                                    <div>
                                        <img src="https://placekitten.com/640/360" alt="" style={{ height: "49px", borderRadius: "75%" }} />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-9 contentBox">
                                <div className="tweetOwner"><a href="#" style= {{color : "black",fontSize  : "15px",fontWeight : "bold"}}>Şiir Sokakta</a></div>
                                <div className="content">
                                    adalkdha  alkfslk  klsfjskfjslkfsjflskjf  skfjsl  jkslfjs  jsklf js  jl kjfal.
                                    adasdad   . alpdkadl    asdas
                        </div>
                                <div className="footer">
                                    <div style={{maxWidth:"135.41px",minWidth:"125.41px",float:"left"}} className="comment"> <i style={{paddingRight :"3px" }} className="far fa-comment-alt"></i></div>
                                    <div style={{maxWidth:"135.41px",minWidth:"125.41px",float:"left"}} className="retweet"> <i style={{paddingRight :"3px" }} className="fas fa-retweet"></i>12</div>
                                    <div style={{maxWidth:"135.41px",minWidth:"125.41px",float:"left"}} className="like">    <i style={{paddingRight :"3px" }} className="far fa-heart"></i>23</div>
                                    <div style={{float: "left"}} className="share"><i className="fas fa-external-link-alt"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Tweet