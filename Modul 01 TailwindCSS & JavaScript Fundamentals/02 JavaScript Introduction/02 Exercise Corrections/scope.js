var myVar = 'Global with var';
function test() {
  // var, let and const behave very similar whtn it comes to function scope
  var myVar = 'Function scoped with var';
  console.log(myVar);
}

test();

console.log(myVar);

if (true) {
  let myLetVar = 'something';
  const myConstVar = 'something else';
  var myVar = 're-declared';
  // let myLetVar = 'something';
  // const myConstVar = 'something else';
  console.log(myLetVar);
  console.log(myConstVar);
  console.log(myVar);
}
// let and const are scoped to the blocks they are declared in
// console.log(myLetVar);
// console.log(myConstVar);
console.log(myVar);

const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4);
console.log(myArray);
