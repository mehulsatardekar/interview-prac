//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.


const sum= function(num1,num2,num3,num4,num5){

    const res = num1+num2+num3+num4+num5;
    return res;
}

console.log(sum(5,13,7,21,48));


// array through

const sumofarr = (arr)=>{
    let result=0
    for(let start =0; start<arr.length; start++){
      result+=arr[start];
    }
    return result;
}

let arr=[12,22,44,55]
console.log(sumofarr(arr))