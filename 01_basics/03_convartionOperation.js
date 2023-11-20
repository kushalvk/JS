let d = "kushal"

console.log(typeof d);
console.log(typeof (d));

let valuinNumber5 = Number (d)

console.log(typeof valuinNumber5);
console.log(valuinNumber5); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefaind => NaN
// "kushal" => NaN

let isLoggedIn = "kushal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kushal" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

// ************************ Operations **********************

let  value = 3
let negValue = -value
console.log(negValue) // -3

console.log( 2 + 2 );
console.log( 2 - 2 );
console.log( 2 * 2 );
console.log( 2 ** 3 );
console.log( 2 / 2 );
console.log( 2 % 3 );

let str1 = "hello"
let str2 = " kushal"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // 4

let gameCounter = 100
gameCounter++; // 101
console.log(gameCounter);

let gameCounter1 = 100
++gameCounter1; // 101
console.log(gameCounter1);