
function chunkArrayInGroups(arr, size) {
	var result = [];
	var i = 0;
	while ( i< arr.length){
		var interim = [];
		for(var j=0; j< size && i < arr.length ; j++){
			
			interim.push(arr[i]);
			//console.log(i);
			i++;
		}
		result.push(interim);

	}
	console.log(result);


	return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
