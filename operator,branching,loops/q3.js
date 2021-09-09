// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const findMax= (num1,num2)=>{

     // for max num 
    if(num1>num2){
        console.log(`maximum num is ${num1}`)
    }else{
        console.log(`maximum  num is ${num2}`);
    }

    // for min num
    if(num1<num2){
        console.log(`minimum no is ${num1}`);
    }else{
        console.log(`minimum no is ${num2}`);
    }

}

// const findMin = (num1,num2)=>{
//       if(num1<num2){
//           console.log(`minimum no is ${num1}`);
//       }else{
//           console.log(`minimum no is ${num2}`);
//       }
// }

//console.log(findMax(12,122));

//console.log((findMin(12,122)));


const findMax= (num1,num2,num3)=>{
       
    if(num1>num2 && num1>num3){
        console.log(num1)
    }else if(num2>num3){
        console.log(num2)
    }else{
        console.log(num3)
    }

}

console.log(findMax(111,222,3));