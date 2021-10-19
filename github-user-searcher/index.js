const userInput = document.querySelector('#user-text')
const searchBtn = document.querySelector('#search-btn')
const  userImage = document.querySelector('#img')


searchBtn.addEventListener('click',()=>{
   
    let repoUrl="";
    const username = userInput.value;
    const url = `https://api.github.com/users/${username}`

    fetch(url)
    .then((data)=> data.json())
    .then((data)=>{

        console.log(data)
        userImage.innerHTML = 
    `<img id="user-img" src=${data.avatar_url} alt="username">`;
    })

  

})