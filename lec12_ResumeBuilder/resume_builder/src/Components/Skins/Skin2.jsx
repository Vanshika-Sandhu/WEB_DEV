import React, { Component } from 'react';
import "./Skin2.css";

class Skin2 extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="skin2">
            <div className="left-strap">
                <div className="bg-design">
                <div className="r1">
                    <div className="rect1"></div>
                    <div className="tri1"></div>
                    <div className="tri"></div>
                </div>
                <div className="r2">
                    <div className="rect2"></div>
                    <div className="tri2"></div>
                    <div className="tri"></div>
                </div>
                    <div className="r3"></div>
                </div>
                <div className="left-strap-content">
                    <div className="contact">
                        <div className="contact-header header">CONTACT</div>
                        <div className="contact-body body">
                        <p>
                            <i className="fas fa-phone-square-alt itag"></i>
                            <div>123456789</div>
                        </p>
                        <p>
                            <i className="fas fa-envelope itag"></i>
                            <div>abcdefg@gmail.com</div>
                        </p>
                        <p>
                            <i className="fab fa-linkedin itag"></i>
                            <div><a href="">linkedInAccount</a></div>
                        </p>
                        <p>
                            <i className="fab fa-github itag"></i>
                            <div><a href="">githubAccount</a></div>
                        </p>
                        <p>
                            <i className="fas fa-home itag"></i>
                            <div>house no 1 2 3 4 5 6 uhjb delhi india 123445</div>
                        </p>

                        </div>
                    </div>
                    <div className="summary">

                    </div>
                    <div className="interest">

                    </div>
                </div>

            </div>
            <div className="right-content">
                <div className="header">

                </div>
                <div className="body">

                </div>
            </div>
        </div> 
        );
    }
}
 
export default Skin2;