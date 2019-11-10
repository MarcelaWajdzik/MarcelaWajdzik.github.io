$(document).ready(function () {

    function newPerson() {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                data.forEach(function (elem) {
                    var newDiv = $('<div> </div>');
                    newDiv.attr("id", "dane-programisty");
                    $('body').append(newDiv);
                    var p = $('<p> </p>');
                    p.text(elem.imie + " " + elem.nazwisko + " " + elem.zawod + " " + elem.firma);
                    newDiv.append(p);
                });
            });
    };
    newPerson();
    $('#buttonData').click(function () {

        var postCount = $('#dane-programisty p').length;
        newPerson(postCount)
    })
});