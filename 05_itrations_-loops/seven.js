const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map
// const newNums = myNums.map( (num) => num + 10 )
// console.log(newNums); 

// const newNums = myNums.map( (num) => { return num + 10 } ) // if open '{}' scop then write return key word in scop
// console.log(newNums); 

const newNums  =  myNums.map( (num) => num * 10)
                        .map( (num) => num + 1 ) // array change in above map
                        .filter( (num) => num >= 70 ) // array change in above map
console.log(newNums);