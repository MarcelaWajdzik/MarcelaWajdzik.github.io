$(document).ready(function () {


    function getData(start) {
        $.getJSON('https://jsonplaceholder.typicode.com/posts?_start=' + start + '&_limit=10', function (data) {
            console.log(data);
            data.forEach(function (elem) {
                var h2 = $('<h2> </h2>');
                var p = $('<p> </p>');

                h2.text(elem.id + " " + elem.title)
                p.text(elem.body)

                $('#post-list').append(h2, p)
            })
        });
    }
    getData(0)

    $('#get-data').click(function () {
        // console.log('#post-list h2');

        var postCount = $('#post-list h2').length;
        getData(postCount)
    });
});