let a = 10;
let b = 40;

// decalring or defining a function
function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
}
function substract(a, b) {
  let f = a - b;
  console.log("value of f", f);
  return f;
}

function greet(name) {
  let newName = name.toUpperCase();
  if (newName === "Jill") {
    let msg = "Hello" + newName;
  } else {
    msg = "sorry I do not know you!";
  }

  console.log(msg);
  return newName;
}

let name = "Jill";
greet(name);

// calling of a function
let sum = add(a, b);
console.log("value of sum", sum);
let sum2 = add(45, 67);
let d = 56;
let e = 8788;
let sum3 = add(d, e);
console.log("value of sum", sum3);
let balance = substract(100, 35);
console.log("value of balance", balance);
