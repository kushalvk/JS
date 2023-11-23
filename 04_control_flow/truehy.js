const useEmail = "k@kushal.ai" // empty then false

if (useEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}

// falsy values
// false, 0, -0, 0n(BigInt), "", null, undefined, NaN (other all values are turehy)

// truehy values (surpraicing)
// "0", 'false', " ", [], {}, function(){} => empty function

// if array is empty
// if(useEmail.length === 0){
//     console.log("Array is empty");
// }

// empty objet
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// nullish colescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
val1 = null ?? undefined ?? 20 // if no any value given
console.log(val1);

// ternary operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");