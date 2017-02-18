function getIndexToIns(arr, num) {
  	arr.sort(function(a, b) {
		return a - b;});
	console.log(arr);
	for (var i = 0; i<arr.length; i++){
		if (arr[i]>=num){
  			return i;
  		}
	}
	return arr.length;
}

var result = getIndexToIns([40, 60], 50);
console.log(result);
result = getIndexToIns([20, 3, 5], 19);
console.log(result);
result = getIndexToIns([5, 10, 20, 30, 40, 50], 30);
console.log(result);
result = getIndexToIns([2, 5, 10], 15);
console.log(result);
result = getIndexToIns([10, 20, 30, 40, 50], 30)
console.log(result);
