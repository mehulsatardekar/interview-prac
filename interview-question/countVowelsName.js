// count vowels in number from input

const vowels = ['a','e','i','o','u','A','E','I','O','U'];

const userName = "meEhuUl";

let counter=0;
for(let a=0;a<userName.length;++a){
    for(let b=0;b<vowels.length;++b){
        if(userName[a] === vowels[b]){
            counter++;
        }
    }
}


console.log("vovels in strings are =" +counter)

/*password generator basically it is a regex*/ 
//console.log(Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 7));
