'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Enoy Moreno Jimenez'
    ),
    React.createElement(
        'p',
        null,
        'This is some text'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Yone Moreno Jimenez'
    ),
    React.createElement(
        'p',
        null,
        'Age: 21'
    ),
    React.createElement(
        'p',
        null,
        'Location: Las Palmas'
    )
);

var app = document.getElementById('app');

ReactDOM.render(templateTwo, app);
