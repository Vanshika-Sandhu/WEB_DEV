import React, { Component } from 'react';
import "./SignIn.css";

class SignIn extends Component {
    state = { 
        email:"",
        pw:""
     };

     onChangeHandler = (e) =>{
         let id = e.target.id;
         let value = e.target.value;
         this.setState({
             [id]:value
         })
     }

    render() { 
        return ( 
            <div className="signin">
                <div>
                    <h2>Email</h2>
                    <input type="text" id="email" value={this.state.email} onChange={ (e) =>{this.onChangeHandler(e)}} />
                </div>
                <div>
                    <h2>Password</h2>
                    <input type="text" id="pw" value={this.state.pw} onChange={ (e) =>{this.onChangeHandler(e)}} />
                </div>
                <button className ="btn" onClick={ () => {this.props.login(this.state.email, this.state.pw) }}>Sign In</button>
            </div>
         );
    }
}
 
export default SignIn;