console.log('app.js is running');

// var template = <p>This is JSX from App.js</p>;

var template = React.createElement(
    "p",
    null,
    "This is JSX from App.js"
);

ReactDOM.render(template, document.getElementById('app'));