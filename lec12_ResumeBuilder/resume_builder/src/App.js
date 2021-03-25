import React, { Component } from 'react';
import Navbar from './Components/NavBar/Navbar';
import MySkin from './Components/Skins/MySkin';
import firebaseApp from "./firebase/firebaseConfig";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Templates from "./Components/Templates/Templates";
import  Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Skin2 from './Components/Skins/Skin2';
// import Skin2 from './Components/Skins/Skin2';

class App extends Component {
  state = { 
    isAuth:false,
    user:null
   };

   logout = () =>{
     firebaseApp.auth().signOut().then( obj => {
       console.log("Signed Out!!!!");
       this.setState({
         isAuth:false,
         user:null
       })
     })
   };


   login = (email, pw) =>{
     //log in to firebase !!!
     firebaseApp.auth().signInWithEmailAndPassword(email, pw).then(obj => {
      console.log("Logged In"); 
      console.log(obj);

     })
   };

   signup = (id, pw)=>{
     // sign up to firebase !!
     firebaseApp.auth().createUserWithEmailAndPassword(id, pw).then(obj =>{
      console.log("user created"); 
      console.log(obj);
      // add user to Users collection
      let uid = obj.user.uid;
      let email = obj.user.email;
      let name ="test";

   let userSetPromise = firebaseApp.firestore().collection("Users").doc(uid).set({
        Name: name,
        Email : email
      })
      return userSetPromise;
     })
     .then(obj => {
       console.log("inside user set promise");
       console.log(obj);
     })
   }

  componentDidMount(){
    // event attached to auth state changed
    firebaseApp.auth().onAuthStateChanged(async (user)=>{
      console.log("Inside auth state changed!!!");
          this.setState({
            isAuth: user ? true : false,
            user: user ? user.uid : null
          })
    })
  };

  render() { 
    let {isAuth} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar isAuth={isAuth} logout={this.logout}  ></Navbar>
        <Switch>
          <Route path="/" exact>
            <LandingPage isAuth={isAuth} ></LandingPage>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          {/* <Route path="/templates" exact component={ isAuth ? Templates : SignIn}> */}
            {/* {isAuth ? <Templates></Templates> : <Redirect to="/login"></Redirect>} */}
          {/* </Route> */}
          <Route path="/templates" exact render={ (props) => this.state.isAuth ? <Templates  {...props} uid={this.state.user}></Templates> : <Redirect to="/signin"></Redirect>} ></Route>
          <Route path="/contact" exact>
            <Contact></Contact>
          </Route>
          <Route path="/profile" exact>
            {isAuth ? <Profile></Profile> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/signup">
            {isAuth ? <Redirect to="/"></Redirect> : <SignUp signup = {this.signup} ></SignUp>}
          </Route>
          <Route part="/signin">
          {isAuth ? <Redirect to="/"></Redirect> : <SignIn login={this.login}></SignIn>}
          </Route>
        </Switch>
      </div>
      </Router>

      // <MySkin/>

      // <Skin2></Skin2>
      
    );
  }
}
 
export default App;