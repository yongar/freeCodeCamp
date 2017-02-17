
function truncateString(str, num) {
	var result ="";
	if (str.length <= num ){
		result=str;
	}else if(num>3){
		result = str.slice(0, num-3);
		result = result.concat("...");
	   
	}else{
		result = str.slice(0,num);
		result = result.concat("...");

	}
	console.log(result);
	return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);


truncateString("Peter Piper picked a peck of pickled peppers", 14);
