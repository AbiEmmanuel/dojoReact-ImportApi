import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Api from './components/Api';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Acceuil</Link></li>
        <li><Link to="/Api">Api</Link></li>

      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Api" component={Api} />
      </Switch>    
    </div>
  );
}

export default App;

