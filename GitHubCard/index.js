/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardContainer =document.querySelector(".cards")
const axiosPromise =axios.get( 'https://api.github.com/users/ZIng178')
console.log(axiosPromise);

axiosPromise.then(response=>{
  console.log("Me",response.data)
   const entryPoint =document.querySelector('.cards');
   console.log("entryPoint", entryPoint)
   let cards=cardMaker(response.data);
   console.log("cards", cards)
   entryPoint.appendChild(cards)
  })


axiosPromise.catch(err=>{
  console.log(err);
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>



*/

function cardMaker (obj){
  const card=document.createElement('div');
  const image=document.createElement('img');
  const cardInfo=document.createElement('div');
  const personsName= document.createElement('h3');
  const pUser=document.createElement('p');
  const pLocation=document.createElement('p');
  const pProfile=document.createElement('p');
  const pFollowers=document.createElement('p');
  const pFollowing=document.createElement('p');
  const pBio =document.createElement('p');



//appendChild 

card.appendChild(image);
card.appendChild(cardInfo);
cardInfo.appendChild(personsName);
cardInfo.appendChild(pUser);
cardInfo.appendChild(pLocation);
cardInfo.appendChild(pProfile);
cardInfo.appendChild(pFollowers);
cardInfo.appendChild(pFollowing);
cardInfo.appendChild(pBio);

//setting styles 

card.classList.add("card");
image.src=obj.avatar_url;
cardInfo.classList.add("card-info");
personsName.classList.add('name');
pUser.classList.add('username');

//Adding content 

pUser.textContent=obj.login;
personsName.textContent=obj.name;
pLocation.textContent=obj.location;
pProfile.textContent=obj.html_url;
pFollowers.textContent=obj.followers;
pFollowing.textContent=obj.following;
pBio.textContent=obj.bio;

return card;
}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
