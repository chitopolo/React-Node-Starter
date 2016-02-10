var React = require('react');
var ReactDOM = require('react-dom')

var Router = require('react-router');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Welcome</h1>
			</div>
		);
	}

});


ReactDOM.render(<Home />, document.body)