/* Znajdowanie elementów po iD */
const head = document.getElementById('main-header');


console.log(head);
console.dir(head);
head.style.color = "red";
/* Znajdowanie classy */
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);
listItems[0].style.color = "red"; //style działa na pojedynczyn obiekcie
//wyciagamy za pomoca indexu jeden obiekt  z kolekcji

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'green'
    /* Znajdowanie elementu po znaczniku */

    const paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);

    /* Znajdowanie elementu po selectorach*/
    let listItem = document.querySelector('.list-item');
    console.log(listItem);

    let listItemNew = document.querySelectorAll('.list-item');
    console.log(listItemNew);

    let listItem = document.querySelector('.list-item:nth-of-type(3)');
    console.log(listItem);