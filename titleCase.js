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
  