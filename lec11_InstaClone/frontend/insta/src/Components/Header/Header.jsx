import React, { Component } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src="InstaCloneColoured.png" alt=""/>
                    </Link>
                </div>
                <div className="search-box">
                    <input type="text" name="" id="" placeholder="Search"/>
                </div>
                <div className="nav-links">
                    <div>

                        <Link to="/"><i className="fas fa-home"></i></Link>
                        <Link to="/profile"><i className="far fa-user-circle"></i></Link>
                        <Link to="/setting"><i className="fas fa-cog"></i></Link>
                        <Link to="/logout"><i className="fas fa-sign-out-alt"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;