var React = require('react');
var Menu = require('Menu');

var Main = React.createClass({
    render: function (){
        return (
            <div>
                <Menu></Menu>
                <h1>Main component</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;