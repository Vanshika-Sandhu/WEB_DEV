import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Setting from './Components/Setting/Setting';
import axios from "axios";
import Notifications from './Components/Notifications/Notifications';
import UserProfile from './Components/UserProfile/UserProfile';
import Login from './Components/Login/Login';

class App extends Component {
  state = { 
    user:null,
    isAuth:false,
    suggestions:[],
    clickedUser:null
   };

  componentDidMount(){
    axios.get("/auth/checkAuth").then(obj=>{
      // console.log(obj);
      // let uid = obj.data.user["_id"];
      // console.log(uid);
      if(obj.data.isAuth){
        let uid = obj.data.user["_id"];
        axios.get(`/api/request/suggestions/${uid}`)
        .then( obj =>{
              let suggestions = obj.data.suggestions;
              // console.log(suggestions);
              return suggestions;
            })
            .then(suggestions=>{
              this.setState({
                user:obj.data.user,
                isAuth:true ,
                suggestions:suggestions
              });
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
      isAuth: false,
      suggestions:[]
    });
  };


  updateUser = (updatedUser) =>{
    this.setState({
      user:updatedUser
    });
  };

  UserClickedHandler=(clickedUser)=>{
    console.log("Inside user clicked handler");
    console.log(clickedUser);
    this.setState({
      clickedUser
    })
    // let clickedUser = this.state.clickedUser;
    // let followId = suggestion["_id"];
    // clickedUser = suggestion;
    // // console.log(clickedUser);
    // this.setState({
    //     clickedUser
    // });
    // console.log(clickedUser);
}



  render() { 
    let user = this.state.user;
    let suggestions = this.state.suggestions;
    let clickedUser = this.state.clickedUser;
    return ( 
      <Router>
        <div className ="app">
          <Header isAuth = {this.state.isAuth} logout = {this.logout}/>
            <Switch>
              <Route path="/" exact>
                {this.state.isAuth ? <Home user={user} suggestions={suggestions} UserClickedHandler = {this.UserClickedHandler}/> : <Login login = {this.login}/> }
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
                {this.state.isAuth ? <UserProfile user={user} profileUser={clickedUser}/> : <Login login = {this.login}/> }
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
