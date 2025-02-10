// if
// const isUserLoggedIn = true

// if (isUserLoggedIn) {

// }

// // < , >, <= ,>=, ==, !=, ===, !===

// const temprature = 41
// if (temprature === 41) {
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }




// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power} `);
// }

// console.log(`user power : ${power} `); // error


// const balance = 1000

// if (balance > 500) console.log("test"),
//     console.log("test");


// const balance = 1000

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}


if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}


