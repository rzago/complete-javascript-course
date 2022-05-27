/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

40+8+23-10;
//console.log(40+8+23-10);

// comment
*/

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;

// var job = 'programmer';
// job = 'teacher'

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
const firstName = 'Rodrigo';
const lastName = 'Zago';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4; 
x++; // +1
x--; // -1
console.log(x);

console.log(ageJonas > ageSarah);

console.log(`Teste
multline
1
2
3`); */

const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`You can start driving 🚗`)
} else {
    const yearsLeft = 18 - age;
    console.log (`You are too young. Wait another ${yearsLeft} year(s). :)`)
}

const birthYear = 2001;

let century;
if(birthYear <= 2000)  {
    century = 20;
} else {
    century = 21;
}
console.log(century);