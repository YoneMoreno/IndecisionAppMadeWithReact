'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some text'
    )
);

var app = document.getElementById('app');

ReactDOM.render(template, app);
