function factorialize(num) {
  var result = 1;
  while (num>1){
  	result *= num;
  	console.log(result);
  	num--;
  	console.log(num);

  }
  return result;
}

factorialize(5);
