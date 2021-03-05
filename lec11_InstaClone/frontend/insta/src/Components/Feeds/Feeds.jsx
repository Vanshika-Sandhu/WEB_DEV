import React, { Component } from 'react';
import axios from "axios";
import Post from '../Post/Post';

class Feeds extends Component {
    state = { 
        posts:[]
     }

    componentDidMount(){
        axios.get("/api/post").then( obj=>{
            let posts = obj.data.allPosts;
            this.setState({
                posts:posts
            })
        })
    }

    render() { 
        return (
            <div className="feeds">
                {
                this.state.posts.length ? 
                <div className="feed-body">
                    {
                        this.state.posts.map( post =>{
                            return <Post post={post} key={post["_id"]}/>
                        })
                    }
                </div>
                : <div className="feed-body">SORRY! No posts to show!</div>
             }
            </div>
        );
    }
}
 
export default Feeds;