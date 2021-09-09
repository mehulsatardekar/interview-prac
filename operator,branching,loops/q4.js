// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const findDays =(month ,year) =>{
       
     if(month === 02){
         if(year%400 ===0 || year%4===0){
             console.log('it is leap year and it has 29 days')
         }else if( year%100 ===0 ) {
             console.log('it is not leap year and it has  28  days')
         }else{
            console.log('it is not leap year and it has  28  days')
         }
     }
        
     // although 8 is even but 8 is representing august month which has 31 days so on
       if(month === 08){
           console.log('it is 31 days month')
       }
       if(month %2 === 0){
           console.log('it is a 30 days month')
       }else{
           console.log('it is a 31 days month')
       }
    
       
}

console.log(findDays(02,2001));


//logic of this program

// treat month as even odd
// if odd this means month has 31 days except 8th month which is august and has 31 days

// 1 31
// 2 leap
// 3 31
// 4 30
// 5 31
// 6 30
// 7 31
// 8 31
// 9 30
// 10 31
// 11 30
// 12 31