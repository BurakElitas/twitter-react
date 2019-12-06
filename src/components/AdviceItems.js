import React from 'react'

export default function AdviceItems(props) {

    const {users,addFollow}=props
    return (
       <React.Fragment>
       <div className="col-md-12 col-sm-12 mb-1">
            <div className="col-md-2 col-sm-2">
                <img className="profilefoto1 mr-1" alt="" src="https://placeimg.com/100/100/people"/>
            </div>
            <div className="col-md-9 col-sm-9">
            <a href={`/profile/${users.id}`} className="name"><span> @{users.username} </span></a>

            </div>
            <div className="col-md-1 col-sm-2">
            <button className="btntakip" onClick={()=>{addFollow(users.id)}}>Takip</button>
            </div>
        <hr/>
        </div>
      
       </React.Fragment>
    )
}
