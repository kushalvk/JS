// let myname = "kushal      "
// let mynickname = "vk      "
// console.log(myname.truelength); // solution is last in this file (Modern structure)

let myHeros = ["hanuman", "ram"]
let heropower = {
    hanuman: "mace",
    ram: "Arrow",

    getrampower: function () {
        console.log(`ram power is ${this.ram}`);
    }
}

Object.prototype.kushal = function () { // add new prototype
    console.log(`kushal is present in all object`);
}

Array.prototype.heykushal = function () {
    console.log(`kushal say hello`);
}

// heropower.kushal()
// myHeros.kushal()
// myHeros.heykushal()
// heropower.heykushal()


// inheritance

const User = {
    name: "kushal",
    email: "kushal@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // __proto__  is use to marge two object
}

Teacher.__proto__ = User


// Modern structure
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "kushal      "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"vk".trueLength()
"iceTea".trueLength()