// Functions: Function declarations, expressions, arrow functions, IIFE (Immediately Invoked Function Expressions) 

// Function declaration:  a function declared with its name
sum(2,3); // which accepts hoisting
function sum(a,b){
    return a + b;
}

// Function Expression: Its is when a fun is stored with in a variable
let subst = function(a,b){
    return a - b;
}
subst(3,2)  // this is not Hoisted

//Arrow function new relesr in ES6 very concise to use and redable
const multi = (a,b) => { return a * b}
console.log(multi(2,3));

// IIFE: An Immediate Invoked Functioon Expressiom a type of anonymus function 
((function() {
    var privateVariable = 'Hello';
    console.log(privateVariable); // Output: "Hello"
  })());