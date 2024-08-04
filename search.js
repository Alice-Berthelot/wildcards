import database from "./data.json" assert {type: 'json'};
import { createSearch } from "./script.js";
import { locationCards } from "./script.js";
import { displayCard, closeCardWithX, closeCardDesktop } from "./zoom.js";

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

