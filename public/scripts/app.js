'use strict';

var visible = false;
var toggleVisibility = function toggleVisibility(e) {
    e.preventDefault();
    visible = !visible;
    render();
    console.log('click');
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            'Toggle visibility'
        ),
        visible && React.createElement(
            'p',
            null,
            'Are you sure you want to see me?'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
render();
