//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
/* on page load, fetches the images using the url above ⬆️
parses the response as JSON
adds image elements to the DOM for each 🤔 image in the array */
document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        const imageContainer = document.getElementById("dog-image-container");

        data.message.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            imageContainer.append(img);
        });
    });
    /* After the first challenge is completed, add JavaScript that:
    
    on page load, fetches all the dog breeds using the url above ⬆️
    adds the breeds to the page in the <ul> provided in index.html */
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        const dogBreeds = document.getElementById("dog-breeds");

        for (let dogBreed in data.message) {
            //console.log(dogBreed)
            const li = document.createElement("li");
            li.textContent = dogBreed;
            dogBreeds.append(li);
        };
    });
    /*Once all of the breeds are rendered in the <ul>, add JavaScript so that, 
    when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.*/
    const dogBreeds = document.getElementById("dog-breeds");
    
    dogBreeds.addEventListener("click", (event) => {
        const breed = event.target;
        breed.style.color = "tomato"
    });
    // add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown
    const breedDropDown = document.getElementById("breed-dropdown");
    breedDropDown.addEventListener("change", (event) => {
        const letterSelected = event.target.value;
        const breeds = dogBreeds.querySelectorAll("li");

        breeds.forEach(breed => {
            if (breed.textContent.startsWith(letterSelected)) {
                breed.style.display = "list-item";
            }
            else {
                breed.style.display = "none";
            }
        })
    })
});

