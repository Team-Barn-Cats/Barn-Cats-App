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
