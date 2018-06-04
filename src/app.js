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


ReactDOM.render(
    (<Layout>
        <h1>Title</h1>
        <p>Page content!!</p>
    </Layout>),
    document.getElementById('app'));