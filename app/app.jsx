
var React  = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var Examples = require('Examples');
var About = require('About');

//loading foundation
require('style!css!foundation-sites/dist/foundation.min.css');
//$(document).foundation();

ReactDOM.render(
   <Router history= {hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component= {About}></Route>
            <Route path="examples" component = {Examples}/>
        </Route>
   </Router>
, document.getElementById('app'));

//now the latest es6 feature are great. Use import instead of require.
