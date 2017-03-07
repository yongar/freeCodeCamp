//require('jqeury');


function googleMap(street, city) {
    var $body = $('body');
    //    var location = "41.01322,-73.8806408,19z";
    var location = street + city;
    var googleURL =
        "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=";
    var imgSrc = googleURL + location;
    $body.append("<img src='" + imgSrc + "'>");
    return true;
    //http://maps.googleapis.com/maps/api/streetview?size=600x300&location=foxwoodDr+oakpark,ca
}

function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var $city = $("#city").val();
    var $street = $("#street").val();

    // load streetview
    $body.append('<h1> hello </h1>');
    //googleMap();
    $body.append("<h1> street " + $street + " city " + $city + "</h1>");
    googleMap($street, $city);


    return false;
}

$('#form-container').submit(loadData);
