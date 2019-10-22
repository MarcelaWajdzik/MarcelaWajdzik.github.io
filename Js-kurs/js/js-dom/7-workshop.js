/* Po kliknieciu w button dodaj kolejny element do listy  
nienumerowane - znacznik li z tekstem "list item'*/
/* 
const button = document.getElementById("button"); //pobranie buuton
const listUl = document.querySelector('ul');
newItem.appendChild(textInitem); //tworzy wezeł miedzy li a tekstem
 */
/* button.addEventListener("click", function () {
    let newItem = document.createElement("li"); //stworzenie nowego elementu
    newItem.innerText = "list item"; //tworzenie tekstu
    document.getElementsByTagName("ul")[0].appendChild(newItem); */
//pobieramy  element ul ktory jest colekcja wiec wyciagamy 1 element i do elementów dodajemy nowo swtorzony element

/* }) */


/* zadanie 1 */

const buttonOne = document.getElementById("buttonOne");



buttonOne.addEventListener("click", function () {
    document.getElementsByTagName('p')[0].classList.toggle("bg-red");
    document.getElementsByTagName('p')[1].classList.toggle("bg-yellow");
})


/* Zadanie 2 */

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); //zachamuje domysle przesyłanie i odswiezanie strony
    let name = document.getElementsByTagName('input')[0].value;
    let surnaname = document.getElementsByTagName('input')[1].value; //pobierz wartosc przypisana do inputa
    console.log(name)
    console.log(surnaname) //wyswietl w konsoli wartoscprzypisana do inputa
}) //przechwytujeprzesłanie formullarza