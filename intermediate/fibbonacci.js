// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

function fibbo(){

   let first=1; end=1; res=0

   console.log(`${first} ${end}`);
    for(let a=1;a<5;a++){
        res= first + end;
        first=end
        end=res
      console.log(res);
    }

}

fibbo();



