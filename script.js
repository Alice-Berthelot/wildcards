import database from "./data.json" assert {type: 'json'};
import { displayCard, closeCardWithX, closeCardDesktop } from "./zoom.js";

const main = document.getElementById('main');
export const locationCards = document.getElementById("section-cards");

export function createElement(tag, parent, className = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
};

let card;
let cardHeader;
let cardName;
let cardLogo;
let cardImgDiv;
let cardImg;
let cardAttack;

export function createCard(teamName) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].team === teamName) {
      card = createElement("div", locationCards, "card");
      card.style.backgroundImage = database[i].background;
      cardHeader = createElement("div", card, "card-header");
      // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
      // en conflit avec les propriétés CSS appliquées à tous les header 
      cardName = createElement("p", cardHeader, "card-name");
      cardName.innerText = database[i].name;
      cardLogo = createElement("img", cardHeader, "card-logo");
      cardLogo.src = database[i].logo;
      cardImgDiv = createElement("div", card, "card-img-div");
      cardImg = createElement("img", cardImgDiv, "card-img");
      cardImg.src = database[i].picture;
      cardAttack = createElement("p", card, "card-attack");
      cardAttack.innerText = `Attaque :\n${database[i].attack}`;
      card.setAttribute('data-index', i); //ajout de l'index de la carte en attribut de donnée
    }
  }
};

export function createSearch(index) {
  card = createElement("div", locationCards, "card");
  card.style.backgroundImage = database[index].background;
  cardHeader = createElement("div", card, "card-header");
  // ce serait mieux de créer ici un header plutôt qu’une div mais header entre
  // en conflit avec les propriétés CSS appliquées à tous les header
  cardName = createElement("p", cardHeader, "card-name");
  cardName.innerText = database[index].name;
  cardLogo = createElement("img", cardHeader, "card-logo");
  cardLogo.src = database[index].logo;
  cardImgDiv = createElement("div", card, "card-img-div");
  cardImg = createElement("img", cardImgDiv, "card-img");
  cardImg.src = database[index].picture;
  cardAttack = createElement("p", card, "card-attack");
  cardAttack.innerText = `Attaque :\n${database[index].attack}`;
  card.setAttribute('data-index', index);
}

export function createAll() {
  for (let i = 0; i < database.length; i++) {
    card = createElement("div", locationCards, "card");
    card.style.backgroundImage = database[i].background;
    cardHeader = createElement("div", card, "card-header");
    // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
    // en conflit avec les propriétés CSS appliquées à tous les header 
    cardName = createElement("p", cardHeader, "card-name");
    cardName.innerText = database[i].name;
    cardLogo = createElement("img", cardHeader, "card-logo");
    cardLogo.src = database[i].logo;
    cardImgDiv = createElement("div", card, "card-img-div");
    cardImg = createElement("img", cardImgDiv, "card-img");
    cardImg.src = database[i].picture;
    cardAttack = createElement("p", card, "card-attack");
    cardAttack.innerText = `Attaque :\n${database[i].attack}`;
    card.setAttribute('data-index', i); //ajout de l'index de la carte en attribut de donnée
  }
};

// ANIMATION DES BOUTONS (A REFACTORISER)


// Variables à déclarer pour réutiliser ensuite :

let logoTeam = document.querySelector(".logoTeam");

const buttonData = document.getElementById("buttonData");
let textButtonData = document.getElementById("textButtonData");
const divLogoButtonData = document.getElementById("logoButtonData"); // voir si on suppr div
const divLogoButtonSparkle = document.getElementById("logoButtonSparkle"); // voir si on suppr div
const logoButtonSparkle = createElement("img", divLogoButtonSparkle, "logo-button-sparkle");
const logoButtonData = createElement("img", divLogoButtonData, "logo-button");

const buttonJS = document.getElementById("buttonJS");
let textButtonJS = document.getElementById("textButtonJS");
const divLogoButtonJS = document.getElementById("logoButtonJS"); // voir si on suppr div
const logoButtonJS = createElement("img", divLogoButtonJS, "logo-button-js");
const divLogoButtonSparkleJS = document.getElementById("logoButtonSparkleJS"); // voir si on suppr div
const logoButtonSparkleJS = createElement("img", divLogoButtonSparkleJS, "logo-button-sparkle-js");

const buttonStaff = document.getElementById("buttonStaff");
let textButtonStaff = document.getElementById("textButtonStaff");
const divLogoButtonStaff = document.getElementById("logoButtonStaff"); // voir si on suppr div
const logoButtonStaff = createElement("img", divLogoButtonStaff, "logo-button-staff");
const divLogoButtonSparkleStaff = document.getElementById("logoButtonSparkleStaff"); // voir si on suppr div
const logoButtonSparkleStaff = createElement("img", divLogoButtonSparkleStaff, "logo-button-sparkle-staff");

const buttonAll = document.getElementById("buttonAll");
let textButtonAll = document.getElementById("textButtonAll");
const divLogoButtonAll = document.getElementById("logoButtonAll"); // voir si on suppr div
const logoButtonAll = createElement("img", divLogoButtonAll, "logo-button-all");
const divLogoButtonSparkleAll = document.getElementById("logoButtonSparkleAll"); // voir si on suppr div
const logoButtonSparkleAll = createElement("img", divLogoButtonSparkleAll, "logo-button-sparkle-all");

// Fonction pour adapter les boutons :

function responsiveButton(logoButton, logoSparkle) {
  if (window.innerWidth < 768) {
    logoButton.style.display = "none";
    logoSparkle.style.display = "none";
    textButtonAll.style.display = "block";
    textButtonAll.style.fontFamily = "Beleren-Bold";
    textButtonAll.style.paddingTop = ".2rem";
    buttonDesktop.style.display = "none";
    buttonMobile.style.display = "flex";
  } else {
    logoButton.style.display = "block";
    logoSparkle.style.display = "block";
    buttonMobile.style.display = "none";
    buttonDesktop.style.display = "flex";
  }
}

// Click sur Bouton Data

buttonData.addEventListener("click", () => {
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/logopythonbackground.svg')";
  logoButtonData.src = "./images/logopython.svg";
  // logoButtonData.style.display = "block"; 
  logoButtonSparkle.src = "./images/sparkles-dark.svg";
  // logoButtonSparkle.style.display = "block"; 
  logoTeam.src = "./images/logopython.svg";
  buttonData.style.backgroundColor = "#F7EFE0";
  textButtonData.style.color = "#3A3335";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("DATA");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonData, logoButtonSparkle);
  logoButtonJS.style.display = "none";  //// REPRENDRE
  logoButtonSparkleJS.style.display = "none"; /// REPRENDRE
  logoButtonStaff.style.display = "none";  //// REPRENDRE
  logoButtonSparkleStaff.style.display = "none"; /// REPRENDRE
  logoButtonAll.style.display = "none";  //// REPRENDRE
  logoButtonSparkleAll.style.display = "none"; /// REPRENDRE
});

// Click sur Bouton JS

buttonJS.addEventListener("click", () => {
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/logojsbackground.svg')";
  logoTeam.src = "./images/logojs.svg";
  logoButtonJS.src = "./images/logojs.svg";
  logoButtonSparkleJS.src = "./images/sparkles-dark.svg";
  buttonJS.style.backgroundColor = "#F7EFE0";
  textButtonJS.style.color = "#3A3335";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("JS");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonJS, logoButtonSparkleJS);
  logoButtonData.style.display = "none";  //// REPRENDRE
  logoButtonSparkle.style.display = "none"; /// REPRENDRE
  logoButtonStaff.style.display = "none";  //// REPRENDRE
  logoButtonSparkleStaff.style.display = "none"; /// REPRENDRE
  logoButtonAll.style.display = "none";  //// REPRENDRE
  logoButtonSparkleAll.style.display = "none"; /// REPRENDRE
});

// Click sur Bouton Staff

buttonStaff.addEventListener("click", () => {
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/logowildbackground.svg')";
  logoTeam.src = "./images/logowildstaff.svg";
  logoButtonStaff.src = "./images/logowildstaff.svg";
  // logoButtonData.style.display = "block"; 
  logoButtonSparkleStaff.src = "./images/sparkles-dark.svg";
  // logoButtonSparkle.style.display = "block"; 
  buttonStaff.style.backgroundColor = "#F7EFE0";
  textButtonStaff.style.color = "#3A3335";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("Staff");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonStaff, logoButtonSparkleStaff);
  logoButtonData.style.display = "none";  //// REPRENDRE
  logoButtonSparkle.style.display = "none"; /// REPRENDRE
  logoButtonJS.style.display = "none";  //// REPRENDRE
  logoButtonSparkleJS.style.display = "none"; /// REPRENDRE
  logoButtonAll.style.display = "none";  //// REPRENDRE
  logoButtonSparkleAll.style.display = "none"; /// REPRENDRE
});

// Click sur bouton All

buttonAll.addEventListener("click", () => {
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/Logo-Wildcards-light.svg')";
  logoTeam.src = "./images/Logo-Wildcards-light.svg";
  logoButtonAll.src = "./images/Logo-wildcards-dark.svg";
  // logoButtonData.style.display = "block"; 
  logoButtonSparkleAll.src = "./images/sparkles-dark.svg";
  // logoButtonSparkle.style.display = "block"; 
  buttonAll.style.backgroundColor = "#F7EFE0";
  textButtonAll.style.color = "#3A3335";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  createAll();
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonAll, logoButtonSparkleAll);
  logoButtonData.style.display = "none";  //// REPRENDRE
  logoButtonSparkle.style.display = "none"; /// REPRENDRE
  logoButtonJS.style.display = "none";  //// REPRENDRE
  logoButtonSparkleJS.style.display = "none"; /// REPRENDRE
  logoButtonStaff.style.display = "none";  //// REPRENDRE
  logoButtonSparkleStaff.style.display = "none"; /// REPRENDRE
});

// Responsive :

addEventListener("resize", () => {
  responsiveButton(logoButtonData, logoButtonSparkle);
  responsiveButton(logoButtonJS, logoButtonSparkleJS);
  responsiveButton(logoButtonStaff, logoButtonSparkleStaff);
  responsiveButton(logoButtonAll, logoButtonSparkleAll);
});

/// LIEN DEPUIS PAGE D'ACCUEIL QUI NE FONCTIONNE PAS : 
// const boosterData = document.getElementById("boosterData");

// boosterData.addEventListener("click", () => {
//     createCard("DATA", "url('images/Background-card-Data-small.png')", "images/logopython.svg");
//   });


closeCardWithX();
closeCardDesktop();

// début page index //
const slidesData = document.getElementById("slidesData");
const slidesJS = document.getElementById("slidesJS");
const slidesStaff = document.getElementById("slidesStaff");
const searchBar = document.getElementById("searchBar");
const homePage = document.getElementById("homePage");

const buttonMobile = document.getElementById("backButtonMobile");
const buttonDesktop = document.getElementById("backButtonDesktop");
const nav = document.querySelector("nav");

slidesData.addEventListener("click", () => {
  searchBar.style.display = "flex";
  homePage.style.display = "none";
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/logopythonbackground.svg')";
  logoTeam.src = "./images/logopython.svg";
  logoButtonData.src = "./images/logopython.svg";
  // logoButtonData.style.display = "block"; 
  logoButtonSparkle.src = "./images/sparkles-dark.svg";
  // logoButtonSparkle.style.display = "block"; 
  buttonData.style.backgroundColor = "#F7EFE0";
  textButtonData.style.color = "#3A3335";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("DATA");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonData, logoButtonSparkle);
  logoButtonJS.style.display = "none";  //// REPRENDRE
  logoButtonSparkleJS.style.display = "none"; /// REPRENDRE
  logoButtonStaff.style.display = "none";  //// REPRENDRE
  logoButtonSparkleStaff.style.display = "none"; /// REPRENDRE
  logoButtonAll.style.display = "none";  //// REPRENDRE
  logoButtonSparkleAll.style.display = "none"; /// REPRENDRE
  // buttonMobile.style.display = "flex";
  nav.style.justifyContent = "space-between";
  logoTeam.style.display = "flex";
});

slidesJS.addEventListener("click", () => {
  searchBar.style.display = "flex";
  homePage.style.display = "none";
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/logoJSbackground.svg')";
  logoTeam.src = "./images/logojs.svg";
  logoButtonJS.src = "./images/logojs.svg";
  logoButtonSparkleJS.src = "./images/sparkles-dark.svg";
  buttonJS.style.backgroundColor = "#F7EFE0";
  textButtonJS.style.color = "#3A3335";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("JS");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonJS, logoButtonSparkleJS);
  logoButtonData.style.display = "none";  //// REPRENDRE
  logoButtonSparkle.style.display = "none"; /// REPRENDRE
  logoButtonStaff.style.display = "none";  //// REPRENDRE
  logoButtonSparkleStaff.style.display = "none"; /// REPRENDRE
  logoButtonAll.style.display = "none";  //// REPRENDRE
  logoButtonSparkleAll.style.display = "none"; /// REPRENDRE
  // buttonMobile.style.display = "flex";
  nav.style.justifyContent = "space-between";
  logoTeam.style.display = "flex";
});

slidesStaff.addEventListener("click", () => {
  searchBar.style.display = "flex";
  homePage.style.display = "none";
  locationCards.innerHTML = "";
  main.style.backgroundImage = "url('./images/logowildbackground.svg')";
  logoTeam.src = "./images/logowildstaff.svg";
  logoButtonStaff.src = "./images/logowildstaff.svg";
  logoButtonSparkleStaff.src = "./images/sparkles-dark.svg";
  buttonStaff.style.backgroundColor = "#F7EFE0";
  textButtonStaff.style.color = "#3A3335";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("Staff");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
  responsiveButton(logoButtonStaff, logoButtonSparkleStaff);
  logoButtonData.style.display = "none";  //// REPRENDRE
  logoButtonSparkle.style.display = "none"; /// REPRENDRE
  logoButtonJS.style.display = "none";  //// REPRENDRE
  logoButtonSparkleJS.style.display = "none"; /// REPRENDRE
  logoButtonAll.style.display = "none";  //// REPRENDRE
  logoButtonSparkleAll.style.display = "none"; /// REPRENDRE
  // buttonMobile.style.display = "flex";
  nav.style.justifyContent = "space-between";
  logoTeam.style.display = "flex";
});

