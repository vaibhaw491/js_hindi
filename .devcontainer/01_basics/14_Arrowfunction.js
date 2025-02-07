const user = {
    username: "vaibhaw",
    price: "999",
    welcomeMessage: function () {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this); // gives current context
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // gives empty





// function chai() {

//     let username = "vaibhaw"
//     console.log(this.username); //can not work because it will work only under object function

// }

// chai()




// const chai = function(){

//     let username = "vaibhaw"

//     console.log(this.username)    //can not work because it will work only under object function

// }

// chai()




// arrow function

// const chai = () => {

//     let username = "vaibhaw"
//     console.log(this.username);  //can not work because it will work only under object function

// }
// chai()


// basic arrow function
// const addTwo = (num1, num2) => {

//     return num1 + num2  // explicitely return
// }

// console.log(addTwo(3, 4))



// const addTwo = (num1, num2) => (num1 + num2) // implicit return

// console.log(addTwo(3, 4));

// if we want to return object

const addTwo = (num1, num2) => ({ username: "vaibhaw" })

console.log(addTwo(3, 4));
