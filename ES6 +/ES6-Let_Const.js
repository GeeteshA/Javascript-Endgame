// Let and Const: Differences between var, let, and const

// var-Before ES6 it has global or functional scope which can led to error due to hoisitng  

// let and const introduce in ES6 both of them are blocked scope so do not allowed hoising

// let is something which now mostly used and can be reassigned
let a = 10;
if(true){
    let a = 20;
    console.log(a)
}
console.log(a);


// const is something that cannot be reassigned or change 
const c = 30;
console.log(c);
// c = 21;  not possible

// however object assigned to const can still be changed
const person = { name:"Geetesh" };
console.log(person.name)
person.name = "Meetesh"   //
console.log(person.name)

for(i=0; i < 10; i++){
    console.log(i)
}