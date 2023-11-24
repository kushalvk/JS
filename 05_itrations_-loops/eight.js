// array reduce()
// syntax(normal function) variable = array_name.reduce ( function() {}, 0) // 0 is aecumletor value
// syntax(aero function) variable = array_name.reduce ( () => {}, 0) // 0 is aecumletor value

// use normal function
const myNums = [1, 2, 3]
const mytotal = myNums.reduce( function(acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0 ) // after ',' 0 is aecumletor value
console.log(mytotal);

// use aero function
// const myNums = [1, 2, 3]
// const mytotal = myNums.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 1 ) // after ',' 1 is aecumletor value
// console.log(mytotal);

// in short
// const mytotal = myNums.reduce( (acc, curr) => acc + curr , 1 )
// console.log(mytotal);

const shoppingCart = [
    {
        itermName: "js course",
        price: 2999
    },
    {
        itermName: "py course",
        price: 999
    },
    {
        itermName: "mobile course",
        price: 5999
    },
    {
        itermName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetoPay);