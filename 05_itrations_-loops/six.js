const coding = ["js", "ruby", "java", "python", "cpp"]
const Values = coding.forEach( (item) => {
    // console.log(item);
    return item // forEach function is not return any values
} )
// console.log(Values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4 )
// const newNums = myNums.filter( (num) => {
//     return num > 4 // if '{}' return key word compulsory
// } )
// console.log(newNums);

// using foreach
const newNums = []
myNums.forEach( (num) => {
    if ( num > 4){
        newNums.push(num)
    }
} )
console.log(newNums);