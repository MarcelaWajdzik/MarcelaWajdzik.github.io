document.getElementById('get-data').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
        // 
        .then(response => response.json())
        // dostaje obiekty gdy do wszystkich to tablice z obiketami 

        /* .then(function(response){return response.json()}  parametr response za pomoca metody json() metody specifycznej tlyko dla featch i przeró to na plik jason) */
        // nastepnie -then / response specyficzny obiekt fech API 
        .then(json => {
            console.log(json)

            json.forEach(elem => {

                let newText = document.createElement("p");
                let newTitle = document.createElement("h2");


                newTitle.innerHTML = `${elem.id} ${elem.title}`;
                newText.innerHTML = elem.body
                document.body.appendChild(newTitle);
                document.body.appendChild(newText)
            });
        })
})