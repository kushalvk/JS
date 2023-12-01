const user = {
    username: "kushal",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.getUserDetails());
// console.log(user.username);
// console.log(this); // empty in global

function User(username, loginCont, isLoggedIn) {
    this.username = username;
    this.loginCont = loginCont;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        // console.log(`welcome ${this.username}`);
    }

    return this
}
const userOne = new User("kushal", 12, true) // new keyword is creae a new object
const userTwo = new User("vk", 7, false)
console.log(userOne.constructor);
// console.log(userTwo);
