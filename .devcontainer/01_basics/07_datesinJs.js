// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // gives object as return

// let myCreatedDate = new Date(2025, 0, 23);
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
// let myCreatedDate = new Date("2025-01-23");
let myCreatedDate = new Date("01-25-2025");
// console.log(myCreatedDate.toLocaleString());
let myTimesStamp = Date.now();
console.log(myTimesStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('dafault', {
    weekday: "long",

})



