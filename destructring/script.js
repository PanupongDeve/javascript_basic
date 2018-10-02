
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const object = {
    firstName: 'John',
    lastName: 'Smith'
};

const { firstName, lastName } = object;

console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = object;

console.log(a);
console.log(b);

const calcAgeRetriment = (year) => {
    const age = new Date().getFullYear() - year;
    return[age, 65-age]; 
}

const [ageUser, retriment] = calcAgeRetriment(1995);

console.log(ageUser);
console.log(retriment);