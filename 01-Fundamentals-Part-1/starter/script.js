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

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const firstName = 'Rodrigo';
// const lastName = 'Zago';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4; 
// x++; // +1
// x--; // -1
// console.log(x);

// console.log(ageJonas > ageSarah);

// Practice 1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables

// 2. Calculate both their BMIs using the formula (you can even implement both versions)

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:

// §

// §

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//let bmi = mass / ** 2 = mass / (height * height)


//data 1

console.log('Data 1')
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let mass = markWeight;
let height = markHeight;
let markBmi = mass / height ** 2

console.log('Mark weight: ',markWeight, ' and height: ', markHeight )
console.log('Mark BMI: ', markBmi)

mass = johnWeight;
height = johnHeight;
let johnBmi = mass / height ** 2

console.log('John weight: ',johnWeight, ' and height: ',johnHeight )
console.log('John BMI: ', johnBmi)

let markHigherBMI = (markBmi > johnBmi);
console.log(markHigherBMI);
console.log('-----------------')

//data 2

console.log('Data 2')

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBmi = markWeight / markHeight ** 2;
johnBmi = johnWeight / johnHeight ** 2;

console.log('Mark weight: ',markWeight, ' and height: ', markHeight);
console.log('Mark BMI: ', markBmi);

console.log('John weight: ',johnWeight, ' and height: ',johnHeight )
console.log('John BMI: ', johnBmi)

markHigherBMI = (markBmi > johnBmi);
console.log(markHigherBMI);
console.log('-----------------')