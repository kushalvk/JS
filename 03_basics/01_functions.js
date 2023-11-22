


function sayMyName() {
    console.log("K");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("kushal"); // not execute after return
}

const result = addTwoNumber(3, 4)
// console.log("result: ",result);

function loginUserMessage(username = "vk"){ // if username is not defaind then bydefault usename is 'vk'
    if(!username){ // same (username === undefined) // if user name not passed
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kushal"))
// console.log(loginUserMessage()) // undefined just logged in

function calculatCardPrice(val1, val2, ...num1) { // '...' in array
    return num1
}

// console.log(calculatCardPrice(200, 500, 300, 2000));

const user = {
    username: "kushal",
    prices: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "vk",
    price: 400
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(gerArray) {
    return gerArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));