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
       
       <aside class="fixed"> 
       <div class="menu-box ">
      
               <ul>
									<li><a href="#intro">Introduction</a></li>
									<li><a href="#start">Contributors</a></li>
									<li><a href="#usecase">Use Case</a></li>
									<li><a href="#tech">Technology Stack</a></li>
									<li><a href="#setup">Setup & Installation</a></li>
									<li><a href="#blockchain">Blockchain</a></li>
									<li><a href="#hardware">Hardware</a></li>
									<li><a href="#api">APIs</a></li>
								</ul>
       </div>
      </aside>
      
      <div class="content">
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/main" component={Main} />
      </Switch>
      </div>
     </div>
      

      
    </Router>
    
  );
}

export default App;
