const barnCats = alert("let's do this!!")
console.log(barnCats);

let catArray = ['Whiskers', 'Tom', 'Salem', 'Puss in Boots', 'Binx', 'Sassy'];
const catGallery = document.getElementById("cat-gallery");

function getCats() {
    let i = 0;
    do {
        const catCard = document.createElement('div');
        catCard.classList.add("card");
        catGallery.appendChild(catCard);

        const catImg = document.createElement('div');
        catImg.classList.add('cat-img');
        catCard.appendChild(catImg);

        const catName = document.createElement("h3");
        catName.classList.add('cat-name');
        catName.textContent = catArray[i];
        catCard.appendChild(catName);

        const catShelter = document.createElement("p");
        catShelter.classList.add('cat-shelter');
        catShelter.textContent = "Local Shelter";
        catCard.appendChild(catShelter);


        i++;
    } while (i< catArray.length);
}