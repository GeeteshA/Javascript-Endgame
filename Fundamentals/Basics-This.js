// This Keyword: Context of this, arrow functions vs regular functions, binding this

// this: this keyword refers to current execution context, which is the object that owns current function or method.
let obj = {
    firstName: "Geetesh",
    lastName: "Aheriya",
    age: 23,    
    mySelf:function (){
        console.log(this.firstName)
    }
    
}
obj.mySelf()

// this in Arrow function: Arrow function do not have their own this, they inherit from their lexical scope
let obj1 = {
    name: "Meetesh",
    mySelf: ()=>{
        console.log(this.name)
    }
}
obj1.mySelf() // it will show undefined

// Binding this

// In Default binding
function showThis(){
    console.log(this)
}
showThis()

// Binding in object method
let obj2 = {
    name: "Object",
    greet: function(){
        console.log(this.name)
    }
}
obj2.greet()

// Binding in Arrow function
let obj3 = {
    name: "Arroe",
    greet: ()=>{
        console.log(this.name)
    }
}
obj3.greet()

// Explicit Binding
let objNew = {  name: "Meetesh" }
function sayThis(){
    console.log(`name is ${this.name}`)
}
const expBind = sayThis.bind(objNew);
expBind();


// Binding in Class
class Person{
    constructor(name){
        this.name = name
    }
    sayname(){
       console.log(`name is ${this.name}`)
    }

}
let person = new Person("Geetesh");
person.sayname()