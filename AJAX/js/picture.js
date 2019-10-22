function getData(start) {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=" + start + "&_limit=10")
        .then(response => response.json())
        .then(json => {
            json.forEach(elem => {

                let newDiv = document.createElement("div");
                newDiv.classList = 'post';

                let newIMG = document.createElement("img");
                newIMG.setAttribute('src', elem.url);
                newIMG.setAttribute('alt', elem.title);

                let newH2 = document.createElement("h2");
                newH2.innerHTML = elem.id + ". " + elem.title

                newDiv.appendChild(newIMG)
                newDiv.appendChild(newH2)

                document.getElementById('post-list').appendChild(newDiv);

            });
        })
};
getData(0);

document.getElementById('get-data').addEventListener('click', function () {
    let postCount = document.getElementsByClassName('post').length
    getData(postCount)

});



/* obsłuż kliknięcie w przycisku  #get-data 
za pomocą fech() pobierz 1 dziesiec posdtów z adresu https://jsonplaceholder.typicode.com/photos
 Stwórz element  zklasa .post, stwrz i dodaj do niego element imf z odpowiendnimi atrybutami oraz stworz do niego elemeny 2 z odpowiednia trescia. element pos dodaj do elementu na stronie z id post-list pobranie danych zamkij w funkcji którą wywołasz pozaładaowaniu strony oraz po kliknieciu 
saparamertuyzuj funkcje i adres z którego pobieranie sa dane w taki sposób aby były kolejne paczki z danymi
*/