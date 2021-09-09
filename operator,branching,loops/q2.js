//Write a program to take a number input from user and determine whether the number is odd or even.

const isOddEven = (num)=>{
   if(num%2===0){
       console.log('its an even number')
   }else{
       console.log('its an odd number')
   }
}

console.log(isOddEven(12))