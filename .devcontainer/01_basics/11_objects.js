// const tinderUser = new Object(); // singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abcde"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstname: "vaibhaw",
            lastname: "pandey"
        }
    }

}
// console.log(regularUser.fullName.userfullName.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }, {
        id: 2,
        email: "m@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vaibhaw"
}
//  course.courseInstructor

const { courseInstructor: instructor } = course // destructuring object

console.log(instructor);





