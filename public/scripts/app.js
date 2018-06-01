'use strict';

var appObject = {
    title: 'INDECISION best app',
    subtitle: 'WIth react',
    itemOne: 'live-server',
    itemTwo: 'babel'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            appObject.itemOne
        ),
        React.createElement(
            'li',
            null,
            appObject.itemTwo
        )
    )
);

var user = {
    name: 'Andrew',
    age: 99,
    location: 'Neverlands'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var app = document.getElementById('app');

ReactDOM.render(template, app);
