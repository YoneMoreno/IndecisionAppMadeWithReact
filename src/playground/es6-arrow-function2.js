const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(100, 1, 7789));

const user = {
    name: 'Tori',
    cities: ['La Aldea', 'Las Palmas'],

    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 4, 10, 100],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());