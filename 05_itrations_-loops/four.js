// forin loop

// for Object
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for Array
const programing = ["js", "rb", "py", "java", "cpp"]
for (const key in programing) {
    // console.log(programing[key]);
}

// const map = new Map() // map is not etratable that mean loop is not work on map
// map.set('IN', "India")
// map.set('USA', "United States os America")
// map.set('FR', "France")
// map.set('IN', "India")
// console.log(map);
// for (const key in map) {
//     console.log(key);
// }


// object => forin loop
// Array => forof loop