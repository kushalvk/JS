// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["hanuman", "ram"]

const myarr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // Addition
// myArr.push(7)
// myArr.pop() // delete last element

// myArr.unshift(9) // add the strating of the array
// myArr.shift() // remove strating element of array

// console.log(myArr.includes(9)); // chick the 9 is exist in the array
// console.log(myArr.indexOf(3)); // position of 3 in array

// const newArr = myArr.join() // it's canvart in string 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 4) // copy of orignal array

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 4) // remove in orignal array
console.log("c ",myArr);
console.log(myn2);