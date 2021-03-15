import React, { Component } from 'react';
// import Login from './Components/Login/Login';
import Navbar from './Components/NavBar/Navbar';
import MySkin from './Components/Skins/MySkin';
import firebaseApp from "./firebase/firebaseConfig";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import About from "./Components/About/About";
import Templates from "./Components/Templates/Templates";
import  Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";

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


   login = (id, pw) =>{
     //log in to firebase !!!
     firebaseApp.auth().signInWithEmailAndPassword(id, pw).then(obj => {
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


  // componentDidMount(){
  //   //API call
  //   console.log(firebaseApp.collection);
  //   //******************** get all documents ***********************
  //   firebaseApp.firestore().collection("Resumes").get().then( allDocs =>{
  //     allDocs.forEach(doc =>{
  //       console.log(doc.id);
  //       console.log(doc.data());
  //     })
  //   });


  //   //******************* get a single document ********************
  //   // firebaseApp.firestore().collection("Resumes").doc("9fG82MmeQAFcDzqvBpRR").get().then(doc=>{
  //   //   console.log(doc.data());
  //   // });
  // }

  addData = () =>{
    // console.log("Inside add data");
    // firebaseApp.firestore().collection("Resumes").doc("9fG82MmeQAFcDzqvBpRR").update({
    //   skin : "2"
    // }).then( () =>{
    //   console.log("Skin set!");
    // }); 
  };

  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged((user)=>{
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
            <LandingPage></LandingPage>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          <Route path="/templates" exact>
            {isAuth ? <Templates></Templates> : <Redirect to="/login"></Redirect>}
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
    );
  }
}
 
export default App;