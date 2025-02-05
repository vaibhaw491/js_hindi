// Aray
const myArr = [0, 1, 2, 3, 4, 5]; // array declaring rule 1
const myHeros = ["shaktiman", "nagraj"]; // array declaring rule 2
const myArr2 = new Array(1, 2, 3, 4, 5) // array declaring rule 3
console.log(myArr[0]);




// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop() // removes last element

// myArr.unshift(9); // added 9 to first element in array
// myArr.shift(); // removed last added element

// console.log(myArr.includes(9)); // it checks that 9 is present in array or not
// console.log(myArr.indexOf(9));
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//  slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);


console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);