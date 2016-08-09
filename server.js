var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(4000, function(){
    console.log('welcome to express app on port 4000');
});