/* creating nodes */
let userList = ["Adam", 'Ola', "Kasia"]
let userItem = document.createElement("li"); //tworzy nowy element 

for (let i = 0; i < userList.length; i++) {
    let userItem = document.createElement("li"); //swtrzyc 3 elementy
    let userName = document.createTextNode(userList[i]); //tworzy text  z kolejnymi elemetami listy
    userItem.appendChild(userName); //utworzyc wezełmiedzy li a textem
    document.getElementById("users").appendChild(userItem)
}




/* 
let userName = document.createTextNode("User 1");

userItem.appendChild(userName); //tworzenie wezła na wezle w ktorym chcemy go uwtorzyc
console.log(userItem);

let orderList = document.getElementById("users");
//document.getElementById("users").appendChild(userItem)  tak tez mozna
orderList.appendChild(userItem);
console.log(orderList); */




/* wstawianie przed cos */

/* let newH2 = document.createElement('h2'); //stworzylismy tylko jeden element
newH2.innerText = "Nowynagłówek"
document.body.insertBefore()
 */
//sama sobiesprawdzić

/* document.getElementById('user').parentElement.insertBefore(newH2, document.getElementById('users').nextSibling); */
/* how to insert element after -- wygooglować */


/* Zastepowanie */

let newH3 = document.createElement('h3');
newH3.innerText = 'nowe h3';
newH3.setAttribute('class', "new-heading"); //metoda dodajaca atrybut
document.body.replaceChild(newH3, document.getElementById('main-header'));


/* Usuwanie sekcji about*/

document.body.removeChild(document.getElementById("about")) //1 odnosimy sie  o roddzica sekcji czyli body i zniej usuwamy wiec w tedy odwołujmey sie do sekcji po id

//removecHILD usuwa dziecko z body
//remove na body u suwa w tedy cała zawartosc body