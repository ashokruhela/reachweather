var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherAPI = require('openWeatherAPI');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    render: function () {
        var {isLoading, location, temp} = this.state;
        
        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching temperature</h3>
            } else if(location && temp) {
                return <Message location = {location} temp = {temp}/>;
            }
        };

        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    },
    handleSearch: function(location) {
        var self = this;
        this.setState({isLoading: true});

        openWeatherAPI.getTemp(location)
            .then(function(temp){
                self.setState({
                location: location,
                temp: temp,
                isLoading: false
        });
            },function(err){
                self.setState({
                    isLoading: false,
                    location:"",
                    temp:""
                });
                alert(err);
                
            });
        
    }
});

module.exports = Weather;