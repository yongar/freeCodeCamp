function removeItem(value, item){
	return value!==item;
}

function destroyer(arr) {
var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}



function mydestroyer(arr) {
	var result = arguments;
	console.log(result);
	var ar = arguments[0];
	for( var i =1; i<arguments.length; i++){
		console.log(arguments[i]);

		ar.filter(removeItem(arguments[i]));
	}
	console.log(ar);

	// for (var i = 1; i<arr.length; i++){
	// 	var removed = from.splice(0,1, arr[i]);
	// 	console.log(removed);
	// }
 //  	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
