// console.log("hello");
// // const name = prompt("what is your name?");
// const myName = "Jill";
// // console.log("hello", name);
// console.log("hello", myName);

// let a = 10;
// const b = 10;
// console.log(a);
// a = 30;
// console, log(a);
// console, log(b);
// b = 30;
// const myName2 = "Jill";
// console.log("hello", myName);
// console.log("hello", myName2);

// string variables = text variables alphanumeric
const myName = "Jill";
const myAge = "20";

console.log(myName, myAge);

// number variable add subtract multiply divide
let a = 10;
let b = 1234;
let c = a + b;
console.log(c);
const id = 12345;
const city = "melbourne";
const uni = "RMIT";

// objects: collection of related variables or data
const myStudentRecord = {
  name: "Jill",
  id: 12345,
  city: "melbourne",
};

console.log(myStudentRecord.name);
console.log(myStudentRecord.city);

const myAssignmentRecord = {
  id: 12345,
  as1Scrore: 91,
  as2Score: 85,
  as3Score: 30,
};
const total =
  myAssignmentRecord.as1Scrore +
  myAssignmentRecord.as2Score +
  myAssignmentRecord.as3Score;
console.log(total);

// boolean = test consition check True or false
const isItEvening = true;
const isItRaining = false;

// back ticks
const myAddress = `rmit university,
melborune is ${myName}'s address`;
console.log(myAddress);
const myDetails = `hello, I am ${myName}, I work for ${uni}`;
console.log(myDetails);

const student1 = "Alice";
const student2 = "Sarah";
const student3 = "Jack";
console.log("hello", student1);
console.log("hello", student2);
console.log("hello", student3);

let students = ["Alice", "Sarah", "Jack"];
// console.log("hello", student[0]);
// console.log("hello", student[1]);
// console.log("hello", student[2]);
// console.log("hello", student[3]);

console.log("array size", students.length);
for (let i = 0; i < students.length; i++) {
  console.log("value of i", i);
  console.log("hello", students[i]);
}
// let ids = [12, 13, 14, 15, 16];
// console.log(ids[2]);

// let score = 98;
// if (score > 80) {
//   console.log("hey you got HD");
//   console.log("time for celebration");
// } else if (score <= 80 && score > 70) {
//   console.log("hey you D");
// } else if (score <= 70 && score > 50) {
//   console.log("hey you passed");
// } else if (score < 50) {
//   console.log("sorry you fail");
// }

// let marks = "88";
// let marks2 = 88;
// console.log(marks === marks2);

let shoppingCart = [
  { name: "T-short", price: 10 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
console.log("shopping array size", shoppingCart.length);
let cartTotal = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  cartTotal = cartTotal + shoppingCart[i].price;
  console.log("my purchased item is", shoppingCart[i].name);
  console.log("its price is", shoppingCart[i].price);
  console.log("value of i", i);
  console.log("total so far", cartTotal);
}
if (cartTotal > 200) {
  console.log("you got 10%discount");
}

let a = 10;
let b = 40;
let c = a + b;
