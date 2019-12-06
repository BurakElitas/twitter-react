import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './Login';
import Anasayfa from './Anasayfa';
import Profile from './profilecomponents/Profile'
import Edit from './Edit'
import Comment from './Comment'
import Follow from './profilecomponents/Follow'

export default()=>{
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route component={Login} path="/login"/>
                    <Route component={Anasayfa} path="/anasayfa"/>
                    <Route component={Profile} path="/profile/:userId"/>
                    <Route component={Follow} path="/:userId/follows"/>
                    <Route component={Edit} path="/edit"/>
                    <Route component={Comment} path="/comment/:tweetId"/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}