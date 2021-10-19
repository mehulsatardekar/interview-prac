const userInput = document.querySelector('#user-text')
const searchBtn = document.querySelector('#search-btn')
const  userImage = document.querySelector('#img')
const reposList = document.querySelector('#repo-name')

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
     repoUrl = `${data.repos_url}`

      fetch(repoUrl).then((data)=>data.json())
      .then((data)=>{
          let list ='';
       
          for(let a=0; a<data.length ;a++){
              
              reposList.innerHTML += `<li>${data[a].name}</li>`
          }

             
      })


    })
    

  
})