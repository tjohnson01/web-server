var express = require('express');
var middleware = require('./middleware');
var app = express();


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Page!!');
});

app.use(express.static(__dirname + '/public'));


app.listen(3000, function(){
    console.log('Server starting');
});