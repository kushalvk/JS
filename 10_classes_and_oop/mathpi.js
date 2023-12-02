const decripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(decripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // PI value can't be overwrite

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailavle: true,

    orderChai: function () {
        console.log("Chai nahi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false // loops cannot be access on false enumerable (only name) (if true then accessable)
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}