const name = "kushal"
const repoCount = 50

// console.log(name + repoCount + " Value"); // not readable

console.log(`hello my name is ${name} and my repo count ${repoCount}`);

const gameName = new String('kushal-vk')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // length of the string 
// console.log(gameName.toUpperCase()); // string in upper case
// console.log(gameName.charAt(3)); // element of the position
// console.log(gameName.indexOf("s")); // position of the string 

const newString = gameName.substring(0, 4)
console.log(newString); // 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringone = "     kushal    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://kushal.com/kushal%2003vaghela"

console.log(url.replace("%2003","-")) // https://kushal.com/kushal-vaghela

console.log(url.includes("kushal")) // true
console.log(url.includes("vk")) // false

console.log(gameName.split("-")) // ['kushal', 'vk']