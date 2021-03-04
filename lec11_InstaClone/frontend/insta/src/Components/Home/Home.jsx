import React, { Component } from 'react';
import Feeds from '../Feeds/Feeds';
import HomeProfile from '../HomeProfile/HomeProfile';
import "./Home.css"

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className="home">
                <Feeds/>
                <HomeProfile/>
            </div>
         );
    }
}
 
export default Home;