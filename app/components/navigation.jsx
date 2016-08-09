var React = require('react');
var {Link, IndexLink} = require('react-router');

var Menu = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Hello nav</h2>
                <ul>
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Get Wheather</IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>About</Link></li>
                    <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Get Examples</Link></li>
                </ul>
                
                
                
            </div>
            
        );
    }
});

module.exports = Menu;