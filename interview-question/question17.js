// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 
//2325, Dwapar. Say if every character in name is worth 35 power points. Write a function
// which takes two objects and return the person with more power based on their name and power both.


const obj1 = {
    name : 'Ram',
    power:'2500',
    yuga:'Treta'
}

const obj2 = {
    name : 'Krishna',
    power:'2325',
    yuga:'Dwapar'
}

function getPowerDeatils(obj1, obj2){

   let ramPower,krishnaPower,powerNameBased, actualPower;
   ramPower = obj1.name.length *35;
   krishnaPower = obj2.name.length *35 ;

 // return power based on name
 if(ramPower>krishnaPower){
     powerNameBased = 'Ram';
 }else{
     powerNameBased = 'Krishna';
 }


 // return power based on actual power

 if(obj1.power> obj2.power){
   actualPower = 'Ram';
 }else{
     actualPower = 'krishna'
 }

   return `highest power based on name ${powerNameBased}  and  highest power based on actual power ${actualPower}`


}

 console.log(getPowerDeatils(obj1, obj2))