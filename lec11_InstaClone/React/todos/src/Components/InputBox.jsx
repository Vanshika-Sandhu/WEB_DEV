import React, { Component } from 'react';

class InputBox extends Component {
    state = {  };
    render() { 
        return (<React.Fragment>
            <div className="input-group mb-3 container">
            <input type="text" className="form-control" placeholder="Enter todo"></input>
            <button className="btn btn-outline-secondary">ADD</button>
            </div>
        </React.Fragment>);
    }
}
 

export default InputBox;