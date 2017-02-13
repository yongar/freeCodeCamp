function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}

var result = titleCase("I'm a little tea pot");

console.log("result: " + result);
