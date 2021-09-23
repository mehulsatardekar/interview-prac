'use strict';

const emojies = {
    "😀": "happy",
    "😍": "liked-it",
    "🤑": "money-money",
    "🤯": "amazed",
    "🙏": "namaskar",
    "👁": "third-eye",
    "🌎":"earth",
    "🎂":"cake",
    "😎":"swag-guy",
    "🐱‍🚀":"astro-cat",
    "🤖":"robot",
    "🤡":"clown"
  };
const inputemoji = document.querySelector('#emoji-searcher');
let emojiData = document.querySelector('#emoji-data');
const emojiText = document.querySelector('#emoji-text');
const emojieEntries = Object.keys(emojies);
emojieEntries.map((emoji)=>{

    emojiData.innerHTML+= `<li class="list">${emoji}</li>`;

} )

function getEmojiText(e){

   console.log(e.target.nodeName === 'LI');

   const isTypeLi = e.target.nodeName === 'LI'
   if(isTypeLi){
    inputemoji.value= e.target.innerText
   }else{
       inputemoji.value="please click only on emojies"
   }
}


emojiData.addEventListener('click',getEmojiText);



inputemoji.addEventListener('keyup',()=>{
    
    let emojiValue= inputemoji.value;
    console.log(emojiValue);

     if(!emojiValue){
        emojiText.innerText ="emojies not found "
     }else{
        emojiText.innerText = emojies[emojiValue];
    }
    //😴
})


 