// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// let string;
// for(let a=5;a>=0;a--){

//   for(let k=0;k<a;k++){
//       string+=String.fromCharCode(k+65)
//   }
//   string+='\n'
// }

// console.log(string)


let string1='';
for(let a=5;a>=0;a--){
    for(let k=0;k<a;k++){
        string1+='*'
    } 
    string1+='\n'
  }

console.log(string1)