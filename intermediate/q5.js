// Write a Program to take a number input from user and find if the number is Prime or not.

const chekprime = (n)=>{

    let flag = true;
    for(i = 2; i < n; i++)
    if (n % i == 0) {
        flag = false;
        break;
    }
      
    // Check and display alert message
if (flag == true)
    console.log(n + " is prime");
else
    console.log(n + " is not prime");
}

console.log(chekprime(3));