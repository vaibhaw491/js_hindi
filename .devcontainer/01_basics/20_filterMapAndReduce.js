// const coding = ["js", "ruby", "java", "pythan", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {

//     return num > 4
// })
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach((num) => {

//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)
// console.log(newNums);


// chaining- using various methods in one go is called chaining



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)

// console.log(newNums);


//  reduce method


// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);


// same code using arrow function

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "pythan",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);