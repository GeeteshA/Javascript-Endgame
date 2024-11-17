// Fabonacci series

function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return n === 0 ? a : b;
}
console.log(fibonacci(6));


function printFibonacciUpTo(n) {
    let a = 0, b = 1;
    
    console.log(a);
    
    if (n > 1) {
        console.log(b);
    }
    while (true) {
        let next = a + b;
        if (next > n) break; 
        console.log(next);
        a = b;
        b = next;
    }
}
printFibonacciUpTo(20);  

