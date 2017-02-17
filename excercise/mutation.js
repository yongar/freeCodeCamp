
function mutation(arr) {
	for (var i = 0; i< arr[1].length; i++ ){
		console.log("arr "+arr[0].toUpperCase()+" has "+arr[1].charAt(i).toUpperCase());
		console.log(arr[0].toUpperCase().indexOf(arr[1].charAt(i).toUpperCase())>0);
		if (arr[0].toUpperCase().indexOf(arr[1].charAt(i).toUpperCase())<0){
			return false;
		}

	}

	return true;
  
}

mutation(["hello", "hey"]);
mutation(["hello", "neo"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]); // true