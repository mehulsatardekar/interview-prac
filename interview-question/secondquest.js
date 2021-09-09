// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase
// the fontSize by 2px and vice versa.

// initial pixel 5px 

console.log('works');

const inputText = document.querySelector('#name');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resultElem = document.querySelector('.result');

let text, textPx=45;
function changeInput(){
    text = inputText.value;
    resultElem.innerText = text;
}

inputText.addEventListener('keyup',changeInput)

incrementBtn.addEventListener('click',function(){
   resultElem.innerText = `${text}`;
   resultElem.style = `font-size: ${textPx}px`;
   resultElem.classList.remove('decrementer');
   resultElem.classList.add('adder')
   textPx = textPx+2;

});

decrementBtn.addEventListener('click',function(){
   resultElem.innerText = `${text}`;
   resultElem.classList.remove('adder');
   resultElem.classList.add('decrementer')
   resultElem.style = `font-size: ${textPx}px `;
   textPx = textPx -2;
})




