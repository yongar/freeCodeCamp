
function slasher(arr, howMany) {

	arr.splice(arr.lenght-howMany, howMany);
	console.log(arr);

	  return arr;
	}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);

