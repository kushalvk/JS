// singleton 
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kushal",
    "full name": "kushal vaghela",
    [mySym]: "mykey1", // symbol
    age: 20,
    location: "surat",
    email: "kushal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // full name can not be access by '.'(dot)
console.log(JsUser[mySym]);

JsUser.email = "vk@google.com" // change in email
// Object.freeze(JsUser) // freezing the rqurment
JsUser.email = "vaghela@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());