// Write a program to take a day as an input and determine whether it 
// is a weekday or weekend. Example: Tuesday is weekday.


const daysName = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

const day = new Date();
console.log(day.getDay());

console.log(daysName[day.getDay()])