import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Button } from 'react-bootstrap'


var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Welcome</h1>
              {this.props.children}
			</div>
		);
	}

});



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
  </Router>
), document.getElementById('main'))