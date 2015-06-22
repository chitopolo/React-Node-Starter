var React = require('react');
var Router = require('react-router');
var xhr = require('superagent');


var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Welcome</h1>
			</div>
		);
	}

});


React.render(<Home />, document.body)