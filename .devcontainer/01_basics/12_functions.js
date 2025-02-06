function sayMyName() {
    console.log("v");
    console.log("a");
    console.log("i");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("w");

}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(2, 3)
// addTwoNumbers(2, "3")
// addTwoNumbers(2, null)
// const result = addTwoNumbers(2, 3)

// console.log("Result: ", result);

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(2, 3)

// console.log("Result: ", result);

function loginUserMessage(username) {
    return `${username} just logged in`
}
// console.log(loginUserMessage("vaibhaw")) 
// console.log(loginUserMessage())

function loginUserMessage(username) {


    if (username === undefined) {
        console.log("please enter a username")
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vaibhaw"))
// console.log(loginUserMessage())










