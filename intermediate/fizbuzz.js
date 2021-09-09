// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, 
// replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and
//  for every multiples of 3 & 5, replace with "FizzBuzz".


const fizbuzz = (start,end) =>{
   
    const arr =[];
    for(let a=start; a<=end; a++){
        if(a%3===0 && a%5 ===0){
         arr.push('FizzBuzz')
        }else if(a%3===0){
         arr.push('Fizz')
        }else if(a%5===0){
            arr.push('Buzz')
        }else{
            arr.push(a);
        }
    }
  
    console.log(arr)
}

console.log(fizbuzz(1,100))