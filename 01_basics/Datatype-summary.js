// primitive datatype (call by value)

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined; (both are same)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) // both are diffrent

const bigNumber = 123456789n //bigInt

// Reference (None primitive)

    // Array, Objects, Functions

    const heros = ["hanuman", "ram"]; // Array (Reference)

    let myObje = {
        name: "kushal",
        age: 20,
    } // Objects (Reference)

    const myFunction = function(){
        console.log("Hello world");
    }// funcyion (Reference)

console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // object
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol

console.log(typeof myFunction); // function


// **************************************************************

// stack(primitive), heap(non-primitive)

let myname = "kushal"

let nickname = myname // it's take a copy of the proparty
nickname = "vk"

console.log(myname);
console.log(nickname);

let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}

let userTwo = userOne // it's take a reference of the proparty

userTwo.email = "kushal@google.com"

console.log(userOne.email);
console.log(userTwo.email);