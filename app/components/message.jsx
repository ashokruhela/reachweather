var React = require('react');

// var Message = (temp, location) => {
//     return (
//             <div>
//                 <h2>It's {temp} in {location}</h2>
//             </div>

//         );
// };
var Message = React.createClass({
    render: function() {
        return (
            <div>
                <h2>It's {this.props.temp} in {this.props.location}</h2>
            </div>

        );
    }
});

module.exports = Message;