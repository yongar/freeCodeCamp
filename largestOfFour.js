
function largestOfFour(arr) {
  // You can do this!

  var answer = [];
  for (var i = 0; i<arr.length ; i++){
  	console.log(arr[i]);
  	answer.push(Math.max.apply(null,arr[i]));
  }
 

  return answer;
}

var result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log("result: " + result);

var r = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) ;
console.log("Result:" +r);