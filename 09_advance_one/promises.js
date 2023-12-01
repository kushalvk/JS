// 1)
const promisOne = new Promise(function (resolve, reject) {
    // do an async task
    // db calls, cryptography, network
    setTimeout(function () {
        console.log('asynctask is complete');
        resolve() // releted to then()
    }, 1000)
})

promisOne.then(function () { // releted to resolve()
    console.log("promise consumed");
})

// 2)
new Promise(function (resolve, reject){
    setTimeout(function () {
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('async 2 resolved');
})

// 3)
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function () {
        resolve({username: "kushal", email:"kushal@exaaple.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

// 4)
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(!error){
            resolve({username: "kushal", passwoed: "123"})
        } else {
            reject('ERROR: somthing went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log("the promise is either resolved or rejectes");
})

// 5)
const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javscript", passwoed: "123"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// 6)
// async function gettAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// gettAllUsers()
// --------
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})