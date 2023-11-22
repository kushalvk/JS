


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
console.log("result: ",result);

function loginUserMessage(username = "vk"){ // if username is not defaind then bydefault usename is 'vk'
    if(!username){ // same (username === undefined) // if user name not passed
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kushal"))
console.log(loginUserMessage()) // undefined just logged in