import React, { Component } from 'react';
import Navbar from './Components/NavBar/Navbar';
import firebaseApp from "./firebase/firebaseConfig";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Templates from "./Components/Templates/Templates";
import  Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Skin1 from './Components/Skins/Skin1';
import Education from './Components/Education/Education';
import Finalize from './Components/Finalize/Finalize';
import Skin3 from './Components/Skins/Skin3';
import Skin4 from './Components/Skins/Skin4';
import Skin2 from './Components/Skins/Skin2';
import Skin5 from './Components/Skins/Skin5'

class App extends Component {
  state = { 
    isAuth:false,
    user:null,
    selectedResumeId:null,
    selectedPage:null
   };

   setResumeId = (id) =>{
      this.setState({
        selectedResumeId:id
      });
   };

   setPage =(page) =>{
     this.setState({
       selectedPage:page
     });
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
     firebaseApp.auth().signInWithEmailAndPassword(email, pw)
     .then(obj => {
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
      let selectedResumeId = null;
      console.log(user);
      // check if logged in ??
      if (user) {
        // get selected resumeId
        let doc = await firebaseApp
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .get();
        let resumes = doc.data()["Resumes"];
        for (let i = 0; i < resumes.length; i++) {
          if (resumes[i].isSelected) {
            selectedResumeId = resumes[i].resumeId;
            break;
          }
        };  
     }
          this.setState({
            isAuth: user ? true : false,
            user: user ? user.uid : null,
            selectedResumeId:selectedResumeId
          });
    });
  };

  render() { 
    let {isAuth} = this.state;
    return (
      // <Router>
      // <div className="App">
      //   <Navbar isAuth={isAuth} logout={this.logout} selectedPage={this.state.selectedPage} setPage={this.setPage} ></Navbar>
      //   <Switch>
      //     <Route path="/" exact>
      //       <LandingPage isAuth={isAuth} ></LandingPage>
      //     </Route>
      //     <Route path="/about" exact>
      //       <About></About>
      //     </Route>
      //     <Route path="/templates" exact render={ (props) => <Templates  {...props} uid={this.state.user} isAuth={this.state.isAuth} setResumeId = {this.setResumeId} resumeId={this.state.selectedResumeId}  ></Templates>} ></Route>
      //     <Route path="/contact" exact render={ (props) =>this.state.isAuth ? <Contact {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} ></Contact> : <Redirect to="/signin"></Redirect> }></Route>
      //     <Route path="/education" exact render={ (props) =>this.state.isAuth ? <Education {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} ></Education> : <Redirect to="/signin"></Redirect> }></Route>
      //     <Route path="/finalize" exact render={ (props) =>this.state.isAuth ? <Finalize {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} ></Finalize> : <Redirect to="/signin"></Redirect> }></Route>
      //     <Route path="/profile" exact render={ (props) =>this.state.isAuth ? <Profile {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId = {this.setResumeId} ></Profile> : <Redirect to="/signin"></Redirect> }></Route>
      //     <Route path="/signup">
      //       {isAuth ? <Redirect to="/"></Redirect> : <SignUp signup = {this.signup} ></SignUp>}
      //     </Route>
      //     <Route part="/signin">
      //     {isAuth ? <Redirect to="/"></Redirect> : <SignIn login={this.login}></SignIn>}
      //     </Route>
      //   </Switch>
      // </div>
      // </Router>

      
      // <Skin1></Skin1>
      // <Skin2/>
      // <Skin3></Skin3>
      // <Skin4></Skin4>
      <Skin5></Skin5>
      
    );
  }
}
 
export default App;