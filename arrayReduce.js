
var array = [4,5,6,7,8];
var singleVal = 0;
var secondSingleVale = 0;
// Only change code below this line.

singleVal = array.reduce(function(a, b){
  console.log("prev val " + a);
  console.log("current val " + b + "current index " + array.index);


  singleVal = a+b;
  console.log("sum for now " + singleVal);

  return singleVal;
});

array.forEach(function(item, index, array){
	console.log(item, index);
	
})

secondSingleVale = array.reduce(function(previousVal){
  console.log("prev val " + previousVal);

  secondSingleVale += previousVal;
  console.log("secondSingleVale sum for now " + secondSingleVale);
  
  return secondSingleVale;
});
