import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Setting from './Components/Setting/Setting';
import uid from "./uid";
import axios from "axios";

class App extends Component {
  state = { 
    user:null
   };

  componentDidMount(){
     //inside component did mount !
        //proxy defined
        axios.get(`/api/user/${uid}`).then( obj=>{
          //console.log(obj);
          let user = obj.data.user;
          this.setState({
              user:user
          })
      });
  }

  updateUser = (updatedUser) =>{
    this.setState({
      user:updatedUser
    });
  }

  render() { 
    let user = this.state.user;
    return ( 
      <Router>
        <div className ="app">
          <Header/>
          {
            user ?  
            (
            <Switch>
              <Route path="/" exact>
                <Home user={user} />
              </Route>
              <Route path="/profile" exact>
                <Profile user={user} />
              </Route>
              <Route path="/setting" exact>
                <Setting user={user} updateUser = {this.updateUser}/>
              </Route>
              <Route path="*">
                <Redirect to="/"></Redirect>
              </Route>
            </Switch>
            )
            :
            (<h1>Loading Data!</h1>)
          }
        </div> 
       </Router>
      );
  }
}
 
export default App;
