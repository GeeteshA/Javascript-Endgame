// Variables and Data Types: var, let, const, primitive vs. reference types, type coercion
// Variabls: A named storage for data. 
// variable can e declared as:
var a = 20;
a = 21;
console.log(a)

let b = 30;
b = 31;
console.log(b)

const c = 40;
// c = 41 is not allowed
console.log(c);

// Primitive vs Refrence types
// -> Primitive hold their actual value
let d = 20;
let e = d;
console.log(e)

// -> Refrence type hold a refrence hold to the menory location where data is stored
let obj = { name:'geetesh'}
let obj1 = obj
obj.name = "mit"
console.log(obj1.name)

// Type coercion is when js automatically convert type when necessary
let aa = '5';
console.log(aa + 1);
console.log(aa - 1);