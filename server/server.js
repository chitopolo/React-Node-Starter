var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', function(req, res){
	res.send('hola mundo');
})

app.listen( port, function(){
	console.log('conectado en ', port);
});