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
                        <a href="/"><i className="fas fa-home"></i></a>
                        <a href="/profile"><i className="far fa-user-circle"></i></a>
                        <a href="/setting"><i className="fas fa-cog"></i></a>
                        <a href="/logout"><i className="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;