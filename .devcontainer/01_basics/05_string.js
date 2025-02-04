const name = "vaibhaw"
const repocount = 50

// console.log(name + repocount + " value");



console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('vaibhaw-hc-com')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

//  read string methods on mdn

const newString = gameName.substring(0, 4) // can not give negative value,if given it will ignore the negative value and start with zero

console.log(newString);

const anotherString = gameName.slice(-4, 4); // we can give negative value

console.log(anotherString);

const newStringOne = "    vaibhaw    "


console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://vaibhaw.com/vaibhaw%20pandey"
console.log(url.replace('%20', '_'));

console.log(url.includes('vaibhaw'));

console.log(url.includes('vaibhaw'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));








