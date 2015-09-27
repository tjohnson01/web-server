var express = require('express');
var app = express();

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + new Date());
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Page!!');
});

app.use(express.static(__dirname + '/public'));


app.listen(3000, function(){
    console.log('Server starting');
});