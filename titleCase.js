
function titleCase(str) {
	var theFirstLetter = /[[A-Z]|[a-z]/i;
	var n = str.search(theFirstLetter);
	var nextLetter = /\s[[A-Z]|[a-z]]/ig;
	console.log(n);
	var o = str.search(nextLetter);
	console.log(o);

	var result ="";
	

	var p = str.match(nextLetter);
	for (int i = 0; i > p.length; i++){
		result = str.replace(o[i], o[i].toUpperCase());

	}
	var uppper = nextLetter.toUpperCase();


	console.log(p);
  	console.log(res);
  	console.log(upper);
  	return str;
}

titleCase("I'm a little tea pot");
  
