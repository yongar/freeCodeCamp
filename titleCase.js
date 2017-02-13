<<<<<<< HEAD
function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}

var result = titleCase("I'm a little tea pot");

console.log("result: " + result);
=======
function upperCaseFirstLetter (txt){
	console.log("input: "+txt);
	console.log(txt.charAt(0).toUpperCase());
	console.log(txt.charAt(1).toLowerCase());
	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

function titleCase(str) {
	var result = str.replace(/\w\S*/g, upperCaseFirstLetter);
  	console.log("result "+ result);
  	return str;
}

titleCase("I'm a little tea pot");
  
>>>>>>> cf09185798b4154bf82f4abb411230da7d270602
