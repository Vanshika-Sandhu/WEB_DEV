import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="header">
                <div className="logo">
                    <img src="InstaCloneColoured.png" alt=""/>
                </div>
                <div className="search-box">
                    <input type="text" name="" id="" placeholder="Search"/>
                </div>
                <div className="nav-links">
                    <div>
                        <a href="/">Home</a>
                        <a href="/profile">Profile</a>
                        <a href="/setting">Setting</a>
                        <a href="">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;