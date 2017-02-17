
function reverseString(str) {
	var char = [];
	
	for (var i =str.length; i>=0  ; i--){
		console.log(str.charAt(i));
		char.push(str.charAt(i));
		console.log(char);
		
	}
	var result= char.join('');
	console.log(result);
  return result;
}

reverseString("hello");

