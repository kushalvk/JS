// singleton 

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "kushal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usersullname: {
            firstname: "kushal",
            lastname: "vaghela"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.usersullname);
// console.log(regularUser.fullname.usersullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // obj1 and obj2 is count as one object (total two object)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2} // cambine two object
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "kushal@google.com"
    },
    {
        id: 2,
        email: "vk@google.com"
    },
    {
        id: 3,
        email: "vaghela@google.com"
    },
]

// console.log(user[1].email); // vk@...
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // all key in one array
// console.log(Object.values(tinderUser)); // all values in one array
// console.log(Object.entries(tinderUser)); // all key and object in particular array
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursname: "js in hindi",
    price: "999",
    courseInstructor: "kushal"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // change name

console.log(instructor);

// example of api's
// {
//     "name": "kushal",
//     "courename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]