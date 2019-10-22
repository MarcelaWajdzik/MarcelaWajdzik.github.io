$(document).ready(function () {
    // console.log('12345');
    var allGreen = $('.green');
    allGreen.css('color', 'green')
    var allP = $('p');
    allP.css('color', '#00f');

    //wykonuje sie od gory do dolu nie ma hierarchi znczników czy class

    // metoda text()
    console.log(allP.text()); //do pojedynczego trzeba tablice

    // allP.text('12345')


    // metoda html()

    console.log($('.html ').html());
    $('.html ').html("<p> 1234</p>") //zamienia tekst
    // $('.html').html();

    //append prepend
    $("#container").prepend("<p class='prepend'>prepend</p>");

    $("#container").append("<p class='append'>Append</p>");

    //after before
    $("#container").before("<div class='before'>1234</div>");
    $("#container").after("<div class='after'>1234</div>");

    // remove()- usuwa cały element,empty() - usuwa wezel tekstowy

    $("#delete>p").empty();
    $("#delete>p").remove();

    // metoda css
    console.log($(".css p").css("color"));

    $(".css p").css("color", "orange")


    $(".css ").css({
        width: "50%",
        backgroundColor: "brown",
    })
    // val()
    console.log($('form input:first-of-type').val());

    $('form input:first-of-type').val("Marcela")

    // dodawanie i usuwanie klasy
    $('form').addClass("formularz pierwszy");

    $('form').removeClass("pierwszy");

    // $('form').toggleClass("pierwszy"); 

    // find()
    $('.find').find('span').css('font-size', '40px')

    //dla kazdego each() //this odnosi do kliknietego li
    // $('nav li').each(function () {
    //     $(this).click(function () {
    //         $(this).find('a').css('color', 'green') //teraz this jest a bo on wywoluje zdarzenie
    //     })
    // })

    //zdarzenia
    $('nav li ').on({
        'click': function () {
            $(this).find('a').css('color', "pink")
        },
        'mouseover': function () {
            $(this).find('a').css('font-size', "20px")
        },
        'mouseleave': function () {
            $(this).find('a').css('font-size', "16px")

        }
    })

    $('nav').hide(4000, function () {
        $('body').addClass('klasa');
    }).show(4000, function () {
        $('body').removeClass('klasa');
    })

    // $('.fade').fadeOut(4000).delay(2000).fadeIn(4000);
    // $('#slide').click(function () {
    //     // $(".slide").slideUp(1000);
    //     $(".slide").slideToggle(1000)
    // })
    $('#slide').click(function () {
        $('.slide').animate({
            width: '50%',
            height: "150px"
        }, 1000, animateHeight)
        // function () {
        //     $('.slide').animate({
        //         backgroundColor: 'pink'
        //     }, 1000)
        //     //background nie dziala tlyko to trzeba  dodac inna biblioteke jquery UI
        // })

    });

});

function animateHeight() {
    $('.slide').animate({
        height: '300px'
    }, 1000, costma)
    //mozna zagniezdzic w tymkolejna funkcje która sie wykona gdy sie skonczy wczesniejsza animacja
};

function costma() {

};






function changeColor() {
    // selektr id
    $("#first").css('background-color', 'red').hide('slow').show('3000');
    //na jedna wartosc 3000ms 

};
changeColor()