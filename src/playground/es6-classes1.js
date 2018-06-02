class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hola ' + this.name + '!';
        return `Hello!!! I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person('Tori Guillen', 50);
const me2 = new Person();
console.log(me, me2);
console.log(me2.getDescription());
console.log(me.getDescription());