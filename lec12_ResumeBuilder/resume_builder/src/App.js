import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Navbar from './Components/NavBar/Navbar';
import MySkin from './Components/Skins/MySkin';
import firebaseApp from "./firebase/firebaseConfig";

class App extends Component {
  state = { 
    isAuth:false,
    user:null
   }

  componentDidMount(){
    //API call
    console.log(firebaseApp.collection);
    //******************** get all documents ***********************
    firebaseApp.firestore().collection("Resumes").get().then( allDocs =>{
      allDocs.forEach(doc =>{
        console.log(doc.id);
        console.log(doc.data());
      })
    });


    //******************* get a single document ********************
    // firebaseApp.firestore().collection("Resumes").doc("9fG82MmeQAFcDzqvBpRR").get().then(doc=>{
    //   console.log(doc.data());
    // });


  }

  addData = () =>{
    // console.log("Inside add data");
    // firebaseApp.firestore().collection("Resumes").doc("9fG82MmeQAFcDzqvBpRR").update({
    //   skin : "2"
    // }).then( () =>{
    //   console.log("Skin set!");
    // }); 
  };

  render() { 
    let {isAuth} = this.state;
    return (
      // <div className="App">
      //   <Navbar isAuth={isAuth} ></Navbar>
      //   <Login></Login>
      // </div>
      <MySkin></MySkin>
    );
  }
}
 
export default App;