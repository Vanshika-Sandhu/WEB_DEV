import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Setting from './Components/Setting/Setting';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className ="app">
          <Header/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/profile" exact>
              <Profile/>
            </Route>
            <Route path="/setting" exact>
              <Setting/>
            </Route>
            <Route path="*">
              <Home/>
            </Route>
          </Switch>
        </div> 
       </Router>
      );
  }
}
 
export default App;
