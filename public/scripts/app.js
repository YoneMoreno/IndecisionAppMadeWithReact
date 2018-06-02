'use strict';

var app = {
    title: 'INDECISION best app',
    subtitle: 'Let you life being in computers hands',
    options: ['one', 2]
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Enoy',
    age: 17,
    location: 'GC'
};

function getLocation(userLocation) {
    if (userLocation) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            userLocation
        );
    }
}
ReactDOM.render(template, document.getElementById('app'));
