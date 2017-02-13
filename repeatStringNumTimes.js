function repeatStringNumTimes(str, num) {
  	var result = '';
  	if (num>=0)
  	{
  		result = str.repeat(num);
	}
 console.log(result);
 	 return result;
}

repeatStringNumTimes("abc", 3);