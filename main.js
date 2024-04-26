// let catArray = ['Whiskers', 'Tom', 'Salem', 'Puss in Boots', 'Binx', 'Sassy'];
// let catCurrentAges = ["4", "5", "2", "7", "3", "1"];
// let adoptedYear = ["2022", "2021", "2024", "2019", "2022", "2024"];
// James : I added line 2,3 but I noticed I better make them objects instead

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
    for (let pokemon of cats) {
        const catCard = document.createElement('div');
        catCard.classList.add("card");
        catGallery.appendChild(catCard);

        const catImg = document.createElement('div');
        catImg.classList.add('cat-img');
        catCard.appendChild(catImg);

        const catName = document.createElement("h3");
        catName.classList.add('cat-name');
        catName.textContent = pokemon.name;
        catCard.appendChild(catName);

        const catShelter = document.createElement("p");
        catShelter.classList.add('cat-shelter');
        catShelter.textContent = pokemon.shelterName;
        catCard.appendChild(catShelter);

        const catAge = document.createElement("p");
        catAge.classList.add('cat-age');
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
        shelterDuration.classList.add('shelter-duration');
        shelterDuration.textContent = 
            "Time Spent in Shelter:" + 
            ageSinceAdoption(pokemon.adoptedYear) + 
            " years";
        catCard.appendChild(shelterDuration);
    }
}
