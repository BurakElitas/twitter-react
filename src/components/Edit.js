import React, { Component } from 'react'
import LeftList from './profilecomponents/LeftList';
import Searchbar from './profilecomponents/Searchbar'
import {Link} from 'react-router-dom';
import axios from 'axios';

export class Edit extends Component {

    constructor(){
        super();
        this.state={

        }
    }

    updateUser=(e)=>{
        e.preventDefault();
        let name=e.target.elements.name.value;
        let surname=e.target.elements.surname.value;
        let username=e.target.elements.username.value;
        let email=e.target.elements.email.value;
        let password=e.target.elements.password.value;
        console.log(username);
        console.log(name);
        console.log(surname);
        console.log(email);
        console.log(password);
       

    }

    getUser=()=>{
            const token=localStorage.getItem("token");
            const id=localStorage.getItem("id");
            const api='http://localhost:8080/user/'+id;
    
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': token
              }
    
            
            axios.get(api,{
                headers:headers
            }).then((response)=>{
                this.setState(()=>{
                   return { user:response.data.result}
                })
                
               
               
        }).catch((error)=>{
    
        })
        

    }

    componentDidMount(){
        this.getUser();
    }

    render() {
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-3">
                <LeftList/>
                </div>
                <div className="col-md-9 col-sm-9">
                   
                    <div className="row">
                        <div className="col-md-7 col-sm-7">
                        <div>
                <div className="headerDiv container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-4 col-sm-12">
                            <div className="row">
                                <div className="headerIconDiv col-md-1">
                                   <Link to="/anasayfa"><i className="profileTopArrow fas fa-arrow-left"></i></Link> 
                                </div>
                                <div className="col-md-11">
                                    <ul  className="headerTextUl">
                                        <li className="headerText">{localStorage.getItem("username")}</li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <br/>
                        <form onSubmit={this.updateUser}>

                        
                        <div className="form-group">
                          <label >İsim</label>
                          <input type="text" name="name" defaultValue={this.state.user!==undefined ? this.state.user.name: null} className="form-control" />
                        </div>

                        <div className="form-group">
                          <label >Soyisim</label>
                          <input type="text" name="surname"  defaultValue={this.state.user!==undefined ? this.state.user.surname: null} className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Kullanıcı Adı</label>
                          <input type="text" name="username"  defaultValue={this.state.user!==undefined ? this.state.user.username: null} className="form-control"/>
                          <small  style={{"display":"none"}} className="form-text text-muted">Bu kullanıcı adı kullanılmaktadır.Lütfen başka bir tane deneyin.</small>
                        </div>

                        <div className="form-group">
                          <label >Email</label>
                          <input type="email" name="email"  defaultValue={this.state.user!==undefined ? this.state.user.email: null} className="form-control" />
                          <small  style={{"display":"none"}} className="form-text text-muted">Bu email adresi kullanılmaktadır.Lütfen başka bir tane deneyin.</small>

                        </div>

                        <div className="form-group">
                        <label>Şifre</label>
                          <input type="password"  defaultValue={this.state.user!==undefined ? this.state.user.password: null} name="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                            
                        </div>
                        <div className="col-md-4">
                            <Searchbar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
}


export default Edit
