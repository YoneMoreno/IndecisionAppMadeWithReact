var nameVar = 'Tori';
var nameVar = 'Mahy';
console.log('nameVar', nameVar);

let nameLet = 'Pepe';
nameLet = 'Queen';
console.log('nameLet', nameLet);

const nameConst = 'Grace';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Yone Moreno';
let firstName, lastName;

if (fullName) {
    [firstName, lastName] = fullName.split(' ');
}

console.log('firstName', firstName);