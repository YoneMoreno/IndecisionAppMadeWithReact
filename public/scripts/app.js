'use strict';

var app = {
    title: 'INDECISION best app',
    subtitle: 'Let you life being in computers hands',
    options: ['one', 2]
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    console.log('form submitted', option);
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
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
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
