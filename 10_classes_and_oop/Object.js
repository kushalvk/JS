function mltiipleBy5(num) {
    return num * 5
}

console.log(mltiipleBy5(7));
console.log(mltiipleBy5.power = 5); // the value of mltipleBy5 is 2
console.log(mltiipleBy5.prototype); // empty (besause 
// no any reference in function) => same as this keyword (console.log(this.mltiipleBy5);)

function cretaeUser(usename, score) {
    this.username = usename
    this.score = score
}

cretaeUser.prototype.increment = function () {
    this.score++
}
cretaeUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new cretaeUser("chai", 25)
const tea = cretaeUser("tea", 250)

chai.printMe()

/*

Here's what happend behind the scenes when the new keywod 
is used:

A new object is created: The new keyword initiates the 
creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked 
to the prototype property of the constructor function. This 
means that it has access to properties and methods defined 
on the constructor's prototype.

The constructor is called: The constructor function is 
called with the specified arguments and this is bound to 
the newly created object. If no explicit return value is 
specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function 
has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.), the newly created object is returned.

*/