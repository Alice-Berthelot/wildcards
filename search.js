import { createSearch } from "./script.js";
import { locationCards } from "./script.js";
import { displayCard, closeCardWithX, closeCardDesktop } from "./zoom.js";

// import database from "./data.json" assert {type: 'json'}; 
// We used this type of import for our project, following our teacher's recommendation, but it does not work when running locally.
// so I added a fetch to make it work

let database;

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    database = data;
  })
  .catch(error => console.error('Error fetching JSON:', error));

const searchInput = document.querySelector("input");
searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value;
  locationCards.innerHTML = "";
  const result = database.filter((person) => {
    if (person.name.toLowerCase().includes(searchValue.toLowerCase())) {
      const index = database.indexOf(person);
      createSearch(index);
      const cards = document.querySelectorAll('.card');
      displayCard(cards);
    }
  });
});

closeCardWithX();
closeCardDesktop();

