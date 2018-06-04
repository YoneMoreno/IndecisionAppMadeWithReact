import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

const template =
    <div>
        <h1>Title</h1>
        <p>Page content!!</p>
    </div>;


ReactDOM.render(<Layout><p>This is inline and is the child</p></Layout>, document.getElementById('app'));