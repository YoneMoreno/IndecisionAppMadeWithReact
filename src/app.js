import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Rufo';
    }

    getGreeting() {
        return `Hi! My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
    name = 'Ainara';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);