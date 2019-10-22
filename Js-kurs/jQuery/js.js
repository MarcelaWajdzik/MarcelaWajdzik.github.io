$(document).ready(function () {
    // console.log('12345');
    var allGreen = $('.green');
    allGreen.css('color', 'green')
    var allP = $('p');
    allP.css('color', '#00f');

    //wykonuje sie od gory do dolu nie ma hierarchi znczników czy class


    $("#container").prepend("<p class='prepend'</p>");

})

function changeColor() {
    // selektr id
    $("#first").css('background-color', 'red').hide('slow').show('3000');
    //na jedna wartosc 3000ms 

};
changeColor()