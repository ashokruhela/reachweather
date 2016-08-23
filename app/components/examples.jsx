var React = require('react');

var {Link} = require('react-router');

var Examples = (props) => {
    return (
            <div>
                <h2 className="text-center">Examples</h2>
                <h5>Here are a few examples to try out</h5>
                <ol>
                    <li><Link to='/?location=Baraut, IN'/>Baraut India</li>
                    <li><Link to="/?location=New Delhi, IN"/>New Delhi India</li>
                </ol>
            </div>
        ); 
};

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h2>Examples component</h2>
//         );
//     }
// });

module.exports = Examples;