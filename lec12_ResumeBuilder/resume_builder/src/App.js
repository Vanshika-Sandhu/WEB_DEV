import React, { Component } from 'react';
import firebaceApp from "./firebase/firebaseConfig";

class App extends Component {
  state = {  }

  componentDidMount(){
    //API call
    //get all documents
    //firebaseApp.db.collection("Resumes").get().then
  }

  render() { 
    return (<h1>Firebase Demo</h1>  );
  }
}
 
export default App;