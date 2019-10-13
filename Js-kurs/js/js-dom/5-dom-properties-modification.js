/*  */
const mainHeading = document.getElementById('main-header');

/* Zawartość znacznika */

mainHeading.innerText = "Nowy tekst <span> nagłówka </span>";
//dosłownie przerenderuje ten  spanna  tekst w znakach wielkosci i sie pojawi w tytule
mainHeading.innerHTML = "Nowy tekst  <span> nagłówka </span>"; //w struktorze utworzy sie znacznik

// mainHeading.outerHTML = "<h3>Nowy nagłówek</h3>";
//zmieni nie tlyko tekst ale podmieni znacznik h1 na h3 

mainHeading.id = 'new-id';

mainHeading.className = "main heading"
//pozwala pobrac lub przypisac własciwosci atrybut class. Tutaj wstawiamy dwie osobne klasy

mainHeading.classList.add('new-class'); //teraz  nasza h1 bd miał 3 klasy
mainHeading.classList.remove('main'); //teraz  oddejmujemy jedna klase
mainHeading.classList.toggle('active'); //jest klasa to ja odejmie nie ma klasy to ja doda


/* własściwośc style */

mainHeading.style.backgroundColor = "darkorange";


const listItems = document.getElementsByClassName('list-item');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.margineLeft = 10 * i * "px";
}