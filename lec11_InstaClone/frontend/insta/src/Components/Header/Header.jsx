import React, { Component } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
    // isAuth => false
    // isAuth => true
    state = {  };
    render() { 
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src="InstaCloneColoured.png" alt=""/>
                    </Link>
                </div>

                {this.props.isAuth ? 
                <React.Fragment>
                <div className="search-box">
                    <input type="text" name="" id="" placeholder="Search"/>
                </div>
                <div className="nav-links">
                    <div>
                        <Link to="/"><i className="fas fa-home"></i></Link>
                        <Link to="/profile"><i className="far fa-user-circle"></i></Link>
                        <Link to="/notifications"><i className="fas fa-exclamation-circle"></i></Link>
                        <Link to="/setting"><i className="fas fa-cog"></i></Link>
                        <Link to="/" onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i></Link>
                    </div>
                </div>
                </React.Fragment> 
                :  <div className="nav-links" ></div>
                }
            </div>
        );
    }
}
 
export default Header;