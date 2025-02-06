// Object


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName())



// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// // delete person.age;
// delete person["age"];
// console.log(person.firstname + " is " + person.age + " years old.");


myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
// console.log(myObj.myCars.car2);
// console.log(myObj.myCars["car2"]);
// console.log(myObj["myCars"]["car2"]);

let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2]);
