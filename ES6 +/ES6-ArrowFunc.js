// Arrow Functions: Syntax and differences with traditional function expressions

// Normal function 
function add(a,b){
    return a + b
}
console.log(add(2,3));

// Arrow Function 
const subst = (a,b) => {
    return a - b;
}
console.log(subst(3,2))

/* Difference: No 'this' binding in traditional function this is dynamically refers to context in which function is called
In arrow function, this is lexically bound it uses the this surrounding scope */

function Person(name){
    this.name = name;
    setTimeout(()=>{
        console.log(this.name)
    })
};
const person1 = new Person('Geetesh');

// Template literals 