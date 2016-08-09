var express = require('express');
var path = require('path');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    // console.log("header ", req.headers['x-forwarded-proto']);
    if(req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        // console.log("url :", req.url);
        // console.log('http://' + req.hostname + ":" + PORT);
        res.redirect('http://' + req.hostname + ":" + req.url);
    }
});

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function(){
    console.log('welcome to express app on port ' + PORT);
});