import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Rufo';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'Ainara';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);