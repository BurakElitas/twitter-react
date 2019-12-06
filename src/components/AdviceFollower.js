import React, { Component } from 'react'
import '../css/advice.css'
import AdviceItems from './AdviceItems'
import axios from 'axios';

export default class AdviceFollower extends Component {

    constructor(){
        super();
        this.state={

        }
    }

    AdviceFollowers=()=>{
        const token=localStorage.getItem("token");
        const id=localStorage.getItem("id");
        const api='http://localhost:8080/user/advicefollow/'+id;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

        axios.get(api,{
            headers:headers
        }).then((response)=>{
        this.setState((prevState)=>{
            return {
                users:response.data
            }
        });

        }).catch((error)=>{
            
        });
    }

    componentDidMount(){
        this.AdviceFollowers();
    }

    Follow=(targetId)=>{
        
        const token=localStorage.getItem("token");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
        }
        
        const id=localStorage.getItem("id");
       
       const api= `http://localhost:8080/user/${id}/${targetId}`;
     
        axios.get(api,{
            headers:headers
        }).then((response)=> {
            this.AdviceFollowers();
          
        }).catch((error)=>{

        })



    }

    render() {
        return (
            <div className="cont">
                <div className="row">
                     <div className="col-md-12 col-sm-12"><h5>Kimi Takip Etmeli</h5></div>
                     
                     <hr/>
                    
                     {
                        this.state.users!==undefined ?
                        this.state.users.map(item=>{
                            return(
                                <AdviceItems users={item} key={item.id} addFollow={this.Follow} />
                            )
                            
                        }):null
                    }

                 </div>
           </div>
        )
    }
}
