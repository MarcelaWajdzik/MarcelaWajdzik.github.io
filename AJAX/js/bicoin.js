$(document).ready(function () {
    function getData() {

        $.getJSON('https://blockchain.info/pl/ticker',
            function (data) {
                console.log("nowe daen");
                var stringPreis = $('.exchange-rate').text()
                var newPrice = data.PLN.last
                var currentPrice = (stringPreis != " ") ? parseFloat(stringPreis) : newPrice
                var indicator = $('.fas')

                console.log(newPrice);

                if (currentPrice === newPrice) {
                    indicator.removeClass('fa-arrow-down fa-arrow-up').addClass('fa-arrow-right')
                } else if (currentPrice < newPrice) {
                    indicator.removeClass('fa-arrow-down  fa-arrow-right').addClass('fa-arrow-up')

                } else {
                    indicator.removeClass('fa-arrow-up fa-arrow-right').addClass(' fa-arrow-down')
                }
                $('.exchange-rate').text(data.PLN.last);
            })
    }


    getData();
    var interval = setInterval(getData, 5000);
    $('button').click(function () {
        var newInterval = parseInt($(this).val())
        clearInterval(interval) //metoda kasujaca poprzedni czas interwałowy
        interval = setInterval(getData, newInterval)
        $("#time-interval").text($(this).text())
    })
});