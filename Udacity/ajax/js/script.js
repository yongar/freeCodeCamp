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
    var NYtimesURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    NYtimesURL += '?' + $.param({
        'api-key': "539fa440bd66440683259b5feb7b8c12",
        'q': address,
        'Access-Control-Allow-Origin': true
    });
    var nyTimesTimeOut = setTimeout(function () {
        $nytHeaderElem.text('failed to get NYT article')

    })

    $.getJSON(NYtimesURL, function (data) {
            //        console.log(data);
            $nytHeaderElem.text("New York Time Article about " + cityStr);
            articles = data.response.docs;
            for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
                $nytElem.append('<li class="article"> ' + '<a href="' + article.web_url +
                    '" target="_blank">' + article.headline.main + '</a><br>by ' +
                    article.byline + '<br> <p>' + article.snippet + '</p>' +
                    '</li>');
            }



        })
        .done(function () {
            clearTimeout(nyTimesTimeOut);
        })
        .error(function (e) {
            $nytHeaderElem.text("does not work");
        });
    // Wikipedia
    $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            method: 'POST',
            dataType: 'jsonp',
            "Access-Control-Allow-Origin": true,
            data: {
                action: 'opensearch',
                search: cityStr,
                generator: 'search',
                format: 'json'

            }

        })
        .done(function (response) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                articleList[i]
                var articleStr = articleList[i];
                var url = "https://en.wikipedia.org/wiki/" + articleStr;
                $wikiElem.append('<li><a href="' + url + '" target="_blank">' + articleStr +
                    '</a></li>');
            }


        })
        .fail(function () {
            $wikiElem.text('failed to get wikipedia articles');
        })
        .always(function () {
            console.log("complete");
        });


    return false;
}

$('#form-container').submit(loadData);
