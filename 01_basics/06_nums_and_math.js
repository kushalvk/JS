const score = 700
// console.log(score);

const balanbce = new Number(1400)
// console.log(balanbce);

// console.log(balanbce.toString()); // canvart in string 
// console.log(balanbce.toString().length); // length of the string
// console.log(balanbce.toFixed(3)); // to poine numbers

const outherNumber = 23.4548
// console.log(outherNumber.toPrecision(3)); // raund off (23.5)

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-in')); // ('en-in') is use for indian rupee


// +++++++++++++++++++ Maths +++++++++++++++++

// console.log(Math); // math is object

// console.log(Math.abs(-4)); //absolute value (only nagative change in positive)
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,5,7,8)); //4
// console.log(Math.max(4,5,7,8)); // 8

console.log(Math.random()); // random value bitween 0 and 1
console.log((Math.random()* 10) + 1);
console.log(Math.floor(Math.random()* 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 