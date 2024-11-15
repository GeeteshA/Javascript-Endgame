// Hoisting: Variable and function hoisting, how var, let, const, and functions are hoisted

// Function Hoisting:
hoist(2,4)  // Function declaration accepts hoising
function hoist(a,b){
    console.log(`this is hoisted functions ${a} and ${b}`);
}

// Variable hoisting
console.log(c)  // var accapts hoisting
console.log(a) // let dont allow hoisting
console.log(b) // const dont allow hoisting

let a = 3;
const b = 4;
var c = 5
