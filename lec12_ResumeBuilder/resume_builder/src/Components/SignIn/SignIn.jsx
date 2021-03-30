import React, { Component } from 'react';
import "./SignIn.css";

class SignIn extends Component {
    state = { 
        email:"",
        pw:"",
        // error:""
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
            <div className="signin-page">
                <div className="bg-image">
                    <img src="/Images/bgImage.jpg" alt=""/>
                </div>
                <div className="div-layer"></div>
                <div className="signin">
                    <div>
                        <h2>Email</h2>
                        <input type="text" id="email" value={this.state.email} onChange={ (e) =>{this.onChangeHandler(e)}} />
                    </div>
                    <div>
                        <h2>Password</h2>
                        <input type="password" id="pw" value={this.state.pw} onChange={ (e) =>{this.onChangeHandler(e)}} />
                    </div>
                    <button className ="btn" onClick={ () => {this.props.login(this.state.email, this.state.pw) }}>Sign In</button>

                    {/* <p className="error-message">{this.state.error}</p> */}
                </div>
            </div>
         );
    }
}
 
export default SignIn;