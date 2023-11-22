// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("inner: ",a);
}

// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30

function one () {
    const username = "kushal"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "kushal"
    if (username === "kushal"){
        const website =  " youtube"
        console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error


// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1
}

addTwo(5) // before diclaration the function (error)
const addTwo = function (num) {
    return num + 2
}