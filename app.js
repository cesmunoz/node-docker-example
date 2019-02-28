var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.status(200).send('Hello World');
});

app.listen(8000, function(){
    console.log('Running app on port 8000');
});