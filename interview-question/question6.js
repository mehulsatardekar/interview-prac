// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. 
// And then print who has the highest marks. What if I ask you to print the average as well?

const readlinesync = require('readline-sync');
const student=[[ 'mehul', 89 ], [ 'keshav', 359 ],[ 'snehal', 184449 ], [ 'ramesh', 3159 ]];

// for (let a=0; a<2;a++){
//     let name = readlinesync.question('Enter your Name');
//     let unitTestMarks = Number(readlinesync.question('Enter your Unit Test Marks'));
//     let preFinalMarks = Number(readlinesync.question('Enter your Pre final Marks'));
//     let finalTestMarks = Number(readlinesync.question('Enter your final Test Marks'));
  
//     const sumOfMarks = unitTestMarks + preFinalMarks + finalTestMarks;
//     student.push(new Array(name,sumOfMarks))
// }

// console.log(student);

// let maxMarks = student[0][1];
// let name = student[0][0];


// for (let a=1; a<student.length;a++){
//    if(student[a][1]>maxMarks){
//        maxMarks = student[a][1];
//        name = student[a][0];
//    }

//  }

 const srt =student.sort((a,b)=> a[1]-b[1]);
 console.log(srt);

 console.log();

