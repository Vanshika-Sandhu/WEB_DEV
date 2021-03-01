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
        return ( <h1>Hello from Todos component!</h1> );
    }
}
 
export default Todos;