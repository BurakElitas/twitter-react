import React, { Component } from 'react'
import '../css/login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


class Login extends Component {
   
   
    constructor(){
        super();
       
        this.state={
            
        }
        this.Login=this.Login.bind(this);
    }

    Login(e){
        e.preventDefault();
        console.log("girdim.")

        const username=e.target.elements.username.value
        const password=e.target.elements.password.value
        
        
        axios.post('http://localhost:8080/login',{
            username:username,
            password:password
        }).then((response)=> {
            
           this.setState((prevState)=>{
               return {
                   redirect:true
               }
           })

            const id=response.data.substring(0,response.data.indexOf(" "));
            const token=response.data.substring(response.data.indexOf(" ")+1);
            console.log(id);
            console.log(token);
           
            localStorage.setItem("id",parseInt(id));
            localStorage.setItem("token",token);
            localStorage.setItem("username",username);

            return <Redirect to="/anasayfa"/>

             

        }).catch(function (error){
            alert("yanlış kullanıcı adı veya şifre");
            
        });

        
    }

    componentDidMount=()=>{
        if(this.state.redirect!==false){
            return <Redirect to="/anasayfa"/>
        }
    }

  
    render() {
        const token=localStorage.getItem("token");
     
        
        if(token!=null){
            return <Redirect to="/anasayfa"/>;
        }  
        if(this.state.redirect===true)
        {
             return <Redirect to="/anasayfa"/>;
        } 
    
        return (
            <div className="main">
            <form  onSubmit={this.Login}>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-12 mb-2"><h4 className="baslik">Twitter'a giriş yap</h4></div>
                        <div className="col-md-12 mb-3"><input type="text" name="username"  placeholder="Kullanıcı Adı"/></div>
                        <div className="col-md-12 mb-3"><input type="password" name="password" placeholder="Şifre"/></div>
                        <div className="col-md-8 mt-3"><button className="girisbuton" type="submit">Giriş yap</button><input className="ml-3 check" type="checkbox" defaultChecked /> Beni hatırla <a href="/#" className="link">Şifreni mi unuttun?</a></div>
                        <div className="col-md-12 mt-2">Twitter'da yeni misin?<a href="/#"> Hemen kaydol</a></div>
                       
                    </div>
                </div>
                </form>
            </div>
        )
    }
}


export default Login
