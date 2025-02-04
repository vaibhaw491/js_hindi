//  Primitive

//  t Types : String, Number, Boolean, null, undefined, Symbol, BigInt
/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);




const bigNumber = 3544575487n




//  Reference(Non Primitive)

//  Array, Objects, Functions

const heros = ["shatiman", "nagraj", "doda"];

let myObj = {
    name: "vaibhaw",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof bigNumber);
 

*/

//  Stack memory , Heap memory


//  Stack memory(copy) is used for Primitive Data Types, Heap memory(reference) is used for Non-Primitive Data Types

let myYoutubename = "vaibhawpandey.com"
let anotherName = myYoutubename
anotherName = "code"
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "vaibhaw@google.com"

console.log(userOne.email);
console.log(userTwo.email);
