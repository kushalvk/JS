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