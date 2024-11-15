// Closures: What they are, practical examples, how closures can lead to memory leaks

/* Closure -> A closure is a function which has access to its own local variable and outer envirnment variable(non local)
 that means closure remembers the environment in which they were created; */
function out(){
    let count = 0;
    return function inn(){
        count ++;
        console.log(count)
    }

}
let counter = out();
counter();
counter();

/* Memory Leak in closure-> A closure-based memory leak occurs when a JavaScript function, created within a scope, 
                            maintains a reference to variables or objects from its outer scope, even after the outer 
                            function has returned or its scope has been garbage-collected. This retained reference 
                            prevents the garbage collector from freeing the memory occupied by those variables or objects, 
                            causing a memory leak.  */
function Outer(){
    let a = 1;
    return function(){
        a++;
        console.log(a)
    }
}
let fun = Outer();
setInterval(fun,1000)