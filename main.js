//I thought about putting this in its own JSON file -- we can do if anyone thinks that's better practice, but for simplicity I've left it here for now
const jsonPokemonArray = []; 

//function fetches "cat-like" pokemon from PokeAPI by ID 
async function fetchPokemon() {
    //hardcoded list of ID's
    const idArray = [52, 53, 150, 151, 196, 197, 243, 300, 301, 403, 404, 405, 431, 432, 470, 471, 509, 510, 667, 668, 677, 678, 700, 725, 726, 727, 807];
    //loops through each of the ID's and attempts to both retrieve the data from PokeAPI and push it to the jsonPokemonArray
    for (let pokemonId of idArray) {
      let thatPokemon = String(pokemonId);
      //the API works by changing the ID at the end of this URL; we could use the new URL functionality in JS but I thought this simpler
      let newUrl = "https://pokeapi.co/api/v2/pokemon/" + thatPokemon; 
      try {
        //fetches data by ID
        let response = await fetch(newUrl); 
        let pokemon = await response.json(); 
        pokemon = JSON.stringify(pokemon);
        jsonPokemonArray.push(pokemon);
      } catch (error) {
        console.error("There was an error!", error); 
      }
    }
  }

//INFO: the comment below will outline which attributes of PokeAPI response (stored in jsonPokemonArray) to leverage to populate UI
//INFO: it's important to note that after the fetchPokemon function runs that jsonPokemonArray is in STRING format and will need to be parsed
/* To access pokemon attributes:
Barncat Name: pokemon.name
Barncat Shelter: TODO -- will be randomly generated
Barncat Age: TODO -- will be randomly generated
Barncat Time in Shelter: pokemon.height
Barncat Zipcode: TODO -- will be randomly generated
Barncat Image: pokemon.sprites.front_default -- this returns a URL!! Which we can then use to display the image
PokeAPI Pokemon Endpoint Docs @ https://pokeapi.co/docs/v2#pokemon -- scroll down the Pokemon Endpoint or use left nav
*/

// let catArray = ['Whiskers', 'Tom', 'Salem', 'Puss in Boots', 'Binx', 'Sassy'];
// let catCurrentAges = ["4", "5", "2", "7", "3", "1"];
// let adoptedYear = ["2022", "2021", "2024", "2019", "2022", "2024"];
// James : I added line 2,3 but I noticed I better make them objects instead

// Katya : This array can be replaced with the fetch function
let cats = [
    {
        name: "Whiskers",
        age: 4,
        adoptedYear: 2022,
        shelterName: "Animal Rescue",
    },
    {
        name: "Tom",
        age: 5,
        adoptedYear: 2021,
        shelterName:"Precious Paws",
    },
    {
        name: "Salem",
        age: 2,
        adoptedYear: 2024,
        shelterName:"Friends For Life",
    },
    {
        name: "Puss in Boots",
        age: 7,
        adoptedYear: 2019,
        shelterName: "Special Pals",
    },
    {
        name: "Binx",
        age: 3,
        adoptedYear: 2022,
        shelterName: "Whisker Land",
    },
    {
        name: "Sassy",
        age: 1,
        adoptedYear: 2024,
        shelterName: "Pet Connect",
    }
];

const catGallery = document.getElementById("cat-gallery");

function getCats() {
    //Todo: Replace cats with the name of the pokemon array.
    for (let pokemon of cats) {

        // This creates a bootstrap column for each card
        const catCol = document.createElement('div');
        catCol.classList.add('col');
        catGallery.appendChild(catCol);

        // This creates a card div for each cat
        const catCard = document.createElement('div');
        catCard.classList.add('card', 'rounded-5');
        catCol.appendChild(catCard);

        // This creates a round image div to house the image
        const catImg = document.createElement('img');
        catImg.src = "https://picsum.photos/200";
        catImg.classList.add('cat-img', 'card-img-top', 'rounded-circle');
        catCard.appendChild(catImg);

        // Cat Name
        const catName = document.createElement("h3");
        catName.classList.add('cat-name', 'card-title');
        catName.textContent = pokemon.name;
        catCard.appendChild(catName);

        // Shelter Name
        const catShelter = document.createElement("p");
        catShelter.classList.add('cat-shelter', 'card-text');
        catShelter.textContent = pokemon.shelterName;
        catCard.appendChild(catShelter);

        // Cat age
        const catAge = document.createElement("p");
        catAge.classList.add('cat-age', 'card-text');
        catAge.textContent = "Cat Age: " + pokemon.age + " year-old";
        catCard.appendChild(catAge);

        function ageSinceAdoption(adoptedYear) {
            const currentYear = new Date().getFullYear();
            return currentYear - adoptedYear;
        }
        //James : For those who do not know about this method (both built-in Javascript)
        //new Date(): to show current local date and time  
        //getFullYear(): to show current year only 

        const shelterDuration =  document.createElement("p");
        shelterDuration.classList.add('shelter-duration', 'card-text');
        shelterDuration.textContent = 
            "Time Spent in Shelter:" + 
            ageSinceAdoption(pokemon.adoptedYear) + 
            " years";
        catCard.appendChild(shelterDuration);
    }
}
