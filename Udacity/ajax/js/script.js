function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var cityStr = $("#city").val();
    var streetStr = $("#street").val();
    var address = streetStr + ', ' + cityStr;
    $greeting.text('So you want live at ' + address);

    var streetviewURL =
        'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' +
        address + '?';

    // load streetview

    $body.append('<img class="bgimg" src="' + streetviewURL + '">');
    $body.append('<h1> hello </h1>');

    $body.append("<h1> street " + streetStr + " city " + cityStr + "</h1>");

    // NYTimes
    var NYtimeURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    NYtimeURL += '?' + $.param({
        'api-key': "539fa440bd66440683259b5feb7b8c12",
        'q': address
    });
    $.ajax({
        url: NYtimeURL,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });


    $.getJSON(NYtimeURL, function (data) {
        console.log(data);
    });

    return false;
}

$('#form-container').submit(loadData);
