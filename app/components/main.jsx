var React = require('react');
var Menu = require('Menu');

var Main = React.createClass({
    render: function (){
        return (
            <div className="row">
                <Menu/>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        {this.props.children}
                    </div>
                </div>
                
                
            </div>
        );
    }
});

module.exports = Main;