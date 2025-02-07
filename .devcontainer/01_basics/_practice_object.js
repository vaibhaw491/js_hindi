// Object


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());
// const name = person.fullName();
// console.log(name);



// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// // delete person.age;
// delete person["age"];
// console.log(person.firstname + " is " + person.age + " years old.");


// myObj = {
//     name: "John",
//     age: 30,
//     myCars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }
// // console.log(myObj.myCars.car2);
// // console.log(myObj.myCars["car2"]);
// // console.log(myObj["myCars"]["car2"]);

// let p1 = "myCars";
// let p2 = "car2";
// console.log(myObj[p1][p2]);

// Create an Object

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Build a Text
// let text = "";
// for (let x in person) {

//     text += person[x] + " ";

// };

// console.log(text);



// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Create an Array
// const myArray = Object.values(person);  // creates an array from the property values
// console.log(myArray);


// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//     text += fruit + ": " + value + "<br>";
// }
// console.log(text);


// Create an Object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// Stringify Object
// let myString = JSON.stringify(person);
// // console.log(myString);

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);


// The in operator returns true if a property is in an object, otherwise false:

// Object Example
// const person = { firstName: "John", lastName: "Doe", age: 50 };
// console.log("firstName" in person);
// console.log("age" in person);



const cars = ["Saab", "Volvo", "BMW"];
console.log(0 in cars);
console.log(1 in cars);
console.log(4 in cars);
console.log("length" in cars);