import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import NavBar from './NavBar';

class Routes extends Component {
  render(){
      return(
	        <Router>
					        <div>
									          <NavBar />
											            <hr />
														          <Route name="Home" exact path="/" component={Home}/>
																            <Route name="Menu" path="/menu" component={Menu}/>
																			          <Route name="About" path="/about" component={About} />
																					          </div>
																							        </Router>
																									    );
																										  }
																										  }

export default Routes;
