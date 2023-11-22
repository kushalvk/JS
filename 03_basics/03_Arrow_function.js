const user = {
    username: "kushal",
    price: 999,

    welcomeMessage: function(){
        console.log((`${this.username}, welcome to website`));
        console.log(this); // show all proparty
    }
}

// user.welcomeMessage()
// user.username = "vk"
// user.welcomeMessage()

// console.log(this); // empty 

// function chai(){
//     let username = "kushal"
//     console.log(this.username); // not work proparly
// }
// chai()

// const chai = function () {
//     let username = "kushal"
//     console.log(this.username); // empty
// }
// chai()

const chai = () => {
    let username = "kushal"
    console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // ans.7
      // same
// const addTwo = (num1, num2) => ( num1 + num2 ) // ans.7

const addTwo = (num1, num2) => ({username: "kushal"}) // to object return

console.log(addTwo(3, 4));
