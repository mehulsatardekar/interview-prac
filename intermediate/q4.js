// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = (num)=>{
    let fact=1;
    for(let a=1;a<=num;a++){
        fact=fact*a;
    }

    console.log(fact)
}

console.log(factorial(5))