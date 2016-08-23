var React = require('react');
var {Link, IndexLink} = require('react-router');

var Menu = React.createClass({
    onSearch: (e) => {
        alert('not yet wired up');
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React weather app</li>
                        <li><IndexLink to="/" activeClassName="active" >Get Wheather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" >About</Link></li>
                        <li><Link to="/examples" activeClassName="active" >Get Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit="{this.onSearch}">
                        <ul className="menu">
                            <li>
                                <input type="text" placeholder="Enter your search"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            
        );
    }
});

module.exports = Menu;

