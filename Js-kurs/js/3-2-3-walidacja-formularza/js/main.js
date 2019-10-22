function validateform(e) {

    let msgList = document.getElementById("message"); //pobranie ul aby w nia wstwic li zwiadomoscia
    let nameValue = document.getElementById('name').value;
    let meilValue = document.getElementById('email').value;
    let checkBox = document.getElementById('agreement-1').checked;



    msgList.innerHTML = "" //przypisujemy do linku puste miejsce aby  przy submicie niedodawał sieza kazdym razemnowy text


    if (nameValue === "") { //jesli wartosc pola jest pusta tow konsoli wyswietl pusty
        e.preventDefault();
        let msgName = document.createElement('li');
        msgName.innerText = "Wpisz imię i nazwisko";
        msgList.appendChild(msgName);

    }
    //to jest do emila
    if (meilValue === "") {
        e.preventDefault();
        let msgEmail = document.createElement('li');
        msgEmail.innerText = "Wpisz email";
        msgList.appendChild(msgEmail);
    }

    if (!checkBox) { //checked ma wartosc logicna i jak ma wartosc true to nie chce wykonac warunku wiec ja odwracamy 
        e.preventDefault();
        let msgAgreement1 = document.createElement('li');
        msgAgreement1.innerText = "Wymagana zgoda 1!";
        msgList.appendChild(msgAgreement1);
    }

}


document.getElementById('form').addEventListener('submit', validateform)
// nowa funkcja
function setAgreements() {
    let agreementOne = document.getElementById('agreement-1');
    let agreementTwo = document.getElementById('agreement-2');

    agreementOne.checked = this.checked; //this.checkesd wartosc elementu ktory wywołuje zdarzenie  cyzliprzycisk 3
    agreementTwo.checked = this.checked;

    agreementOne.disabled = this.checked; //this.checkesd wartosc elementu ktory wywołuje zdarzenie  cyzliprzycisk 3
    agreementTwo.disabled = this.checked;
}

document.getElementById("all-agreements").addEventListener("change", setAgreements);