import React, { Component } from 'react';
import firebaseApp from '../../firebase/firebaseConfig';

class SignUp extends Component {
    state = { 
        fname:"",
        lname:"",
        email:"",
        pw:"",
        error:""
     };

     signUpHandler = () =>{
        //  this.props.signup
        let email = this.state.email;
        let pw = this.state.pw
        firebaseApp.auth().createUserWithEmailAndPassword(email, pw)
        .then(userInfo => {
            console.log("Inside then");
            // console.log(userInfo);
            let fname = this.state.fname;
            let lname = this.state.lname;
            let uid = userInfo.user.uid;
            let userCreatedPromise = firebaseApp.firestore().collection("Users").doc(uid).set({
                "First Name" : fname,
                "Last Name" : lname,
                "Email" : email,
                "Password" : pw,
                "uid" : uid
            })
            return userCreatedPromise;
        })
        .then(obj=>{
            console.log("User created!");
            console.log(obj);
        })
        .catch(error=>{
            console.log("Inside catch");
            console.log(error);
            this.setState({
                error:error.message
            })
        })

     };

     onChangeHandler = (e) =>{
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id]:value
        })
    };

    render() { 
        return ( 
            <div className="signup">
                <div>
                    <h2>First Name</h2>
                    <input type="text" id="fname" value={this.state.fname} onChange={ (e) =>{this.onChangeHandler(e)}} />
                </div>
                <div>
                    <h2>Last Name</h2>
                    <input type="text" id="lname" value={this.state.lname} onChange={ (e) =>{this.onChangeHandler(e)}} />
                </div>
                <div>
                    <h2>Email</h2>
                    <input type="text" id="email" value={this.state.email} onChange={ (e) =>{this.onChangeHandler(e)}} />
                </div>
                <div>
                    <h2>Password</h2>
                    <input type="text" id="pw" value={this.state.pw} onChange={ (e) =>{this.onChangeHandler(e)}} />
                </div>

                <button className ="btn" onClick={this.signUpHandler}>Sign Up</button>

                <p>{this.state.error}</p>
            </div>
            );
    }
}
 
export default SignUp;