import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/indecisionApp";

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Rufo';
        this.getGreeting = this.getGreeting.bind(this);
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

    getGreeting = () => {
        return `Hi hi!. My name is: ${this.name}`
    }
}

const newSyntax = new NewSyntax();
const getGreetingNew = newSyntax.getGreeting;
console.log(getGreetingNew());