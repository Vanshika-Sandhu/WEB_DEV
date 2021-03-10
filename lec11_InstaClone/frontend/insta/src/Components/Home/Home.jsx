import React, { Component } from 'react';
import Feeds from '../Feeds/Feeds';
import HomeProfile from '../HomeProfile/HomeProfile';
import "./Home.css"

class Home extends Component {
    state = { 
        user : null,
        suggestions:[]
     }

    componentDidMount(){
        this.setState({
            user: this.props.user,
            suggestions:this.props.suggestions
        });
    }

    render() { 
        return (
            <div className="home">
                { this.state.user ? 
                (<div className="home-body">
                    <Feeds user = {this.state.user}  UserClickedHandler = {this.props.UserClickedHandler} />
                    <HomeProfile user = {this.state.user} suggestions={this.state.suggestions} UserClickedHandler = {this.props.UserClickedHandler} /> 
                </div>
                )
                : (<h1>Loading Data</h1> )
                }  
            </div>
         );
    }
}
 
export default Home;