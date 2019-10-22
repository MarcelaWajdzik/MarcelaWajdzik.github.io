// definicja funkcji ajax
function ajax(method, url) {


    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();

    // console.log(httpReq);

    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open(method, url);



    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function () {

        // jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState == 4) {

            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if (httpReq.status == 200) {

                var returnData = httpReq.responseText;
                var jonData = JSON.parse(returnData)
                console.log(jonData);


                let newTitle = document.createElement("h2");
                let newCity = document.createElement("p");
                newTitle.innerText = jonData.name;
                newCity.innerText = jonData.address.city;
                document.body.appendChild(newTitle)
                document.body.appendChild(newCity)





                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;

            }

        }

    }




    // wysłanie danych do serwera
    httpReq.send();
}






// wywołujemy naszą funkcję ajax() :)    get jaka metoda 2 parametr skad ponieramy dane
ajax("GET", "https://jsonplaceholder.typicode.com/users/1");
ajax("GET", "https://jsonplaceholder.typicode.com/users/3");
ajax("GET", "https://jsonplaceholder.typicode.com/users/2");
ajax("GET", "https://jsonplaceholder.typicode.com/users/7");