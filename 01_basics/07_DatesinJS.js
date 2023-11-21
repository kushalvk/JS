// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 21, 5, 3, 20)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let CreatedDate = new Date("2023-01-21")
// console.log(CreatedDate.toDateString());
// console.log(CreatedDate.toLocaleString());

let myTimeStemp = Date.now()
// console.log(myTimeStemp); // in miliseconds
// console.log(myCreatedDate.getTime()); // in miliseconds
// console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate); // current Date
console.log(newDate.getMonth()); // current month
console.log(newDate.getDay()); // current day

newDate.toLocaleString("default",{
    weekday: "long",
    
})