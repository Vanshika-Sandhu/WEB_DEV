import React, { Component } from 'react';
import Feeds from '../Feeds/Feeds';
import HomeProfile from '../HomeProfile/HomeProfile';
import "./Home.css"
import axios from "axios";
import uid from "../../uid";

class Home extends Component {
    state = { 
        user : null
     }

    componentDidMount(){
        //inside component did mount !
        //proxy defined
        axios.get(`/api/user/${uid}`).then( obj=>{
            //console.log(obj);
            let user = obj.data.user;
            this.setState({
                user:user
            })
        });
    }

    render() { 
        return (
            <div className="home">
                { this.state.user ? 
                (<div className="home-body">
                    <Feeds user = {this.state.user}/>
                    <HomeProfile user = {this.state.user}/> 
                </div>
                )
                : (<h1>Loading Data</h1> )
                }  
            </div>
         );
    }
}
 
export default Home;