import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

const App = () => {
    return (
        <IndecisionApp/>
    );
};


ReactDOM.render(<App/>, document.getElementById('app'));