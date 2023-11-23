// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7]
for (const i of arr) {
    // console.log(i);
}

const greeting = "hello world..!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// maps // not repate duplicat values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States os America")
map.set('FR', "France")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) { // array distracture
    // console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS'
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) { // forof loop in to works on object
//     console.log(key, ':-', value);
// }