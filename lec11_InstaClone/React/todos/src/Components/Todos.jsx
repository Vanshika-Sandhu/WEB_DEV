// imrc => import React, { Component } from 'react';
import React, { Component } from 'react';

// cc => class based component
class Todos extends Component {
    
    //constructor missing 
    //super missing 
    // this can be omitted as the code understands it has to call constructor and super
    // this is possible only because of JSX code

    state = {  }

    render() { 
        let todos = this.props.todos;
        return ( 
        <div className="todos container">
            { todos.map( todoObj =>{
                return <p key={todoObj.id}>{todoObj.todo}</p>
            })}
        </div> );
    }
}
 
export default Todos;