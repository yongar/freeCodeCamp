
function bouncer(arr) {
	console.log('it is working before');
	var result = [];
	for (var i = 0 ; i < arr.length ; i++){
		console.log("wait is it??");
		var testing = Boolean(arr[i]);
		console.log("Value : "+arr[i]+" "+testing);
		if (testing){
			result.push(arr[i]);
		}

	}

	console.log(result);

  return result;
}

bouncer([7, "ate", "", false, 9]);

