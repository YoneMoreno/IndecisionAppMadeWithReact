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

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` The major which is studying is: ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Tori Guillen', 50, 'Art');
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());
console.log(me.getGreeting());
const other = new Traveler('Mahy', 32);
console.log(other);
console.log(other.getGreeting());
const fanaticTraveler = new Traveler('Ana', 44, 'Boston');
console.log(fanaticTraveler);
console.log(fanaticTraveler.getGreeting());
