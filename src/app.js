import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.content}
            <p>Footer</p>
        </div>
    );
};

const template =
    <div>
        <h1>Title</h1>
        <p>Page content!!</p>
    </div>;


ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));