// Write a program to take a number input from user and print multiplication table 12 times for that number.

const printTable= (num)=>{
    let s=1, multiple=0;
   for(let a=1; a<=12;a++){
      for(let k=1; k<=10 ; k++){
        multiple= num*k;
        console.log(multiple,'\t')
       }
   }
   
}

console.log(printTable(3))