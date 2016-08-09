var React = require('react');
//afec9e254ae49dea67347f0319c65838
var WeatherForm = React.createClass({
    render: function() {
        return (
            <form onSubmit = {this.onformSubmit}>
                <input type="text" ref = "location"/>
                <button>Get Weather</button>
            </form>

        );
    },
    onformSubmit: function(e) {
        e.preventDefault();
        var locationRef = this.refs.location;

        if(locationRef.value.length > 0) {
            this.props.onSearch(locationRef.value);
            locationRef.value = "";
        }
    }
});

module.exports = WeatherForm;