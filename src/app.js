import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

const Layout = () => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    );
};


ReactDOM.render(<Layout/>, document.getElementById('app'));