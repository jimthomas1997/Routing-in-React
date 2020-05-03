import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Main from './Main';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
     <div>
       <Nav />
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/main" component={Main} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
