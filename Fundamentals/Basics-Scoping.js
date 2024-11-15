// Scopes: Global scope, function scope, block scope, lexical scoping

//Global Scope
var global = 'I am Global' // var is global scoped variabe
function check(){
    console.log(global)
}
check()

//Function Scope
function funScope(){
    let local = 'Only in func'
    console.log(local)
}
funScope()

// Block Scope
{
    let name = "Geetesh" //let and const are blocked scope
    function Block(){
        console.log(name)
    }
    Block()
}

// Laxical scopeing -> function remember scope in which they were defined
function outer(){
    let age = 23
    function inner(){
        console.log(`my age is ${age}`)
    }
    inner();
}
outer();
