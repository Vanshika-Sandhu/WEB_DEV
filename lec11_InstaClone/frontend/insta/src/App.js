import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Setting from './Components/Setting/Setting';
import uid from "./uid";
import axios from "axios";
import Notifications from './Components/Notifications/Notifications';
import UserProfile from './Components/UserProfile/UserProfile';
import Login from './Components/Login/Login';

class App extends Component {
  state = { 
    user:null,
    isAuth:false
   };

  componentDidMount(){
    axios.get("/auth/checkAuth").then(obj=>{
      if(obj.data.isAuth){
        this.setState({
          user:obj.data.user,
          isAuth:true
          
        })
      }
    });
  }

  login = () =>{
    // setState : true
    //proxy defined

    //local authentication
  //   axios.get(`/api/user/${uid}`).then( obj=>{
  //     //console.log(obj);
  //     let user = obj.data.user;
  //     this.setState({
  //         user:user,
  //         isAuth:true
  //     })
  // });
  //can't uuse axios here
    window.location="/auth/google";
  };

  logout = () =>{
    // setState : false
    this.setState({
      user:null,
      isAuth: false
    });
  };


  updateUser = (updatedUser) =>{
    this.setState({
      user:updatedUser
    });
  };

  render() { 
    let user = this.state.user;
    return ( 
      <Router>
        <div className ="app">
          <Header isAuth = {this.state.isAuth} logout = {this.logout}/>
            <Switch>
              <Route path="/" exact>
                {this.state.isAuth ? <Home user={user} /> : <Login login = {this.login}/> }
              </Route>
              <Route path="/profile" exact>
                {this.state.isAuth ? <Profile user={user} /> : <Login login = {this.login}/> }
              </Route>
              <Route path="/setting" exact>
                {this.state.isAuth ? <Setting user={user} updateUser = {this.updateUser}/> : <Login login = {this.login}/> }
              </Route>
              <Route path="/notifications" exact>
                {this.state.isAuth ? <Notifications  user={user}/> : <Login login = {this.login}/> }
              </Route>
              <Route path="/userProfile" exact>
                {this.state.isAuth ? <UserProfile user={user} /> : <Login login = {this.login}/> }
              </Route>
              <Route path="*">
                <Redirect to="/"></Redirect>
              </Route>
            </Switch>
        </div> 
       </Router>
      );
  }
}
 
export default App;
