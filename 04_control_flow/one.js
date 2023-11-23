// if
 
const isUserLoggedIn = true
// if ( 7 == "7"){ // not check datatype
    // console.log("executed");
// }
// if ( 7 === "7"){ // check dattype also
    // console.log("executed");
// }
    // console.log("not executed");

const temprature = 41
// if (temprature < 40){
//     console.log("less then 40");
// } else{
//     console.log("temprature is greter then 40");
// }

// camparition operators
// <, >, <=, >=, ==, ===, !=, !==

const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000
// if(balance > 500 )console.log("test"),
//         console.log('test2'); // implicit scop (end with ';'semicolan) (not readable)

// if (balance < 500){
//     console.log("less then 500");
// } else if( balance < 750) {
//     console.log("less then 750");
// } else if( balance < 900) {
//     console.log("less then 900");
// } else{
//     console.log("less then 1200");
// }

const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if (UserLoggedIn && debitCard && 2==2){ // && => AND (both candition true)
    console.log("allow to buy couses");
}

if (LoggedInFromGoogle || LoggedInFromEmail){  // || => OR (any one true)
    console.log("user logged in");
}