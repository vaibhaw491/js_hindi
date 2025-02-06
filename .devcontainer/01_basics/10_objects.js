// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Vaibhaw",
    "full name": "vaibhaw pandey",
    [mySym]: "mykey1", // to refer symol in object
    age: 18,
    location: "delhi",
    email: "vaibhaw@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vaibhaw@chatGpt.com" // to change value
// Object.freeze(JsUser) // to freeze the changes
JsUser.email = "vaibhaw@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
console.log(JsUser.greeting);
// console.log(JsUser.greeting());


// JsUser.greetingTwo = function () {
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


