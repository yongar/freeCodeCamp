
function findLongestWord(str) {
  	var splittedWords = str.split(' ');
	var lengthArray = splittedWords.map(function findLength(element){
	return element.length;
	});
	var max = Math.max.apply(null, lengthArray);
	console.log(max);
	return max;
 
}

findLongestWord("The quick brown fox jumped over the lazy dog");

